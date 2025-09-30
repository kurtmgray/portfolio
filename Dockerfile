# Use official Node.js image
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy entire app
COPY . .

# Build Next.js app
RUN npm run build

# Use a minimal image for production
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app ./

# Expose the port
EXPOSE 3000

CMD ["npm", "run", "start"]
