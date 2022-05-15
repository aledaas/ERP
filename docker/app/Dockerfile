FROM php:8.1.4-fpm-alpine

RUN apk update; \
    apk upgrade;

RUN apk add --no-cache \
    nodejs \
    npm \
    git

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html/