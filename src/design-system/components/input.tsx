import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../lib';

/** Use for single-line text entry with semantic labels and validation. Example: <Input id="email" type="email" invalid={hasError} />. Do not use as a search result, menu item, or visual-only label. */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { invalid?: boolean }
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, invalid, ...props }, ref) {
  return <input ref={ref} aria-invalid={invalid || undefined} className={cn('motion-content h-10 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:border-destructive aria-invalid:ring-destructive', className)} {...props} />;
});
