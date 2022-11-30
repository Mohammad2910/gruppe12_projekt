FROM node:18-slim AS REACT
# Set the working directory to /app inside the container
WORKDIR /app
COPY /web/package.json  ./
COPY /web/src ./src
COPY /web/public ./public

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# RUN npm install --force
RUN npm ci --force
# Build the app
RUN npm run build

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD ["npm", "start"]
