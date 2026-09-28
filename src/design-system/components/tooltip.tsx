import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../lib';

/** Use for short helper text on an already understandable control. Example: <TooltipProvider><Tooltip><TooltipTrigger asChild><Button aria-label="Copy">...</Button></TooltipTrigger><TooltipContent>Copy</TooltipContent></Tooltip></TooltipProvider>. Do not put essential instructions only in a tooltip. */
export interface TooltipProviderProps extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> {}
export function TooltipProvider({ delayDuration = 350, skipDelayDuration = 120, ...props }: TooltipProviderProps) { return <TooltipPrimitive.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration} {...props} />; }

export interface TooltipProps extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {}
export function Tooltip(props: TooltipProps) { return <TooltipPrimitive.Root {...props} />; }

export interface TooltipTriggerProps extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> {}
export const TooltipTrigger = forwardRef<ComponentRef<typeof TooltipPrimitive.Trigger>, TooltipTriggerProps>(function TooltipTrigger(props, ref) { return <TooltipPrimitive.Trigger ref={ref} {...props} />; });

export interface TooltipContentProps extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}
export const TooltipContent = forwardRef<ComponentRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(function TooltipContent({ className, sideOffset = 6, ...props }, ref) {
  return <TooltipPrimitive.Portal><TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn('motion-popover z-50 max-w-64 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-soft outline-none', className)} {...props} /></TooltipPrimitive.Portal>;
});
