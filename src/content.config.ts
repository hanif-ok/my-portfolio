import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    readMinutes: z.number().int().positive(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number().int(),
    featured: z.boolean().default(true),
    featuredOrder: z.number().int().optional(),
    image: z.string().optional(),
    href: z.string().optional(),
    lang: z.enum(["en", "id"]).optional(),
    techStack: z.array(z.string()).optional(),
  }),
});

const sandboxCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sandbox" }),
  schema: z
    .object({
      title: z.string(),
      // One-sentence hook: the card subtitle, and the <meta description> of the
      // about page.
      summary: z.string(),
      year: z.number().int(),
      // Sort key. Only the EN twin's value is ever read - see lib/sandbox.ts.
      order: z.number().int().default(0),
      draft: z.boolean().default(false),

      // Cover art, site-root-relative. Resolved through BASE_URL at render time.
      cover: z.string(),
      coverAlt: z.string().optional(),

      // The two outbound links are modelled separately on purpose. An item with
      // no deploy simply omits liveHref, and the card promotes repoHref to the
      // primary action instead of rendering a dead "open it live" control.
      liveHref: z.url().optional(),
      repoHref: z.url().optional(),

      stack: z.array(z.string()).default([]),
      lang: z.enum(["en", "id"]).default("en"),
    })
    // The "no dead CTA" invariant, enforced at build time: an entry either has
    // somewhere to send you, or it fails the build.
    .refine((data) => Boolean(data.liveHref || data.repoHref), {
      message: "a sandbox entry needs at least one outbound link (liveHref or repoHref)",
      path: ["liveHref"],
    }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  sandbox: sandboxCollection,
};

