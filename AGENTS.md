<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
<!-- LOVABLE:END -->

- Keep consumer primitives, shared helpers, and the canonical Tailwind v4 theme under `src/design-system/`; attach copies this self-contained source tree.
- Keep preview-only routes and their data outside the consumer barrel; they demonstrate the library without shipping showcase chrome to attached projects.
