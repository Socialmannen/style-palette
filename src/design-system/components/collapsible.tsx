import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cn } from '../lib';

/** Use when a single related block can be revealed without leaving the page. Example: <Collapsible><CollapsibleTrigger asChild><Button>More</Button></CollapsibleTrigger><CollapsibleContent>...</CollapsibleContent></Collapsible>. Do not use for unrelated page sections. */
export interface CollapsibleProps extends ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {}
export function Collapsible(props: CollapsibleProps) { return <CollapsiblePrimitive.Root {...props} />; }

export interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> {}
export const CollapsibleTrigger = forwardRef<ComponentRef<typeof CollapsiblePrimitive.Trigger>, CollapsibleTriggerProps>(function CollapsibleTrigger(props, ref) { return <CollapsiblePrimitive.Trigger ref={ref} {...props} />; });

export interface CollapsibleContentProps extends ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> {}
export const CollapsibleContent = forwardRef<ComponentRef<typeof CollapsiblePrimitive.Content>, CollapsibleContentProps>(function CollapsibleContent({ className, ...props }, ref) { return <CollapsiblePrimitive.Content ref={ref} className={cn('motion-collapsible-content', className)} {...props} />; });
