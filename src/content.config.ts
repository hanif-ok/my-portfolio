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

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};

