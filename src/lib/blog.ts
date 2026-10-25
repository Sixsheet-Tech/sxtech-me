/*
 * Blog content: Markdown files in content/blog/<slug>/<lang>.md with a small
 * frontmatter block. Posts marked `status: draft` render only in dev, so a
 * founder can review copy written in their name before it goes live.
 */
import { marked } from "marked";
import type { Lang } from "@/lib/i18n";
import { TEAM } from "@/lib/site-content";

export type FaqItem = { q: string; a: string };

export type Post = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  cover?: string;
  draft: boolean;
  html: string;
  faq: FaqItem[];
  readingMinutes: number;
};

const FILES = import.meta.glob("/content/blog/*/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/** Covers are referenced by path under src/assets, e.g. "workshop/step-design.jpg". */
const ASSETS = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,webp}", {
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { meta: {} as Record<string, string>, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i < 1) continue;
    meta[line.slice(0, i).trim()] = line
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return { meta, body: m[2] };
}

const plain = (md: string) =>
  md
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Q&A pairs from the "## FAQ" / "## คำถามที่พบบ่อย" section, for FAQPage schema. */
function extractFaq(body: string): FaqItem[] {
  const start = body.search(/^##\s+(FAQ|คำถามที่พบบ่อย)/m);
  if (start < 0) return [];
  const rest = body.slice(start).split(/\r?\n/).slice(1).join("\n");
  const section = rest.split(/^##\s/m)[0];
  return section
    .split(/^###\s+/m)
    .slice(1)
    .map((chunk) => {
      const [q, ...a] = chunk.split(/\r?\n/);
      return { q: plain(q), a: plain(a.join(" ")) };
    })
    .filter((f) => f.q && f.a);
}

function readingMinutes(body: string, lang: Lang) {
  const text = plain(body);
  // Thai has no word spaces; ~600 characters a minute is a fair reading pace.
  const mins = lang === "th" ? text.length / 600 : text.split(" ").length / 230;
  return Math.max(1, Math.round(mins));
}

const ALL: Post[] = Object.entries(FILES)
  .flatMap(([file, raw]): Post[] => {
    const [, slug, lang] = file.match(/\/content\/blog\/([^/]+)\/(th|en)\.md$/) ?? [];
    if (!slug) return [];
    const { meta, body } = parseFrontmatter(raw);
    const post: Post = {
      slug,
      lang: lang as Lang,
      title: meta.title ?? slug,
      description: meta.description ?? "",
      date: meta.date ?? "",
      updated: meta.updated || undefined,
      author: meta.author ?? "",
      tags: (meta.tags ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      cover: meta.cover ? ASSETS[`/src/assets/${meta.cover}`] : undefined,
      draft: meta.status === "draft",
      html: marked.parse(body, { async: false }) as string,
      faq: extractFaq(body),
      readingMinutes: readingMinutes(body, lang as Lang),
    };
    return [post];
  })
  .sort((a, b) => b.date.localeCompare(a.date));

const visible = (p: Post) => import.meta.env.DEV || !p.draft;

export function getPosts(lang: Lang) {
  return ALL.filter((p) => p.lang === lang && visible(p));
}

export function getPost(lang: Lang, slug: string) {
  return getPosts(lang).find((p) => p.slug === slug);
}

export function hasTranslation(slug: string, lang: Lang) {
  return Boolean(getPost(lang, slug));
}

export function postsByAuthor(lang: Lang, author: string) {
  return getPosts(lang).filter((p) => p.author === author);
}

export function authorBySlug(slug: string) {
  const i = TEAM.findIndex((m) => m.slug === slug);
  return i < 0 ? undefined : { member: TEAM[i], index: i };
}
