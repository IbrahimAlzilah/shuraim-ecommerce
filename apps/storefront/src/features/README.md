# Feature Slices

Each `features/[feature-name]/` folder is a self-contained domain module with
the anatomy: `api/`, `components/`, `hooks/`, `types/`, `utils/`, `index.ts`.

## Rules

- **State management:** [Zustand](https://github.com/pmndrs/zustand) is the
  standard for feature-level state stores (e.g. `hooks/useCartStore.ts`).
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

## Not yet built

`api/` functions in each feature will call a shared HTTP client that doesn't
exist yet (`lib/api-client.ts`). Add it when the first feature needs real
data fetching — don't scaffold it ahead of that need.
