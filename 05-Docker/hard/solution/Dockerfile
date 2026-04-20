# Stage 1: builder — install everything (including devDependencies if any)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# If this were TypeScript: RUN npm run build

# Stage 2: production — only copy runtime artifacts
# Starts from a FRESH base image — no build tools, no source files left over
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js .
COPY --from=builder /app/package.json .
EXPOSE 3000
CMD ["node", "server.js"]

# Why smaller?
# The builder stage is discarded — Docker only ships the production stage.
# node_modules for a TypeScript project would include tsc, ts-node, type definitions, etc.
# None of that is needed to run compiled JS.
