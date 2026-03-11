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