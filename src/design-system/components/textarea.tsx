import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '../lib';

/** Use for multi-line writing and notes. Example: <Textarea id="brief" placeholder="Project brief" />. Do not use when a single short value should be an Input. */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { invalid?: boolean }
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, invalid, ...props }, ref) { return <textarea ref={ref} aria-invalid={invalid || undefined} className={cn('motion-content min-h-24 w-full resize-y rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40 aria-invalid:border-destructive', className)} {...props} />; });
