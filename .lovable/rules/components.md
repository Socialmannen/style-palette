# Components

Component catalog for **Style Palette**. Import all components from `@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1`.

### Accordion

```ts
import { Accordion } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { AccordionContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { AccordionItem } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { AccordionTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Badge } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Button } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { ButtonLink } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Card } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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

### Collapsible

```ts
import { Collapsible } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { CollapsibleContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { CollapsibleTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Dialog } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogClose } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogDescription } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogFooter } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogHeader } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogOverlay } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogTitle } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DialogTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenu } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuCheckboxItem } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuItem } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuLabel } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuSeparator } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuSub } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuSubContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuSubTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { DropdownMenuTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Input } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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

### Popover

```ts
import { Popover } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { PopoverAnchor } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { PopoverContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { PopoverTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Progress } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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

### Sheet

```ts
import { Sheet } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetClose } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetDescription } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetFooter } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetHeader } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetOverlay } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetTitle } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { SheetTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Skeleton } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Switch } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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

### Tabs

```ts
import { Tabs } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { TabsContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { TabsList } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { TabsTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Textarea } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { Toaster } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Mount once for short non-blocking feedback.

**Examples:**

_Default_
```tsx
<Toaster />
```

**Avoid:**

- Do not replace inline validation or critical confirmation.

### Tooltip

```ts
import { Tooltip } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { TooltipContent } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { TooltipProvider } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
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
import { TooltipTrigger } from "@ws-812acc30715dfc5562c6/808b6dd1-c31e-4eb1-acb2-ee755afb07f1"
```

Use for short nonessential helper text.

**Examples:**

_Default_
```tsx
<TooltipProvider><Tooltip>...</Tooltip></TooltipProvider>
```

**Avoid:**

- Do not put essential instructions only in a tooltip.

