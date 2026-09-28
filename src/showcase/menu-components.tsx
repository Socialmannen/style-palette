import { Link, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronDown, Copy, Filter, Layers, Search, Users } from 'lucide-react';
import { Badge } from '../design-system/components/badge';
import { Button } from '../design-system/components/button';
import { ChoiceDialog } from '../design-system/components/choice-dialog';
import { Checkbox } from '../design-system/components/checkbox';
import { MultiSelect, type MultiSelectOption } from '../design-system/components/multi-select';
import { NavItem, NavMenu } from '../design-system/components/nav-menu';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '../design-system/components/select';
import { Table, TableBody, TableCaption, TableCell, TableEmptyState, TableHead, TableHeader, TableRow } from '../design-system/components/table';
import { ToggleGroup, ToggleGroupItem } from '../design-system/components/toggle-group';

function Section({ name, description, children, code }: { name: string; description: string; children: React.ReactNode; code: string }) {
  const [copied, setCopied] = useState(false);
  return <section id={name.toLowerCase().replaceAll(' ', '-')} className="scroll-mt-28 border-t border-border py-10">
    <div className="mb-7"><p className="text-xs font-medium text-primary">@refined/{name.toLowerCase().replaceAll(' ', '-')}</p><h2 className="mt-2 font-display text-2xl font-semibold">{name}</h2><p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p></div>
    {children}
    <details className="group mt-6 border-t border-border pt-4"><summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground">View code <ChevronDown className="size-3 transition-transform group-open:rotate-180" /></summary><div className="relative mt-4"><pre className="overflow-x-auto rounded-md bg-muted p-4 pr-12 font-mono text-xs leading-relaxed text-foreground"><code>{code}</code></pre><Button size="icon" variant="ghost" className="absolute right-2 top-2" aria-label="Copy example" onClick={async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>{copied ? <span className="text-xs">Copied</span> : <Copy className="size-4" />}</Button></div></details>
  </section>;
}

function Specimen({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="flex min-h-24 flex-col justify-between gap-4 rounded-md border border-border bg-card p-4"><p className="text-xs text-muted-foreground">{label}</p><div className="flex min-h-10 items-center">{children}</div></div>;
}

const areas: MultiSelectOption[] = [
  { value: 'design', label: 'Design', hint: '8' },
  { value: 'engineering', label: 'Engineering', hint: '24' },
  { value: 'research', label: 'Research', hint: '5' },
  { value: 'support', label: 'Support', hint: '12' },
  { value: 'operations', label: 'Operations', hint: '9' },
  { value: 'finance', label: 'Finance', hint: '4' },
  { value: 'legal', label: 'Legal', hint: '2' },
  { value: 'archived', label: 'Archived team', disabled: true },
];

const people: MultiSelectOption[] = [
  { value: 'a', label: 'Alex Novak' }, { value: 'b', label: 'Bea Lindqvist' }, { value: 'c', label: 'Chris Osei' },
  { value: 'd', label: 'Dana Ferreira' }, { value: 'e', label: 'Elias Braun' }, { value: 'f', label: 'Farah Haddad' },
];

const rows = [
  { name: 'Overview', views: 1284, change: 8.4, status: 'live' },
  { name: 'Pricing', views: 964, change: 3.1, status: 'live' },
  { name: 'Changelog', views: 512, change: -2.6, status: 'draft' },
  { name: 'Contact', views: 288, change: 12.7, status: 'live' },
];

type SortKey = 'name' | 'views' | 'change';


function ChoiceDialogDemo() {
  const [layout, setLayout] = useState(['board']);
  const [channels, setChannels] = useState(['email']);
  return <div className="grid gap-4 md:grid-cols-2">
    <Specimen label="single choice, grid layout"><div className="flex flex-wrap items-center gap-3"><ChoiceDialog title="Choose a view" description="Pick how items are shown for everyone on this page." layout="grid" defaultValue={layout} onConfirm={setLayout} options={[{ value: 'list', label: 'List', description: 'Dense rows for scanning', icon: <Layers className="size-4" /> }, { value: 'board', label: 'Board', description: 'Columns grouped by status', icon: <Filter className="size-4" /> }, { value: 'team', label: 'By owner', description: 'Grouped by assignee', icon: <Users className="size-4" /> }, { value: 'archive', label: 'Archive', description: 'Available on paid plans', disabled: true }]} trigger={<Button variant="outline">Change view</Button>} /><span className="text-sm text-muted-foreground">Current: {layout.join(', ')}</span></div></Specimen>
    <Specimen label="multiple choice, at least one"><div className="flex flex-wrap items-center gap-3"><ChoiceDialog type="multiple" title="Notification channels" description="Select where updates are delivered." defaultValue={channels} onConfirm={setChannels} confirmLabel="Save channels" options={[{ value: 'email', label: 'Email' }, { value: 'push', label: 'Push notifications' }, { value: 'sms', label: 'Text message', description: 'Standard rates may apply' }]} trigger={<Button variant="outline">Edit channels</Button>} /><span className="text-sm text-muted-foreground">{channels.length} selected</span></div></Specimen>
  </div>;
}

export function MenuComponents() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const [sort, setSort] = useState('recent');
  const [theme, setTheme] = useState('system');
  const [areasValue, setAreasValue] = useState<string[]>(['design', 'engineering', 'research', 'support', 'operations']);
  const [peopleValue, setPeopleValue] = useState<string[]>([]);
  const [loadingValue, setLoadingValue] = useState<string[]>([]);
  const [all, setAll] = useState(true);
  const [some, setSome] = useState<'indeterminate' | true | false>('indeterminate');
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');
  const [scope, setScope] = useState('preferred');
  const [sortKey, setSortKey] = useState<SortKey>('views');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [nav, setNav] = useState('/colors');

  const sorted = [...rows].sort((left, right) => {
    const factor = sortDir === 'asc' ? 1 : -1;
    if (sortKey === 'name') return left.name.localeCompare(right.name) * factor;
    return (left[sortKey] - right[sortKey]) * factor;
  });
  const toggleSort = (key: SortKey) => { if (sortKey === key) setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); else { setSortKey(key); setSortDir('asc'); } };
  const headDirection = (key: SortKey) => (sortKey === key ? sortDir : 'none');

  return <>
    <Section name="Select" description="One value out of a list, with keyboard search, grouping, and the same sizes as a text field." code={'import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/design-system/refined-modern-tech";\n<Select value={sort} onValueChange={setSort}>\n  <SelectTrigger aria-label="Sort by"><SelectValue placeholder="Sort" /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="recent">Most recent</SelectItem>\n  </SelectContent>\n</Select>'}>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Specimen label="with a placeholder"><Select onValueChange={value => setSort(value)}><SelectTrigger aria-label="Sort items" className="w-full"><SelectValue placeholder="Sort by" /></SelectTrigger><SelectContent><SelectItem value="name">Name</SelectItem><SelectItem value="recent">Most recent</SelectItem><SelectItem value="a-z">Title A–Z</SelectItem></SelectContent></Select></Specimen>
        <Specimen label="controlled value"><Select value={sort} onValueChange={setSort}><SelectTrigger aria-label="Sorting" className="w-full"><SelectValue placeholder="Sort" /></SelectTrigger><SelectContent><SelectItem value="recent">Most recent</SelectItem><SelectItem value="oldest">Oldest first</SelectItem><SelectItem value="popular">Most viewed</SelectItem></SelectContent></Select></Specimen>
        <Specimen label="grouped options"><Select value={theme} onValueChange={setTheme}><SelectTrigger aria-label="Theme" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectGroup><SelectLabel>Appearance</SelectLabel><SelectItem value="light">Light</SelectItem><SelectItem value="dark">Dark</SelectItem><SelectItem value="system">Match system</SelectItem></SelectGroup><SelectSeparator /><SelectGroup><SelectLabel>Contrast</SelectLabel><SelectItem value="normal">Standard</SelectItem><SelectItem value="high">Higher</SelectItem></SelectGroup></SelectContent></Select></Specimen>
        <Specimen label="small / medium / large"><div className="flex w-full flex-col gap-2"><Select defaultValue="one"><SelectTrigger size="sm" aria-label="Small select"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="one">Small option</SelectItem></SelectContent></Select><Select defaultValue="two"><SelectTrigger size="md" aria-label="Medium select"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="two">Medium option</SelectItem></SelectContent></Select><Select defaultValue="three"><SelectTrigger size="lg" aria-label="Large select"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="three">Large option</SelectItem></SelectContent></Select></div></Specimen>
        <Specimen label="disabled"><Select disabled defaultValue="locked"><SelectTrigger aria-label="Disabled select" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="locked">Locked</SelectItem></SelectContent></Select></Specimen>
        <Specimen label="a few options, no search needed"><Select defaultValue="compact"><SelectTrigger aria-label="Density" className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="comfortable">Comfortable</SelectItem><SelectItem value="compact">Compact</SelectItem></SelectContent></Select></Specimen>
      </div>
    </Section>

    <Section name="Multi-select" description="Several values from a list long enough to search. Picks stay visible as removable chips, then collapse into a count." code={'import { MultiSelect } from "@/design-system/refined-modern-tech";\n<MultiSelect\n  options={options}\n  value={value}\n  onValueChange={setValue}\n  aria-label="Team members"\n  placeholder="Select items"\n  searchPlaceholder="Search"\n  emptyMessage="No matches"\n  selectAllLabel="Select all"\n  clearLabel="Clear"\n  formatOverflow={count => `+${count} more`}\n/>'}>
      <div className="grid gap-3 lg:grid-cols-2">
        <Specimen label="chips collapse after three"><MultiSelect options={areas} value={areasValue} onValueChange={setAreasValue} aria-label="Areas" placeholder="Select areas" /></Specimen>
        <Specimen label="empty, with a count badge"><MultiSelect options={people} value={peopleValue} onValueChange={setPeopleValue} aria-label="People" placeholder="Select people" showCount searchPlaceholder="Search people" /></Specimen>
        <Specimen label="loading"><MultiSelect options={[]} value={loadingValue} onValueChange={setLoadingValue} aria-label="Loading list" loading placeholder="Loading options" /></Specimen>
        <Specimen label="disabled"><MultiSelect options={areas} value={['design']} onValueChange={() => undefined} aria-label="Disabled multi-select" disabled /></Specimen>
      </div>
    </Section>

    <Section name="Checkbox" description="One option on or off, with an indeterminate state for partial group selection." code={'import { Checkbox } from "@/design-system/refined-modern-tech";\n<label htmlFor="terms" className="flex items-center gap-2 text-sm">\n  <Checkbox id="terms" checked={accepted} onCheckedChange={setAccepted} />\n  I accept the terms\n</label>'}>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Specimen label="wired to a label"><label className="flex items-center gap-2.5 text-sm"><Checkbox checked={all} onCheckedChange={value => setAll(value === true)} /> All incoming messages</label></Specimen>
        <Specimen label="indeterminate"><label className="flex items-center gap-2.5 text-sm"><Checkbox checked={some} onCheckedChange={value => setSome(value === true ? true : value === false ? false : 'indeterminate')} /> Selected groups</label></Specimen>
        <Specimen label="small"><label className="flex items-center gap-2.5 text-sm"><Checkbox size="sm" defaultChecked /> Compact option</label></Specimen>
        <Specimen label="disabled"><label className="flex items-center gap-2.5 text-sm text-muted-foreground"><Checkbox disabled defaultChecked /> Locked setting</label></Specimen>
        <Specimen label="invalid"><div><label className="flex items-center gap-2.5 text-sm"><Checkbox invalid defaultChecked={false} /> Confirmation required</label><p className="mt-2 text-xs text-destructive">Tick this box to continue.</p></div></Specimen>
        <Specimen label="select-all row"><div className="flex w-full items-center justify-between gap-3"><span className="text-sm text-muted-foreground">3 of 4 rows selected</span><Checkbox checked="indeterminate" aria-label="Select all rows" /></div></Specimen>
      </div>
    </Section>

    <Section name="Table" description="Comparable rows with sortable headers, two densities, and a horizontal scroll on narrow screens." code={'import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/design-system/refined-modern-tech";\n<Table density="compact">\n  <TableHeader><TableRow>\n    <TableHead sortable sortDirection={direction} onSort={toggle}>Page</TableHead>\n    <TableHead>Views</TableHead>\n  </TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Overview</TableCell><TableCell>1 284</TableCell></TableRow></TableBody>\n</Table>'}>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <ToggleGroup type="single" aria-label="Table density" value={density} onValueChange={value => setDensity(value === 'compact' ? 'compact' : 'comfortable')}><ToggleGroupItem value="comfortable">Comfortable</ToggleGroupItem><ToggleGroupItem value="compact">Compact</ToggleGroupItem></ToggleGroup>
        <Badge variant="secondary">{sorted.length} rows</Badge>
      </div>
      <Table density={density} stickyHeader><TableCaption>Pages in the last 30 days.</TableCaption><TableHeader><TableRow>
        <TableHead sortable sortDirection={headDirection('name')} onSort={() => toggleSort('name')}>Page</TableHead>
        <TableHead sortable sortDirection={headDirection('views')} onSort={() => toggleSort('views')}>Views</TableHead>
        <TableHead sortable sortDirection={headDirection('change')} onSort={() => toggleSort('change')}>Change</TableHead>
        <TableHead className="text-right">Status</TableHead>
      </TableRow></TableHeader><TableBody>{sorted.map(row => <TableRow key={row.name}><TableCell className="font-medium">{row.name}</TableCell><TableCell className="tabular-nums">{row.views.toLocaleString('en-US')}</TableCell><TableCell className={row.change >= 0 ? 'tabular-nums text-primary' : 'tabular-nums text-destructive'}>{row.change >= 0 ? '+' : ''}{row.change.toFixed(1)}%</TableCell><TableCell className="text-right"><Badge variant={row.status === 'live' ? 'secondary' : 'outline'}>{row.status}</Badge></TableCell></TableRow>)}</TableBody></Table>
      <div className="mt-6"><TableEmptyState>No rows match the current filters.</TableEmptyState></div>
    </Section>

    <Section name="Toggle group" description="Two to five options kept side by side in one field, with the active one filled." code={'import { ToggleGroup, ToggleGroupItem } from "@/design-system/refined-modern-tech";\n<ToggleGroup type="single" value={scope} onValueChange={setScope}>\n  <ToggleGroupItem value="off">Off</ToggleGroupItem>\n  <ToggleGroupItem value="preferred">Preferred</ToggleGroupItem>\n  <ToggleGroupItem value="required">Required</ToggleGroupItem>\n</ToggleGroup>'}>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <Specimen label="choose one"><ToggleGroup type="single" value={scope} onValueChange={value => setScope(value ?? 'off')}><ToggleGroupItem value="off">Off</ToggleGroupItem><ToggleGroupItem value="preferred">Preferred</ToggleGroupItem><ToggleGroupItem value="required">Required</ToggleGroupItem></ToggleGroup></Specimen>
        <Specimen label="all options, one field"><ToggleGroup type="single" fullWidth value={scope} onValueChange={value => setScope(value ?? 'off')}><ToggleGroupItem value="off">Off</ToggleGroupItem><ToggleGroupItem value="preferred">Preferred</ToggleGroupItem><ToggleGroupItem value="required">Required</ToggleGroupItem></ToggleGroup></Specimen>
        <Specimen label="outline"><ToggleGroup variant="outline" type="single" defaultValue="all"><ToggleGroupItem value="all">All</ToggleGroupItem><ToggleGroupItem value="only">Only</ToggleGroupItem><ToggleGroupItem value="none">None</ToggleGroupItem></ToggleGroup></Specimen>
        <Specimen label="choose several"><ToggleGroup type="multiple" defaultValue={['list', 'charts']}><ToggleGroupItem value="list">List</ToggleGroupItem><ToggleGroupItem value="charts">Charts</ToggleGroupItem><ToggleGroupItem value="map">Map</ToggleGroupItem></ToggleGroup></Specimen>
        <Specimen label="small / medium / large"><div className="flex flex-wrap items-center gap-3"><ToggleGroup type="single" defaultValue="a"><ToggleGroupItem size="sm" value="a">One</ToggleGroupItem><ToggleGroupItem size="sm" value="b">Two</ToggleGroupItem></ToggleGroup><ToggleGroup type="single" defaultValue="a"><ToggleGroupItem value="a">One</ToggleGroupItem><ToggleGroupItem value="b">Two</ToggleGroupItem></ToggleGroup><ToggleGroup type="single" defaultValue="a"><ToggleGroupItem size="lg" value="a">One</ToggleGroupItem><ToggleGroupItem size="lg" value="b">Two</ToggleGroupItem></ToggleGroup></div></Specimen>
        <Specimen label="one option unavailable"><ToggleGroup type="single" defaultValue="beta"><ToggleGroupItem value="alpha">Alpha</ToggleGroupItem><ToggleGroupItem value="beta">Beta</ToggleGroupItem><ToggleGroupItem value="gamma" disabled>Gamma</ToggleGroupItem></ToggleGroup></Specimen>
      </div>
    </Section>

    <Section name="Nav menu" description="Top-level page links with the current page marked, the same in light and dark." code={'import { NavMenu, NavItem } from "@/design-system/refined-modern-tech";\nimport { Link } from "@tanstack/react-router";\n<NavMenu aria-label="Main">\n  <NavItem asChild active={pathname === "/projects"}><Link to="/projects">Projects</Link></NavItem>\n</NavMenu>'}>
      <div className="grid gap-3 lg:grid-cols-2">
        <Specimen label="real links, current page marked"><NavMenu aria-label="Showcase demo"><NavItem asChild active={pathname === '/colors'} size="sm"><Link to="/colors">Colors</Link></NavItem><NavItem asChild active={pathname === '/typography'} size="sm"><Link to="/typography">Typography</Link></NavItem><NavItem asChild active={pathname === '/components'} size="sm"><Link to="/components">Components</Link></NavItem></NavMenu></Specimen>
        <Specimen label="switching the active item"><NavMenu aria-label="Section demo">{([['/colors', 'Overview'], ['/typography', 'Styles'], ['/components', 'Parts'], ['/colors', 'Reports']] as [string, string][]).map(([href, label]) => <NavItem key={label} size="sm" active={nav === href} onClick={() => setNav(href)} href={href}>{label}</NavItem>)}</NavMenu></Specimen>
        <Specimen label="with counts and icons"><NavMenu aria-label="Views demo"><NavItem active size="sm"><Layers className="size-3.5" aria-hidden="true" /> All items</NavItem><NavItem size="sm"><Users className="size-3.5" aria-hidden="true" /> Members <Badge variant="secondary" className="ml-1">12</Badge></NavItem><NavItem size="sm"><Filter className="size-3.5" aria-hidden="true" /> Filters</NavItem></NavMenu></Specimen>
        <Specimen label="scrolls when space is tight"><div className="w-full max-w-56"><NavMenu aria-label="Scrolling demo">{['Overview', 'Activity', 'Members', 'Settings', 'Billing', 'History'].map((label, index) => <NavItem key={label} size="sm" active={index === 0} href="#">{label}</NavItem>)}</NavMenu></div></Specimen>
        <Specimen label="search field beside the menu"><div className="flex w-full items-center gap-3"><NavMenu aria-label="Pages demo"><NavItem size="sm" active href="#">Pages</NavItem><NavItem size="sm" href="#">Files</NavItem></NavMenu><div className="relative ml-auto min-w-0 flex-1"><Search className="pointer-events-none absolute left-2.5 top-2 size-3.5 text-muted-foreground" aria-hidden="true" /><input aria-label="Find in project" placeholder="Find" className="motion-content h-8 w-full rounded-md border border-input bg-card pl-8 pr-3 text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring" /></div></div></Specimen>
      </div>
    </Section>
    <Section name="Choice dialog" description="A focused dialog for choosing one or several options and confirming. All copy is passed in as props." code={`<ChoiceDialog\n  title="Choose a view"\n  options={[{ value: 'list', label: 'List' }, { value: 'board', label: 'Board' }]}\n  defaultValue={[view]}\n  onConfirm={([next]) => setView(next)}\n  trigger={<Button variant="outline">Change view</Button>}\n/>`}>
      <ChoiceDialogDemo />
    </Section>
  </>;
}
