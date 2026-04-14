import type { Dictionary } from './dictionaries';
import { formatTemplate } from './format';

export function translate(
  dict: Dictionary,
  path: string,
  vars?: Record<string, string | number>,
): string {
  const parts = path.split('.');
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in (cur as object)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  if (typeof cur !== 'string') return path;
  return vars ? formatTemplate(cur, vars) : cur;
}
