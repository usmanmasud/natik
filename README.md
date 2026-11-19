# NATIK — AI Operations Intelligence

NATIK is an AI operations platform for African businesses. It brings together payments, customers, orders and staff tasks, and uses AI to show owners what needs attention and what to do next.

Live site: https://natik2.natik.com.ng

## Tech stack

- Next.js (App Router) + React + Tailwind CSS
- Auth.js (NextAuth v5): email/password sign-in, JWT sessions
- Prisma ORM + Neon serverless Postgres
- Hosted on Vercel

## Local development

```bash
npm install
cp .env.example .env     # then fill in DATABASE_URL and AUTH_SECRET
npm run db:push          # creates the database tables
npm run dev
```

Open http://localhost:3000.

## Production environment variables (Vercel)

| Variable       | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| `DATABASE_URL` | Neon pooled connection string                                |
| `AUTH_SECRET`  | Random 32+ byte secret (`npx auth secret`)                   |

Do **not** set `AUTH_URL` in production. `trustHost` is enabled, so Auth.js uses the domain the request came in on.

After setting `DATABASE_URL` for the first time, run `npm run db:push` once against that database to create the tables.
