import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../lib';

/** Use as a temporary placeholder while content is loading. Example: <Skeleton className="h-4 w-32" />. Do not use skeletons for errors or empty states. */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton({ className, ...props }, ref) { return <div ref={ref} className={cn('motion-skeleton rounded-md bg-primary/10', className)} {...props} />; });
