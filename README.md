# Photographer portfolio

A Next.js photography portfolio built on the requested shadcn preset. The untouched generated template is preserved in commit `e8e36e4`; portfolio changes live in the feature PR. The generator created the application in `portfolio/` after a project-name prompt.

## Local development

Use Node.js 22+ and pnpm (validated with Node 24 and pnpm 12).

```sh
cd portfolio
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Validate with `pnpm lint`, `pnpm typecheck`, and `pnpm build`. Production runs with `pnpm start` after building. If configuring hosting later, set its root directory to `portfolio`. No deployment is included in this change.

See [the replacement checklist](portfolio/CONTENT.md) before publishing. All identity, email, biography and prices are sample content. Search indexing is disabled until these are replaced.
