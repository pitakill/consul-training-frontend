FROM node as build
WORKDIR /app
ENV BACKENDURL="/backend"
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --slient
COPY . ./
RUN npm run build

FROM caddy:alpine
ENV PORT=80
ENV BACKEND_URL=localhost
ENV BACKEND_PORT=8080
COPY --from=build /app/public /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE ${PORT}
