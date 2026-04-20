FROM node:18-alpine

WORKDIR /app

# Copy dependency manifest first — Docker caches this layer.
# npm install only re-runs when package.json or package-lock.json changes.
# If only server.js changes, this cached layer is reused → faster builds.
COPY package*.json ./

RUN npm install

# Copy source code after installing deps
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

# Task 6 answers:
# - Change server.js → only the "COPY . ." layer and CMD are rebuilt
# - Change package.json → everything from "COPY package*.json" onwards rebuilds
# - Order matters because Docker reuses cached layers from top until a change is detected
