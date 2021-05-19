FROM node:12.5

# install node and dependencies
RUN npm install npm@latest -g

# create app directory
WORKDIR /app

# Bundle app sourcecode
COPY . /app
RUN npm install
CMD ["node", "index.js"]
