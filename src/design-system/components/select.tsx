import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib';

const triggerStyles = cva('motion-content inline-flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-card px-3 text-left text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40 data-[placeholder]:text-muted-foreground', {
  variants: { size: { sm: 'h-8 px-2.5 text-xs', md: 'h-10 px-3 text-sm', lg: 'h-12 px-4 text-base' } },
  defaultVariants: { size: 'md' },
});

/** Use for one value chosen out of a list where the options are known and short, such as sorting or a theme setting. Example: <Select value={sort} onValueChange={setSort}>…</Select>. Do not use when several values must be kept; use MultiSelect. */
export interface SelectProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {}
export function Select(props: SelectProps) { return <SelectPrimitive.Root {...props} />; }

export interface SelectTriggerProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, VariantProps<typeof triggerStyles> {}
export const SelectTrigger = forwardRef<ComponentRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(function SelectTrigger({ className, size, children, ...props }, ref) {
  return <SelectPrimitive.Trigger ref={ref} className={cn(triggerStyles({ size }), className)} {...props}>{children}<SelectPrimitive.Icon asChild><ChevronDown className="pointer-events-none size-4 shrink-0 text-muted-foreground" /></SelectPrimitive.Icon></SelectPrimitive.Trigger>;
});

export interface SelectValueProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Value> {}
export const SelectValue = forwardRef<ComponentRef<typeof SelectPrimitive.Value>, SelectValueProps>(function SelectValue(props, ref) {
  return <SelectPrimitive.Value ref={ref} {...props} />;
});

export interface SelectContentProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {}
export const SelectContent = forwardRef<ComponentRef<typeof SelectPrimitive.Content>, SelectContentProps>(function SelectContent({ className, children, position = 'popper', ...props }, ref) {
  return <SelectPrimitive.Portal><SelectPrimitive.Content ref={ref} position={position} className={cn('motion-popover relative z-50 max-h-72 min-w-[8rem] overflow-hidden rounded-md border border-border bg-card text-card-foreground shadow-soft outline-none', className)} {...props}>
    <SelectPrimitive.ScrollUpButton className="flex h-6 items-center justify-center text-muted-foreground disabled:hidden"><ChevronUp className="size-3.5" /></SelectPrimitive.ScrollUpButton>
    <SelectPrimitive.Viewport className={cn('p-1', position === 'popper' && 'w-full min-w-[var(--radix-select-trigger-width)]')}>{children}</SelectPrimitive.Viewport>
    <SelectPrimitive.ScrollDownButton className="flex h-6 items-center justify-center text-muted-foreground disabled:hidden"><ChevronDown className="size-3.5" /></SelectPrimitive.ScrollDownButton>
  </SelectPrimitive.Content></SelectPrimitive.Portal>;
});

export interface SelectGroupProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Group> {}
export const SelectGroup = forwardRef<ComponentRef<typeof SelectPrimitive.Group>, SelectGroupProps>(function SelectGroup(props, ref) { return <SelectPrimitive.Group ref={ref} {...props} />; });

export interface SelectLabelProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}
export const SelectLabel = forwardRef<ComponentRef<typeof SelectPrimitive.Label>, SelectLabelProps>(function SelectLabel({ className, ...props }, ref) {
  return <SelectPrimitive.Label ref={ref} className={cn('px-2 pb-1 pt-1.5 text-xs font-semibold text-muted-foreground', className)} {...props} />;
});

export interface SelectItemProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}
export const SelectItem = forwardRef<ComponentRef<typeof SelectPrimitive.Item>, SelectItemProps>(function SelectItem({ className, children, ...props }, ref) {
  return <SelectPrimitive.Item ref={ref} className={cn('relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm text-foreground outline-none focus:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-40', className)} {...props}>
    <span className="absolute right-2 flex size-3.5 items-center justify-center" aria-hidden="true"><SelectPrimitive.ItemIndicator><Check className="size-4 text-primary" /></SelectPrimitive.ItemIndicator></span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>;
});

export interface SelectSeparatorProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}
export const SelectSeparator = forwardRef<ComponentRef<typeof SelectPrimitive.Separator>, SelectSeparatorProps>(function SelectSeparator({ className, ...props }, ref) {
  return <SelectPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />;
});
