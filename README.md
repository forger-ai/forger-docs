# Forger Docs

`forger-docs` is the canonical source for technical Forger documentation.

The documentation is bilingual from v1:

- English source lives in `content/en/`.
- Spanish source lives in `content/es/`.

Generated snapshots are consumed by:

- Forger Desktop for bundled offline documentation.
- The Astro public site for `/docs` and `/es/docs`.

Do not edit generated snapshots in consuming repositories. Edit the Markdown source here, then run:

```sh
npm run build
```

Consumers can export the generated bundle to an explicit path:

```sh
npm run export -- --out ../some-consumer/src/data/forger-docs.generated.ts
```

The export command only writes to the path passed with `--out`; it does not know about local workspace layout or consumer repositories.

## Content Rules

- Every English document must have a matching Spanish document with the same slug.
- Every document must include frontmatter with `title`, `description`, `section`, `order`, `status`, `owner`, and `sources`.
- Capability claims must be grounded in current repo evidence.
- Mark experimental, partial, or planned capabilities explicitly.
- Keep internal details useful for technical readers, but do not present internal commands as normal end-user steps.
