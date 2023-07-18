FROM node:18

RUN mkdir /worker
WORKDIR /worker

COPY package.json /worker
COPY package-lock.json /worker
RUN npm install

COPY lib lib
COPY cli cli