# Generic controls: choose-one, searchable multi-choice, checkbox, table, segmented group, nav links

## Summary

Six new components join the library so other projects stop hand-building these: a choose-one menu, a searchable multi-choice field, a checkbox, a table, a segmented choose-one group, and styled top-menu links with an active state. Everything is worded and structured generically — no project-specific names, no hard-coded Swedish or English strings — so any future project can adopt them as-is and translate the copy itself.

Chosen behaviour (from your answers):
- Multi-choice shows chips for the first selections and collapses the rest into `+N more`.
- Active top-menu link uses a tinted background.
- Choose-one groups render as one segmented field.

## New components

### 1. Select — choose-one menu
For sorting, theme, density, one value out of a list. Built on Radix Select so typing a letter jumps to a match, Escape closes, and focus returns to the trigger.
- Parts: `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel`, `SelectSeparator`.
- Sizes `sm | md | lg` matching Input; placeholder via `placeholder`; disabled state.
- Open/close animation reuses the existing popover motion (no new durations).

### 2. MultiSelect — searchable multi-choice field
For picking several items from a long list. A field that opens a panel with a search box and a checkable list; the field itself keeps the choices visible.
- Props: `options` (`{ value, label, hint? }[]`), `value`, `onValueChange`, `placeholder`, `searchPlaceholder`, `emptyMessage`, `disabled`, `maxChips` (default 3), `showCount`, `loading`.
- Display: chips for the first `maxChips` picks, each removable with its own accessible name, then `+N more`; a trailing count badge when `showCount`.
- Panel: search filters on label, `Select all` / `Clear` in the footer, keyboard navigation, `No matches` state, closed on Escape.
- All copy arrives through props with neutral English fallbacks, so projects supply their own language.

### 3. Checkbox
For turning one or more options on, including bulk selection.
- `checked` / `defaultChecked` / `onCheckedChange`, `indeterminate`, `disabled`, sizes `sm | md`, invalid state.
- Rendered on Radix so it is a real form control with correct ARIA; the tick animates with the fast motion token.

### 4. Table
For statistics and admin lists.
- Parts: `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`.
- `density="compact | comfortable"`, `hoverable` rows, `stickyHeader`, zebra-free and calm by default; a scroll wrapper keeps wide tables usable on phones with the first column readable.
- Sortable header pattern via `TableHead sortable` plus `aria-sort`, so sorting logic stays in the project.

### 5. ToggleGroup — segmented choose-one field
For two to five mutually exclusive options where all must stay visible.
- `type="single"` (default) or `"multiple"`, `variant="default | outline"`, `size="sm | md | lg"`, `fullWidth` for equal-width segments.
- Active segment uses the primary surface; the whole group shares one border and one focus ring so it reads as a single field.

### 6. NavMenu / NavItem — top-menu links
The active page and hover look, made once instead of per project.
- `NavMenu` is the container (horizontal, scrolls on narrow screens); `NavItem` renders a real link with `aria-current="page"` when active.
- Active = tinted background with full-strength text; inactive = muted text that brightens on hover; both keep a visible focus ring.
- Router-agnostic: `active` is a prop and `asChild` accepts the project's own `Link`, so nothing assumes a particular router.
- Also exports `navItemStyles` for projects that already have their own link element.

## Shared rules so projects do not lock in

- Neutral example content only (`Option one`, `Team members`, `Select items`); every user-visible string is a prop.
- No component imports a router, a translation library, or a data source.
- Colour, radius and motion come from tokens only — no new hex values, no local durations.
- Each component is documented with when to use it and the common misuse, so agents pick the right one.

## Showcase and documentation

- New sections in the component overview, added to the searchable list: Select, Multi-select, Checkbox, Table, Toggle group, Nav menu.
- Live specimens for each state: empty, searching, filtered, no matches, chips overflow, indeterminate checkbox, dense and comfortable tables, active nav item in both light and dark.
- Each new component gets usage guidance, one realistic example, and antipatterns in the published catalogue.
- New project rules recorded: use Select for one value out of many, MultiSelect when the list is long or searchable, ToggleGroup only for 2–5 always-visible options, NavItem for top-level navigation instead of hand-styled links, and never nest a checkbox inside a label without wiring it to the control.

## Verification

Checked in the preview at desktop (1280px) and mobile (390px): Select opens and closes with keyboard, MultiSelect filters and removes chips, checkbox reaches indeterminate, table scrolls and keeps its header, segmented group moves the selection, active nav item is announced. Escape, focus return, and `prefers-reduced-motion` are re-checked, and the build log stays clean.

## Technical details

- Files: six new modules under `src/design-system/components/`, all re-exported from the root barrel so attached projects can import them; theme file untouched unless a surface needs a new animation utility.
- Dependencies: already installed and version-pinned (`@radix-ui/react-select`, `react-checkbox`, `react-toggle-group`, `react-navigation-menu`, `cmdk`), so no new packages are added.
- Naming follows the Radix vocabulary agents already guess (`SelectItem`, `ToggleGroupItem`), with `navItemStyles` exported alongside `NavItem` for projects with their own link component.
- The published catalogue is regenerated at release, so the usage guidance is written into the source comments as well to survive a re-publish.

## Out of scope

Multi-step wizard navigation, drag-to-reorder tables, virtualised lists for very large data sets, date/time pickers, and cascading dependent selects. These stay as separate future additions.
