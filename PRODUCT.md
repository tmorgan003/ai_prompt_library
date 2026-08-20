# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Pivoted from a static, no-backend site to a real backend (confirmed) to support an app-improvement backlog (add/edit prompts, auth, comments, ratings, etc.) that a static export fundamentally cannot do. Next.js (App Router, TypeScript), server-rendered (no more `output: "export"`), built for Vercel hosting (confirmed, replacing GitHub Pages, which cannot run server code); not yet actually deployed there. Postgres via Prisma ORM; local dev runs Postgres in Docker, production uses a managed Postgres (Vercel Postgres or Neon). Auth via NextAuth.js (Auth.js v5) with GitHub OAuth login and a Prisma-backed session carrying an `AccessLevel` (VIEWER/CONTRIBUTOR/ADMIN, confirmed) for future role-gated features; an `ADMIN_EMAIL` env var auto-promotes the matching account to ADMIN on first sign-in. Tailwind CSS. Client-side search via Fuse.js, no backend search service (unchanged). The original 244 prompts were migrated from their seeded markdown files into the database via a one-time seed script (`prisma/seed.ts`); the markdown files remain in the repo as the historical import source but are no longer what the running app reads from.

## Users

Primary: a single professional (the app's owner) who uses the library daily for real work across several company roles they perform or support, finding, filling in, and copying enterprise-grade prompts organized by role and prompt type.

Secondary: recruiters or hiring managers who view the deployed app or the repo itself as a work sample demonstrating operational use of AI tooling across multiple business functions, not just familiarity with the concept.

## Product Purpose

"AI Prompt Library": a personal, portfolio-grade tool that lets its owner store, organize, search, and reuse a curated set of enterprise-grade prompts spanning eleven company roles (Business Analyst, Software Developer, Project Manager, Product Manager, Data Analyst, HR/People Operations Manager, All Employees, Salesperson, Executive, Marketing Manager, Customer Success Manager). Every prompt has placeholder variables filled in before copying to Claude or another LLM. Success means the owner reaches for this daily instead of writing prompts from scratch, and the repo reads as a credible, well-structured work sample on its own. Originally scoped BA-only ("BA Prompt Library"), then expanded to a multi-role library: renamed and restructured accordingly, with the BA content preserved as the first role.

## Positioning

Originally positioned on "the repo is the source of truth" (markdown files, no database). Superseded (confirmed) by the backend pivot: prompts now live in Postgres and change at runtime (add/edit/archive), which a static markdown repo can't support. The repo is still the *code* and the original content's provenance (the seed data), and still doubles as a work sample of structured, professional AI-tool usage, but it's no longer the live data's source of truth going forward.

## Operating Context

- Prompts are organized two-dimensionally: **role** (the company function the prompt belongs to, e.g. Business Analyst) first, **category** (the type of prompt within that role, e.g. Requirements Gathering & Elicitation) second. Folder structure mirrors this: `/prompts/<role-slug>/<category-slug>/<prompt-slug>.md`.
- Eleven roles are seeded, each with its own 5-10 categories: Business Analyst (10 categories, 44 prompts), Software Developer (8, 40), Project Manager (8, 40), Product Manager (8, 40), Data Analyst (8, 40), HR/People Operations Manager (8, 40), All Employees (8, 40), Salesperson (5, 20), Executive (5, 20), Marketing Manager (5, 20), Customer Success Manager (5, 20). 364 prompts total. The app does not hardcode "BA-only" (or any-role-only) assumptions anywhere; roles and categories are discovered from the content itself. Roles, categories, and prompts within a category all display alphabetically (confirmed); no curated per-role ordering.
- Each prompt carries a flat list of freeform tags (e.g. `code-review`, `git`, `debugging`), role-specific and not filtered on in the UI yet.
- The owner's workflow: pick a role (or "All roles"), browse or search, optionally filtered by category, open a prompt, fill in bracketed placeholder variables via a generated form, copy the assembled prompt, then paste into Claude or another LLM.

## Capabilities and Constraints

MVP (this build):
- Role filter (pill navigation, including "All roles") as the primary grouping, with a category filter scoped to the selected role beneath it.
- Prompt browsing: grid view, cards show role (when viewing "All roles") and category.
- Full-text search across prompt titles, descriptions, and body text (client-side, Fuse.js or similar), combinable with the role/category filters.
- Prompt detail view: title, description, category, use case, full prompt text with placeholders visibly marked (e.g. `[PROJECT_NAME]`, `[STAKEHOLDER_ROLE]`).
- Variable fill-in form generated from a prompt's placeholders; assembles final prompt text. Field type is inferred per placeholder (textarea for long-form placeholders like `[REQUIREMENTS_TEXT]`/`[MEETING_NOTES]`, single-line input for short ones like `[PROJECT_NAME]`/`[STAKEHOLDER_ROLE]`), confirmed.
- Copy-to-clipboard for the assembled prompt.
- Data model: Postgres via Prisma (`prisma/schema.prisma`). `PromptRole` and `PromptCategory` are their own tables (not implicit string values), each `Prompt` belongs to one role and one category, plus `title`, `description`, `useCase`, `promptText`, `variables` (string array), `tags` (string array), `archived` (soft-delete flag, unused so far, all false), and an optional `createdById` linking to the `User` who added it. Auth tables (`User`, `Account`, `Session`, `VerificationToken`) follow the standard Auth.js Prisma adapter shape, with `User.accessLevel` added for permissions.

Not yet built (data exists, UI does not):
- Tag display/filtering (tags are stored per prompt but not surfaced in the UI).
- Favorites/pins for quick access, stored in local storage.
- Usage counter tracking most-copied prompts, stored locally.

App-improvement backlog (confirmed, in progress): a 48-item backlog was supplied covering bug fixes, content management (add/edit/archive/import prompts), personalization, search/discovery, live AI execution, collaboration (comments/ratings/RBAC), Data Analyst tooling, enterprise/security (auth done, RBAC/audit log pending), governance/admin, UI polish/accessibility, and onboarding. Being worked one item at a time; track progress via session tasks rather than duplicating the full list here.

Constraints:
- Loads fast; no unnecessary dependencies.
- Works well on desktop and mobile.
- Accessible: proper labels on the fill-in form, keyboard navigable.
- Repo structure clean enough to serve as a work sample independent of the deployed app.
- README written for a hiring-manager audience: what it is, why it exists, how prompts are structured, how to add a new one. Framed as operational use of AI tooling across multiple business functions, not just familiarity with the concept.

## Brand Commitments

App renamed "AI Prompt Library" (confirmed, replacing "BA Prompt Library") to reflect the multi-role scope.

Visual direction updated by explicit request: more color and style than the original restrained neutrals-plus-one-accent pass. Implemented as a role-driven palette: each role gets a distinct accent color, computed once across the whole present role set (not per role in isolation) by spacing hues around the color wheel with the golden angle, which guarantees a wide minimum gap between any two roles' colors and avoids the near-duplicate hues a per-role hash produced (an earlier version put Product Manager and Data Analyst on the same violet). Colors are used for role pills, the active category rail/chips, placeholder highlighting, and the copy button, so color carries the role/category information architecture rather than being decorative. Base chrome (page background, cards, borders) stays neutral so the Operate-mode task (find, fill in, copy) still reads clearly at any role count. The home header carries a thin multi-color gradient bar built from every present role's accent, which grows richer automatically as roles are added. Colors can shift when a role is added or removed, since positions in the color sequence shift; this is a rare, deliberate content event, so even spacing across the current set matters more than perfect stability across edits.

Repo is fully public, real prompts included (confirmed). The repo itself is the work sample, so the deployed app and the source are the same artifact; nothing is sanitized or split into a private branch.

## Evidence on Hand

Full 364-prompt real dataset supplied by the owner (not placeholder samples), loaded in three batches: 44 Business Analyst prompts first (seeded from markdown into Postgres during the backend pivot), then 200 prompts across Software Developer, Project Manager, Product Manager, Data Analyst, and HR/People Operations Manager (40 each), then 120 more across All Employees (40), Salesperson, Executive, Marketing Manager, and Customer Success Manager (20 each). All 364 are backed by a markdown seed file under `/prompts`, so `npm run db:seed` reproduces the full dataset from the repo alone. This is the actual content the deployed app ships with today.

## Product Principles

- The repo is the product: code quality and structure matter as much as the UI, even though live content now lives in Postgres rather than the repo itself.
- Structure over free text: every prompt is role plus category plus metadata, not a plain note.
- Prompts as first-class objects with prompt-specific fields (placeholders, use case, tool context), not generic documents.
- Fast and quiet: an internal daily tool for one person first, a work sample second. No ceremony that slows either job down.
- The library is multi-role by design: nothing in the data model, sorting, or UI assumes any one role is the only or default role.

## Accessibility & Inclusion

Proper labels on the fill-in form; full keyboard navigability required.
