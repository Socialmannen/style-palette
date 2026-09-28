import { useEffect, useId, useState, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib';
import { Button } from './button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';

export interface ChoiceDialogOption {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

/** Use when the user must pick one or several options in a focused step and confirm the choice. Example: <ChoiceDialog title="Choose a layout" options={options} onConfirm={setLayout} trigger={<Button>Change layout</Button>} />. Do not use for inline filters (use Select, MultiSelect or ToggleGroup) or for yes/no confirmations. */
export interface ChoiceDialogProps {
  /** Element that opens the dialog; omit when controlling `open` yourself. */
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: string;
  options: ChoiceDialogOption[];
  /** `single` renders radios, `multiple` renders checkboxes. */
  type?: 'single' | 'multiple';
  /** Selection applied when the dialog opens. */
  defaultValue?: string[];
  /** Called with the selected values when the user confirms. */
  onConfirm: (value: string[]) => void;
  /** Minimum number of selected options before confirm is enabled. */
  minSelected?: number;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Layout of the option list. */
  layout?: 'list' | 'grid';
  className?: string;
}

export function ChoiceDialog({ trigger, open: openProp, onOpenChange, title, description, options, type = 'single', defaultValue = [], onConfirm, minSelected = 1, confirmLabel = 'Confirm', cancelLabel = 'Cancel', layout = 'list', className }: ChoiceDialogProps) {
  const [openState, setOpenState] = useState(false);
  const open = openProp ?? openState;
  const setOpen = (next: boolean) => { if (openProp === undefined) setOpenState(next); onOpenChange?.(next); };
  const [selected, setSelected] = useState<string[]>(defaultValue);
  const name = useId();
  const defaultKey = defaultValue.join('|');
  useEffect(() => { if (open) setSelected(defaultKey ? defaultKey.split('|') : []); }, [open, defaultKey]);

  const toggle = (value: string) => setSelected((current) => type === 'single' ? [value] : current.includes(value) ? current.filter((v) => v !== value) : [...current, value]);
  const canConfirm = selected.length >= minSelected;

  return <Dialog open={open} onOpenChange={setOpen}>
    {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
    <DialogContent className={cn(layout === 'grid' && 'max-w-2xl', className)}>
      <DialogHeader><DialogTitle>{title}</DialogTitle>{description && <DialogDescription>{description}</DialogDescription>}</DialogHeader>
      <form onSubmit={(event) => { event.preventDefault(); if (!canConfirm) return; onConfirm(selected); setOpen(false); }} className="grid gap-5">
        <fieldset className={cn('grid max-h-[60vh] gap-2 overflow-y-auto', layout === 'grid' && 'sm:grid-cols-2')}>
          <legend className="sr-only">{title}</legend>
          {options.map((option) => {
            const checked = selected.includes(option.value);
            return <label key={option.value} className={cn('motion-content group relative flex cursor-pointer items-start gap-3 rounded-md border border-border bg-card p-3 hover:bg-muted has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-card', checked && 'border-primary bg-primary/5 hover:bg-primary/10', option.disabled && 'cursor-not-allowed opacity-50 hover:bg-card')}>
              <input type={type === 'single' ? 'radio' : 'checkbox'} name={name} value={option.value} checked={checked} disabled={option.disabled} onChange={() => toggle(option.value)} className="peer sr-only" />
              {option.icon && <span className="mt-0.5 text-muted-foreground group-has-[:checked]:text-primary" aria-hidden="true">{option.icon}</span>}
              <span className="grid flex-1 gap-0.5"><span className="text-sm font-medium text-foreground">{option.label}</span>{option.description && <span className="text-xs leading-relaxed text-muted-foreground">{option.description}</span>}</span>
              <span className={cn('motion-fast mt-0.5 flex size-4 shrink-0 items-center justify-center border border-input', type === 'single' ? 'rounded-full' : 'rounded-sm', checked && 'border-primary bg-primary text-primary-foreground')} aria-hidden="true">{checked && <Check className="size-3" />}</span>
            </label>;
          })}
        </fieldset>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>{cancelLabel}</Button>
          <Button type="submit" disabled={!canConfirm}>{confirmLabel}</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>;
}
