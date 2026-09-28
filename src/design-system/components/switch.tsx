import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../lib';

/** Use for one binary setting that takes effect immediately. Example: <Switch id="alerts" defaultChecked />. Do not use for multi-option choices or form submit actions. */
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> { size?: 'sm' | 'md' }
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch({ className, size = 'md', ...props }, ref) {
  return <input ref={ref} type="checkbox" role="switch" className={cn('relative appearance-none cursor-pointer rounded-full bg-input transition-colors duration-motion-normal ease-motion-standard checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40 before:absolute before:rounded-full before:bg-card before:shadow-sm before:transition-transform before:duration-motion-normal before:ease-motion-standard checked:before:translate-x-full', size === 'sm' ? 'h-5 w-9 before:left-0.5 before:top-0.5 before:size-4' : 'h-6 w-11 before:left-0.5 before:top-0.5 before:size-5', className)} {...props} />;
});
