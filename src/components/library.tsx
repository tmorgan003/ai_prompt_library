"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import type { Prompt, RoleColor } from "@/lib/prompt-types";

const ALL_ROLES = "All roles";
const ALL_CATEGORIES = "All categories";

export default function Library({
  prompts,
  roles,
  categoriesByRole,
  roleColors,
}: {
  prompts: Prompt[];
  roles: string[];
  categoriesByRole: Record<string, string[]>;
  roleColors: Record<string, RoleColor>;
}) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<string>(ALL_ROLES);
  const [category, setCategory] = useState<string>(ALL_CATEGORIES);

  const categories =
    role === ALL_ROLES
      ? Array.from(new Set(Object.values(categoriesByRole).flat()))
      : categoriesByRole[role] ?? [];

  const activeColor = role === ALL_ROLES ? null : roleColors[role];

  const fuse = useMemo(
    () =>
      new Fuse(prompts, {
        keys: ["title", "description", "body"],
        threshold: 0.32,
        ignoreLocation: true,
      }),
    [prompts]
  );

  const results = useMemo(() => {
    let base = query.trim() ? fuse.search(query.trim()).map((r) => r.item) : prompts;
    if (role !== ALL_ROLES) base = base.filter((p) => p.role === role);
    if (category !== ALL_CATEGORIES) base = base.filter((p) => p.category === category);
    return base;
  }, [query, role, category, fuse, prompts]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 md:px-8">
      <RoleTabs
        roles={roles}
        selected={role}
        roleColors={roleColors}
        onSelect={(r) => {
          setRole(r);
          setCategory(ALL_CATEGORIES);
        }}
      />

      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <aside className="hidden shrink-0 md:block md:w-56">
          <CategoryNav
            categories={categories}
            selected={category}
            onSelect={setCategory}
            color={activeColor}
          />
        </aside>

        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Search prompts
          </label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search prompts by title, description, or content..."
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent"
          />

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 md:hidden">
            <CategoryChips
              categories={categories}
              selected={category}
              onSelect={setCategory}
              color={activeColor}
            />
          </div>

          <p className="mt-4 text-sm text-muted">
            {results.length} prompt{results.length === 1 ? "" : "s"}
            {role !== ALL_ROLES ? ` for ${role}` : ""}
            {category !== ALL_CATEGORIES ? ` in ${category}` : ""}
          </p>

          {results.length === 0 ? (
            <p className="mt-12 text-center text-sm text-muted">
              No prompts match &ldquo;{query}&rdquo;. Try a different term or clear the
              filter.
            </p>
          ) : (
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {results.map((prompt) => (
                <li key={prompt.slug}>
                  <PromptCard
                    prompt={prompt}
                    showRole={role === ALL_ROLES}
                    color={roleColors[prompt.role]}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function RoleTabs({
  roles,
  selected,
  roleColors,
  onSelect,
}: {
  roles: string[];
  selected: string;
  roleColors: Record<string, RoleColor>;
  onSelect: (r: string) => void;
}) {
  return (
    <nav
      aria-label="Filter by role"
      className="flex flex-wrap gap-2 border-b border-border pb-4"
    >
      <RolePill
        label={ALL_ROLES}
        color={null}
        active={selected === ALL_ROLES}
        onClick={() => onSelect(ALL_ROLES)}
      />
      {roles.map((r) => (
        <RolePill
          key={r}
          label={r}
          color={roleColors[r]}
          active={selected === r}
          onClick={() => onSelect(r)}
        />
      ))}
    </nav>
  );
}

function RolePill({
  label,
  color,
  active,
  onClick,
}: {
  label: string;
  color: RoleColor | null;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active}
      className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
      style={
        active
          ? {
              background: color?.accent ?? "var(--foreground)",
              color: "#ffffff",
            }
          : {
              background: color?.soft ?? "var(--surface)",
              color: color?.accent ?? "var(--muted)",
              border: "1px solid var(--border)",
            }
      }
    >
      {label}
    </button>
  );
}

function CategoryNav({
  categories,
  selected,
  onSelect,
  color,
}: {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
  color: RoleColor | null;
}) {
  return (
    <nav
      aria-label="Filter by category"
      className="sticky top-8 flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto"
    >
      {[ALL_CATEGORIES, ...categories].map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onSelect(c)}
          aria-current={selected === c}
          className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
            selected === c ? "" : "font-normal text-muted hover:bg-surface hover:text-foreground"
          }`}
          style={
            selected === c
              ? { background: color?.soft ?? "var(--accent-soft)", color: color?.accent ?? "var(--accent)" }
              : undefined
          }
        >
          {c}
        </button>
      ))}
    </nav>
  );
}

function CategoryChips({
  categories,
  selected,
  onSelect,
  color,
}: {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
  color: RoleColor | null;
}) {
  return (
    <>
      {[ALL_CATEGORIES, ...categories].map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onSelect(c)}
          aria-current={selected === c}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
            selected === c ? "" : "border-border text-muted hover:text-foreground"
          }`}
          style={
            selected === c
              ? {
                  borderColor: color?.accent ?? "var(--accent)",
                  background: color?.soft ?? "var(--accent-soft)",
                  color: color?.accent ?? "var(--accent)",
                }
              : undefined
          }
        >
          {c}
        </button>
      ))}
    </>
  );
}

function PromptCard({
  prompt,
  showRole,
  color,
}: {
  prompt: Prompt;
  showRole: boolean;
  color: RoleColor;
}) {
  return (
    <Link
      href={`/prompts/${prompt.slug}`}
      className="group flex h-full flex-col gap-2 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-[var(--role-accent)]"
      style={{ "--role-accent": color.accent } as CSSProperties}
    >
      <div className="flex flex-wrap items-center gap-1.5">
        {showRole && (
          <span
            className="w-fit rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ background: color.soft, color: color.accent }}
          >
            {prompt.role}
          </span>
        )}
        <span className="w-fit text-xs font-medium text-muted">{prompt.category}</span>
      </div>
      <h2 className="font-medium text-foreground transition-colors group-hover:text-[var(--role-accent)]">
        {prompt.title}
      </h2>
      <p className="text-sm text-muted">{prompt.description}</p>
    </Link>
  );
}
