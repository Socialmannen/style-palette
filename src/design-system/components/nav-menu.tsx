import { forwardRef, type AnchorHTMLAttributes, type HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../lib';

const itemStyles = cva('motion-content inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background', {
  variants: { active: { true: 'bg-secondary text-foreground', false: 'text-muted-foreground hover:bg-muted hover:text-foreground' }, size: { sm: 'px-2.5 py-1.5 text-xs', md: 'px-3 py-2 text-sm' } },
  defaultVariants: { active: false, size: 'md' },
});

/** The styles behind every navigation item. Use when a project already renders its own link element. Example: <a className={navItemStyles({ active: isHome })}>Home</a>. Do not use for buttons that run an action; use Button. */
export const navItemStyles = itemStyles;

/** The row of top-level links. Example: <NavMenu aria-label="Main">…</NavMenu>. Do not use for in-page section jumps or for filters. */
export interface NavMenuProps extends HTMLAttributes<HTMLDivElement> {}
export const NavMenu = forwardRef<HTMLDivElement, NavMenuProps>(function NavMenu({ className, ...props }, ref) {
  return <div ref={ref} role="navigation" className={cn('flex min-w-0 items-center gap-1 overflow-x-auto', className)} {...props} />;
});

/** Use for top-level navigation between pages, with the current page marked. Example: <NavItem active={isProjects} asChild><Link to="/projects">Projects</Link></NavItem>. Do not use for actions that mutate data; use Button. */
export interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> { active?: boolean; asChild?: boolean; size?: 'sm' | 'md' }
export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem({ className, active, asChild, size, children, ...props }, ref) {
  const styles = cn(itemStyles({ active, size }), className);
  if (asChild) return <Slot ref={ref} className={styles} aria-current={active ? 'page' : undefined} data-active={active ? '' : undefined}>{children}</Slot>;
  return <a ref={ref} aria-current={active ? 'page' : undefined} data-active={active ? '' : undefined} className={styles} {...props}>{children}</a>;
});
