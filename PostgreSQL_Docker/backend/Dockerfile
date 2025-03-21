FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --production

COPY . .

RUN npm prune --production

EXPOSE 3050

CMD ["node", "server.js"] 