"use client";

import { Fragment, useMemo, useState, type CSSProperties } from "react";
import { assemblePrompt, fieldTypeFor, type Prompt, type RoleColor } from "@/lib/prompt-types";

const PLACEHOLDER_RE = /\[([A-Z0-9_]+)\]/g;

export default function PromptDetail({ prompt, color }: { prompt: Prompt; color: RoleColor }) {
  const variables = useMemo(() => {
    const found = new Set<string>();
    for (const match of prompt.body.matchAll(PLACEHOLDER_RE)) found.add(match[1]);
    return Array.from(found);
  }, [prompt.body]);

  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const assembled = useMemo(
    () => assemblePrompt(prompt.body, values),
    [prompt.body, values]
  );

  function setValue(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
    if (value.trim() && errors.has(name)) {
      setErrors((prev) => {
        const next = new Set(prev);
        next.delete(name);
        return next;
      });
    }
  }

  async function copy() {
    const empty = variables.filter((name) => !(values[name]?.trim()));
    if (empty.length > 0) {
      setErrors(new Set(empty));
      document.getElementById(`var-${empty[0]}`)?.focus();
      return;
    }
    setErrors(new Set());

    try {
      await navigator.clipboard.writeText(assembled);
    } catch (err) {
      console.error("[AI Prompt Library] Failed to copy prompt to clipboard:", err);
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="grid gap-8 lg:grid-cols-2"
      style={{ "--role-accent": color.accent, "--role-soft": color.soft } as CSSProperties}
    >
      <section aria-labelledby="prompt-heading">
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className="w-fit rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ background: color.soft, color: color.accent }}
          >
            {prompt.role}
          </span>
          <span className="w-fit text-xs font-medium text-muted">{prompt.category}</span>
        </div>
        <h1 id="prompt-heading" className="mt-2 text-xl font-semibold text-foreground">
          {prompt.title}
        </h1>
        <p className="mt-1 text-sm text-muted">{prompt.description}</p>
        {prompt.useCase && (
          <p className="mt-3 text-sm">
            <span className="font-medium text-foreground">Use when: </span>
            <span className="text-muted">{prompt.useCase}</span>
          </p>
        )}

        <h2 className="mt-6 text-sm font-medium text-foreground">Prompt text</h2>
        <pre className="mt-2 whitespace-pre-wrap rounded-lg border border-border bg-surface p-4 font-mono text-sm text-foreground">
          {highlightPlaceholders(prompt.body, color)}
        </pre>

        {variables.length > 0 && (
          <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-sm font-medium text-foreground">
              Fill in the variables
            </h2>
            {variables.map((name) => {
              const type = fieldTypeFor(name);
              const id = `var-${name}`;
              const errorId = `${id}-error`;
              const invalid = errors.has(name);
              const fieldClass = `rounded-md border px-3 py-2 text-sm text-foreground focus:border-[var(--role-accent)] ${
                invalid ? "border-red-500" : "border-border bg-surface"
              }`;
              return (
                <div key={name} className="flex flex-col gap-1">
                  <label htmlFor={id} className="text-xs font-medium text-muted">
                    {name.replaceAll("_", " ")}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      id={id}
                      rows={3}
                      value={values[name] ?? ""}
                      onChange={(e) => setValue(name, e.target.value)}
                      aria-invalid={invalid}
                      aria-describedby={invalid ? errorId : undefined}
                      className={fieldClass}
                    />
                  ) : (
                    <input
                      id={id}
                      type="text"
                      value={values[name] ?? ""}
                      onChange={(e) => setValue(name, e.target.value)}
                      aria-invalid={invalid}
                      aria-describedby={invalid ? errorId : undefined}
                      className={fieldClass}
                    />
                  )}
                  {invalid && (
                    <p id={errorId} className="text-xs text-red-600">
                      This field is required before copying.
                    </p>
                  )}
                </div>
              );
            })}
          </form>
        )}
      </section>

      <section aria-labelledby="assembled-heading" className="lg:sticky lg:top-8 lg:self-start">
        <div className="flex items-center justify-between">
          <h2 id="assembled-heading" className="text-sm font-medium text-foreground">
            Assembled prompt
          </h2>
          <button
            type="button"
            onClick={copy}
            className="rounded-md px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"
            style={{ background: color.accent }}
          >
            {copied ? "Copied" : "Copy to clipboard"}
          </button>
        </div>
        {errors.size > 0 && (
          <p role="alert" className="mt-2 text-xs text-red-600">
            Fill in {errors.size === 1 ? "the highlighted field" : "all highlighted fields"} before copying.
          </p>
        )}
        <pre className="mt-2 max-h-[70vh] overflow-auto whitespace-pre-wrap rounded-lg border border-border bg-surface p-4 font-mono text-sm text-foreground">
          {assembled}
        </pre>
      </section>
    </div>
  );
}

function highlightPlaceholders(text: string, color: { accent: string; soft: string }) {
  const parts = text.split(PLACEHOLDER_RE);
  // split on a capturing group interleaves literal text and captured names
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark
        key={i}
        className="rounded px-0.5 font-medium"
        style={{ background: color.soft, color: color.accent }}
      >
        [{part}]
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
