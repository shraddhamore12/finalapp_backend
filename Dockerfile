FROM node
WORKDIR /app
COPY . . 
EXPOSE 4200
CMD nodemon server.js