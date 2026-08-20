export interface Prompt {
  title: string;
  slug: string;
  role: string;
  category: string;
  description: string;
  useCase: string;
  variables: string[];
  tags: string[];
  body: string;
}

const MULTILINE_HINTS = [
  "NOTES",
  "TEXT",
  "LIST",
  "SUMMARY",
  "DESCRIPTION",
  "QUERY",
  "CRITERIA",
  "RESPONSE",
  "FINDINGS",
  "ITEMS",
  "FEATURES",
  "REQUIREMENTS",
  "CONCERNS",
  "SITUATION",
  "MESSAGE",
  "DEFINITIONS",
  "DEPENDENC",
  "STATEMENT",
  "NARRATIVE",
  "CAPABILITIES",
  "FUNCTIONALITY",
  "SOURCES",
];

export function fieldTypeFor(placeholder: string): "textarea" | "input" {
  return MULTILINE_HINTS.some((hint) => placeholder.includes(hint))
    ? "textarea"
    : "input";
}

export function assemblePrompt(body: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (text, [name, value]) => text.split(`[${name}]`).join(value || `[${name}]`),
    body
  );
}

export interface RoleColor {
  accent: string;
  soft: string;
}

const GOLDEN_ANGLE = 137.508;
// The 55-100deg band is yellow/yellow-green: low contrast as text on white
// and reads as muddy at these saturations, so hues are drawn from the
// remaining 315deg instead.
const HUE_GAP_START = 55;
const HUE_GAP_SIZE = 45;

function hslToHex(h: number, s: number, l: number): string {
  const a = (s / 100) * Math.min(l / 100, 1 - l / 100);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const channel = l / 100 - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * channel)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Index-based hue, spread by the golden angle so any N roles land at least
 * roughly 360/N degrees apart with no risk of two indices landing on the
 * same or a neighboring hue (the failure mode of hashing each role
 * independently against a small fixed palette, e.g. Product Manager and
 * Data Analyst both landing on violet).
 */
function hueForIndex(i: number): number {
  const reduced = (i * GOLDEN_ANGLE) % (360 - HUE_GAP_SIZE);
  return (reduced + HUE_GAP_START + HUE_GAP_SIZE) % 360;
}

/**
 * Assigns each role a distinct, well-separated color across the whole
 * present role set, not per-role in isolation. Roles are processed in a
 * stable (alphabetical) order so the assignment is deterministic; colors
 * can shift when a role is added or removed, since indices shift, but that
 * is a rare, deliberate content event, so even spacing across the current
 * set matters more here than perfect stability across edits.
 */
export function buildRoleColorMap(roles: string[]): Record<string, RoleColor> {
  const map: Record<string, RoleColor> = {};
  [...roles].sort().forEach((role, i) => {
    const hue = hueForIndex(i);
    map[role] = {
      accent: hslToHex(hue, 70, 38),
      soft: hslToHex(hue, 65, 96),
    };
  });
  return map;
}
