import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib';
export const buttonStyles = cva('inline-flex shrink-0 items-center justify-center gap-2 font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40', {
  variants: { variant: { primary: 'bg-primary text-primary-foreground hover:bg-primary/90', secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/75', outline: 'border border-border bg-card text-foreground hover:bg-muted', ghost: 'text-foreground hover:bg-muted', destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90' }, size: { sm: 'h-8 px-3 text-xs', md: 'h-10 px-4 text-sm', lg: 'h-12 px-6 text-base', icon: 'size-10' } }, defaultVariants: { variant: 'primary', size: 'md' }
});
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> { loading?: boolean }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, size, loading, disabled, children, ...props }, ref) {
  return <button ref={ref} className={cn(buttonStyles({ variant, size }), className)} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>{loading && <span className="size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />}{children}</button>;
});
