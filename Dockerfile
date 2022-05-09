FROM node:latest

WORKDIR /myapp

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]