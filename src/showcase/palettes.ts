import themeCss from '../design-system/styles/theme.css?raw';
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
  const block = (selector: string) => {
    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return themeCss.match(new RegExp(`(?:^|\\n)${escaped}\\s*\\{([^}]*)\\}`, 'm'))?.[1] ?? '';
  };
  const mapping = themeCss.match(/@theme inline\s*\{[^}]*\}/)?.[0] ?? '';
  const paletteBlock = themeCss.match(new RegExp(`\\[data-palette="${palette}"\\]\\s*\\{([^}]*)\\}`))?.[1] ?? '';
  const darkPalette = block(`.dark[data-palette="${palette}"]`);
  return `/* Refined Modern Tech · ${palettes.find(p => p.id === palette)?.name} */\n/* Import the library theme.css first for fonts and shared tokens. */\n${mapping}\n:root {${block(':root')}\n${paletteBlock}}\n.dark {${block('.dark')}\n${darkPalette}}`;
};
