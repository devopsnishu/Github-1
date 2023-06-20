FROM node:latest

WORKDIR /usr/src/app
COPY requirement.sh /requirement.sh
COPY . .

EXPOSE 8000
CMD [ "node", "index.js" ]
ENTRYPOINT ["/requirement.sh"]
