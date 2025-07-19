# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-slim AS base

LABEL org.opencontainers.image.description="Astro"

# Install pnpm first (as root)
ARG PNPM_VERSION=10.12.4
RUN npm install -g pnpm@$PNPM_VERSION

# Install packages needed to build node modules (while still root)
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential=12.* \
    node-gyp=* \
    pkg-config=* \
    python-is-python3=* \
    git=* \
    curl=* \
    ca-certificates=* && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Astro app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"
ENV ASTRO_TELEMETRY_DISABLED=1
ENV ASTRO_CACHE_DIR=/tmp/.astro
ENV VITE_CACHE_DIR=/tmp/.vite

# Create non-root user for security
RUN groupadd --gid 1001 astro && \
    useradd --uid 1001 --gid astro --shell /bin/bash --create-home astro

# Create and fix permissions on /app directory
RUN mkdir -p /app && chown -R astro:astro /app

# Throw-away build stage to reduce size of final image
FROM base AS build

# Copy package files
COPY --chown=astro:astro package.json pnpm-lock.yaml ./

# Copy scripts directory first to ensure copy-polyfills.js is available
COPY --chown=astro:astro scripts ./scripts/

# Copy remaining application code
COPY --chown=astro:astro . .

# Build application
RUN mkdir -p /tmp/.astro /app/node_modules/.astro && \
    chmod -R 755 /tmp/.astro /app/node_modules/.astro && \
    pnpm install --no-frozen-lockfile --prod=false && \
    pnpm build && \
    pnpm prune --prod

# Final stage for app image
FROM base

# Add healthcheck (in the final stage)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Switch to non-root user for the final image
USER astro

# Copy built application
COPY --from=build --chown=astro:astro /app /app

# Ensure proper permissions on node_modules and create .astro directories
RUN mkdir -p /app/node_modules/.astro /tmp/.astro && \
    chown -R astro:astro /app/node_modules /tmp/.astro && \
    chmod -R 755 /app/node_modules /tmp/.astro

# Expose Azure-friendly port
EXPOSE 3000

# Start Astro preview server on 0.0.0.0:3000 for Azure compatibility
CMD ["node", "scripts/start-server.js"]
