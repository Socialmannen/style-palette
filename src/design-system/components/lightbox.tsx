import React, { forwardRef, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '../lib';

export interface LightboxImage {
  src: string;
  alt: string;
  /** Optional caption shown under the image. */
  caption?: ReactNode;
  /** Optional thumbnail source; falls back to `src`. */
  thumbnail?: string;
  /** Optional extra action for this image, e.g. an "Open original" ButtonLink. */
  action?: ReactNode;
}

/** Shows images large and lets people page through them. Controls sit in fixed positions so they never move between portrait, landscape or wide images. Example: <Lightbox images={images} open={open} onOpenChange={setOpen} index={i} onIndexChange={setI} />. Do not use for a single decorative image or inline carousels. */
export interface LightboxProps {
  images: LightboxImage[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Controlled current image index. */
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  /** Element that opens the lightbox (wrapped with asChild). */
  trigger?: ReactNode;
  /** Accessible title for the viewer. */
  title?: string;
  /** Show a thumbnail strip under the image. */
  showThumbnails?: boolean;
  /** Wrap from last to first image. */
  loop?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  closeLabel?: string;
  /** Formats the position counter. */
  formatCounter?: (current: number, total: number) => string;
  className?: string;
}

const controlClass = 'motion-press inline-flex size-11 items-center justify-center rounded-md bg-card/80 text-foreground shadow-soft hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30';

export const Lightbox = forwardRef<HTMLDivElement, LightboxProps>(function Lightbox({
  images, open, defaultOpen, onOpenChange, index, defaultIndex = 0, onIndexChange, trigger,
  title = 'Image viewer', showThumbnails = false, loop = false,
  previousLabel = 'Previous image', nextLabel = 'Next image', closeLabel = 'Close viewer',
  formatCounter = (c, t) => `${c} / ${t}`, className,
}, ref) {
  const [inner, setInner] = useState(defaultIndex);
  const current = Math.min(Math.max(index ?? inner, 0), Math.max(images.length - 1, 0));
  const setIndex = useCallback((next: number) => { if (index === undefined) setInner(next); onIndexChange?.(next); }, [index, onIndexChange]);
  const total = images.length;
  const canPrev = loop ? total > 1 : current > 0;
  const canNext = loop ? total > 1 : current < total - 1;
  const prev = useCallback(() => { if (canPrev) setIndex((current - 1 + total) % total); }, [canPrev, current, total, setIndex]);
  const next = useCallback(() => { if (canNext) setIndex((current + 1) % total); }, [canNext, current, total, setIndex]);
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeOnBackdrop = (e: React.MouseEvent) => { if (e.target === e.currentTarget) closeRef.current?.click(); };
  const image = images[current];

  useEffect(() => { if (index === undefined && inner > total - 1) setInner(Math.max(total - 1, 0)); }, [index, inner, total]);

  return <DialogPrimitive.Root {...(open !== undefined && { open })} {...(defaultOpen !== undefined && { defaultOpen })} {...(onOpenChange && { onOpenChange })}>
    {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="motion-overlay fixed inset-0 z-50 bg-background/90" />
      <DialogPrimitive.Content
        ref={ref}
        aria-describedby={undefined}
        onKeyDown={(e) => { if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); } if (e.key === 'ArrowRight') { e.preventDefault(); next(); } }}
        onClick={closeOnBackdrop}
        className={cn('motion-overlay fixed inset-0 z-50 m-auto grid h-[85vh] w-[calc(100vw-2rem)] max-w-5xl grid-rows-[auto_minmax(0,1fr)_auto] gap-3 text-foreground outline-none', className)}
      >
        <div className="flex h-11 items-center justify-between gap-3">
          <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>
          <p className="font-sans text-sm text-muted-foreground tabular-nums" aria-live="polite">{total > 0 && formatCounter(current + 1, total)}</p>
          <DialogPrimitive.Close ref={closeRef} className={controlClass} aria-label={closeLabel}><X className="size-5" aria-hidden="true" /></DialogPrimitive.Close>
        </div>

        <div
          onClick={closeOnBackdrop}
          className="relative flex min-h-0 items-center justify-center px-14 sm:px-16"
          onTouchStart={(e) => { touchX.current = e.touches[0]?.clientX ?? null; }}
          onTouchEnd={(e) => { const start = touchX.current; const end = e.changedTouches[0]?.clientX; touchX.current = null; if (start == null || end == null) return; const dx = end - start; if (Math.abs(dx) > 40) (dx < 0 ? next : prev)(); }}
        >
          {image && <img key={image.src} src={image.src} alt={image.alt} draggable={false} className="motion-overlay max-h-full max-w-full select-none rounded-md object-contain" data-state="open" />}
          {total > 1 && <>
            <button type="button" onClick={prev} disabled={!canPrev} aria-label={previousLabel} className={cn(controlClass, 'absolute left-0 top-1/2 -translate-y-1/2')}><ChevronLeft className="size-5" aria-hidden="true" /></button>
            <button type="button" onClick={next} disabled={!canNext} aria-label={nextLabel} className={cn(controlClass, 'absolute right-0 top-1/2 -translate-y-1/2')}><ChevronRight className="size-5" aria-hidden="true" /></button>
          </>}
        </div>

        <div className="flex min-h-11 flex-col items-center gap-3">
          {(image?.caption || image?.action) && <div className="flex w-full flex-wrap items-center justify-center gap-3 text-center text-sm text-muted-foreground">{image.caption && <p>{image.caption}</p>}{image.action}</div>}
          {showThumbnails && total > 1 && <div className="flex max-w-full gap-2 overflow-x-auto p-1">{images.map((img, i) => <button key={img.src + i} type="button" onClick={() => setIndex(i)} aria-label={`${img.alt} (${formatCounter(i + 1, total)})`} aria-current={i === current || undefined} className={cn('motion-content size-12 shrink-0 overflow-hidden rounded-sm opacity-50 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', i === current && 'opacity-100 ring-2 ring-primary')}><img src={img.thumbnail ?? img.src} alt="" className="size-full object-cover" /></button>)}</div>}
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
});
