FROM node
WORKDIR /app
COPY package.json . 
RUN npm install 
COPY . .

# На сервер нужно отправлять собранную версию, поэтому билдим
# и при запуске контейнера npm run start
RUN npm run build
# обязательно после уопирования всех файлов
ENV PORT 3000
EXPOSE $PORT
VOLUME ["/app/data"]
# CMD только один
CMD ["npm", "run", "start"]