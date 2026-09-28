import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../lib';

/** Use to show completion for a task with known progress, or indeterminate activity when progress cannot be measured. Example: <Progress value={64} />. Do not use as decorative motion. */
export interface ProgressProps extends ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> { indeterminate?: boolean }
export const Progress = forwardRef<ComponentRef<typeof ProgressPrimitive.Root>, ProgressProps>(function Progress({ className, value, indeterminate = false, ...props }, ref) {
  const safeValue = typeof value === 'number' ? Math.max(0, Math.min(100, value)) : 0;
  return <ProgressPrimitive.Root ref={ref} value={indeterminate ? undefined : safeValue} className={cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/15', className)} {...props}><ProgressPrimitive.Indicator className={cn('h-full w-full flex-1 bg-primary transition-transform duration-motion-normal ease-motion-standard', indeterminate && 'motion-progress-indeterminate w-1/2')} style={indeterminate ? undefined : { transform: `translateX(-${100 - safeValue}%)` }} /></ProgressPrimitive.Root>;
});
