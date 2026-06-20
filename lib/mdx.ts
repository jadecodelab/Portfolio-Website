import fs from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export type ContentCollection = "projects" | "devlog";

export type ContentLink = {
  label: string;
  href: string;
};

export type MdxFrontmatter = {
  title: string;
  date: string;
  summary?: string;
  tags: string[];
  stack: string[];
  links: ContentLink[];
  featured?: boolean;
};

export type MdxSource = {
  slug: string;
  frontmatter: MdxFrontmatter;
  body: string;
};

export type CompiledMdx = Omit<MdxSource, "body"> & {
  content: ReactElement;
};

const contentRoot = path.join(process.cwd(), "content");

function getCollectionPath(collection: ContentCollection) {
  return path.join(contentRoot, collection);
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.length > 0);
}

function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return "";
}

function normalizeLinks(value: unknown): ContentLink[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is ContentLink => {
      return (
        typeof item === "object" &&
        item !== null &&
        "label" in item &&
        "href" in item &&
        typeof item.label === "string" &&
        typeof item.href === "string"
      );
    });
  }

  if (typeof value === "object" && value !== null) {
    return Object.entries(value).flatMap(([label, href]) => {
      return typeof href === "string" ? [{ label, href }] : [];
    });
  }

  return [];
}

function normalizeFrontmatter(data: Record<string, unknown>): MdxFrontmatter {
  return {
    title: typeof data.title === "string" ? data.title : "Untitled",
    date: normalizeDate(data.date),
    summary: typeof data.summary === "string" ? data.summary : undefined,
    tags: normalizeStringArray(data.tags),
    stack: normalizeStringArray(data.stack),
    links: normalizeLinks(data.links),
    featured: typeof data.featured === "boolean" ? data.featured : undefined,
  };
}

async function readMdxSource(collection: ContentCollection, slug: string) {
  const filePath = path.join(getCollectionPath(collection), `${slug}.mdx`);

  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

export async function getSlugs(collection: ContentCollection) {
  const entries = await fs.readdir(getCollectionPath(collection), { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

export async function getMdxBySlug(collection: ContentCollection, slug: string): Promise<MdxSource | null> {
  const source = await readMdxSource(collection, slug);
  if (!source) return null;

  const parsed = matter(source);

  return {
    slug,
    frontmatter: normalizeFrontmatter(parsed.data),
    body: parsed.content,
  };
}

export async function getAllMdx(collection: ContentCollection) {
  const slugs = await getSlugs(collection);
  const entries = await Promise.all(slugs.map((slug) => getMdxBySlug(collection, slug)));

  return entries
    .filter((entry): entry is MdxSource => entry !== null)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

export async function getCompiledMdxBySlug(
  collection: ContentCollection,
  slug: string,
): Promise<CompiledMdx | null> {
  const source = await getMdxBySlug(collection, slug);
  if (!source) return null;

  const { content } = await compileMDX({
    source: source.body,
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    slug: source.slug,
    frontmatter: source.frontmatter,
    content,
  };
}

export function getAllProjects() {
  return getAllMdx("projects");
}

export function getProjectBySlug(slug: string) {
  return getMdxBySlug("projects", slug);
}

export function getCompiledProjectBySlug(slug: string) {
  return getCompiledMdxBySlug("projects", slug);
}

export function getAllDevlogPosts() {
  return getAllMdx("devlog");
}

export function getDevlogPostBySlug(slug: string) {
  return getMdxBySlug("devlog", slug);
}

export function getCompiledDevlogPostBySlug(slug: string) {
  return getCompiledMdxBySlug("devlog", slug);
}