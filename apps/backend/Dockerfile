FROM node:22-alpine AS base
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile

FROM base AS build
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate
RUN yarn build

FROM base
ENV NODE_ENV=production
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 3001
CMD ["pnpm", "run", "start:migrate:prod"]
