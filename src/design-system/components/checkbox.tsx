import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cn } from '../lib';

/** Use to turn one option on or off, or to select rows in a list. Example: <label htmlFor="terms">I agree</label> with <Checkbox id="terms" />. Do not use when only one of several options may be active; use ToggleGroup or Select. */
export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> { size?: 'sm' | 'md'; invalid?: boolean }
export const Checkbox = forwardRef<ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(function Checkbox({ className, size = 'md', invalid, ...props }, ref) {
  return <CheckboxPrimitive.Root ref={ref} aria-invalid={invalid || undefined} className={cn('motion-fast group inline-flex shrink-0 items-center justify-center rounded-sm border border-input bg-card text-primary-foreground outline-none hover:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary', size === 'sm' ? 'size-4' : 'size-5', invalid && 'border-destructive', className)} {...props}>
    <CheckboxPrimitive.Indicator className="motion-check flex items-center justify-center text-current">
      <Check className="hidden size-3.5 group-data-[state=checked]:block" aria-hidden="true" />
      <Minus className="hidden size-3.5 group-data-[state=indeterminate]:block" aria-hidden="true" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>;
});
