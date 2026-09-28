import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef, type HTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '../lib';

/** Use for contextual panels that slide from an edge while keeping users in the current workflow. Example: <Sheet><SheetTrigger asChild><Button>Filters</Button></SheetTrigger><SheetContent side="right"><SheetTitle>Filters</SheetTitle></SheetContent></Sheet>. Do not use when the content deserves its own page. */
export interface SheetProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {}
export function Sheet(props: SheetProps) { return <DialogPrimitive.Root {...props} />; }

export interface SheetTriggerProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}
export const SheetTrigger = forwardRef<ComponentRef<typeof DialogPrimitive.Trigger>, SheetTriggerProps>(function SheetTrigger(props, ref) { return <DialogPrimitive.Trigger ref={ref} {...props} />; });

export interface SheetCloseProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {}
export const SheetClose = forwardRef<ComponentRef<typeof DialogPrimitive.Close>, SheetCloseProps>(function SheetClose(props, ref) { return <DialogPrimitive.Close ref={ref} {...props} />; });

export interface SheetOverlayProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}
export const SheetOverlay = forwardRef<ComponentRef<typeof DialogPrimitive.Overlay>, SheetOverlayProps>(function SheetOverlay({ className, ...props }, ref) {
  return <DialogPrimitive.Overlay ref={ref} className={cn('motion-overlay fixed inset-0 z-50 bg-foreground/40', className)} {...props} />;
});

const sheetStyles = cva('motion-sheet fixed z-50 flex flex-col gap-5 border-border bg-card p-6 text-card-foreground shadow-soft outline-none', {
  variants: {
    side: {
      top: 'inset-x-0 top-0 max-h-[85vh] border-b',
      bottom: 'inset-x-0 bottom-0 max-h-[85vh] border-t',
      left: 'inset-y-0 left-0 h-full w-[min(24rem,calc(100vw-2rem))] border-r',
      right: 'inset-y-0 right-0 h-full w-[min(24rem,calc(100vw-2rem))] border-l',
    },
  },
  defaultVariants: { side: 'right' },
});

export interface SheetContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetStyles> { hideClose?: boolean }
export const SheetContent = forwardRef<ComponentRef<typeof DialogPrimitive.Content>, SheetContentProps>(function SheetContent({ side = 'right', className, children, hideClose = false, ...props }, ref) {
  return <DialogPrimitive.Portal><SheetOverlay /><DialogPrimitive.Content ref={ref} data-side={side} className={cn(sheetStyles({ side }), className)} {...props}>{children}{!hideClose && <DialogPrimitive.Close className="motion-content absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" aria-label="Close panel"><X className="size-4" aria-hidden="true" /></DialogPrimitive.Close>}</DialogPrimitive.Content></DialogPrimitive.Portal>;
});

export interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>(function SheetHeader({ className, ...props }, ref) { return <div ref={ref} className={cn('flex flex-col gap-2 text-left', className)} {...props} />; });

export interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const SheetFooter = forwardRef<HTMLDivElement, SheetFooterProps>(function SheetFooter({ className, ...props }, ref) { return <div ref={ref} className={cn('mt-auto flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />; });

export interface SheetTitleProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}
export const SheetTitle = forwardRef<ComponentRef<typeof DialogPrimitive.Title>, SheetTitleProps>(function SheetTitle({ className, ...props }, ref) { return <DialogPrimitive.Title ref={ref} className={cn('font-display text-xl font-semibold text-foreground', className)} {...props} />; });

export interface SheetDescriptionProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}
export const SheetDescription = forwardRef<ComponentRef<typeof DialogPrimitive.Description>, SheetDescriptionProps>(function SheetDescription({ className, ...props }, ref) { return <DialogPrimitive.Description ref={ref} className={cn('text-sm leading-relaxed text-muted-foreground', className)} {...props} />; });
