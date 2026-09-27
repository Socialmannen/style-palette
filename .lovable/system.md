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

Maintain named component variants instead of styling one-off copies. Prefer the system Button for actions, Input or Textarea for entries, Switch for binary options, and Badge for status. Every interactive element must remain keyboard-reachable, have a visible focus indicator, and carry an accessible name. Associate input labels explicitly. Do not rely on color alone for meaning. Respect reduced-motion preferences for interface animation. Use native semantic elements and pass through their native properties.

The showcase is a preview-only reference, not part of the consumer library. Consumer-facing primitives and any helpers they rely on stay inside the self-contained design-system directory.
