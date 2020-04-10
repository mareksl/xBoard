FROM node:12.8-alpine as install
EXPOSE 50051
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install \
    && npm cache clean --force

FROM install AS dev
ENV NODE_ENV=development
CMD ["npm", "run", "start:dev"]

FROM install AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

FROM install AS prod
COPY --from=build /usr/src/app/dist .
CMD ["node", "main.js"]