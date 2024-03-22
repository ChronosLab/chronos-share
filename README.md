# Chronos Share

## Getting Started

setting up the environment
```shell
cp .env.example .env
```

Run MongoDB with Docker:
```shell
docker-compose up -d
```

```shell

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### how to use prisma
```shell
prisma format
npx prisma generate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
