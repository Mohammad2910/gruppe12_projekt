FROM node:18-slim AS REACT
WORKDIR /web
COPY /web/package.json  ./
COPY /web/src ./src
COPY /web/public ./public
RUN yarn install
RUN yarn build

EXPOSE 8080
