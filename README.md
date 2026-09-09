# Decodephone

Decodephone is India's AI phone finder. It helps shoppers discover phones by asking natural-language questions, compare shortlists, inspect specifications, and review recent price movement in a premium dark interface.

## Tech stack

- Next.js 14+ App Router
- TypeScript
- Tailwind CSS
- Supabase
- Recharts
- Vercel

## Run locally

Requirements: Node.js 18.17 or newer and npm.

```bash
npm install
copy .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app works without Supabase credentials by serving the local catalog from `lib/phones.ts`.

Useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Set up Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Open the project SQL Editor.
3. Run the contents of [`supabase-schema.sql`](supabase-schema.sql).
4. Copy the project URL and anon key into `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The `/api/phones` route reads from Supabase when these variables are available. If the connection is unavailable, it returns the local catalog so the UI remains usable.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the detected Next.js build settings, or use `npm run build` as the build command.
4. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` under Project Settings > Environment Variables for Production, Preview, and Development as needed.
5. Deploy. Vercel serves the App Router page, dynamic `/api/phones` route, manifest, and optimized remote images.

After changing environment variables, redeploy the affected Vercel environment.
