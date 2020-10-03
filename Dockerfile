FROM nginx:1.16.0-alpine

COPY /dist /usr/share/nginx/html
RUN nginx -g "daemon off;"

EXPOSE 80
