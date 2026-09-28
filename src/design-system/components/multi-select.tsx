import { useMemo, useState } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk';
import { Check, ChevronDown, Search, X } from 'lucide-react';
import { cn } from '../lib';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Badge } from './badge';
import { Button } from './button';
import { Skeleton } from './skeleton';

export interface MultiSelectOption { value: string; label: string; hint?: string; disabled?: boolean }

/** Use when several values must be picked from a list long enough to need search, such as members, areas, or queues. Example: <MultiSelect options={options} value={value} onValueChange={setValue} aria-label="Team members" />. Do not use for one value out of a short list; use Select, or ToggleGroup when all options should stay visible. */
export interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onValueChange: (value: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  selectAllLabel?: string;
  clearLabel?: string;
  formatOverflow?: (count: number) => string;
  maxChips?: number;
  showCount?: boolean;
  disabled?: boolean;
  loading?: boolean;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  className?: string;
}

const defaultOverflow = (count: number) => `+${count} more`;

export function MultiSelect({ options, value, onValueChange, placeholder = 'Select items', searchPlaceholder = 'Search', emptyMessage = 'No matches', selectAllLabel = 'Select all', clearLabel = 'Clear', formatOverflow = defaultOverflow, maxChips = 3, showCount = false, disabled, loading, className, ...aria }: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const byValue = useMemo(() => new Map(options.map(option => [option.value, option])), [options]);
  const selected = value.map(item => byValue.get(item)).filter((option): option is MultiSelectOption => Boolean(option));
  const visible = selected.slice(0, maxChips);
  const hiddenCount = selected.length - visible.length;

  const toggle = (option: MultiSelectOption) => {
    if (option.disabled) return;
    onValueChange(value.includes(option.value) ? value.filter(item => item !== option.value) : [...value, option.value]);
  };
  const remove = (option: MultiSelectOption) => onValueChange(value.filter(item => item !== option.value));
  const selectable = options.filter(option => !option.disabled);
  const allSelected = selectable.length > 0 && selectable.every(option => value.includes(option.value));

  return <Popover open={disabled ? false : open} onOpenChange={setOpen}>
    <div className={cn('relative min-h-10 w-full rounded-md border border-input bg-card text-sm text-foreground', disabled && 'cursor-not-allowed opacity-40', aria['aria-invalid'] && 'border-destructive', className)}>
      <div className="flex flex-wrap items-center gap-1.5 py-1.5 pl-3 pr-9">
        {visible.map(option => <span key={option.value} className="motion-content inline-flex max-w-full items-center gap-1 rounded-sm bg-secondary py-0.5 pl-2 pr-1 text-xs font-medium text-secondary-foreground">
          <span className="truncate">{option.label}</span>
          <button type="button" disabled={disabled} onClick={event => { event.stopPropagation(); remove(option); }} aria-label={`Remove ${option.label}`} className="motion-fast flex size-4 items-center justify-center rounded-sm text-muted-foreground outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"><X className="size-3" aria-hidden="true" /></button>
        </span>)}
        {hiddenCount > 0 && <Badge variant="outline" className="text-xs">{formatOverflow(hiddenCount)}</Badge>}
        {showCount && selected.length > 0 && <Badge variant="secondary" className="text-xs">{selected.length}</Badge>}
        {selected.length === 0 && <span className="py-0.5 text-muted-foreground">{placeholder}</span>}
      </div>
      <ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-muted-foreground" aria-hidden="true" />
      <PopoverTrigger asChild>
        <button type="button" disabled={disabled} aria-label={aria['aria-label'] ?? placeholder} aria-labelledby={aria['aria-labelledby']} aria-describedby={aria['aria-describedby']} className="absolute inset-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" />
      </PopoverTrigger>
    </div>
    <PopoverContent align="start" className="w-[min(20rem,calc(100vw-2rem))] p-0">
      <Command shouldFilter={query.trim().length > 0} className="flex max-h-[min(24rem,calc(100vh-8rem))] flex-col overflow-hidden text-sm">
        <div className="relative flex items-center border-b border-border">
          <Search className="pointer-events-none absolute left-3 size-3.5 text-muted-foreground" aria-hidden="true" />
          <CommandInput placeholder={searchPlaceholder} value={query} onValueChange={setQuery} className="motion-fast h-9 w-full bg-transparent pl-9 pr-3 text-sm outline-none focus-visible:outline-none focus-visible:inset-ring-2 focus-visible:inset-ring-ring/60" />
        </div>
        <CommandList className="min-h-0 flex-1 overflow-y-auto p-1">
          <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">{loading ? '' : emptyMessage}</CommandEmpty>
          {loading && <div className="space-y-2 p-2">{[0, 1, 2].map(row => <Skeleton key={row} className="h-6 w-full" />)}</div>}
          <CommandGroup>
            {options.map(option => <CommandItem key={option.value} value={option.value} keywords={[option.label]} disabled={Boolean(option.disabled)} onSelect={() => toggle(option)} className="flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[selected]:bg-accent data-[selected]:text-accent-foreground">
              <span className={cn('flex size-4 shrink-0 items-center justify-center rounded-sm border border-input', value.includes(option.value) && 'border-primary bg-primary text-primary-foreground')} aria-hidden="true">{value.includes(option.value) && <Check className="motion-check size-3" />}</span>
              <span className="min-w-0 flex-1 truncate">{option.label}</span>
              {option.hint && <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{option.hint}</span>}
            </CommandItem>)}
          </CommandGroup>
        </CommandList>
        <div className="flex items-center justify-between gap-2 border-t border-border p-2">
          <Button type="button" size="sm" variant="ghost" disabled={disabled || allSelected} onClick={() => onValueChange(selectable.map(option => option.value))}>{selectAllLabel}</Button>
          <Button type="button" size="sm" variant="ghost" disabled={disabled || selected.length === 0} onClick={() => onValueChange([])}>{clearLabel}</Button>
        </div>
      </Command>
    </PopoverContent>
  </Popover>;
}

