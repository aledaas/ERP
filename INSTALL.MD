# APP WEB SYSTEMERP

## Setup

##### Docker

To run this application in Docker, first create a network as follow:
> docker network create --driver=bridge --subnet=172.11.0.0/16  systemerp

Create docker-compose file from example
> cp docker-compose.example.yml docker-compose.yml

Set up .env file
> cp .env.example .env

**Important! Change the DB parameters in the .env file before build the containers**
Then, build all containers
> docker-compose build


And customize as needed. Also, configure your /etc/hosts file:
> 127.0.0.1   systemerp.local


Finally, start the app
> docker-compose up -d

Install composer
> docker-compose exec app composer install -vvv --prefer-dist

Install npm dependencies
> docker-compose exec app apk npm install

Change permissions for "storage" and "bootstrap/cache" folders

> docker exec -it app chmod -R 777 storage

> docker exec -it app chmod -R 777 bootstrap/cache

Access the application from your browser
> https://systemerp.local:8081


# License

The Lumen framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
