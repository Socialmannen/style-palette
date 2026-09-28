import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib';

const groupStyles = cva('motion-content inline-flex items-center gap-1 rounded-md border border-input p-1 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background', {
  variants: { variant: { default: 'bg-muted', outline: 'bg-card' }, fullWidth: { true: 'flex w-full' } },
  defaultVariants: { variant: 'default' },
});
const itemStyles = cva('motion-press inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm font-medium text-muted-foreground outline-none hover:text-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm disabled:pointer-events-none disabled:opacity-40', {
  variants: { size: { sm: 'h-6 px-2 text-xs', md: 'h-7 px-3 text-sm', lg: 'h-9 px-4 text-base' }, fullWidth: { true: 'flex-1' } },
  defaultVariants: { size: 'md' },
});

/** Use for two to five mutually exclusive options that should all stay visible, such as a view mode. Example: <ToggleGroup type="single" value={mode} onValueChange={setMode}>…</ToggleGroup>. Do not use when the list is long or the choice is not compared side by side; use Select. */
export type ToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof groupStyles> & { fullWidth?: boolean };
export const ToggleGroup = forwardRef<ComponentRef<typeof ToggleGroupPrimitive.Root>, ToggleGroupProps>(function ToggleGroup({ className, variant, fullWidth, children, ...props }, ref) {
  return <ToggleGroupPrimitive.Root ref={ref} className={cn(groupStyles({ variant, fullWidth }), className)} {...props}>{children}</ToggleGroupPrimitive.Root>;
});

export type ToggleGroupItemProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & Pick<VariantProps<typeof itemStyles>, 'size'> & { fullWidth?: boolean };
export const ToggleGroupItem = forwardRef<ComponentRef<typeof ToggleGroupPrimitive.Item>, ToggleGroupItemProps>(function ToggleGroupItem({ className, size, fullWidth, ...props }, ref) {
  return <ToggleGroupPrimitive.Item ref={ref} className={cn(itemStyles({ size, fullWidth }), className)} {...props} />;
});
