FROM smebberson/alpine-nginx-nodejs:4.4.0
LABEL author="Sergio Diaz"
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

COPY ./drones-api/dist /usr/src/drones-api
COPY ./commands.sh /scripts/commands.sh

EXPOSE 3000
EXPOSE 3001
ENTRYPOINT ["sh /scripts/commands.sh"]