import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../lib';

/** Use for switching between related views at the same hierarchy level. Example: <Tabs defaultValue="overview"><TabsList><TabsTrigger value="overview">Overview</TabsTrigger></TabsList><TabsContent value="overview">...</TabsContent></Tabs>. Do not use tabs as primary site navigation. */
export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {}
export function Tabs(props: TabsProps) { return <TabsPrimitive.Root {...props} />; }

export interface TabsListProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}
export const TabsList = forwardRef<ComponentRef<typeof TabsPrimitive.List>, TabsListProps>(function TabsList({ className, ...props }, ref) { return <TabsPrimitive.List ref={ref} className={cn('inline-flex min-h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground', className)} {...props} />; });

export interface TabsTriggerProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}
export const TabsTrigger = forwardRef<ComponentRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(function TabsTrigger({ className, ...props }, ref) { return <TabsPrimitive.Trigger ref={ref} className={cn('motion-content inline-flex min-h-8 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-soft', className)} {...props} />; });

export interface TabsContentProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}
export const TabsContent = forwardRef<ComponentRef<typeof TabsPrimitive.Content>, TabsContentProps>(function TabsContent({ className, ...props }, ref) { return <TabsPrimitive.Content ref={ref} className={cn('motion-content mt-4 outline-none data-[state=active]:animate-[ds-fade-in_var(--motion-duration-normal)_var(--motion-ease-enter)_both] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background', className)} {...props} />; });
