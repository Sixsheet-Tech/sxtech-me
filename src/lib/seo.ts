/*
 * Structured data (JSON-LD) and <head> builders for the blog and author pages.
 * Every article links to a Person entity for its founder (with LinkedIn in
 * sameAs), and every Person links back to the Organization.
 */
import { DICTS, SITE, localePath, type Lang } from "@/lib/i18n";
import { authorBySlug, hasTranslation, type Post } from "@/lib/blog";
import { CONTACT, TEAM, type TeamMember } from "@/lib/site-content";

const ORG_ID = `${SITE}/#organization`;
const abs = (url: string) => (url.startsWith("http") ? url : SITE + url);
/** Inline JSON-LD for a route head's scripts array. */
export const ldScript = (data: object) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});
const personId = (slug: string) => `${SITE}/team/${slug}#person`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "SIXSHEET Tech",
    legalName: CONTACT.companyEn,
    alternateName: CONTACT.companyTh,
    url: SITE,
    logo: `${SITE}/logo-512.png`,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    founder: TEAM.map((m) => ({ "@id": personId(m.slug) })),
  };
}

export function personSchema(member: TeamMember, index: number, lang: Lang) {
  const copy = DICTS[lang].team[index];
  return {
    "@type": "Person",
    "@id": personId(member.slug),
    name: member.name,
    alternateName: member.nickname,
    jobTitle: copy.role,
    description: copy.bio,
    knowsAbout: copy.focus,
    image: abs(member.photo),
    url: SITE + localePath(lang, `/team/${member.slug}`),
    sameAs: [member.linkedin],
    worksFor: { "@id": ORG_ID },
  };
}

function alternates(path: string, langs: Lang[]) {
  const links: { rel: string; hrefLang: string; href: string }[] = langs.map((l) => ({
    rel: "alternate",
    hrefLang: l,
    href: SITE + localePath(l, path),
  }));
  if (langs.includes("en"))
    links.push({ rel: "alternate", hrefLang: "x-default", href: SITE + path });
  return links;
}

function baseMeta(lang: Lang, title: string, description: string, url: string, type = "website") {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: lang === "th" ? "th_TH" : "en_US" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export function postHead(post: Post) {
  const path = `/blog/${post.slug}`;
  const url = SITE + localePath(post.lang, path);
  const author = authorBySlug(post.author);
  const t = DICTS[post.lang];
  const langs = (["en", "th"] as const).filter((l) => hasTranslation(post.slug, l));

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    inLanguage: post.lang,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: url,
    image: post.cover ? abs(post.cover) : undefined,
    keywords: post.tags.join(", "),
    author: author ? personSchema(author.member, author.index, post.lang) : undefined,
    publisher: { "@id": ORG_ID },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.nav.home,
        item: SITE + localePath(post.lang, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.nav.blog,
        item: SITE + localePath(post.lang, "/blog"),
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
  const faq = post.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return {
    meta: [
      ...baseMeta(post.lang, `${post.title} | SIXSHEET Tech`, post.description, url, "article"),
      { property: "article:published_time", content: post.date },
      ...(author ? [{ name: "author", content: author.member.name }] : []),
      ...(post.cover ? [{ property: "og:image", content: abs(post.cover) }] : []),
      ...(post.draft ? [{ name: "robots", content: "noindex" }] : []),
    ],
    scripts: [ldScript(article), ldScript(breadcrumb), ...(faq ? [ldScript(faq)] : [])],
    links: [{ rel: "canonical", href: url }, ...alternates(path, langs)],
  };
}

export function authorHead(lang: Lang, slug: string) {
  const author = authorBySlug(slug);
  if (!author) return {};
  const { member, index } = author;
  const copy = DICTS[lang].team[index];
  const path = `/team/${slug}`;
  const url = SITE + localePath(lang, path);
  const title = `${member.name} (${member.nickname}) — ${copy.role} | SIXSHEET Tech`;
  return {
    meta: [
      ...baseMeta(lang, title, copy.bio, url, "profile"),
      { property: "og:image", content: abs(member.photo) },
    ],
    scripts: [
      ldScript({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url,
        mainEntity: personSchema(member, index, lang),
      }),
    ],
    links: [{ rel: "canonical", href: url }, ...alternates(path, ["en", "th"])],
  };
}
