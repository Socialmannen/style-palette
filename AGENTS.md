<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
<!-- LOVABLE:END -->

- Keep consumer primitives, shared helpers, and the canonical Tailwind v4 theme under `src/design-system/`; attach copies this self-contained source tree.
- Keep preview-only routes and their data outside the consumer barrel; they demonstrate the library without shipping showcase chrome to attached projects.
- Share Button's CVA styles with ButtonLink so navigation and actions retain identical variants across consumer projects.
- Use the motion tokens and utilities from the canonical theme; never introduce local durations or easing curves in consumer components.
- Keep `data-motion` and `data-motion-speed` independent so projects can choose movement level and consistent global speed.
- Preserve Radix focus management, Escape handling, outside-click dismissal, and restored focus in Dialog and Sheet.
- Keep Dialog centering in the motion-dialog utility's independent translate property, not animation transforms, so animation and layout never center it twice.
- Choose the selection control by the shape of the choice: Select for one value out of a list, MultiSelect when several values are kept or the list needs search, ToggleGroup only for two to five options that should stay visible side by side.
- Use NavMenu and NavItem for top-level page links so the active page keeps the same look across projects; pass the project's own link element through `asChild` and never hand-style a nav row.
- Use the Table primitives for comparable rows, and TableEmptyState when a list has no matching rows; never nest a Card inside a cell to build layout.
- Keep every user-visible string in a new component a prop with a neutral English default so no project language is baked into the library.
- Wire every Checkbox to a real label or an accessible name, and use `indeterminate` for a group where only some members are selected.
- Use ChoiceDialog for a focused pick-and-confirm step (single or multiple); keep inline filters in Select, MultiSelect or ToggleGroup. Why: one confirm pattern across projects.
