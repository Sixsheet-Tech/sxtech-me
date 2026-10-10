import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  Camera,
  CircleDollarSign,
  Fingerprint,
  Image as ImageIcon,
  Send,
  Share2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Eyebrow, PageShell, Section } from "@/components/site/Shell";
import { useT } from "@/lib/i18n";
import popcontProduct from "@/assets/profile/popcont-product.jpg";
import capturesProduct from "@/assets/profile/captures-product.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

export function PlatformsPage() {
  const p = useT().platformsPage;
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-4 md:pt-20">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-balance text-4xl font-extrabold uppercase leading-[1.02] text-foreground md:text-6xl">
          {p.titleA}
          <br />
          {p.titleB}
          <span className="text-brand">{p.titleC}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">{p.sub}</p>
      </section>
      <PopCont />
      <Captures />
      <OtherVentures />
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}

/** Real product screenshot shown inside a minimal browser window. */
function BrowserFrame({ url, src, alt }: { url: string; src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated">
      <div className="flex items-center gap-2 border-b border-border/80 bg-secondary/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-card px-3 py-0.5 text-xs text-muted-foreground">
          {url}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

function VisitButton({ href, label }: { href: string; label: string }) {
  return (
    <Button
      asChild
      size="lg"
      className="rounded-full bg-gradient-primary px-7 text-white shadow-glow hover:opacity-90"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label} <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>
    </Button>
  );
}

const POPCONT_ICONS = [Fingerprint, ImageIcon, Send, BarChart3];

function PopCont() {
  const p = useT().platformsPage;
  const c = p.popcont;
  return (
    <Section>
      <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card">
        <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {p.platformLabel} 01
            </div>
            <h2 className="mt-2 text-4xl font-extrabold text-foreground">PopCont</h2>
            <p className="mt-2 text-lg font-semibold text-brand">{c.tag}</p>
            <p className="mt-4 text-muted-foreground">{c.body}</p>
            <div className="mt-8">
              <VisitButton href="https://popcont.ai/" label={c.visit} />
            </div>
          </div>
          <BrowserFrame url="popcont.ai" src={popcontProduct} alt="PopCont website" />
        </div>
        <div className="grid gap-px border-t border-border/80 bg-border/80 sm:grid-cols-2 lg:grid-cols-4">
          {c.features.map((f, i) => {
            const Icon = POPCONT_ICONS[i];
            return (
              <div key={f.title} className="bg-card p-6">
                <Icon className="h-6 w-6 text-brand" />
                <div className="mt-3 font-bold text-foreground">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-border/80 bg-secondary/60 p-8 md:grid-cols-5">
          {c.stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-extrabold text-foreground">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const CAPTURES_ICONS = [Camera, Calendar, Users, Share2, BarChart3, CircleDollarSign];

function Captures() {
  const p = useT().platformsPage;
  const c = p.captures;
  return (
    <Section>
      <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card">
        <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {p.platformLabel} 02
            </div>
            <h2 className="mt-2 text-4xl font-extrabold text-foreground">Captures Booth</h2>
            <p className="mt-2 text-lg font-semibold text-brand">{c.tag}</p>
            <p className="mt-4 text-muted-foreground">{c.body}</p>
            <div className="mt-8">
              <VisitButton href="https://captures.photo/booth" label={c.visit} />
            </div>
          </div>
          <BrowserFrame url="captures.photo/booth" src={capturesProduct} alt="Captures Booth website" />
        </div>
        <div className="grid grid-cols-2 gap-px border-t border-border/80 bg-border/80 md:grid-cols-3 xl:grid-cols-6">
          {c.flow.map((f, i) => {
            const Icon = CAPTURES_ICONS[i];
            return (
              <div key={f.title} className="bg-card p-5">
                <Icon className="h-5 w-5 text-brand" />
                <div className="font-display mt-2 text-sm font-extrabold uppercase text-foreground">{f.title}</div>
                <p className="text-xs text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>
        <div className="grid gap-4 border-t border-border/80 bg-secondary/60 p-8 sm:grid-cols-2 lg:grid-cols-3">
          {c.useCases.map((u) => (
            <div key={u.title}>
              <div className="font-bold text-foreground">{u.title}</div>
              <p className="text-sm text-muted-foreground">{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const VENTURE_LINKS = [
  { name: "Innerly", url: "https://innerly.live/" },
  { name: "PokerOS", url: "https://pokeros-pearl.vercel.app/" },
];

function OtherVentures() {
  const p = useT().platformsPage;
  return (
    <Section eyebrow={p.moreEyebrow} title={p.moreTitle}>
      <div className="grid gap-5 md:grid-cols-2">
        {p.ventures.map((v, i) => (
          <a
            key={VENTURE_LINKS[i].name}
            href={VENTURE_LINKS[i].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-3xl border border-border/80 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-2xl font-extrabold text-foreground">
                  {VENTURE_LINKS[i].name}
                </div>
                <div className="text-sm font-semibold text-brand">{v.type}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{v.body}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
