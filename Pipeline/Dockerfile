FROM node:20.16.0-alpine@sha256:eb8101caae9ac02229bd64c024919fe3d4504ff7f329da79ca60a04db08cef52 as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20.16.0-alpine@sha256:eb8101caae9ac02229bd64c024919fe3d4504ff7f329da79ca60a04db08cef52

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --production

COPY --from=builder /usr/src/app/dist ./dist

USER node

CMD [ "node", "dist/index.js" ]