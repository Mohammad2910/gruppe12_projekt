FROM node:18-slim AS REACT
WORKDIR /web
COPY ./package.json  ./
COPY ./src ./src
COPY ./public ./public
RUN yarn install
RUN yarn build

COPY --from=REACT ./web/build ./src/main/webapp/
EXPOSE 8080
