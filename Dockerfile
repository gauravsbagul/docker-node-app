FROM node:alpine

WORKDIR /urs/nodeapp

COPY ./package.json ./

RUN npm install 
COPY ./ ./

CMD [ "npm", "start" ]