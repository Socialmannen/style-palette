import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '../lib';

/** Use for a compact set of contextual actions. Example: <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline">More</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem onSelect={save}>Save</DropdownMenuItem></DropdownMenuContent></DropdownMenu>. Do not use for primary navigation or a long selection form. */
export interface DropdownMenuProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.Root> {}
export function DropdownMenu(props: DropdownMenuProps) { return <DropdownPrimitive.Root {...props} />; }

export interface DropdownMenuTriggerProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger> {}
export const DropdownMenuTrigger = forwardRef<ComponentRef<typeof DropdownPrimitive.Trigger>, DropdownMenuTriggerProps>(function DropdownMenuTrigger(props, ref) {
  return <DropdownPrimitive.Trigger ref={ref} {...props} />;
});

export interface DropdownMenuContentProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> {}
export const DropdownMenuContent = forwardRef<ComponentRef<typeof DropdownPrimitive.Content>, DropdownMenuContentProps>(function DropdownMenuContent({ className, sideOffset = 6, ...props }, ref) {
  return <DropdownPrimitive.Portal><DropdownPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn('motion-popover z-50 min-w-44 rounded-md border border-border bg-card p-1 text-card-foreground shadow-soft outline-none', className)} {...props} /></DropdownPrimitive.Portal>;
});

export interface DropdownMenuItemProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> { destructive?: boolean }
export const DropdownMenuItem = forwardRef<ComponentRef<typeof DropdownPrimitive.Item>, DropdownMenuItemProps>(function DropdownMenuItem({ className, destructive = false, ...props }, ref) {
  return <DropdownPrimitive.Item ref={ref} className={cn('motion-content relative flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40', destructive && 'text-destructive focus:bg-destructive/10 focus:text-destructive', className)} {...props} />;
});

export interface DropdownMenuCheckboxItemProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem> {}
export const DropdownMenuCheckboxItem = forwardRef<ComponentRef<typeof DropdownPrimitive.CheckboxItem>, DropdownMenuCheckboxItemProps>(function DropdownMenuCheckboxItem({ className, children, ...props }, ref) {
  return <DropdownPrimitive.CheckboxItem ref={ref} className={cn('motion-content relative flex min-h-9 cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40', className)} {...props}><span className="absolute left-2.5 flex size-4 items-center justify-center"><DropdownPrimitive.ItemIndicator><Check className="size-3.5" /></DropdownPrimitive.ItemIndicator></span>{children}</DropdownPrimitive.CheckboxItem>;
});

export interface DropdownMenuLabelProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> {}
export const DropdownMenuLabel = forwardRef<ComponentRef<typeof DropdownPrimitive.Label>, DropdownMenuLabelProps>(function DropdownMenuLabel({ className, ...props }, ref) {
  return <DropdownPrimitive.Label ref={ref} className={cn('px-2.5 py-1.5 text-xs font-semibold text-muted-foreground', className)} {...props} />;
});

export interface DropdownMenuSeparatorProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator> {}
export const DropdownMenuSeparator = forwardRef<ComponentRef<typeof DropdownPrimitive.Separator>, DropdownMenuSeparatorProps>(function DropdownMenuSeparator({ className, ...props }, ref) {
  return <DropdownPrimitive.Separator ref={ref} className={cn('my-1 h-px bg-border', className)} {...props} />;
});

export interface DropdownMenuSubProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.Sub> {}
export function DropdownMenuSub(props: DropdownMenuSubProps) { return <DropdownPrimitive.Sub {...props} />; }

export interface DropdownMenuSubTriggerProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> {}
export const DropdownMenuSubTrigger = forwardRef<ComponentRef<typeof DropdownPrimitive.SubTrigger>, DropdownMenuSubTriggerProps>(function DropdownMenuSubTrigger({ className, children, ...props }, ref) {
  return <DropdownPrimitive.SubTrigger ref={ref} className={cn('motion-content flex min-h-9 cursor-default select-none items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40 [&[data-state=open]>svg]:translate-x-0.5', className)} {...props}>{children}<ChevronRight className="ml-auto size-4 transition-transform duration-motion-normal ease-motion-standard" /></DropdownPrimitive.SubTrigger>;
});

export interface DropdownMenuSubContentProps extends ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent> {}
export const DropdownMenuSubContent = forwardRef<ComponentRef<typeof DropdownPrimitive.SubContent>, DropdownMenuSubContentProps>(function DropdownMenuSubContent({ className, sideOffset = 6, ...props }, ref) {
  return <DropdownPrimitive.SubContent ref={ref} sideOffset={sideOffset} className={cn('motion-popover z-50 min-w-44 rounded-md border border-border bg-card p-1 text-card-foreground shadow-soft outline-none', className)} {...props} />;
});
