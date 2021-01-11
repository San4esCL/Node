FROM node:14.15.4
RUN mkdir /node
COPY index.js /node
COPY package.json /node
COPY views/ /node/views
COPY public/ node/public
WORKDIR /node
RUN npm install
EXPOSE 3030
CMD npm start