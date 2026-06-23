FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- runtime ----
FROM node:20-slim AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3111

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3111

CMD ["node", "server.js"]
