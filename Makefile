# Makefile for project helper commands

.PHONY: help docker-clean test-local

# Default target
help:
	@echo "Project Helper Commands"
	@echo "======================="
	@echo ""
	@echo "Available commands:"
	@echo "  make docker-clean   - Clean up local Docker images and containers"
	@echo "  make test-local     - Run a health check on the local server"
	@echo ""

# Configuration
CONTAINER_NAME := pixelated-app-local
PORT := 3000

# Clean up local Docker resources
docker-clean:
	@echo "Cleaning up local Docker resources..."
	-docker stop $(CONTAINER_NAME) 2>/dev/null || true
	-docker rm $(CONTAINER_NAME) 2>/dev/null || true
	-docker rmi pixelated:local 2>/dev/null || true
	docker image prune -f
	@echo "Cleanup completed!"

# Test the local application
test-local:
	@echo "Testing local application..."
	@sleep 2
	@curl -f http://localhost:$(PORT)/api/health || { echo "Health check failed!"; exit 1; }
	@echo "Local application is healthy!"
