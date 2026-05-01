/**
 * Category → icon color modifier. Each value is the suffix for the `.icon--<name>` CSS
 * class which sets a solid `color:` driving FA SVG `fill="currentColor"`.
 *
 * Filename kept as `gradients.ts` for backwards-compat with existing imports; the export
 * is `colorForCategory` which returns the modifier name (terra | azure | lemon | …).
 */

export const CATEGORY_COLORS: Record<string, string> = {
  naples:  'terra',
  pompeii: 'azure',
  amalfi:  'lemon',
  quests:  'olive',
  sea:     'sky',
  multi:   'mute',
  couch:   'ink',
  extra:   'peach',
};

export const colorForCategory = (cat: string): string =>
  CATEGORY_COLORS[cat] || 'terra';
