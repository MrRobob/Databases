FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install --production

COPY . .

RUN npm prune --production

EXPOSE 5173

CMD ["npm", "run", "devdocker"] 