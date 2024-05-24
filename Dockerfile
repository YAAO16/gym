FROM node:20.0.0


WORKDIR /usr/src/app2


COPY package*.json ./


RUN npm install


COPY . .



RUN npm run build


EXPOSE 3002


CMD ["npm", "run", "dev"]