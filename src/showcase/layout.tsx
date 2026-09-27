import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Check, ChevronDown, Code2, Copy, Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '../design-system/components/button';
import { palettes, exportTokens, type Palette } from './palettes';
const links = [['/', 'Overview'], ['/colors', 'Colors'], ['/typography', 'Typography'], ['/components', 'Components']] as const;
export function ShowcaseLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: s => s.location.pathname });
  const [palette, setPalette] = useState<Palette>('cobalt');
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => { document.documentElement.dataset.palette = palette; document.documentElement.classList.toggle('dark', dark); }, [palette, dark]);
  useEffect(() => { setMenu(false); }, [pathname]);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-5 px-5 md:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3 font-display text-lg font-semibold text-foreground"><span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-base font-bold">R</span><span className="hidden sm:inline">Refined<span className="font-normal text-muted-foreground"> / System</span></span></Link>
        <div className="hidden h-5 w-px bg-border md:block" />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} to={href} className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${pathname === href ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{label}</Link>)}</nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative"><select aria-label="Color palette" value={palette} onChange={e => setPalette(e.target.value as Palette)} className="h-9 appearance-none rounded-md border border-border bg-card pl-3 pr-8 text-xs font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">{palettes.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select><ChevronDown className="pointer-events-none absolute right-2 top-2.5 size-4 text-muted-foreground" /></div>
          <Button variant="ghost" size="icon" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'} onClick={() => setDark(!dark)}>{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</Button>
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" onClick={() => setExportOpen(true)}><Code2 className="size-4" /> Export CSS</Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation" onClick={() => setMenu(!menu)}><Menu className="size-5" /></Button>
        </div>
      </div>
      {menu && <nav aria-label="Mobile navigation" className="flex flex-wrap gap-1 border-t border-border p-3 md:hidden">{links.map(([href, label]) => <Link key={href} to={href} className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted">{label}</Link>)}<Button variant="ghost" size="sm" onClick={() => { setExportOpen(true); setMenu(false); }}>Export CSS <ArrowUpRight className="size-4" /></Button></nav>}
    </header>
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-12 md:px-10 md:pt-16">{children}</main>
    <footer className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">Refined Modern Tech · A shared foundation, your own color.</footer>
    {exportOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 px-4" onMouseDown={e => { if (e.target === e.currentTarget) setExportOpen(false); }}><section role="dialog" aria-modal="true" aria-labelledby="export-title" className="w-full max-w-2xl rounded-lg border border-border bg-card p-5 text-card-foreground shadow-soft md:p-7"><div className="flex items-start justify-between gap-3"><div><h2 id="export-title" className="font-display text-xl font-semibold">Export theme CSS</h2><p className="mt-1 text-sm text-muted-foreground">{palettes.find(p => p.id === palette)?.name} · {dark ? 'Dark preview' : 'Light preview'}</p></div><Button variant="ghost" size="icon" aria-label="Close export" onClick={() => setExportOpen(false)}><X className="size-4" /></Button></div><pre className="mt-5 max-h-[55vh] overflow-auto rounded-md border border-border bg-muted p-4 text-xs leading-relaxed text-foreground"><code>{typeof document !== 'undefined' ? exportTokens(palette) : ''}</code></pre><div className="mt-5 flex justify-end"><Button onClick={async () => { await navigator.clipboard.writeText(exportTokens(palette)); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>{copied ? <Check className="size-4" /> : <Copy className="size-4" />}{copied ? 'Copied' : 'Copy CSS'}</Button></div></section></div>}
  </div>;
}
export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <div className="mb-12 max-w-2xl"><p className="mb-4 text-xs font-semibold uppercase text-primary">{eyebrow}</p><h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">{title}</h1><p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p></div>; }
