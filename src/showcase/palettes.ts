export type Palette = 'cobalt' | 'emerald' | 'amber' | 'violet';
export const palettes: { id: Palette; name: string; description: string }[] = [
  { id: 'cobalt', name: 'Tech Cobalt', description: 'Clear, confident, connected' },
  { id: 'emerald', name: 'Emerald Node', description: 'Grounded, fresh, assured' },
  { id: 'amber', name: 'Obsidian Amber', description: 'Warm, considered, precise' },
  { id: 'violet', name: 'Electric Violet', description: 'Expressive, intelligent, bold' },
];
export const colorTokens = [
  ['background', 'Canvas'], ['foreground', 'Primary text'], ['card', 'Raised surface'], ['card-foreground', 'Text on surfaces'],
  ['primary', 'Primary action'], ['primary-foreground', 'Text on primary'], ['secondary', 'Secondary action'],
  ['secondary-foreground', 'Text on secondary'], ['muted', 'Quiet surface'], ['muted-foreground', 'Supporting text'],
  ['accent', 'Highlighted surface'], ['accent-foreground', 'Text on accent'], ['destructive', 'Critical action'],
  ['destructive-foreground', 'Text on critical'], ['border', 'Dividers'], ['input', 'Input border'], ['ring', 'Focus indicator'],
] as const;
export const exportTokens = (palette: Palette) => {
  const sheet = Array.from(document.styleSheets).flatMap((s) => { try { return Array.from(s.cssRules); } catch { return []; } });
  const collect = (selector: string) => sheet.flatMap((r) => {
    if ('selectorText' in r && (r as CSSStyleRule).selectorText?.split(',').map(x => x.trim()).includes(selector)) return [r as CSSStyleRule];
    return [];
  });
  const extract = (selector: string) => collect(selector).map(rule => rule.cssText).join('\n');
  return `/* Refined Modern Tech · ${palettes.find(p => p.id === palette)?.name} */\n/* Import the library theme.css for Tailwind mappings and shared surfaces. */\n${extract(':root')}\n${extract(`[data-palette="${palette}"]`)}\n${extract('.dark')}\n${extract(`.dark[data-palette="${palette}"]`)}`;
};
