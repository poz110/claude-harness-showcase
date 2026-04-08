# Dockerfile — claude-harness showcase (Next.js 16 SSG)
#
# Primary deployment target is Vercel (zero-config).
# This Dockerfile is provided as an alternative for:
#   - Local containerized development
#   - Fallback deployment to platforms like Railway, Fly.io, or Cloud Run
#
# Build:  docker build -t claude-harness-web .
# Run:    docker run -p 3000:3000 claude-harness-web
#
# For static export, replace the final stage with a lightweight
# nginx image serving the contents of /app/.next/out (if output: 'export'
# is configured in next.config.js).

# ─────────────────────────────────────────
# Stage 1: Dependencies
# ─────────────────────────────────────────
FROM node:20-alpine AS deps

# Install libc compat for Alpine (required by some native modules)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files only — allows Docker layer caching
COPY package.json package-lock.json ./

# Use ci for reproducible installs
RUN npm ci


# ─────────────────────────────────────────
# Stage 2: Builder
# ─────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# GITHUB_TOKEN is used at build time to fetch the star count.
# Pass it via: docker build --build-arg GITHUB_TOKEN=ghp_xxx .
# Falls back gracefully if not provided (see lib/github.ts).
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=$GITHUB_TOKEN

# Disable Next.js telemetry in CI/container builds
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build


# ─────────────────────────────────────────
# Stage 3: Runner (production image)
# ─────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy the standalone output (requires `output: 'standalone'` in next.config.js)
# If using static export, copy .next/out to an nginx stage instead.
COPY --from=builder /app/public ./public

# Copy standalone server and static assets, setting correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the standalone Next.js server
CMD ["node", "server.js"]
