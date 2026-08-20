import Link from "next/link";
import { notFound } from "next/navigation";
import PromptDetail from "@/components/prompt-detail";
import { getPromptBySlug, getRoleColorMap } from "@/lib/prompts";

// Prompts are DB-backed and can change at runtime (add/edit/archive), so this
// page must not be statically cached from build time.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prompt = await getPromptBySlug(slug);
  return { title: prompt ? `${prompt.title} | AI Prompt Library` : "Not found" };
}

export default async function PromptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prompt = await getPromptBySlug(slug);
  if (!prompt) notFound();
  const roleColors = await getRoleColorMap();
  const color = roleColors[prompt.role];

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-8">
      <Link href="/" className="text-sm text-muted hover:text-accent">
        ← Back to library
      </Link>
      <div className="mt-4">
        <PromptDetail prompt={prompt} color={color} />
      </div>
    </div>
  );
}
