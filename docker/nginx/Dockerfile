FROM nginx:alpine

ADD vhost.conf /etc/nginx/conf.d/default.conf
ADD systemerp.local.crt /etc/nginx/ssl/systemerp.local.crt
ADD systemerp.local.key /etc/nginx/ssl/systemerp.local.key

WORKDIR /var/www
