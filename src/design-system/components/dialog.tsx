import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef, type HTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../lib';

/** Use for focused decisions or short forms that must interrupt the current view. Example: <Dialog><DialogTrigger asChild><Button>Edit</Button></DialogTrigger><DialogContent><DialogTitle>Edit project</DialogTitle></DialogContent></Dialog>. Do not use for page-level navigation or long workflows. */
export interface DialogProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {}
export function Dialog(props: DialogProps) { return <DialogPrimitive.Root {...props} />; }

export interface DialogTriggerProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}
export const DialogTrigger = forwardRef<ComponentRef<typeof DialogPrimitive.Trigger>, DialogTriggerProps>(function DialogTrigger(props, ref) { return <DialogPrimitive.Trigger ref={ref} {...props} />; });

export interface DialogCloseProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {}
export const DialogClose = forwardRef<ComponentRef<typeof DialogPrimitive.Close>, DialogCloseProps>(function DialogClose(props, ref) { return <DialogPrimitive.Close ref={ref} {...props} />; });

export interface DialogOverlayProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}
export const DialogOverlay = forwardRef<ComponentRef<typeof DialogPrimitive.Overlay>, DialogOverlayProps>(function DialogOverlay({ className, ...props }, ref) {
  return <DialogPrimitive.Overlay ref={ref} className={cn('motion-overlay fixed inset-0 z-50 bg-foreground/40', className)} {...props} />;
});

export interface DialogContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> { hideClose?: boolean }
export const DialogContent = forwardRef<ComponentRef<typeof DialogPrimitive.Content>, DialogContentProps>(function DialogContent({ className, children, hideClose = false, ...props }, ref) {
  return <DialogPrimitive.Portal><DialogOverlay /><DialogPrimitive.Content ref={ref} className={cn('motion-dialog fixed left-1/2 top-1/2 z-50 grid w-[calc(100vw-2rem)] max-w-lg gap-5 rounded-lg border border-border bg-card p-6 text-card-foreground shadow-soft outline-none', className)} {...props}>{children}{!hideClose && <DialogPrimitive.Close className="motion-content absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card" aria-label="Close dialog"><X className="size-4" aria-hidden="true" /></DialogPrimitive.Close>}</DialogPrimitive.Content></DialogPrimitive.Portal>;
});

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(function DialogHeader({ className, ...props }, ref) { return <div ref={ref} className={cn('flex flex-col gap-2 text-left', className)} {...props} />; });

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(function DialogFooter({ className, ...props }, ref) { return <div ref={ref} className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />; });

export interface DialogTitleProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}
export const DialogTitle = forwardRef<ComponentRef<typeof DialogPrimitive.Title>, DialogTitleProps>(function DialogTitle({ className, ...props }, ref) { return <DialogPrimitive.Title ref={ref} className={cn('font-display text-xl font-semibold text-foreground', className)} {...props} />; });

export interface DialogDescriptionProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}
export const DialogDescription = forwardRef<ComponentRef<typeof DialogPrimitive.Description>, DialogDescriptionProps>(function DialogDescription({ className, ...props }, ref) { return <DialogPrimitive.Description ref={ref} className={cn('text-sm leading-relaxed text-muted-foreground', className)} {...props} />; });
