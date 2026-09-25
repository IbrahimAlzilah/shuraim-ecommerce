<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Translations

Each storefront app (`shuraim-beauty`, `adigital-flower`) renders all UI text through
`next-intl` (`useTranslations`/`getTranslations`), backed by flat key→value JSON files at
`apps/<app>/messages/en.json` and `apps/<app>/messages/ar.json`. A missing key throws in
development, so a value changed only in JSON (not in a component) is easy to miss when
grepping `.tsx` files.

Whenever you add or change any user-facing string, in the SAME turn:

1. Use `t("Namespace.key")` in the component — never hardcode raw text.
2. Add that exact key to BOTH `en.json` and `ar.json`, with a real Arabic
   translation in `ar.json` (not a copy of the English text).
3. Verify both JSON files still parse and have the same key set before finishing.

## Feature Slices (`apps/<storefront-app>/src/features/*`)

Each `features/[feature-name]/` folder is a self-contained domain module with
the anatomy: `api/`, `components/`, `hooks/`, `types/`, `utils/`, `index.ts`.

- **State management:** [Zustand](https://github.com/pmndrs/zustand) is the
  standard for feature-level state stores (e.g. `hooks/use-cart-store.ts`).
  Don't introduce Context or another state library for this purpose — keep it
  consistent across features.
- **File naming:** kebab-case for every file (`cart-drawer.tsx`,
  `add-to-cart-button.tsx`, `use-cart.ts`), matching the rest of the codebase
  (`shared/layout/header.tsx`, `shared/layout/mobile-nav.tsx`).
- **`types/` boundary:** this folder holds only UI-local types that have no
  meaning outside the feature (e.g. `{ isDrawerOpen: boolean }`). Domain
  entities (`Product`, `Cart`, `Order`, ...) are never redefined here — import
  them from `@rawnaq/types`.
- **Public API:** only `index.ts` is importable from outside the feature. No
  deep imports into `./api`, `./components`, `./hooks`, `./types`, `./utils`
  from other features or from `app/`.
- **Not yet built:** `api/` functions in each feature will call a shared HTTP
  client that doesn't exist yet (`lib/api-client.ts`). Add it when the first
  feature needs real data fetching — don't scaffold it ahead of that need.

## Monorepo structure

This monorepo hosts two independent storefronts, each a full standalone copy
(no shared feature code between them, only `libs/*`), sharing one backend:

- `apps/shuraim-beauty` — the شريم | Shuraim Beauty store.
- `apps/adigital-flower` — the adigital-flower store.
- `apps/backend` — shared backend used by both storefronts.

Because the two storefront apps were forked from a common base, a fix that
applies to one (e.g. a shared-feature bug) usually needs to be applied to the
other storefront app manually too — check before assuming a one-app fix is
enough.

- `apps/*` for applications, `libs/*` for shared libraries — never `packages/*`.
- All workspace packages are scoped `@rawnaq/*`. Reference other workspace
  packages by name (`@rawnaq/types`), never by relative/deep file path.
- `libs/config/*` holds only tooling configuration (`eslint-config`,
  `typescript-config`, `prettier-config`) — keep it separate from domain
  libraries (`types`, `ui`, `utils`, `i18n`).

## Backend app

`apps/backend` is scaffolding only, shared by both storefronts. Ignore it
entirely unless the user explicitly asks you to work on it — see
`apps/backend/AGENTS.md`.

## Verification discipline

Before treating any edit as done, re-read the current file from disk rather
than relying on memory of its last-known content — other sessions/agents may
edit this repo concurrently. After edits, run `pnpm turbo typecheck lint`
(and `pnpm --filter <app-name> run build` for the storefront app(s) you
touched) before reporting success.
