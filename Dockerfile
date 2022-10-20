FROM node:18-slim AS REACT
WORKDIR /web
RUN yarn install
COPY ./package.json  ./
COPY ./src ./src
COPY ./public ./public
RUN yarn build

COPY --from=REACT ./web/build ./src/main/webapp/
EXPOSE 8080
