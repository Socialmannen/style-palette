import { forwardRef, type AnchorHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../lib';
import { buttonStyles } from './button';

/** Use for navigation that should carry the same emphasis as an action button. Example: <ButtonLink href="/projects" variant="outline">All projects</ButtonLink>. Do not use for submitting a form or an action without a destination. */
export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonStyles> {}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink({ className, variant, size, ...props }, ref) {
  return <a ref={ref} className={cn(buttonStyles({ variant, size }), className)} {...props} />;
});