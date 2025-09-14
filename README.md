# Simonyi Könyvtár - Library Management System

Based on the [NestJS + NextJS Starter](https://github.com/kir-dev/next-nest-template) project by by [Kir-Dev](https://kir-dev.hu) and on a Kir-Dev member's previous project [simonyi-konyvtar](https://github.com/OmTheTurtle/simonyi-konyvtar).

## Getting Started

### Prerequisites

- Node.js 22
- Pnpm 10
- Docker (for database)

### Installation

You only need to install dependencies in the root directory.

```bash
pnpm install
```

### Linter and Formatter Configuration

It is a must to use ESLint and Prettier in this project.

Set up ESLint and Prettier in your IDE and check `fix on save` or `format on save` options.

You can run the following commands to check linting and formatting issues.

```bash
pnpm lint
# or
pnpm lint:fix
```

```bash
pnpm format:check
# or
pnpm format
```

### Development

Optionally if you have Docker installed, you can run a PostgreSQL database in a container.

```bash
cd apps/backend
docker compose -f docker-compose.dev.yml up -d
```

Don't forget to set up your environment variables. You can copy the example files and modify them as needed.

Also make sure Prisma is set up correctly.

```bash
cd apps/backend
pnpx prisma generate
pnpx prisma migrate dev
```

You can run the backend and frontend separately.

```bash
pnpm start:backend # Starts on http://localhost:3001
```

```bash
pnpm start:frontend # Starts on http://localhost:3000
```

#### AuthSCH

todo.

#### Seeding the Database

todo.

#### MinIO

todo.

### After Development

Deploy the frontend app on Vercel targeting the `apps/frontend` directory.

The backend app can run on our VM, checkout the repo, set up environment variables, and run:

```bash
cd apps/backend
docker compose up -d --build
```

## Happy Coding!
