FROM nginx:1.16.0-alpine

COPY /dist /usr/share/nginx/html

EXPOSE 80

RUN nginx -g "daemon off;"
