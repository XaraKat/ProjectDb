 # syntax=docker/dockerfile:1
 FROM mhart/alpine-node:14.16.1
 WORKDIR /Projectdb
 COPY ./package.json ./package.json
 #RUN apk update && apk add bash
 RUN npm i --production
 COPY ./database ./database
 COPY ./index.js ./index.js
 CMD while true; do node index.js; sleep 5; done
