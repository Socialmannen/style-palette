import { toast as notify, Toaster as SonnerToaster, type ToasterProps } from 'sonner';

/** Use for short, non-blocking feedback after an action. Example: <Toaster /><Button onClick={() => toast.success('Saved')}>Save</Button>. Do not use to replace inline validation or critical confirmations. */
export interface ToastProviderProps extends ToasterProps {}
export function Toaster(props: ToastProviderProps) {
  return <SonnerToaster className="toaster group" position="bottom-right" toastOptions={{ classNames: { toast: 'motion-popover group toast group-[.toaster]:rounded-md group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:shadow-soft', description: 'group-[.toast]:text-muted-foreground', actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground', cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground' } }} {...props} />;
}

export const toast = notify;
