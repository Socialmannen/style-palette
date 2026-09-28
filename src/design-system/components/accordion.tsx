import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib';

/** Use for grouped content where headings should remain visible and details can expand. Example: <Accordion type="single" collapsible><AccordionItem value="a"><AccordionTrigger>Details</AccordionTrigger><AccordionContent>...</AccordionContent></AccordionItem></Accordion>. Do not hide critical actions inside an accordion by default. */
export interface AccordionProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> {}
export const Accordion = AccordionPrimitive.Root as typeof AccordionPrimitive.Root;

export interface AccordionItemProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}
export const AccordionItem = forwardRef<ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(function AccordionItem({ className, ...props }, ref) { return <AccordionPrimitive.Item ref={ref} className={cn('border-b border-border', className)} {...props} />; });

export interface AccordionTriggerProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}
export const AccordionTrigger = forwardRef<ComponentRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(function AccordionTrigger({ className, children, ...props }, ref) {
  return <AccordionPrimitive.Header className="flex"><AccordionPrimitive.Trigger ref={ref} className={cn('motion-content flex flex-1 cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&[data-state=open]>svg]:rotate-180', className)} {...props}>{children}<ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-motion-normal ease-motion-standard" aria-hidden="true" /></AccordionPrimitive.Trigger></AccordionPrimitive.Header>;
});

export interface AccordionContentProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}
export const AccordionContent = forwardRef<ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentProps>(function AccordionContent({ className, children, ...props }, ref) {
  return <AccordionPrimitive.Content ref={ref} className="motion-accordion-content text-sm" {...props}><div className={cn('pb-4 leading-relaxed text-muted-foreground', className)}>{children}</div></AccordionPrimitive.Content>;
});
