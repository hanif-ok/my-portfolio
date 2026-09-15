import type { CollectionEntry } from "astro:content";

export type SandboxEntry = CollectionEntry<"sandbox">;
type SandboxLocale = "en" | "id";

/**
 * One sandbox project, with its language twins collapsed together.
 *
 * `en` is canonical: it owns the slug, cover, links, order, year and stack.
 * `id` carries only the translated title, summary, coverAlt and body.
 */
export interface SandboxItem {
  slug: string;
  en: SandboxEntry;
  id?: SandboxEntry;
}

/** "en/relation-blueprint" -> "relation-blueprint" */
export const sandboxSlug = (entryId: string) => entryId.replace(/^(?:en|id)\//, "");

// Directory wins over frontmatter. `lang` defaults to "en", so an id/ file that
// forgets its `lang: "id"` line would otherwise land in the EN slot and silently
// overwrite its own twin.
const localeOf = (entry: SandboxEntry): SandboxLocale =>
  entry.id.startsWith("id/") ? "id" : entry.data.lang ?? "en";

/**
 * Collapses en/ + id/ twins into one item per slug, ordered for display.
 *
 * EVERY enumeration of the sandbox collection must go through this — the home
 * card, the listing page, and getStaticPaths. Skipping it renders each item
 * twice on the listing, and makes getStaticPaths emit duplicate params, which
 * is a hard build failure rather than a visual glitch.
 *
 * Sorting reads only the EN twin. Sorting each twin independently is how the
 * projects carousel ended up reordering itself on locale switch (en/leadcrm.md
 * says featuredOrder 0, id/leadcrm.md says 2).
 */
export function groupSandbox(entries: SandboxEntry[]): SandboxItem[] {
  const buckets = new Map<string, Partial<Record<SandboxLocale, SandboxEntry>>>();

  for (const entry of entries) {
    const slug = sandboxSlug(entry.id);
    const bucket = buckets.get(slug) ?? {};
    bucket[localeOf(entry)] = entry;
    buckets.set(slug, bucket);
  }

  return [...buckets.entries()]
    .map(([slug, twins]) => {
      // An id-only entry degrades to canonical rather than throwing, so a
      // half-finished translation can't break the build.
      const canonical = twins.en ?? twins.id;
      if (!canonical) throw new Error(`sandbox: no entry resolved for slug "${slug}"`);
      return { slug, en: canonical, id: twins.id };
    })
    .sort((a, b) => a.en.data.order - b.en.data.order || b.en.data.year - a.en.data.year);
}
