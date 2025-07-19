# Azure App Service Configuration - Correct Values

## **Container Configuration:**
- **DOCKER_CUSTOM_IMAGE_NAME**: `DOCKER|pixelatedcr.azurecr.io/pixelated-web:latest`

## **Port Configuration:**
- **WEBSITES_PORT**: `3000`

## **Registry Authentication:**
- **DOCKER_REGISTRY_SERVER_URL**: `https://pixelatedcr.azurecr.io`
- **DOCKER_REGISTRY_SERVER_USERNAME**: `pixelatedcr`
- **DOCKER_REGISTRY_SERVER_PASSWORD**: `[your ACR password from pipeline secrets]`

## **App Service Settings:**
- **WEBSITES_ENABLE_APP_SERVICE_STORAGE**: `false`

---

## **Issues Fixed:**

1. **Wrong registry**: Was `pixelatedappprodcr.azurecr.io/pixelated-app:latest` → Should be `pixelatedcr.azurecr.io/pixelated-web:latest`
2. **Wrong port**: Was `3000` → Should be `3000`
3. **Missing registry auth**: Needed the DOCKER_REGISTRY_SERVER_* variables

---

## **Verification Commands:**

```bash
# Check container configuration
az webapp config container show --name pixelated-app-prod-app --resource-group pixelated-rg

# Check port setting
az webapp config appsettings list --name pixelated-app-prod-app --resource-group pixelated-rg --query "[?name=='WEBSITES_PORT']"

# Check all app settings
az webapp config appsettings list --name pixelated-app-prod-app --resource-group pixelated-rg
```
