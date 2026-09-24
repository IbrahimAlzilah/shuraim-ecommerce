<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Translations

The `storefront` app renders all UI text through `next-intl` (`useTranslations`/`getTranslations`),
backed by flat key→value JSON files at `apps/storefront/messages/en.json` and
`apps/storefront/messages/ar.json`. A missing key throws in development, so a value
changed only in JSON (not in a component) is easy to miss when grepping `.tsx` files.

Whenever you add or change any user-facing string, in the SAME turn:

1. Use `t("Namespace.key")` in the component — never hardcode raw text.
2. Add that exact key to BOTH `en.json` and `ar.json`, with a real Arabic
   translation in `ar.json` (not a copy of the English text).
3. Verify both JSON files still parse and have the same key set before finishing.
