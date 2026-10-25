import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@/lib/blog";
import { PAGE_PATHS, SITE, localePath } from "@/lib/i18n";
import { TEAM } from "@/lib/site-content";

function sitemap() {
  const urls: { path: string; lastmod?: string }[] = [];
  for (const lang of ["en", "th"] as const) {
    for (const path of Object.values(PAGE_PATHS)) urls.push({ path: localePath(lang, path) });
    for (const m of TEAM) urls.push({ path: localePath(lang, `/team/${m.slug}`) });
    for (const p of getPosts(lang).filter((p) => !p.draft)) {
      urls.push({ path: localePath(lang, `/blog/${p.slug}`), lastmod: p.updated ?? p.date });
    }
  }
  const body = urls
    .map(
      (u) =>
        `  <url><loc>${SITE}${u.path}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
