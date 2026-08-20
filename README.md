# AI Prompt Library

A searchable, browsable library of enterprise-grade Claude prompts, organized by **role** (the company function a prompt belongs to) and **category** (the type of prompt within that role). It launched as a Business Analyst-only tool and now covers eleven roles: Business Analyst, Software Developer, Project Manager, Product Manager, Data Analyst, HR/People Operations Manager, All Employees, Salesperson, Executive, Marketing Manager, and Customer Success Manager, 364 prompts in total.

**Live app:** not yet deployed. The app is Vercel-ready (see Local development below); deploying is just connecting this repo to a Vercel project and setting the environment variables. **This repo is the product.**

## Why this exists

I use Claude daily across several roles, and I got tired of re-writing the same kinds of prompts (interview guides, gap analyses, status summaries, test cases) from scratch or hunting for them in old chat history. This library is where I keep the versions that actually work, organized the way people actually think about their work: by role, then by task.

It's also meant to demonstrate something a resume line can't: what it looks like when someone treats AI tooling as an engineered part of their workflow rather than an occasional novelty, across more than one function. Every prompt here is built to a consistent structure and designed to be filled in and reused under real time pressure. This is operational use, not a demo.

## How it works

1. **Pick a role** (or "All roles") from the top navigation, then **browse or search**, optionally narrowed by category.
2. **Open a prompt.** Its role, category, description, use case, and full text are shown, with placeholder variables marked in brackets, e.g. `[PROJECT_NAME]`, `[STAKEHOLDER_ROLE]`.
3. **Fill in the variables** in the generated form.
4. **Copy the assembled prompt** and paste it into Claude (or any LLM).

Each role gets a distinct accent color, spaced evenly around the color wheel across every present role so no two roles end up looking alike, used throughout: role pills, the active category filter, placeholder highlights, and the copy button. This makes the role/category structure visually legible, not just a filter dropdown.

There's no sign-in UI yet; browsing, searching, and copying prompts all work without an account. The GitHub OAuth backend (NextAuth, `AccessLevel` on the user model) is already wired up and ready for the features that will actually need it (adding/editing prompts, RBAC, etc.), but there's no reason to show a sign-in button before anything is gated on it.

## How prompts are structured

Prompts live in Postgres, queried through Prisma (`prisma/schema.prisma`): a `PromptRole` and `PromptCategory` table, and a `Prompt` table with `title`, `slug`, `description`, `useCase`, `promptText`, `variables` (array), and `tags` (array), each row belonging to one role and one category.

All 364 prompts are also authored as markdown files with YAML frontmatter, committed under [`/prompts`](./prompts), one role folder per role, one category subfolder per category. This is the repo's seed source, loaded into the database via `prisma/seed.ts` (`npm run db:seed`, safe to re-run since it upserts by slug). The running app reads from the database, not from these files, but a fresh clone of the repo can reproduce the full dataset locally without needing anything else. `[BRACKETED_PLACEHOLDERS]` in `promptText` are what the app turns into a fill-in form.

```
prompts/
  business-analyst/
    requirements-gathering-and-elicitation/
      stakeholder-interview-guide-builder.md
    ...
  software-developer/
  project-manager/
  product-manager/
  data-analyst/
  hr-people-operations-manager/
  all-employees/
  salesperson/
  executive/
  marketing-manager/
  customer-success-manager/
```

## Adding a role, category, or prompt

There's no in-app form for this yet (it's on the backlog). Until then:

1. Add a markdown file under `/prompts/<role-slug>/<category-slug>/<prompt-slug>.md`, following the frontmatter shape above, then run `npm run db:seed` to load it (safe to re-run against existing data). Or add rows directly via `npx prisma studio`, a local GUI for the database, if you don't want a matching markdown file.
2. Roles and categories are discovered from whatever's in the database; no code changes are needed to add one.

## Tech stack

- **Next.js** (App Router, TypeScript), server-rendered, deployed on Vercel.
- **Postgres** via **Prisma** ORM. Local dev runs Postgres in Docker; production uses a managed Postgres (Vercel Postgres or Neon).
- **NextAuth.js (Auth.js v5)** with GitHub OAuth for sign-in, session carries an `accessLevel` (VIEWER/CONTRIBUTOR/ADMIN) for future permission-gated features.
- **Tailwind CSS** for styling, with role-derived accent colors applied via CSS custom properties.
- **gray-matter** to parse the seed markdown's YAML frontmatter (seed-time only, not used at runtime).
- **Fuse.js** for client-side fuzzy search. No backend search service needed at this scale.

## Local development

Requires [Docker](https://www.docker.com/) for local Postgres.

```bash
npm install

# start local Postgres
docker run -d --name ai-prompt-library-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=ai_prompt_library -p 5432:5432 postgres:16-alpine

cp .env.example .env   # fill in AUTH_GITHUB_ID / AUTH_GITHUB_SECRET (see below), AUTH_SECRET

npx prisma migrate dev   # create schema
npm run db:seed          # load all 364 seed prompts

npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows, after the one-time setup above, `startup.bat` starts the Postgres container (creating it first if needed) and the dev server in one step.

The GitHub OAuth backend works today via NextAuth's own routes (e.g. `/api/auth/signin`) even though there's no button linking to it yet. To use it, create a GitHub OAuth App at [github.com/settings/developers](https://github.com/settings/developers) with callback URL `http://localhost:3000/api/auth/callback/github`, and put its client ID/secret in `.env`. Set `ADMIN_EMAIL` in `.env` to your GitHub account's email to auto-promote yourself to ADMIN on first sign-in.

```bash
npm run build   # production server build
```

## Roadmap

A 48-item backlog covers the next round of work: content management (add/edit/archive/import prompts through the UI), personalization (favorites, notes, collections, presets), search/discovery improvements (tags, multi-select categories, related prompts, sort), live AI execution ("Test with Claude", prompt versioning, workflow chaining), collaboration (usage counters, comments, ratings, private prompts, suggested edits), Data Analyst tooling (SQL highlighting, dialect defaults, glossary), enterprise/security (RBAC beyond the current basic access levels, audit log, sensitive-content warnings, export/backup), governance/admin (category management, duplicate detection, quality checks), UI/UX polish (dark mode, keyboard shortcuts, mobile fixes, accessibility audit, loading states), and onboarding (guided tour, spotlight section). Being worked one item at a time.
