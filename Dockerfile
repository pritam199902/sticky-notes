FROM node:18.12-alpine
WORKDIR app
COPY . .
RUN npm istall
EXPOSE 3000
CMD ["npm", "run", "start"]
