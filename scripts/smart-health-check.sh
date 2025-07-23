#!/bin/bash

# Smart Health Check Script for Azure DevOps
# Handles first-time deployments and existing deployments differently

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
RESOURCE_GROUP="${AZURE_RESOURCE_GROUP-}"
APP_NAME="${AZURE_APP_NAME-}"
TIMEOUT=15
MAX_RETRIES=3

echo -e "${BLUE}🏥 SMART HEALTH CHECK${NC}"
echo -e "${BLUE}====================${NC}"
echo "Started: $(date)"
echo ""

# Function to check if this is first deployment
is_first_deployment() {
	echo -n "🔍 Checking deployment status... "

	if [[ -z ${RESOURCE_GROUP} || -z ${APP_NAME} ]]; then
		echo -e "${YELLOW}⚠️  Resource details not provided${NC}"
		return 0 # Assume first deployment if we can't check
	fi

	# Check if app service exists and has been deployed
	local app_exists
	app_exists=$(az webapp show --resource-group "${RESOURCE_GROUP}" --name "${APP_NAME}" --query "name" -o tsv 2>/dev/null || echo "")

	if [[ -z ${app_exists} ]]; then
		echo -e "${YELLOW}📦 App Service doesn't exist yet${NC}"
		return 0 # First deployment
	fi

	# Check if app has any deployments
	local deployment_count
	deployment_count=$(az webapp deployment list --resource-group "${RESOURCE_GROUP}" --name "${APP_NAME}" --query "length(@)" -o tsv 2>/dev/null || echo "0")

	if [[ ${deployment_count} == "0" ]]; then
		echo -e "${YELLOW}📦 No previous deployments found${NC}"
		return 0 # First deployment
	fi

	echo -e "${GREEN}✅ Previous deployments found${($deployment_cou}nt)${NC}"
	return 1 # Not first deployment
}

# Function to check app service infrastructure
check_infrastructure() {
	echo -e "\n${YELLOW}☁️  INFRASTRUCTURE CHECKS${NC}"
	echo -e "${YELLOW}========================${NC}"

	if [[ -z ${RESOURCE_GROUP} || -z ${APP_NAME} ]]; then
		echo -e "${YELLOW}⚠️  Skipping infrastructure checks (missing resource details)${NC}"
		return 0
	fi

	# Check resource group
	echo -n "🏢 Checking resource group... "
	if az group show --name "${RESOURCE_GROUP}" >/dev/null 2>&1; then
		echo -e "${GREEN}✅ Exists${NC}"
	else
		echo -e "${RED}❌ Not found${NC}"
		return 1
	fi

	# Check app service plan
	echo -n "📋 Checking app service plan... "
	local plan_name
	plan_name=$(az webapp show --resource-group "${RESOURCE_GROUP}" --name "${APP_NAME}" --query "appServicePlanId" -o tsv 2>/dev/null | xargs basename 2>/dev/null || echo "")

	if [[ -n ${plan_name} ]]; then
		echo -e "${GREEN}�${ $plan_na}me${NC}"
	else
		echo -e "${YELLOW}⚠️  Not found or app doesn't exist yet${NC}"
	fi

	# Check app service
	echo -n "🌐 Checking app service... "
	local app_state
	app_state=$(az webapp show --resource-group "${RESOURCE_GROUP}" --name "${APP_NAME}" --query "state" -o tsv 2>/dev/null || echo "NotFound")

	case "${app_state}" in
	"Running")
		echo -e "${GREEN}✅ Running${NC}"
		return 0
		;;
	"Stopped")
		echo -e "${YELLOW}⚠️  Stopped${NC}"
		return 1
		;;
	"NotFound")
		echo -e "${YELLOW}📦 Not created yet${NC}"
		return 0 # This is OK for first deployment
		;;
	*)
		echo -e "${YELLOW}⚠️  Sta${e: $app_s}tate${NC}"
		return 1
		;;
	esac
}

# Function to perform health checks for existing deployments
check_existing_deployment() {
	echo -e "\n${YELLOW}🔍 EXISTING DEPLOYMENT HEALTH CHECKS${NC}"
	echo -e "${YELLOW}====================================${NC}"

	# Get app URL
	local app_url
	app_url=$(az webapp show --resource-group "${RESOURCE_GROUP}" --name "${APP_NAME}" --query "defaultHostName" -o tsv 2>/dev/null || echo "")

	if [[ -z ${app_url} ]]; then
		echo -e "${RED}❌ Could not get app URL${NC}"
		return 1
	fi

	app_url="https://${app_url}"
	echo "🌐 App UR${: $app_}url"

	# Health check endpoints to try (in order of preference)
	local endpoints=(
		"/api/health/simple"
		"/api/health"
		"/"
	)

	local health_passed=0
	local health_total=${#endpoints[@]}

	for endpoint in "${endpoints[@]}"; do
		echo -n "🔍 Checki${g $endpo}int... "

		local response_code
		response_code=$(curl -s -o /dev/null -w "%{http_code}" \
			--connect-timeout "${TIMEOUT}" \
			--max-time "${TIMEOUT}" \
			"${app_url}$endpoint" 2>/dev/null || echo "000")

		case "${response_code}" in
		200)
			echo -e "${GREEN}✅ OK${($response_co}de)${NC}"
			((health_passed++))
			;;
		30[1-8])
			echo -e "${YELLOW}⚠️  Redire${t ($response_}code)${NC}"
			((health_passed++)) # Redirects are OK
			;;
		000)
			echo -e "${RED}❌ Connection failed${NC}"
			;;
		*)
			echo -e "${RED}❌ Error${($response_co}de)${NC}"
			;;
		esac
	done

	echo ""
	echo "📊 Health Summar${: $health_pas}s${d/$health_to}tal endpoints responding"

	if [[ ${health_passed} -gt 0 ]]; then
		echo -e "${GREEN}✅ Application is responding${NC}"
		return 0
	else
		echo -e "${RED}❌ Application is not responding${NC}"
		return 1
	fi
}

# Function to handle first deployment
handle_first_deployment() {
	echo -e "\n${YELLOW}📦 FIRST DEPLOYMENT DETECTED${NC}"
	echo -e "${YELLOW}============================${NC}"
	echo "This appears to be the first deployment."
	echo "Skipping application health checks and focusing on infrastructure readiness."
	echo ""

	# Only check infrastructure for first deployment
	if check_infrastructure; then
		echo -e "\n${GREEN}✅ Infrastructure is ready for first deployment${NC}"
		return 0
	else
		echo -e "\n${RED}❌ Infrastructure is not ready${NC}"
		return 1
	fi
}

# Function to provide deployment recommendations
provide_recommendations() {
	local is_first=$1
	local health_status=$2

	echo -e "\n${BLUE}💡 RECOMMENDATIONS${NC}"
	echo -e "${BLUE}=================${NC}"

	if [[ ${is_first} -eq 0 ]]; then
		echo "First deployment detected:"
		echo "1. ✅ Proceed with deployment"
		echo "2. 🔍 Monitor deployment logs carefully"
		echo "3. 🏥 Run health checks after deployment completes"
		echo "4. 📊 Set up monitoring and alerting"
	elif [[ ${health_status} -eq 0 ]]; then
		echo "Existing deployment is healthy:"
		echo "1. ✅ Safe to proceed with deployment"
		echo "2. 🔄 Consider blue-green deployment for zero downtime"
		echo "3. 📊 Monitor metrics during deployment"
	else
		echo "Existing deployment has issues:"
		echo "1. 🔍 Check application logs before deploying"
		echo "2. 🛠️  Consider fixing current issues first"
		echo "3. 📋 Review recent changes that might have caused issues"
		echo "4. 🚨 Consider rollback if issues are severe"
	fi
}

# Main execution
main() {
	local exit_code=0

	# Check if this is first deployment
	if is_first_deployment; then
		handle_first_deployment
		local first_deploy_status=$?
		provide_recommendations 0 "$first_deploy_status"
		exit_code=${first_deploy_status}
	else
		# Check infrastructure first
		check_infrastructure
		local infra_status=$?

		# Then check application health
		check_existing_deployment
		local health_status=$?

		provide_recommendations 1 "$health_status"

		# Exit with error only if both infrastructure and health fail
		if [[ ${infra_status} -ne 0 && ${health_status} -ne 0 ]]; then
			exit_code=1
		fi
	fi

	echo ""
	if [[ ${exit_code} -eq 0 ]]; then
		echo -e "${GREEN}🎉 Health check completed successfully${NC}"
	else
		echo -e "${YELLOW}⚠️  Health check completed with warnings${NC}"
	fi

	return "$exit_code"
}

# Execute main function
main "$@"
