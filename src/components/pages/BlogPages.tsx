import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import { CtaBand, Eyebrow, PageShell, Section } from "@/components/site/Shell";
import { authorBySlug, getPosts, postsByAuthor, type Post } from "@/lib/blog";
import { useLang, useLocalePath, useT, type Lang } from "@/lib/i18n";

const formatDate = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === "th" ? "th-TH" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));

function AuthorChip({ slug, date }: { slug: string; date: string }) {
  const lang = useLang();
  const t = useT();
  const L = useLocalePath();
  const author = authorBySlug(slug);
  if (!author) return null;
  const { member, index } = author;
  return (
    <Link to={L(`/team/${member.slug}`)} className="group flex items-center gap-3">
      <img
        src={member.photo}
        alt={member.name}
        className="h-10 w-10 rounded-full object-cover object-top"
      />
      <div className="text-sm leading-tight">
        <div className="font-semibold text-foreground group-hover:text-brand">
          {t.blog.by} {member.name} ({member.nickname})
        </div>
        <div className="text-muted-foreground">
          {t.team[index].role} · {formatDate(date, lang)}
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  const t = useT();
  const L = useLocalePath();
  const author = authorBySlug(post.author);
  return (
    <Link
      to={L(`/blog/${post.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      {post.cover && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand">
          {post.tags[0]}
          {post.draft && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">
              {t.blog.draft}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-xl font-extrabold leading-snug text-foreground">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
        <div className="mt-auto flex items-center justify-between pt-6 text-sm text-muted-foreground">
          <span>
            {author?.member.nickname} · {t.blog.minRead(post.readingMinutes)}
          </span>
          <span className="flex items-center gap-1 font-semibold text-foreground group-hover:text-brand">
            {t.blog.readMore} <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function PostGrid({ posts, empty }: { posts: Post[]; empty: string }) {
  if (!posts.length) return <p className="text-muted-foreground">{empty}</p>;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </div>
  );
}

export function BlogIndexPage() {
  const lang = useLang();
  const t = useT();
  return (
    <PageShell>
      <Section
        eyebrow={t.blog.eyebrow}
        title={
          <>
            {t.blog.titleA}
            <span className="text-brand">{t.blog.titleB}</span>
          </>
        }
        subtitle={t.blog.subtitle}
      >
        <PostGrid posts={getPosts(lang)} empty={t.blog.empty} />
      </Section>
      <CtaBand />
    </PageShell>
  );
}

export function BlogPostPage({ post }: { post: Post }) {
  const t = useT();
  const L = useLocalePath();
  const author = authorBySlug(post.author);
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 pt-12 pb-16 md:pt-16">
        <Link
          to={L("/blog")}
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {t.blog.back}
        </Link>
        <div className="mt-8">
          <Eyebrow>{post.tags.join(" · ")}</Eyebrow>
          {post.draft && (
            <div className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              {t.blog.draft}
            </div>
          )}
          <h1 className="text-balance text-3xl font-extrabold leading-[1.15] text-foreground md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-border/70 py-5">
            <AuthorChip slug={post.author} date={post.date} />
            <span className="text-sm text-muted-foreground">
              {t.blog.minRead(post.readingMinutes)}
            </span>
          </div>
        </div>
        {post.cover && (
          <img
            src={post.cover}
            alt=""
            className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover shadow-elevated"
          />
        )}
        <div className="prose-blog mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

        {author && (
          <aside className="mt-14 flex flex-col gap-5 rounded-3xl border border-border/80 bg-card p-6 sm:flex-row sm:items-start">
            <img
              src={author.member.photo}
              alt={author.member.name}
              className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top"
            />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {t.blog.aboutAuthor}
              </div>
              <div className="mt-1 font-display text-lg font-extrabold text-foreground">
                {author.member.name} ({author.member.nickname})
              </div>
              <div className="text-sm text-muted-foreground">{t.team[author.index].role}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t.team[author.index].bio}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <Link to={L(`/team/${author.member.slug}`)} className="text-brand hover:underline">
                  {t.blog.viewProfile}
                </Link>
                <a
                  href={author.member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>
        )}
      </article>
      <CtaBand />
    </PageShell>
  );
}

export function AuthorPage({ slug }: { slug: string }) {
  const lang = useLang();
  const t = useT();
  const author = authorBySlug(slug);
  if (!author) return null;
  const { member, index } = author;
  const copy = t.team[index];
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-14 pb-6 md:pt-20 lg:grid-cols-[320px_1fr]">
        <img
          src={member.photo}
          alt={member.name}
          className="aspect-[9/10] w-full max-w-xs rounded-3xl object-cover object-top shadow-elevated"
        />
        <div>
          <Eyebrow>
            {t.blog.founder} · {copy.role}
          </Eyebrow>
          <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            {member.name} <span className="text-brand">“{member.nickname}”</span>
          </h1>
          <div className="mt-4 font-semibold text-foreground">{copy.focus}</div>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">{copy.bio}</p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" /> {t.blog.connect}
          </a>
        </div>
      </section>
      <Section title={`${t.blog.postsBy} ${member.nickname}`}>
        <PostGrid posts={postsByAuthor(lang, slug)} empty={t.blog.noPosts} />
      </Section>
      <CtaBand />
    </PageShell>
  );
}
