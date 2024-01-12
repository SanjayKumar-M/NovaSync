FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
