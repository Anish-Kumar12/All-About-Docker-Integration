FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js

RUN npm install

ENTRYPOINT [ "node", "index.js" ]


# to build the image, run the following command:
#     docker build -t dockernode .

# to run the container, run the following command:
#     docker run -it dockernode

# to run the container in detached mode, run the following command:
#     docker run -d dockernode

# to run the container in detached mode and expose the port, run the following command:
#     docker run -d -p 3000:3000 dockernode



