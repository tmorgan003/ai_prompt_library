import Library from "@/components/library";
import { getAllPrompts, getRoles, getRoleCategoryMap, getRoleColorMap } from "@/lib/prompts";

// Prompts are DB-backed and can change at runtime (add/edit/archive), so this
// page must not be statically cached from build time.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [prompts, roles, categoriesByRole, roleColors] = await Promise.all([
    getAllPrompts(),
    getRoles(),
    getRoleCategoryMap(),
    getRoleColorMap(),
  ]);
  const gradient = roles.map((r) => roleColors[r].accent);

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div
          className="h-1.5 w-full"
          style={{
            background:
              gradient.length > 1
                ? `linear-gradient(90deg, ${gradient.join(", ")})`
                : (gradient[0] ?? "var(--accent)"),
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-8">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            AI Prompt Library
          </h1>
          <p className="mt-1 text-sm text-muted">
            {prompts.length} enterprise-grade prompts across {roles.length} role
            {roles.length === 1 ? "" : "s"}. Browse, fill in the variables, copy,
            paste into Claude.
          </p>
        </div>
      </header>
      <Library
        prompts={prompts}
        roles={roles}
        categoriesByRole={categoriesByRole}
        roleColors={roleColors}
      />
    </>
  );
}
