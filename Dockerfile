# syntax=docker/dockerfile:1

FROM node:14.17.3-alpine3.11

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
COPY ./ ./

RUN --mount=type=secret,id=env,target=/usr/src/app/.env.production npm run build

RUN chown -R node:node /usr/src/app

USER node

CMD ["npm", "start"]
