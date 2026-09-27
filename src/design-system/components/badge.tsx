import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib';
const styles = cva('inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-semibold', { variants: { variant: { primary: 'bg-primary text-primary-foreground', secondary: 'bg-secondary text-secondary-foreground', outline: 'border border-border text-foreground', accent: 'bg-accent text-accent-foreground', destructive: 'bg-destructive text-destructive-foreground' } }, defaultVariants: { variant: 'primary' } });
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof styles> {}
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ className, variant, ...props }, ref) { return <span ref={ref} className={cn(styles({ variant }), className)} {...props} />; });
