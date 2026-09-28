# Refined Modern Tech

Build interfaces that are precise, calm, and useful. The visual identity is shared across projects; the accent palette changes without changing component shape or typography.

## Foundation

- Use Outfit for display text and headings, Figtree for all interface and body text. Both families are bundled with the canonical theme stylesheet.
- Use the balanced corner scale from the theme: compact controls use `rounded-md`, framed surfaces use `rounded-lg`, and small labels use `rounded-sm`.
- Use semantic color roles, not raw color values. `bg-primary text-primary-foreground` expresses an action; `bg-card text-card-foreground` expresses a raised surface. See the generated design-tokens reference for the full set.
- Keep surfaces restrained: fine borders, quiet shadows, and generous breathing room. Avoid decorative gradients, glowing ornaments, or gratuitous blur.
- Accent colors are the only project-level variation. Select a palette by putting `data-palette="cobalt"`, `emerald`, `amber`, or `violet` on a parent element. Toggle `.dark` on that same element for dark mode. The default palette is cobalt.

## Using the library

Import the canonical `src/design-system/styles/theme.css` after Tailwind v4's CSS entry. This file contains the fonts, semantic CSS variables, and Tailwind `@theme inline` mappings, so consumers do not need to recreate mappings. Import components from the attached library's barrel, or from its component paths.

```tsx
import { Button, Card, Input } from '@/design-system/refined-modern-tech';

<Card>
  <label htmlFor="project-name" className="text-sm font-medium">Project name</label>
  <Input id="project-name" name="project-name" />
  <Button type="submit">Create project</Button>
</Card>
```

Maintain named component variants instead of styling one-off copies. Prefer the system Button for actions, Input or Textarea for entries, Switch for binary options, and Badge for status. Every interactive element must remain keyboard-reachable, have a visible focus indicator, and carry an accessible name. Associate input labels explicitly. Do not rely on color alone for meaning. Use native semantic elements and pass through their native properties.

## Motion

Motion is calm, functional, and consistent. Never introduce raw durations, one-off easing curves, spring effects, or decorative looping animation in component code. Use the motion tokens and utilities from the canonical theme: `motion-fast`, `motion-standard`, `motion-slow`, `motion-content`, `motion-press`, `motion-popover`, and the component-specific motion utilities.

Set `data-motion="subtle"` on the root for the default restrained movement, `expressive` for slightly more distance, or `none` to remove nonessential movement. Set `data-motion-speed="slow"`, `normal`, or `fast` independently; `normal` is the default. The system-level `prefers-reduced-motion` rule always takes priority and reduces transitions to immediate state changes. Do not override it.

Use Sheet for edge-based supporting work, Dialog for focused decisions, Accordion or Collapsible for disclosure, Popover for compact interactive content, Tooltip only for nonessential helper text, Tabs for sibling views, Toast for non-blocking feedback, Skeleton for loading placeholders, and Progress for task completion. Preserve focus trapping, Escape handling, outside-click dismissal, restored focus, and accessible titles supplied by the primitives.

Use ButtonLink for navigation styled like a Button; its `variant` and `size` match Button. Do not nest a Button inside a link. Use DropdownMenu for contextual actions: pair DropdownMenuTrigger with `asChild` and a Button, then place labeled DropdownMenuItem, DropdownMenuCheckboxItem, separators, or nested submenus inside DropdownMenuContent. Do not use a menu item for navigation unless rendered as a semantic link through `asChild`.

The showcase is a preview-only reference, not part of the consumer library. Consumer-facing primitives and any helpers they rely on stay inside the self-contained design-system directory.
