FROM node:6.9.1

#RUN apt-get install -y npm
#RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
RUN npm install -g gulp

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD ARG NODE_ENV
ONBUILD ENV NODE_ENV $NODE_ENV
ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app