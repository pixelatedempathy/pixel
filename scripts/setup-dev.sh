#!/bin/bash

# Development Setup for Pixelated Empathy Microservices
# This script sets up the development environment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔧 Setting up Pixelated Empathy Development Environment${NC}"

# Function to check if a command exists
command_exists() {
	command -v "$1" >/dev/null 2>&1
}

# Check for required tools
echo -e "${YELLOW}🔍 Checking dependencies...${NC}"

MISSING_DEPS=()

if ! command_exists node; then
	MISSING_DEPS+=("node")
fi

if ! command_exists pnpm; then
	MISSING_DEPS+=("pnpm")
fi

if ! command_exists docker; then
	MISSING_DEPS+=("docker")
fi

if ! command_exists docker compose; then
	MISSING_DEPS+=("docker compose")
fi

if [[ ${#MISSING_DEPS[@]} -ne 0 ]]; then
	echo -e "${RED}❌ Missing dependencies: ${MISSING_DEPS[*]}${NC}"
	echo -e "${YELLOW}Please install the missing dependencies and run this script again${NC}"
	exit 1
fi

echo -e "${GREEN}✅ All dependencies are installed${NC}"

# Install project dependencies
echo -e "${YELLOW}📦 Installing project dependencies...${NC}"
pnpm install

# Setup environment file
if [[ ! -f ".env" ]]; then
	echo -e "${YELLOW}📝 Setting up environment file...${NC}"
	cp .env.example .env.pro
	echo -e "${YELLOW}⚠️  Please edit .env file with your actual API keys and configuration${NC}"
fi

# Create necessary directories
echo -e "${YELLOW}📁 Creating development directories...${NC}"
mkdir -p logs
mkdir -p docker/postgres/data
mkdir -p docker/redis/data
mkdir -p docker/prometheus/data
mkdir -p docker/grafana/data

# Set permissions for development
chmod 755 logs
chmod 755 docker/postgres/data
chmod 755 docker/redis/data
chmod 755 docker/prometheus/data
chmod 755 docker/grafana/data

# Build Docker images for development
echo -e "${YELLOW}🏗️  Building development Docker images...${NC}"
docker compose -f docker-compose.yml build

# Start only infrastructure services for development
echo -e "${YELLOW}🚀 Starting infrastructure services (postgres, redis, prometheus, grafana)...${NC}"
docker compose up -d postgres redis prometheus grafana

# Wait for services to be ready
echo -e "${YELLOW}⏳ Waiting for infrastructure services...${NC}"
sleep 15

# Run database migrations/setup if needed
echo -e "${YELLOW}🗄️  Setting up database...${NC}"
# Note: Add your database migration commands here
# Example: pnpm run db:migrate

echo -e "\n${GREEN}🎉 Development environment setup completed!${NC}"
echo -e "\n${YELLOW}📋 Next steps:${NC}"
echo -e "1. Edit .env file with your API keys"
echo -e "2. Start development servers:"
echo -e "   - Main app: ${BLUE}pnpm dev${NC}"
echo -e "   - Bias detection: ${BLUE}pnpm dev:bias-detection${NC}"
echo -e "   - AI service: ${BLUE}pnpm dev:ai-service${NC}"
echo -e "   - Analytics: ${BLUE}pnpm dev:analytics${NC}"
echo -e "   - Background jobs: ${BLUE}pnpm dev:worker${NC}"

echo -e "\n${YELLOW}📊 Monitoring URLs:${NC}"
echo -e "📈 Prometheus: http://localhost:9090"
echo -e "📊 Grafana: http://localhost:3001 (admin/admin)"

echo -e "\n${YELLOW}🔧 Development commands:${NC}"
echo -e "Start all services: ${BLUE}./scripts/deploy.sh${NC}"
echo -e "Stop infrastructure: ${BLUE}docker compose down${NC}"
echo -e "View logs: ${BLUE}docker compose logs -f [service]${NC}"
echo -e "Reset data: ${BLUE}./scripts/reset-dev.sh${NC}"

echo -e "\n${GREEN}✨ Happy developing!${NC}"
