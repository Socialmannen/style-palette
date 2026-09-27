import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib';
const styles = cva('rounded-lg border border-border bg-card text-card-foreground', { variants: { variant: { default: 'shadow-soft', flat: '', accent: 'border-primary/35 shadow-soft' }, size: { sm: 'p-4', md: 'p-6', lg: 'p-8' } }, defaultVariants: { variant: 'default', size: 'md' } });
export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof styles> {}
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ className, variant, size, ...props }, ref) { return <div ref={ref} className={cn(styles({ variant, size }), className)} {...props} />; });
