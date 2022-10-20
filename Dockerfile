FROM node:18-slim AS REACT
WORKDIR /web
COPY /web/package.json  ./
COPY /web/src ./src
COPY /web/public ./public
RUN npm install
RUN yarn build

COPY --from=REACT ./web/build ./src/main/webapp/
EXPOSE 8080
