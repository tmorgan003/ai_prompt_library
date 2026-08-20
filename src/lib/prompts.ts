import "server-only";
import { prisma } from "./db";
import { buildRoleColorMap, type Prompt, type RoleColor } from "./prompt-types";

type PromptRow = {
  title: string;
  slug: string;
  description: string;
  useCase: string;
  promptText: string;
  variables: string[];
  tags: string[];
  role: { name: string };
  category: { name: string };
};

function toPrompt(row: PromptRow): Prompt {
  return {
    title: row.title,
    slug: row.slug,
    role: row.role.name,
    category: row.category.name,
    description: row.description,
    useCase: row.useCase,
    variables: row.variables,
    tags: row.tags,
    body: row.promptText,
  };
}

export async function getAllPrompts(): Promise<Prompt[]> {
  const rows = await prisma.prompt.findMany({
    where: { archived: false },
    include: { role: true, category: true },
    orderBy: [{ role: { name: "asc" } }, { category: { name: "asc" } }, { title: "asc" }],
  });
  return rows.map(toPrompt);
}

export async function getPromptBySlug(slug: string): Promise<Prompt | null> {
  const row = await prisma.prompt.findFirst({
    where: { slug, archived: false },
    include: { role: true, category: true },
  });
  return row ? toPrompt(row) : null;
}

export async function getRoles(): Promise<string[]> {
  const roles = await prisma.promptRole.findMany({
    where: { prompts: { some: { archived: false } } },
    orderBy: { name: "asc" },
  });
  return roles.map((r) => r.name);
}

/** Alphabetically ordered categories per role, for roles/categories with at least one active prompt. */
export async function getRoleCategoryMap(): Promise<Record<string, string[]>> {
  const categories = await prisma.promptCategory.findMany({
    where: { prompts: { some: { archived: false } } },
    include: { role: true },
    orderBy: [{ role: { name: "asc" } }, { name: "asc" }],
  });
  const map: Record<string, string[]> = {};
  for (const c of categories) {
    (map[c.role.name] ??= []).push(c.name);
  }
  return map;
}

/** Collision-free accent color per role, computed across the whole present role set. */
export async function getRoleColorMap(): Promise<Record<string, RoleColor>> {
  return buildRoleColorMap(await getRoles());
}
