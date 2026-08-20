import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PROMPTS_DIR = join(process.cwd(), "prompts");

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function findMarkdownFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return findMarkdownFiles(full);
    return entry.endsWith(".md") ? [full] : [];
  });
}

async function main() {
  const files = findMarkdownFiles(PROMPTS_DIR);
  const roleCache = new Map<string, string>(); // name -> id
  const categoryCache = new Map<string, string>(); // `${roleId}:${name}` -> id

  let promptCount = 0;

  for (const file of files) {
    const raw = readFileSync(file, "utf8");
    const { data, content } = matter(raw);

    let roleId = roleCache.get(data.role);
    if (!roleId) {
      const role = await prisma.promptRole.upsert({
        where: { name: data.role },
        update: {},
        create: { name: data.role, slug: slugify(data.role) },
      });
      roleId = role.id;
      roleCache.set(data.role, roleId);
    }

    const categoryKey = `${roleId}:${data.category}`;
    let categoryId = categoryCache.get(categoryKey);
    if (!categoryId) {
      const category = await prisma.promptCategory.upsert({
        where: { roleId_slug: { roleId, slug: slugify(data.category) } },
        update: {},
        create: { roleId, name: data.category, slug: slugify(data.category) },
      });
      categoryId = category.id;
      categoryCache.set(categoryKey, categoryId);
    }

    await prisma.prompt.upsert({
      where: { slug: data.slug },
      update: {},
      create: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        useCase: data.useCase,
        promptText: content.trim(),
        variables: data.variables ?? [],
        tags: data.tags ?? [],
        roleId,
        categoryId,
      },
    });
    promptCount++;
  }

  console.log(
    `Seeded ${promptCount} prompts across ${roleCache.size} roles and ${categoryCache.size} categories.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
