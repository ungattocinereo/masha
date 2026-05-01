// Tiny Markdown renderer for tour `longDescription` strings.
// Handles: paragraphs, line breaks, bullet lists, bold, italic, inline links.
// Lifted from src/pages/index.astro:19-34. Server-side only.

const inline = (t: string): string => t
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>');

export const mdToHtml = (s: string | undefined): string => {
  if (!s) return '';
  return s.split(/\n{2,}/).map(block => {
    if (/^[•*\-]\s/m.test(block)) {
      const items = block.split(/\n/).filter(Boolean).map(line => {
        const cleaned = line.replace(/^[•*\-]\s*/, '').trim();
        return cleaned ? `<li>${inline(cleaned)}</li>` : '';
      }).join('');
      return `<ul>${items}</ul>`;
    }
    return `<p>${inline(block).replace(/\n/g, '<br>')}</p>`;
  }).join('');
};
