##  Monorepo
 - what is monorepo
    - concept of having all services in one repo
    - can be implemented with different frameworks like lerna,npm/yarn workspaces
    - using framework will provide us with cleaner way to import the common packages and structure our application

## TurboRepo 
    - what is turborepo
        - it is framework build on top of monoRepo frameworks 
        - it provides caching and cloud build functionality
        - it is not monorepo, it is build system orchestrator


## Deploy Turborepo to VM 
    - create a turbo project with multiple services having some common packages 
    - create a vm using aws service 
    - ssh into the machine 
    - install nginx
    - configure nginx
    - start nginx
    - get some domain name for different services
    - install pm2 
    - start processes using pm2 
    - write CI/CD pipelines to auto deploy to VM whenever any commit happens


## Start this project using Docker
    - we can run each service using docker
    - for that create root level folder docker inside which create three Dockerfiles as ( Dockerfile.httpserver, Dockerfile.websocket, Dockerfile.frontend)

### How to build and run the projects 
    - docker build -t http-server -f docker/Dockerfile.httpServer .
        - http-server will be the name of image
        - (-f) forces docker to use particular file
        - (.) indicate the context sent to docker while building ( we are sending context of complete repo )

## Run individual project using Docker 
    - Create network 
        - docker network create my-network
    - Mongo-Db 
        - docker run --name mongoContainer -v my-volume:/data/db -p 27017:27017 --network my-network  mongo
    - Http-backend 
        - docker build -t http-server -f ./docker/Dockerfile.httpServer  .
        - docker run -p 3000:3000 --network my-network  http-server
    - websocker-server
        - docker build -t websocket-server -f ./docker/Dockerfile.webSocket  .
        - docker run -p 8080:8080 --network my-network  websocket-server
    - React-server
        - docker build -t react-server -f ./docker/Dockerfile.frontEnd  .
        - docker run -p 8080:8080 --network my-network  react-server