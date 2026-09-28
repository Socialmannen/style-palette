# Style Palette — Guidelines

## Components

The design system exports these components — import them from `@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1` and compose them before building anything from scratch:

`AccordionContent`, `AccordionItem`, `AccordionTrigger`, `Accordion`, `Badge`, `ButtonLink`, `Button`, `Card`, `Checkbox`, `ChoiceDialog`, `CollapsibleContent`, `CollapsibleTrigger`, `Collapsible`, `DialogClose`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogOverlay`, `DialogTitle`, `DialogTrigger`, `Dialog`, `DropdownMenuCheckboxItem`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuSubContent`, `DropdownMenuSubTrigger`, `DropdownMenuSub`, `DropdownMenuTrigger`, `DropdownMenu`, `Input`, `Lightbox`, `MultiSelect`, `NavItem`, `NavMenu`, `PopoverAnchor`, `PopoverContent`, `PopoverTrigger`, `Popover`, `Progress`, `SelectContent`, `SelectGroup`, `SelectItem`, `SelectLabel`, `SelectSeparator`, `SelectTrigger`, `SelectValue`, `Select`, `SheetClose`, `SheetContent`, `SheetDescription`, `SheetFooter`, `SheetHeader`, `SheetOverlay`, `SheetTitle`, `SheetTrigger`, `Sheet`, `Skeleton`, `Switch`, `TableBody`, `TableCaption`, `TableCell`, `TableEmptyState`, `TableFooter`, `TableHead`, `TableHeader`, `TableRow`, `Table`, `TabsContent`, `TabsList`, `TabsTrigger`, `Tabs`, `Textarea`, `Toaster`, `ToggleGroupItem`, `ToggleGroup`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger`, `Tooltip`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1/design-system/styles/theme.css` (source — preferred import)
- `@ws-aab1cf40a2c2aac8fc7d/808b6dd1-c31e-4eb1-acb2-ee755afb07f1/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

