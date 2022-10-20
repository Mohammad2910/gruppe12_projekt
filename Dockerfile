FROM node:18-slim AS REACT
WORKDIR /web
RUN npm install
COPY /web/package.json  ./
COPY /web/src ./src
COPY /web/public ./public
RUN yarn build

COPY --from=REACT ./web/build ./src/main/webapp/
EXPOSE 8080
