import Image from "next/image";
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

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-6 md:px-8">
          <Image
            src="/icon.png"
            alt=""
            width={1254}
            height={1254}
            priority
            className="h-10 w-10 shrink-0 md:h-12 md:w-12"
          />
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              AI Prompt Library
            </h1>
            <p className="mt-1 text-sm text-muted">
              {prompts.length} enterprise-grade prompts across {roles.length} role
              {roles.length === 1 ? "" : "s"}. Browse, fill in the variables, copy,
              paste into Claude.
            </p>
          </div>
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
