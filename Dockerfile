FROM node:14

EXPOSE 3001

WORKDIR /app

COPY package.json .

COPY package-lock*.json .

RUN npm install

COPY . .

CMD ["npm","start"]
