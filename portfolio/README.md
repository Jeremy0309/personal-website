# Alex Morgan — sample photography portfolio

Built with Next.js, React, Tailwind CSS and the requested shadcn preset `b5rR41Mtnc`. The original, unmodified template is commit `e8e36e4` on main; the portfolio is a separate feature commit.

## Run and validate

From this directory, with Node.js 22+ and pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Run `pnpm lint`, `pnpm typecheck` and `pnpm build` before delivery. Use `pnpm start` for the production server after building.

## Before publishing

[CONTENT.md](CONTENT.md) lists every photo to replace, the identity/contact edits and illustrative rates. The site intentionally disables search indexing while it contains sample content. No deployment is configured or performed.

The gallery has category filtering and a keyboard-accessible image viewer. Pricing follows the portfolio and introduction; email links lead directly to enquiries with no form or stored personal data. Typography pairs Cormorant Garamond and Manrope, self-hosted by Next.js after the initial font download at build time.
