FROM node:22-alpine
WORKDIR /app

COPY . .
RUN npm ci

EXPOSE 5001
CMD ["node", "index.js"]
