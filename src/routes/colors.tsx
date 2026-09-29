import { createFileRoute } from '@tanstack/react-router';
import { Check, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../design-system/components/button';
import { ShowcaseLayout, PageHeading } from '../showcase/layout';
import { colorTokens, palettes, type Palette } from '../showcase/palettes';

export const Route = createFileRoute('/colors')({
  head: () => ({
    meta: [
      { title: 'Colors — Refined Modern Tech' },
      { name: 'description', content: 'Explore semantic color tokens and WCAG contrast results across every Refined Modern Tech palette.' },
      { property: 'og:title', content: 'Colors — Refined Modern Tech' },
      { property: 'og:description', content: 'Semantic colors and live WCAG contrast results across every palette.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: Colors,
});

type AuditKind = 'text' | 'component';
type AuditFilter = 'all' | AuditKind;
type ThemeMode = 'light' | 'dark';
type Rgba = { r: number; g: number; b: number; a: number };
type AuditResult = Record<string, number>;

const contrastChecks: { id: string; label: string; foreground: string; background: string; kind: AuditKind }[] = [
  { id: 'body', label: 'Body text', foreground: 'foreground', background: 'background', kind: 'text' },
  { id: 'supporting', label: 'Supporting text', foreground: 'muted-foreground', background: 'background', kind: 'text' },
  { id: 'surface', label: 'Surface text', foreground: 'card-foreground', background: 'card', kind: 'text' },
  { id: 'primary', label: 'Primary action', foreground: 'primary-foreground', background: 'primary', kind: 'text' },
  { id: 'secondary', label: 'Secondary action', foreground: 'secondary-foreground', background: 'secondary', kind: 'text' },
  { id: 'accent', label: 'Accent surface', foreground: 'accent-foreground', background: 'accent', kind: 'text' },
  { id: 'destructive', label: 'Critical action', foreground: 'destructive-foreground', background: 'destructive', kind: 'text' },
  { id: 'border', label: 'Divider', foreground: 'border', background: 'background', kind: 'component' },
  { id: 'input', label: 'Input boundary', foreground: 'input', background: 'background', kind: 'component' },
  { id: 'ring', label: 'Focus ring', foreground: 'ring', background: 'background', kind: 'component' },
];

const auditColumns = palettes.flatMap(palette => (['light', 'dark'] as const).map(mode => ({ palette, mode })));

function composite(foreground: Rgba, background: Rgba): Rgba {
  const alpha = foreground.a + background.a * (1 - foreground.a);
  if (alpha === 0) return { r: 0, g: 0, b: 0, a: 0 };
  return {
    r: (foreground.r * foreground.a + background.r * background.a * (1 - foreground.a)) / alpha,
    g: (foreground.g * foreground.a + background.g * background.a * (1 - foreground.a)) / alpha,
    b: (foreground.b * foreground.a + background.b * background.a * (1 - foreground.a)) / alpha,
    a: alpha,
  };
}

function luminance({ r, g, b }: Rgba) {
  const linear = (channel: number) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

function ratio(foreground: Rgba, background: Rgba) {
  const opaqueBackground = composite(background, { r: 255, g: 255, b: 255, a: 1 });
  const opaqueForeground = composite(foreground, opaqueBackground);
  const lighter = Math.max(luminance(opaqueForeground), luminance(opaqueBackground));
  const darker = Math.min(luminance(opaqueForeground), luminance(opaqueBackground));
  return (lighter + 0.05) / (darker + 0.05);
}

function readCssColor(value: string, context: CanvasRenderingContext2D): Rgba {
  context.clearRect(0, 0, 1, 1);
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  const [r = 0, g = 0, b = 0, a = 0] = context.getImageData(0, 0, 1, 1).data;
  return { r, g, b, a: a / 255 };
}

function runContrastAudit(): AuditResult {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) return {};

  const results: AuditResult = {};
  // The probe inherits custom properties from <html>, so a lingering `dark`
  // class would corrupt the light-mode columns. Measure in a known state.
  const hadDarkClass = document.documentElement.classList.contains('dark');
  document.documentElement.classList.remove('dark');
  for (const { palette, mode } of auditColumns) {
    const scope = document.createElement('div');
    scope.dataset['palette'] = palette.id;
    scope.className = mode === 'dark' ? 'dark' : '';
    scope.hidden = true;
    document.body.appendChild(scope);
    const styles = getComputedStyle(scope);
    for (const check of contrastChecks) {
      const foreground = readCssColor(styles.getPropertyValue(`--${check.foreground}`).trim(), context);
      const background = readCssColor(styles.getPropertyValue(`--${check.background}`).trim(), context);
      results[`${palette.id}-${mode}-${check.id}`] = ratio(foreground, background);
    }
    scope.remove();
  }
  if (hadDarkClass) document.documentElement.classList.add('dark');
  return results;
}

function TextStatus({ value }: { value: number }) {
  const label = value >= 7 ? 'AAA' : value >= 4.5 ? 'AA' : 'Fail';
  const passes = value >= 4.5;
  return <span className={`inline-flex items-center gap-1 text-xs font-semibold ${passes ? 'text-foreground' : 'text-destructive'}`}>{passes ? <Check className="size-3.5" aria-hidden="true" /> : <X className="size-3.5" aria-hidden="true" />}{label}</span>;
}

function ComponentStatus({ value }: { value: number }) {
  const passes = value >= 3;
  return <span className={`inline-flex items-center gap-1 text-xs font-semibold ${passes ? 'text-foreground' : 'text-destructive'}`}>{passes ? <Check className="size-3.5" aria-hidden="true" /> : <X className="size-3.5" aria-hidden="true" />}{passes ? 'Pass' : 'Fail'}</span>;
}

function ContrastAudit() {
  const [filter, setFilter] = useState<AuditFilter>('all');
  const [results, setResults] = useState<AuditResult>({});
  useEffect(() => { setResults(runContrastAudit()); }, []);
  const visibleChecks = contrastChecks.filter(check => filter === 'all' || check.kind === filter);

  return <section className="mt-16 border-t border-border pt-10" aria-labelledby="contrast-audit-title">
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase text-primary">Accessibility check</p>
        <h2 id="contrast-audit-title" className="mt-2 font-display text-2xl font-semibold">WCAG contrast matrix</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Live results from the rendered tokens across every palette and mode. Text uses 4.5:1 for AA and 7:1 for AAA; component boundaries use 3:1.</p>
      </div>
      <div className="flex rounded-md border border-border bg-card p-1" role="group" aria-label="Filter contrast checks">
        {([['all', 'All'], ['text', 'Text'], ['component', 'Components']] as const).map(([value, label]) => <Button key={value} type="button" size="sm" variant={filter === value ? 'secondary' : 'ghost'} aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</Button>)}
      </div>
    </div>
    <div className="mt-8 overflow-x-auto border-y border-border">
      <table className="w-full min-w-[980px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" rowSpan={2} className="sticky left-0 z-10 w-48 bg-background px-4 py-3 text-xs font-semibold text-foreground">Contrast pair</th>
            {palettes.map(palette => <th key={palette.id} scope="colgroup" colSpan={2} className="border-l border-border px-4 py-3 text-center font-display text-sm font-semibold">{palette.name}</th>)}
          </tr>
          <tr className="border-b border-border">
            {auditColumns.map(({ palette, mode }) => <th key={`${palette.id}-${mode}`} scope="col" className="border-l border-border px-3 py-2 text-center text-xs font-medium text-muted-foreground">{mode === 'light' ? 'Light' : 'Dark'}</th>)}
          </tr>
        </thead>
        <tbody>
          {visibleChecks.map(check => <tr key={check.id} className="border-b border-border last:border-0">
            <th scope="row" className="sticky left-0 z-10 bg-background px-4 py-4 align-top">
              <span className="block text-sm font-medium text-foreground">{check.label}</span>
              <span className="mt-1 block font-mono text-xs font-normal text-muted-foreground">{check.foreground} / {check.background}</span>
            </th>
            {auditColumns.map(({ palette, mode }) => {
              const value = results[`${palette.id}-${mode}-${check.id}`];
              return <td key={`${palette.id}-${mode}`} className="border-l border-border px-3 py-4 text-center align-top">
                {value === undefined ? <span className="text-xs text-muted-foreground">Calculating…</span> : <><span className="block font-mono text-sm font-semibold text-foreground">{value.toFixed(2)}:1</span><span className="mt-1 inline-block">{check.kind === 'text' ? <TextStatus value={value} /> : <ComponentStatus value={value} />}</span></>}
              </td>;
            })}
          </tr>)}
        </tbody>
      </table>
    </div>
    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">WCAG 2.x contrast is evaluated for normal text and visual component boundaries. Large text may pass AA at 3:1 even when marked Fail here.</p>
  </section>;
}

function Colors() {
  return <ShowcaseLayout>
    <PageHeading eyebrow="Foundations / 01" title="Color with purpose." description="A small set of semantic roles keeps every screen coherent. Change the palette above to watch the whole system shift." />
    <div className="mb-8 flex items-center justify-between border-b border-border pb-4"><h2 className="font-display text-xl font-semibold">Semantic tokens</h2><span className="text-xs text-muted-foreground">Light and dark ready</span></div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{colorTokens.map(([token, role]) => <div key={token} className="overflow-hidden rounded-md border border-border bg-card"><div className="flex h-28 items-center justify-center border-b border-border" style={{ backgroundColor: `var(--${token})`, color: token.endsWith('foreground') ? `var(--${token})` : undefined }}><span className="rounded-sm bg-card px-3 py-1 text-xs text-card-foreground shadow-soft">{role}</span></div><div className="p-4"><p className="font-mono text-xs font-semibold text-foreground">--{token}</p><p className="mt-1 text-xs text-muted-foreground">{role}</p></div></div>)}</div>
    <section className="mt-16 border-t border-border pt-8"><h2 className="font-display text-xl font-semibold">Contrast pairs</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{[['primary','primary-foreground','Primary action'],['accent','accent-foreground','Accent surface'],['card','card-foreground','Surface content']].map(([bg, fg, label]) => <div key={bg} className="flex min-h-32 flex-col justify-end rounded-md p-5" style={{ backgroundColor: `var(--${bg})`, color: `var(--${fg})` }}><span className="font-display text-lg font-semibold">{label}</span><span className="mt-1 font-mono text-xs">{bg} / {fg}</span></div>)}</div></section>
    <ContrastAudit />
  </ShowcaseLayout>;
}