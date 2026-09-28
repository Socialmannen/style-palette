import { createContext, forwardRef, useContext, type HTMLAttributes, type TableHTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from 'react';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { cn } from '../lib';

export type TableDensity = 'compact' | 'comfortable';
interface TableSettings { density: TableDensity; hoverable: boolean; stickyHeader: boolean }
const TableContext = createContext<TableSettings>({ density: 'comfortable', hoverable: true, stickyHeader: false });

/** Use for structured rows of comparable values, such as statistics and administration lists. Example: <Table><TableHeader>…</TableHeader><TableBody>…</TableBody></Table>. Do not use to lay out a form or a card; use a grid instead. */
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> { density?: TableDensity; hoverable?: boolean; stickyHeader?: boolean }
export const Table = forwardRef<HTMLTableElement, TableProps>(function Table({ className, density = 'comfortable', hoverable = true, stickyHeader = false, ...props }, ref) {
  return <TableContext.Provider value={{ density, hoverable, stickyHeader }}>
    <div className="w-full overflow-x-auto"><table ref={ref} className={cn('w-full caption-bottom border-collapse text-sm', className)} {...props} /></div>
  </TableContext.Provider>;
});

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}
export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(function TableHeader({ className, ...props }, ref) {
  return <thead ref={ref} className={cn('text-xs uppercase tracking-wide', className)} {...props} />;
});

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(function TableBody({ className, ...props }, ref) {
  return <tbody ref={ref} className={cn('[&_tr:last-child_[role]]:border-0', className)} {...props} />;
});

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}
export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(function TableFooter({ className, ...props }, ref) {
  return <tfoot ref={ref} className={cn('border-t border-border font-medium text-muted-foreground', className)} {...props} />;
});

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow({ className, ...props }, ref) {
  const { hoverable } = useContext(TableContext);
  return <tr ref={ref} className={cn('motion-fast border-b border-border', hoverable && 'hover:bg-muted', className)} {...props} />;
});

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> { sortable?: boolean; sortDirection?: 'asc' | 'desc' | 'none'; onSort?: () => void }
export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(function TableHead({ className, children, sortable, sortDirection = 'none', onSort, ...props }, ref) {
  const { density, stickyHeader } = useContext(TableContext);
  const base = cn('border-b border-border text-left align-middle font-semibold text-muted-foreground', density === 'compact' ? 'px-3 py-2' : 'px-4 py-3', stickyHeader && 'sticky top-0 z-10 bg-background');
  if (sortable) return <th ref={ref} aria-sort={sortDirection} className={cn(base, className)} {...props}>
    <button type="button" onClick={onSort} className="motion-fast -mx-1.5 inline-flex items-center gap-1.5 rounded-sm px-1.5 py-0.5 text-inherit outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">{children}{sortDirection === 'asc' ? <ArrowUp className="size-3.5 text-primary" aria-hidden="true" /> : sortDirection === 'desc' ? <ArrowDown className="size-3.5 text-primary" aria-hidden="true" /> : <ArrowUpDown className="size-3.5 opacity-50" aria-hidden="true" />}</button>
  </th>;
  return <th ref={ref} className={cn(base, className)} {...props}>{children}</th>;
});

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell({ className, ...props }, ref) {
  const { density } = useContext(TableContext);
  return <td ref={ref} className={cn('border-b border-border align-middle text-foreground', density === 'compact' ? 'px-3 py-2' : 'px-4 py-3.5', className)} {...props} />;
});

export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}
export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(function TableCaption({ className, ...props }, ref) {
  return <caption ref={ref} className={cn('mt-4 text-left text-xs text-muted-foreground', className)} {...props} />;
});

export interface TableEmptyStateProps extends HTMLAttributes<HTMLDivElement> {}
export const TableEmptyState = forwardRef<HTMLDivElement, TableEmptyStateProps>(function TableEmptyState({ className, ...props }, ref) {
  return <div ref={ref} className={cn('rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground', className)} {...props} />;
});
