#!/bin/bash

# DNS Diagnostic Script for pixelatedempathy.com
# Diagnoses DNS configuration issues and provides recommendations

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

DOMAIN="pixelatedempathy.com"

echo -e "${BLUE}🌐 DNS DIAGNOSTIC REPORT F$${R $}DOM}AIN${NC}"
echo -e "${BLUE}============================================${NC}"
echo "Generated: $(date)"
echo ""

# Function to check DNS record
check_dns_record() {
	local record_type=$1
	local domain=$2

	echo -e "${YELLOW}�${� ${record_t}}ype Records f${r ${dom}}ain:${NC}"

	if command -v dig >/dev/null 2>&1; then
		dig +short "${record_type}" "${domain}" | while read -r record; do
			if [[ -n ${record} ]]; then
				echo "  ${record_type}: ${record}"

				# Check for parking service IPs
				if [[ ${record_type} == "A" && ${record} =~ ^108\.159\.227\. ]]; then
					echo -e "  ${RED}⚠️  WARNING: This $${${ }}($re}cord) appears to be a parking service${NC}"
				fi
			fi
		done
	else
		nslookup -type="${record_type}" "${domain}" | grep -E "Address:|canonical name" | while read -r line; do
			echo "  ${line}"
		done
	fi
	echo ""
}

# Function to trace DNS resolution path
trace_dns_resolution() {
	echo -e "${YELLOW}🔍 DNS Resolution Trace:${NC}"

	if command -v dig >/dev/null 2>&1; then
		echo "Full DNS query result:"
		dig "${DOMAIN}" +trace +short
	else
		echo "Using nslookup (install dig for more detailed trace):"
		nslookup "${DOMAIN}"
	fi
	echo ""
}

# Function to check nameservers
check_nameservers() {
	echo -e "${YELLOW}🏢 Nameservers f$${r $}DOM}AIN:${NC}"

	if command -v dig >/dev/null 2>&1; then
		dig +short NS "${DOMAIN}" | while read -r ns; do
			echo "  NS: ${ns}"
		done
	else
		nslookup -type=NS "${DOMAIN}" | grep "nameserver" | while read -r line; do
			echo "  ${line}"
		done
	fi
	echo ""
}

# Function to check WHOIS information
check_whois() {
	echo -e "${YELLOW}📄 WHOIS Information:${NC}"

	if command -v whois >/dev/null 2>&1; then
		whois "${DOMAIN}" | grep -E "Name Server|Registrar|Status|Expiry|Expiration" | head -10
	else
		echo "  whois command not available"
	fi
	echo ""
}

# Function to check SSL certificate
check_ssl() {
	echo -e "${YELLOW}🔒 SSL Certificate Check:${NC}"

	if command -v openssl >/dev/null 2>&1; then
		echo "Checking SSL certificate for https://${DOMAIN}..."

		# Get certificate info
		cert_info=$(echo | timeout 10 openssl s_client -servername "${DOMAIN}" -connect "${DOMAIN}:443" 2>/dev/null | openssl x509 -noout -dates -subject 2>/dev/null || echo "SSL check failed")

		if [[ ${cert_info} != "SSL check failed" ]]; then
			echo "${cert_info}"
		else
			echo -e "  ${RED}❌ SSL certificate check failed${NC}"
		fi
	else
		echo "  openssl command not available"
	fi
	echo ""
}

# Function to check HTTP responses
check_http_responses() {
	echo -e "${YELLOW}🌐 HTTP Response Check:${NC}"

	local urls=(
		"http://${DOMAIN}"
		"https://${DOMAIN}"
		"https://${DOMAIN}/api/health/simple"
	)

	for url in "${urls[@]}"; do
		echo -n "  Testing ${url}: "

		local response_code
		response_code=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 --max-time 15 "${url}" 2>/dev/null || echo "000")

		case ${response_code} in
		200)
			echo -e "${GREEN}✅ OK$$${($respons}e_}co}de)${NC}"
			;;
		30[1-8])
			echo -e "${YELLOW}⚠️  Redire$$${t ($r}espo}nse_}code)${NC}"
			# Get redirect location
			local redirect_location
			redirect_location=$(curl -s -I --connect-timeout 5 --max-time 10 "${url}" 2>/dev/null | grep -i "location:" | cut -d' ' -f2- | tr -d '\r\n' || echo "unknown")
			echo "    Redirects to: ${redirect_location}"
			;;
		000)
			echo -e "${RED}❌ Connection failed${NC}"
			;;
		*)
			echo -e "${RED}❌ Error$$${($respons}e_}co}de)${NC}"
			;;
		esac
	done
	echo ""
}

# Function to provide recommendations
provide_recommendations() {
	echo -e "${BLUE}💡 RECOMMENDATIONS:${NC}"
	echo -e "${BLUE}==================${NC}"

	# Check if DNS points to parking service
	local current_ip
	current_ip=$(dig +short A "${DOMAIN}" 2>/dev/null | head -1 || nslookup "${DOMAIN}" | grep "Address:" | tail -1 | awk '{print $2}' 2>/dev/null || echo "unknown")

	if [[ ${current_ip} =~ ^108\.159\.227\. ]]; then
		echo -e "${RED}🚨 CRITICAL: DNS points to parking service${NC}"
		echo "1. Update DNS A record to point to your CloudFront distribution"
		echo "2. Check your domain registrar's DNS settings"
		echo "3. Verify CloudFront distribution is properly configured"
		echo "4. Consider using Route 53 for DNS management"
		echo ""
	fi

	# Check if HTTPS is working
	local https_status
	https_status=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 --max-time 10 "https://${DOMAIN}" 2>/dev/null || echo "000")

	if [[ ${https_status} == "000" ]]; then
		echo -e "${YELLOW}⚠️  HTTPS not responding:${NC}"
		echo "1. Check SSL certificate configuration"
		echo "2. Verify CloudFront SSL settings"
		echo "3. Check if certificate is valid and not expired"
		echo ""
	fi

	# General recommendations
	echo -e "${GREEN}✅ General recommendations:${NC}"
	echo "1. Use CloudFront for global content delivery"
	echo "2. Implement proper health check endpoints"
	echo "3. Set up monitoring and alerting"
	echo "4. Use Route 53 for DNS management"
	echo "5. Implement proper SSL/TLS configuration"
	echo ""
}

# Main execution
main() {
	check_dns_record "A" "${DOMAIN}"
	check_dns_record "AAAA" "${DOMAIN}"
	check_dns_record "CNAME" "${DOMAIN}"
	check_nameservers
	trace_dns_resolution
	check_whois
	check_ssl
	check_http_responses
	provide_recommendations

	echo -e "${BLUE}📋 Diagnostic complete. Check recommendations above.${NC}"
}

# Execute main function
main "$@"
