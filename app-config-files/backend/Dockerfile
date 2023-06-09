FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY nest-cli.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]