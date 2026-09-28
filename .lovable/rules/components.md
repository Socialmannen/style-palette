# Components

Component catalog for **Style Palette**. Import all components from `@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1`.

### Accordion

```ts
import { Accordion } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for grouped disclosures with visible headings.

**Examples:**

_Default_
```tsx
<Accordion type="single" collapsible>...</Accordion>
```

**Avoid:**

- Do not hide critical actions by default.

### AccordionContent

```ts
import { AccordionContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for grouped disclosures with visible headings.

**Examples:**

_Default_
```tsx
<Accordion type="single" collapsible>...</Accordion>
```

**Avoid:**

- Do not hide critical actions by default.

### AccordionItem

```ts
import { AccordionItem } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for grouped disclosures with visible headings.

**Examples:**

_Default_
```tsx
<Accordion type="single" collapsible>...</Accordion>
```

**Avoid:**

- Do not hide critical actions by default.

### AccordionTrigger

```ts
import { AccordionTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for grouped disclosures with visible headings.

**Examples:**

_Default_
```tsx
<Accordion type="single" collapsible>...</Accordion>
```

**Avoid:**

- Do not hide critical actions by default.

### Badge

```ts
import { Badge } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for compact status or category labels.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | primary · secondary · outline · accent · destructive | `primary` |

**Examples:**

_Default_
```tsx
<Badge variant="accent">In review</Badge>
```

**Avoid:**

- Do not use as an interactive control.

### Button

```ts
import { Button } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for an immediate action in the current view.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | primary · secondary · outline · ghost · destructive | `primary` |
| `size` | sm · md · lg · icon | `md` |
| `loading` | boolean | `—` |

**Examples:**

_Default_
```tsx
<Button variant="primary">Save changes</Button>
```

**Avoid:**

- Do not use for navigation; use ButtonLink.

### ButtonLink

```ts
import { ButtonLink } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for navigation that needs button emphasis.

**Examples:**

_Default_
```tsx
<ButtonLink href="/projects" variant="outline">All projects</ButtonLink>
```

**Avoid:**

- Do not use for form submission or actions without a destination.

### Card

```ts
import { Card } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use to group related content on one framed surface.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | default · flat · accent · interactive | `default` |
| `size` | sm · md · lg | `md` |

**Examples:**

_Default_
```tsx
<Card size="md">Project summary</Card>
```

**Avoid:**

- Do not nest cards inside cards.

### Checkbox

```ts
import { Checkbox } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use to turn one option on or off, or to select rows in a list.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | sm · md | `md` |
| `invalid` | boolean | `—` |

**Examples:**

_Row selection_
```tsx
<Checkbox checked={selected} onCheckedChange={toggle}
  aria-label="Select row" />
```

**Avoid:**

- Do not use for a value with three or more meanings; use a choose-one menu.
- Do not build a checkbox from a styled div; this is the real form control with the right ARIA.

### ChoiceDialog

```ts
import { ChoiceDialog } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `trigger` | any | `—` |
| `open` | boolean | `—` |
| `onOpenChange` | function | `—` |
| `title` | string | `—` |
| `description` | string | `—` |
| `options` | any | `—` |
| `type` | single · multiple | `single` |
| `defaultValue` | any | `—` |
| `onConfirm` | function | `—` |
| `minSelected` | number | `1` |
| `confirmLabel` | string | `Confirm` |
| `cancelLabel` | string | `Cancel` |
| `layout` | list · grid | `list` |
| `className` | string | `grid gap-5` |

### Collapsible

```ts
import { Collapsible } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use to reveal one related block inline.

**Examples:**

_Default_
```tsx
<Collapsible>...</Collapsible>
```

**Avoid:**

- Do not use for unrelated page sections.

### CollapsibleContent

```ts
import { CollapsibleContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use to reveal one related block inline.

**Examples:**

_Default_
```tsx
<Collapsible>...</Collapsible>
```

**Avoid:**

- Do not use for unrelated page sections.

### CollapsibleTrigger

```ts
import { CollapsibleTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use to reveal one related block inline.

**Examples:**

_Default_
```tsx
<Collapsible>...</Collapsible>
```

**Avoid:**

- Do not use for unrelated page sections.

### Dialog

```ts
import { Dialog } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogClose

```ts
import { DialogClose } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogContent

```ts
import { DialogContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `hideClose` | boolean | `false` |

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogDescription

```ts
import { DialogDescription } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogFooter

```ts
import { DialogFooter } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogHeader

```ts
import { DialogHeader } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogOverlay

```ts
import { DialogOverlay } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogTitle

```ts
import { DialogTitle } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DialogTrigger

```ts
import { DialogTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for focused decisions or short modal forms.

**Examples:**

_Default_
```tsx
<Dialog><DialogContent><DialogTitle>Edit</DialogTitle></DialogContent></Dialog>
```

**Avoid:**

- Do not use for long workflows or navigation.

### DropdownMenu

```ts
import { DropdownMenu } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for a compact set of contextual actions.

**Examples:**

_Default_
```tsx
<DropdownMenu><DropdownMenuTrigger asChild><Button>More</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Rename</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
```

**Avoid:**

- Do not use as primary navigation or a long selection form.

### DropdownMenuCheckboxItem

```ts
import { DropdownMenuCheckboxItem } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuCheckboxItem as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuCheckboxItem />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuContent

```ts
import { DropdownMenuContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuContent as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuContent />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuItem

```ts
import { DropdownMenuItem } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuItem as documented by its parent component pattern.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `destructive` | boolean | `false` |

**Examples:**

_Default_
```tsx
<DropdownMenuItem />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuLabel

```ts
import { DropdownMenuLabel } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuLabel as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuLabel />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuSeparator

```ts
import { DropdownMenuSeparator } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuSeparator as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuSeparator />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuSub

```ts
import { DropdownMenuSub } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuSub as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuSub />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuSubContent

```ts
import { DropdownMenuSubContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuSubContent as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuSubContent />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuSubTrigger

```ts
import { DropdownMenuSubTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuSubTrigger as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuSubTrigger />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### DropdownMenuTrigger

```ts
import { DropdownMenuTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use DropdownMenuTrigger as documented by its parent component pattern.

**Examples:**

_Default_
```tsx
<DropdownMenuTrigger />
```

**Avoid:**

- Do not remove semantic behavior, keyboard access, or visible focus.

### Input

```ts
import { Input } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for labeled single-line text entry.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `invalid` | boolean | `—` |

**Examples:**

_Default_
```tsx
<Input id="email" type="email" />
```

**Avoid:**

- Do not use without an associated accessible label.

### Lightbox

```ts
import { Lightbox } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use to view a set of images large and page through them. Controls, counter and close button stay in fixed positions regardless of image shape.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `images` | any | `—` |
| `open` | boolean | `—` |
| `defaultOpen` | boolean | `—` |
| `onOpenChange` | function | `—` |
| `index` | number | `—` |
| `defaultIndex` | number | `0` |
| `onIndexChange` | function | `—` |
| `trigger` | any | `—` |
| `title` | string | `Image viewer` |
| `showThumbnails` | boolean | `false` |
| `loop` | boolean | `false` |
| `previousLabel` | string | `Previous image` |
| `nextLabel` | string | `Next image` |
| `closeLabel` | string | `Close viewer` |
| `formatCounter` | function | `—` |
| `className` | string | `motion-overlay fixed inset-0 z-50 bg-background/90` |

**Examples:**

_Gallery_
```tsx
<Lightbox images={images} open={open} onOpenChange={setOpen} index={index} onIndexChange={setIndex} showThumbnails />
```

**Avoid:**

- Do not use for a single decorative image.
- Do not add borders or frames around the image.
- Do not use as an inline carousel on the page.

### MultiSelect

```ts
import { MultiSelect } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use when several values must be picked from a long list and the list is not known, such as universities, areas or queues.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `options` | any | `—` |
| `value` | any | `—` |
| `onValueChange` | function | `—` |
| `placeholder` | string | `Select items` |
| `searchPlaceholder` | string | `Search` |
| `emptyMessage` | string | `No matches` |
| `selectAllLabel` | string | `Select all` |
| `clearLabel` | string | `Clear` |
| `formatOverflow` | function | `—` |
| `maxChips` | number | `3` |
| `showCount` | boolean | `false` |
| `disabled` | boolean | `—` |
| `loading` | boolean | `—` |
| `id` | string | `—` |
| `className` | string | `flex flex-wrap items-center gap-1.5 py-1.5 pl-3 pr-9` |

**Examples:**

_Pick teams_
```tsx
<MultiSelect
  options={teams}
  value={selected}
  onValueChange={setSelected}
  placeholder="Team members"
  searchPlaceholder="Search people"
/>
```

**Avoid:**

- Do not use for one value out of a short list; use Select.
- Do not hardcode visible strings; pass placeholder, searchPlaceholder, emptyMessage and formatOverflow so the project can translate them.
- Do not fetch data inside the component; the project owns the options list.

### NavItem

```ts
import { NavItem } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

A top-level link. Sets aria-current="page" when active and shows a tinted background.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `active` | boolean | `—` |
| `asChild` | boolean | `—` |
| `size` | sm · md | `—` |

**Examples:**

_Active link_
```tsx
<NavItem asChild active={current === "report"}>
  <Link to="/report">Report</Link>
</NavItem>
```

**Avoid:**

- Do not use a nav item for a button that runs an action; use Button.
- Do not signal the current page with a colour alone; the active state also carries aria-current.

### NavMenu

```ts
import { NavMenu } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

The row of top-level links at the top of a page; it scrolls sideways on narrow screens.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `active` | true · false | `false` |
| `size` | sm · md | `md` |

**Examples:**

_Top navigation_
```tsx
<NavMenu aria-label="Main">
  <NavItem asChild active={isHome}><Link to="/">Overview</Link></NavItem>
  <NavItem asChild><Link to="/settings">Settings</Link></NavItem>
</NavMenu>
```

**Avoid:**

- Do not nest actions or menus in it; use DropdownMenu for those.
- Do not leave out aria-label; screen readers announce the region.

### Popover

```ts
import { Popover } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for compact interactive content tied to one trigger.

**Examples:**

_Default_
```tsx
<Popover><PopoverContent>Filters</PopoverContent></Popover>
```

**Avoid:**

- Do not use for destructive confirmation.

### PopoverAnchor

```ts
import { PopoverAnchor } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for compact interactive content tied to one trigger.

**Examples:**

_Default_
```tsx
<Popover><PopoverContent>Filters</PopoverContent></Popover>
```

**Avoid:**

- Do not use for destructive confirmation.

### PopoverContent

```ts
import { PopoverContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for compact interactive content tied to one trigger.

**Examples:**

_Default_
```tsx
<Popover><PopoverContent>Filters</PopoverContent></Popover>
```

**Avoid:**

- Do not use for destructive confirmation.

### PopoverTrigger

```ts
import { PopoverTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for compact interactive content tied to one trigger.

**Examples:**

_Default_
```tsx
<Popover><PopoverContent>Filters</PopoverContent></Popover>
```

**Avoid:**

- Do not use for destructive confirmation.

### Progress

```ts
import { Progress } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for known completion or indeterminate activity.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `indeterminate` | boolean | `false` |

**Examples:**

_Default_
```tsx
<Progress value={64} />
```

**Avoid:**

- Do not use as decorative motion.

### Select

```ts
import { Select } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for one value chosen out of a known list, such as a sort order or a theme setting.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | sm · md · lg | `md` |

**Examples:**

_Sort menu_
```tsx
<Select value={sort} onValueChange={setSort}>
  <SelectTrigger aria-label="Sort by">
    <SelectValue placeholder="Choose sort order" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="newest">Newest first</SelectItem>
    <SelectItem value="name">Name</SelectItem>
  </SelectContent>
</Select>
```

**Avoid:**

- Do not use when the list is searchable or long; use MultiSelect or a combobox pattern.
- Do not leave the trigger without an accessible name; pass aria-label or a wired label.

### SelectContent

```ts
import { SelectContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

The panel that holds the options. It animates with the shared motion tokens.

**Avoid:**

- Do not put forms or buttons inside it; keep it to options.

### SelectGroup

```ts
import { SelectGroup } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Groups related options together with a label.

**Avoid:**

- Do not use a label on its own without a group.

### SelectItem

```ts
import { SelectItem } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

One option in a choose-one menu.

**Avoid:**

- Do not use an empty string value; it is reserved for the cleared state.

### SelectLabel

```ts
import { SelectLabel } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

The heading above a group of options.

### SelectSeparator

```ts
import { SelectSeparator } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

A thin line that separates option groups.

**Avoid:**

- Do not add a separator between every option.

### SelectTrigger

```ts
import { SelectTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

The button-like field that opens the choose-one menu. Give it an accessible name.

**Avoid:**

- Do not use a SelectTrigger without a SelectValue so the chosen value is shown.

### SelectValue

```ts
import { SelectValue } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Shows the current value inside the trigger and a placeholder while nothing is chosen.

**Avoid:**

- Do not render placeholder text as a SelectItem; it would become a selectable option.

### Sheet

```ts
import { Sheet } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `side` | top · bottom · left · right | `right` |

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetClose

```ts
import { SheetClose } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetContent

```ts
import { SheetContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `hideClose` | boolean | `false` |

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetDescription

```ts
import { SheetDescription } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetFooter

```ts
import { SheetFooter } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetHeader

```ts
import { SheetHeader } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetOverlay

```ts
import { SheetOverlay } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetTitle

```ts
import { SheetTitle } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### SheetTrigger

```ts
import { SheetTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for supporting work that slides from a page edge.

**Examples:**

_Default_
```tsx
<Sheet><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>
```

**Avoid:**

- Do not use when content deserves its own page.

### Skeleton

```ts
import { Skeleton } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use as a temporary loading placeholder.

**Examples:**

_Default_
```tsx
<Skeleton className="h-4 w-32" />
```

**Avoid:**

- Do not use for errors or empty states.

### Switch

```ts
import { Switch } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for a binary setting that takes effect immediately.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | sm · md | `md` |

**Examples:**

_Default_
```tsx
<Switch id="alerts" defaultChecked />
```

**Avoid:**

- Do not use for multi-option choices or submit actions.

### Table

```ts
import { Table } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for structured rows of comparable values, such as statistics or admin listings.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `density` | compact · comfortable | `comfortable` |
| `hoverable` | boolean | `true` |
| `stickyHeader` | boolean | `false` |

**Examples:**

_Sortable table_
```tsx
<Table hoverable stickyHeader>
  <TableHeader>
    <TableRow>
      <TableHead sortable sortDirection="ascending" onSort={toggleSort}>Name</TableHead>
      <TableHead>Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>{rows.map(...)}</TableBody>
</Table>
```

**Avoid:**

- Do not use a table for layout or for cards of unrelated content.
- Do not put the sorting logic in the component; the project sorts and reports sortDirection.

### TableBody

```ts
import { TableBody } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

### TableCaption

```ts
import { TableCaption } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

### TableCell

```ts
import { TableCell } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

One value in a row. Use align end for numbers so they line up.

### TableEmptyState

```ts
import { TableEmptyState } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Shown below the header when no rows match, so the header stays visible.

**Avoid:**

- Do not replace the whole table with the empty state; keep the header so context is not lost.

### TableFooter

```ts
import { TableFooter } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

### TableHead

```ts
import { TableHead } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

A column header. When sortable it renders a button and sets aria-sort.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `sortable` | boolean | `—` |
| `sortDirection` | asc · desc · none | `none` |
| `onSort` | function | `—` |

**Avoid:**

- Do not make a column sortable without showing which direction is active.

### TableHeader

```ts
import { TableHeader } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

### TableRow

```ts
import { TableRow } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

### Tabs

```ts
import { Tabs } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for sibling views at the same hierarchy.

**Examples:**

_Default_
```tsx
<Tabs defaultValue="overview">...</Tabs>
```

**Avoid:**

- Do not use as primary site navigation.

### TabsContent

```ts
import { TabsContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for sibling views at the same hierarchy.

**Examples:**

_Default_
```tsx
<Tabs defaultValue="overview">...</Tabs>
```

**Avoid:**

- Do not use as primary site navigation.

### TabsList

```ts
import { TabsList } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for sibling views at the same hierarchy.

**Examples:**

_Default_
```tsx
<Tabs defaultValue="overview">...</Tabs>
```

**Avoid:**

- Do not use as primary site navigation.

### TabsTrigger

```ts
import { TabsTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for sibling views at the same hierarchy.

**Examples:**

_Default_
```tsx
<Tabs defaultValue="overview">...</Tabs>
```

**Avoid:**

- Do not use as primary site navigation.

### Textarea

```ts
import { Textarea } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for labeled multi-line writing and notes.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `invalid` | boolean | `—` |

**Examples:**

_Default_
```tsx
<Textarea id="brief" placeholder="Project brief" />
```

**Avoid:**

- Do not use when a short single-line value fits Input.

### Toaster

```ts
import { Toaster } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Mount once for short non-blocking feedback.

**Examples:**

_Default_
```tsx
<Toaster />
```

**Avoid:**

- Do not replace inline validation or critical confirmation.

### ToggleGroup

```ts
import { ToggleGroup } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for two to five mutually exclusive options that should be compared at a glance, such as Off / Preferred / Required.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `fullWidth` | boolean | `—` |

**Examples:**

_Requirement level_
```tsx
<ToggleGroup type="single" value={mode} onValueChange={setMode} fullWidth aria-label="Requirement">
  <ToggleGroupItem value="off">Off</ToggleGroupItem>
  <ToggleGroupItem value="preferred">Preferred</ToggleGroupItem>
  <ToggleGroupItem value="required">Required</ToggleGroupItem>
</ToggleGroup>
```

**Avoid:**

- Do not use for more than five options; use a choose-one menu.
- Do not use type multiple when only one option may be active.
- Do not build a segmented control from plain Buttons; use this component.

### ToggleGroupItem

```ts
import { ToggleGroupItem } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

One segment in a toggle group.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `fullWidth` | boolean | `—` |

**Avoid:**

- Do not use a segment for navigation between pages.

### Tooltip

```ts
import { Tooltip } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for short nonessential helper text.

**Examples:**

_Default_
```tsx
<TooltipProvider><Tooltip>...</Tooltip></TooltipProvider>
```

**Avoid:**

- Do not put essential instructions only in a tooltip.

### TooltipContent

```ts
import { TooltipContent } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for short nonessential helper text.

**Examples:**

_Default_
```tsx
<TooltipProvider><Tooltip>...</Tooltip></TooltipProvider>
```

**Avoid:**

- Do not put essential instructions only in a tooltip.

### TooltipProvider

```ts
import { TooltipProvider } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for short nonessential helper text.

**Examples:**

_Default_
```tsx
<TooltipProvider><Tooltip>...</Tooltip></TooltipProvider>
```

**Avoid:**

- Do not put essential instructions only in a tooltip.

### TooltipTrigger

```ts
import { TooltipTrigger } from "@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for short nonessential helper text.

**Examples:**

_Default_
```tsx
<TooltipProvider><Tooltip>...</Tooltip></TooltipProvider>
```

**Avoid:**

- Do not put essential instructions only in a tooltip.

