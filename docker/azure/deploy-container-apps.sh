#!/bin/bash

# Azure Container Registry and Container Apps Deployment Script
# Optimized for pixelated2 Astro application

set -e

echo "🚀 Starting Azure Container Apps deployment for Pixelated Empathy..."

# Configuration
RESOURCE_GROUP="${AZURE_RESOURCE_GROUP:-pixelated-rg}"
LOCATION="${AZURE_LOCATION:-eastus}"
ACR_NAME="${AZURE_ACR_NAME:-pixelatedcr}"
CONTAINER_APP_ENV="${AZURE_CONTAINER_APP_ENV:-pixelated-env}"
CONTAINER_APP_NAME="${AZURE_CONTAINER_APP_NAME:-pixelated}"
SUBSCRIPTION_ID="${AZURE_SUBSCRIPTION_ID}"
IMAGE_TAG="${IMAGE_TAG:-$(date +%Y%m%d-%H%M%S)}"

# Load environment variables from .env file if it exists
if [ -f ".env.azure" ]; then
	echo "📄 Loading Azure environment variables from .env.azure file..."
	set -a
	source .env.azure
	set +a
elif [ -f ".env" ]; then
	echo "📄 Loading environment variables from .env file..."
	set -a
	source .env
	set +a
fi

echo "📋 Deployment Configuration:"
echo "  Resource Group: $RESOURCE_GROUP"
echo "  Location: $LOCATION"
echo "  ACR Name: $ACR_NAME"
echo "  Container App Environment: $CONTAINER_APP_ENV"
echo "  Container App Name: $CONTAINER_APP_NAME"
echo "  Image Tag: $IMAGE_TAG"
echo ""

# Check prerequisites
if ! command -v az &>/dev/null; then
	echo "❌ Azure CLI is not installed. Please install it first."
	echo "   Visit: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
	exit 1
fi

if ! command -v docker &>/dev/null; then
	echo "❌ Docker is not installed. Please install it first."
	exit 1
fi

# Check if logged in to Azure
if ! az account show &>/dev/null; then
	echo "❌ Not logged in to Azure. Please run 'az login' first."
	exit 1
fi

# Set subscription if provided
if [ ! -z "$SUBSCRIPTION_ID" ]; then
	echo "🔧 Setting Azure subscription..."
	az account set --subscription "$SUBSCRIPTION_ID"
fi

# Install Azure Container Apps extension
echo "🔧 Installing Azure Container Apps extension..."
az extension add --name containerapp --upgrade --only-show-errors

# Create resource group if it doesn't exist
echo "🏗️ Creating resource group if it doesn't exist..."
az group create \
	--name "$RESOURCE_GROUP" \
	--location "$LOCATION" \
	--output table

# Create Azure Container Registry if it doesn't exist
echo "🐳 Creating Azure Container Registry..."
ACR_EXISTS=$(az acr show --name "$ACR_NAME" --resource-group "$RESOURCE_GROUP" --query "name" --output tsv 2>/dev/null || echo "")

if [ -z "$ACR_EXISTS" ]; then
	az acr create \
		--name "$ACR_NAME" \
		--resource-group "$RESOURCE_GROUP" \
		--location "$LOCATION" \
		--sku Basic \
		--admin-enabled true \
		--output table

	echo "✅ Azure Container Registry created: $ACR_NAME"
else
	echo "✅ Azure Container Registry already exists: $ACR_NAME"
fi

# Get ACR login server
ACR_LOGIN_SERVER=$(az acr show --name "$ACR_NAME" --resource-group "$RESOURCE_GROUP" --query "loginServer" --output tsv)
echo "🔑 ACR Login Server: $ACR_LOGIN_SERVER"

# Login to ACR
echo "🔐 Logging in to Azure Container Registry..."
az acr login --name "$ACR_NAME"

# Build and push Docker images
echo "📦 Building and pushing Docker images..."

# Build main web application
echo "🔨 Building web application image..."
docker build \
	-f docker/azure/Dockerfile.azure-web \
	-t "$ACR_LOGIN_SERVER/pixelated-web:$IMAGE_TAG" \
	-t "$ACR_LOGIN_SERVER/pixelated-web:latest" \
	.

echo "⬆️ Pushing web application image..."
docker push "$ACR_LOGIN_SERVER/pixelated-web:$IMAGE_TAG"
docker push "$ACR_LOGIN_SERVER/pixelated-web:latest"

# Build nginx proxy
echo "🔨 Building nginx proxy image..."
docker build \
	-f docker/azure/Dockerfile.azure-nginx \
	-t "$ACR_LOGIN_SERVER/pixelated-nginx:$IMAGE_TAG" \
	-t "$ACR_LOGIN_SERVER/pixelated-nginx:latest" \
	.

echo "⬆️ Pushing nginx proxy image..."
docker push "$ACR_LOGIN_SERVER/pixelated-nginx:$IMAGE_TAG"
docker push "$ACR_LOGIN_SERVER/pixelated-nginx:latest"

# Create Container Apps Environment if it doesn't exist
echo "🌐 Creating Container Apps Environment..."
CONTAINER_ENV_EXISTS=$(az containerapp env show --name "$CONTAINER_APP_ENV" --resource-group "$RESOURCE_GROUP" --query "name" --output tsv 2>/dev/null || echo "")

if [ -z "$CONTAINER_ENV_EXISTS" ]; then
	az containerapp env create \
		--name "$CONTAINER_APP_ENV" \
		--resource-group "$RESOURCE_GROUP" \
		--location "$LOCATION" \
		--output table

	echo "✅ Container Apps Environment created: $CONTAINER_APP_ENV"
else
	echo "✅ Container Apps Environment already exists: $CONTAINER_APP_ENV"
fi

# Get ACR credentials for Container Apps
echo "🔑 Getting ACR credentials..."
ACR_USERNAME=$(az acr credential show --name "$ACR_NAME" --query "username" --output tsv)
ACR_PASSWORD=$(az acr credential show --name "$ACR_NAME" --query "passwords[0].value" --output tsv)

# Create or update Container App
echo "🚀 Deploying Container App..."
CONTAINER_APP_EXISTS=$(az containerapp show --name "$CONTAINER_APP_NAME" --resource-group "$RESOURCE_GROUP" --query "name" --output tsv 2>/dev/null || echo "")

if [ -z "$CONTAINER_APP_EXISTS" ]; then
	# Create new Container App
	echo "📱 Creating new Container App..."
	az containerapp create \
		--name "$CONTAINER_APP_NAME" \
		--resource-group "$RESOURCE_GROUP" \
		--environment "$CONTAINER_APP_ENV" \
		--image "$ACR_LOGIN_SERVER/pixelated-web:$IMAGE_TAG" \
		--registry-server "$ACR_LOGIN_SERVER" \
		--registry-username "$ACR_USERNAME" \
		--registry-password "$ACR_PASSWORD" \
		--target-port 3000 \
		--ingress external \
		--min-replicas 1 \
		--max-replicas 5 \
		--cpu 1.0 \
		--memory 2.0Gi \
		--env-vars \
		NODE_ENV=production \
		AZURE_PLATFORM=true \
		AZURE_OPENAI_API_KEY="$AZURE_OPENAI_API_KEY" \
		AZURE_OPENAI_ENDPOINT="$AZURE_OPENAI_ENDPOINT" \
		AZURE_OPENAI_API_VERSION="$AZURE_OPENAI_API_VERSION" \
		AZURE_OPENAI_DEPLOYMENT_NAME="$AZURE_OPENAI_DEPLOYMENT_NAME" \
		AZURE_STORAGE_CONNECTION_STRING="$AZURE_STORAGE_CONNECTION_STRING" \
		AZURE_AD_CLIENT_ID="$AZURE_AD_CLIENT_ID" \
		AZURE_AD_TENANT_ID="$AZURE_AD_TENANT_ID" \
		SUPABASE_URL="$SUPABASE_URL" \
		SUPABASE_ANON_KEY="$SUPABASE_ANON_KEY" \
		APPLICATIONINSIGHTS_CONNECTION_STRING="$APPLICATIONINSIGHTS_CONNECTION_STRING" \
		--output table
else
	# Update existing Container App
	echo "🔄 Updating existing Container App..."
	az containerapp update \
		--name "$CONTAINER_APP_NAME" \
		--resource-group "$RESOURCE_GROUP" \
		--image "$ACR_LOGIN_SERVER/pixelated-web:$IMAGE_TAG" \
		--output table
fi

# Get Container App URL
echo "📊 Getting deployment information..."
CONTAINER_APP_URL=$(az containerapp show \
	--name "$CONTAINER_APP_NAME" \
	--resource-group "$RESOURCE_GROUP" \
	--query "properties.configuration.ingress.fqdn" \
	--output tsv)

# Configure custom domain if specified
if [ ! -z "$CUSTOM_DOMAIN" ]; then
	echo "🌐 Configuring custom domain: $CUSTOM_DOMAIN"
	# Note: Custom domain setup requires additional certificate configuration
	echo "⚠️ Custom domain configuration requires manual certificate setup in Azure Portal"
fi

# Setup Application Insights if connection string is provided
if [ ! -z "$APPLICATIONINSIGHTS_CONNECTION_STRING" ]; then
	echo "📊 Application Insights is configured for monitoring"
fi

# Display deployment information
echo ""
echo "✅ Azure Container Apps deployment completed!"
echo ""
echo "🌐 Deployment Details:"
echo "  Resource Group: $RESOURCE_GROUP"
echo "  Container App: $CONTAINER_APP_NAME"
echo "  Container Registry: $ACR_LOGIN_SERVER"
echo "  Application URL: https://$CONTAINER_APP_URL"
echo "  Image Tag: $IMAGE_TAG"
echo ""
echo "📋 Next Steps:"
echo "  1. Verify application is running: https://$CONTAINER_APP_URL"
echo "  2. Configure custom domain if needed"
echo "  3. Set up monitoring and alerts in Azure Portal"
echo "  4. Configure autoscaling rules if needed"
echo ""
echo "🎉 Deployment completed successfully!"

# Optional: Open the deployed site
if command -v open &>/dev/null; then
	echo "🌐 Opening deployed site..."
	open "https://$CONTAINER_APP_URL"
elif command -v xdg-open &>/dev/null; then
	echo "🌐 Opening deployed site..."
	xdg-open "https://$CONTAINER_APP_URL"
fi

# Clean up local Docker images to save space
echo "🧹 Cleaning up local Docker images..."
docker image prune -f
