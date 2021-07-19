# syntax=docker/dockerfile:1

FROM node:14.17.3-alpine3.11

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
COPY ./ ./
# COPY ./next-env.d.ts ./next-env.d.ts
# COPY ./postcss.config.js ./postcss.config.js
# COPY ./tsconfig.json ./tsconfig.json
# COPY ./public ./public
# COPY ./next.config.js ./next.config.js
# COPY ./tailwind.config.js ./tailwind.config.js
# COPY ./src ./src

RUN --mount=type=secret,id=env,target=/usr/src/app/.env.production npm run build

RUN chown -R node:node /usr/src/app

USER node

CMD ["npm", "start"]
