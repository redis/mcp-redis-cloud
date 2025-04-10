# Use node:22.12-alpine as the base image for both stages
FROM node:22.12-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies with caching
RUN --mount=type=cache,target=/root/.npm npm install

# Copy the rest of the application files
COPY . ./

# Build the TypeScript project
RUN npm run build

# Release stage
FROM node:22.12-alpine AS release

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json

# Install production dependencies
RUN npm ci --ignore-scripts --omit=dev

# Set environment variables
ENV NODE_ENV=production

# Define the entry point
ENTRYPOINT ["node", "dist/index.js"]