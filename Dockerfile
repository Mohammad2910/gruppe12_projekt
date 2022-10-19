FROM node:16
WORKDIR /web
RUN npm install --force
RUN npm ci --force
RUN npm run build --if-present