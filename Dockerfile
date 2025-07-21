# ---- Build ----
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npx astro build

# ---- Production Runner ----
FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.astro ./.astro
COPY --from=builder /app/public ./public
COPY --from=builder /app/astro.config.* ./

EXPOSE 3000

CMD ["npx", "astro", "start", "--host", "0.0.0.0"]
