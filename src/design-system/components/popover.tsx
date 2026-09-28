import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../lib';

/** Use for compact interactive content that is tied to one trigger. Example: <Popover><PopoverTrigger asChild><Button>Filters</Button></PopoverTrigger><PopoverContent>...</PopoverContent></Popover>. Do not use for destructive confirmations; use Dialog. */
export interface PopoverProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}
export function Popover(props: PopoverProps) { return <PopoverPrimitive.Root {...props} />; }

export interface PopoverTriggerProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}
export const PopoverTrigger = forwardRef<ComponentRef<typeof PopoverPrimitive.Trigger>, PopoverTriggerProps>(function PopoverTrigger(props, ref) { return <PopoverPrimitive.Trigger ref={ref} {...props} />; });

export interface PopoverAnchorProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor> {}
export const PopoverAnchor = forwardRef<ComponentRef<typeof PopoverPrimitive.Anchor>, PopoverAnchorProps>(function PopoverAnchor(props, ref) { return <PopoverPrimitive.Anchor ref={ref} {...props} />; });

export interface PopoverContentProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}
export const PopoverContent = forwardRef<ComponentRef<typeof PopoverPrimitive.Content>, PopoverContentProps>(function PopoverContent({ className, align = 'center', sideOffset = 8, ...props }, ref) {
  return <PopoverPrimitive.Portal><PopoverPrimitive.Content ref={ref} align={align} sideOffset={sideOffset} className={cn('motion-popover z-50 w-72 rounded-md border border-border bg-card p-4 text-card-foreground shadow-soft outline-none', className)} {...props} /></PopoverPrimitive.Portal>;
});
