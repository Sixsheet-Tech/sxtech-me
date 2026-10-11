import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, FileCheck2 } from "lucide-react";
import {
  CtaBand,
  Eyebrow,
  GhostButton,
  ImageCard,
  PageShell,
  PrimaryButton,
  Rule,
  Section,
} from "@/components/site/Shell";
import {
  INDUSTRY_IMAGES,
  MOMENT_IMAGES,
  PILLAR_IMAGES,
  WHY_IMAGES,
  num,
} from "@/lib/site-content";
import { useLocalePath, useT } from "@/lib/i18n";
import heroWorkshop from "@/assets/workshop/hero-workshop.jpg";
import beliefFounders from "@/assets/workshop/belief-founders.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";
import popcontProduct from "@/assets/profile/popcont-product.jpg";
import capturesProduct from "@/assets/profile/captures-product.jpg";

export function HomePage() {
  return (
    <PageShell>
      <Hero />
      <CoreBelief />
      <Formula />
      <Moments />
      <ServicesTeaser />
      <IndustriesTeaser />
      <Platforms />
      <Why />
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}

function Hero() {
  const t = useT();
  const h = t.home;
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-14 pb-16 md:pt-20 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <Eyebrow>{h.heroEyebrow}</Eyebrow>
        <h1 className="hero-title text-balance text-5xl font-extrabold uppercase leading-[0.98] text-foreground md:text-7xl">
          {h.heroA}
          {h.heroBreak && <br />}
          <span className="text-brand">
            {h.heroB}
            <span className="whitespace-nowrap">{h.heroBTail}</span>
          </span>
          {h.heroC}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          {h.heroSub}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton to="/contact">{h.ctaPrimary}</PrimaryButton>
          <GhostButton to="/services">{h.ctaSecondary}</GhostButton>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold uppercase tracking-[0.18em] text-foreground/80">
          {["People", "Business", "Technology", "AI"].map((p, i) => (
            <span key={p} className="flex items-center gap-5">
              {i > 0 && <span className="h-4 w-px bg-border" />}
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-25 blur-3xl" />
        <img
          src={heroWorkshop}
          alt=""
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elevated"
        />
      </div>
    </section>
  );
}

function CoreBelief() {
  const t = useT();
  const h = t.home;
  return (
    <Section>
      <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-border/80 bg-card p-8 md:p-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Eyebrow>{h.beliefEyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-foreground md:text-5xl">
            {h.beliefA}
            <span className="text-brand">{h.beliefB}</span>
            {h.beliefC}
            <span className="text-brand">{h.beliefD}</span>
            {h.beliefE}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {h.beliefSub1}
            <br />
            {h.beliefSub2}
          </p>
          <div className="mt-8 grid max-w-md grid-cols-2 gap-6">
            {t.pillars.slice(0, 2).map((p) => (
              <div key={p.key} className="border-l-2 border-[color:var(--brand-violet)] pl-4">
                <div className="text-sm font-bold uppercase tracking-wide text-foreground">{p.key}</div>
                <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                  {p.traits.map((tr) => (
                    <li key={tr}>{tr}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <img
          src={beliefFounders}
          alt=""
          loading="lazy"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
      </div>
    </Section>
  );
}

function PillarCards() {
  const t = useT();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {t.pillars.map((p, i) => (
        <ImageCard key={p.key} image={PILLAR_IMAGES[i]}>
          <div className="font-display text-lg font-extrabold uppercase text-foreground">{p.key}</div>
          <Rule />
          <div className="font-semibold text-[color:var(--brand-indigo)]">{p.title}</div>
          <p className="mt-1 text-sm text-muted-foreground">{p.line}</p>
        </ImageCard>
      ))}
    </div>
  );
}

function Formula() {
  const h = useT().home;
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-extrabold uppercase leading-[1.05] text-foreground md:text-5xl">
          Business × People
          <br />
          Technology × AI
        </h2>
        <div className="flex items-center gap-4">
          <ArrowRight className="h-10 w-10 text-brand" />
          <div className="font-display text-2xl font-extrabold uppercase leading-[1.1] text-brand md:text-3xl">
            {h.impactA}
            <br />
            {h.impactB}
          </div>
        </div>
      </div>
      <PillarCards />
    </Section>
  );
}

function Moments() {
  const t = useT();
  const h = t.home;
  return (
    <Section
      eyebrow={h.momentsEyebrow}
      title={
        <>
          {h.momentsA}
          <span className="text-brand">{h.momentsB}</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.moments.map((m, i) => (
          <ImageCard key={m.title} image={MOMENT_IMAGES[i]}>
            <div className="font-display text-sm font-extrabold uppercase tracking-wide text-foreground">
              {m.title}
            </div>
            <p className="mt-3 text-pretty text-muted-foreground">“{m.quote}”</p>
          </ImageCard>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-foreground md:text-2xl">{h.momentsClose}</p>
        <p className="font-display mt-2 text-3xl font-extrabold uppercase tracking-wide text-brand md:text-4xl">
          {h.momentsWord}
        </p>
      </div>
    </Section>
  );
}

function ServicesTeaser() {
  const t = useT();
  const h = t.home;
  const L = useLocalePath();
  return (
    <Section>
      <div className="rounded-[2rem] border border-border/80 bg-card p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>{h.servicesEyebrow}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.1] text-foreground md:text-4xl">
              {h.servicesTitle}
            </h2>
            <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand">
              {h.servicesBadge}
            </span>
            <p className="mt-6 text-lg font-semibold text-foreground">
              {h.servicesLeadA}
              <span className="text-brand underline decoration-2 underline-offset-4">{h.servicesLeadB}</span>
              {h.servicesLeadC}
            </p>
            <p className="mt-3 text-muted-foreground">{h.servicesBody}</p>
            <div className="mt-8">
              <PrimaryButton to="/services">{h.servicesCta}</PrimaryButton>
            </div>
          </div>
          <div>
            <div className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {h.processLabel}
            </div>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.process.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-border/80 bg-background p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-light text-brand">{num(i)}</span>
                    <span className="font-display font-extrabold uppercase text-foreground">{s.title}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <FileCheck2 className="h-4 w-4 text-brand" /> {s.deliverable}
                  </div>
                </li>
              ))}
            </ol>
            <div className="eyebrow mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {h.expertiseLabel}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.expertise.map((e) => (
                <Link
                  key={e.title}
                  to={L("/services")}
                  hash="expertise"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--brand-violet)] hover:text-brand"
                >
                  {e.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IndustriesTeaser() {
  const t = useT();
  const h = t.home;
  const L = useLocalePath();
  return (
    <Section
      eyebrow={h.industriesEyebrow}
      title={
        <>
          {h.industriesA}
          <span className="text-brand">{h.industriesB}</span>
        </>
      }
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {t.industries.map((ind, i) => (
          <Link key={ind.title} to={L("/industries")} className="block">
            <ImageCard image={INDUSTRY_IMAGES[i]}>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-light text-brand">{num(i)}</span>
                <div className="font-display text-lg font-extrabold uppercase leading-tight text-foreground">
                  {ind.title}
                </div>
              </div>
              <div className="mt-2 font-semibold text-brand">{ind.tag}</div>
              <p className="mt-2 text-sm text-muted-foreground">{ind.line}</p>
            </ImageCard>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Platforms() {
  const h = useT().home;
  const items = [
    {
      name: "PopCont",
      tag: h.popcontTag,
      image: popcontProduct,
      features: h.popcontFeatures,
      url: "https://popcont.ai/",
    },
    {
      name: "Captures Booth",
      tag: h.capturesTag,
      image: capturesProduct,
      features: h.capturesFeatures,
      url: "https://captures.photo/booth",
    },
  ];
  return (
    <Section
      eyebrow={h.platformsEyebrow}
      title={
        <>
          {h.platformsA}
          <br />
          {h.platformsB}
          <span className="text-brand">{h.platformsC}</span>
        </>
      }
      subtitle={h.platformsSub}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((p) => (
          <ImageCard key={p.name} image={p.image} imgClass="aspect-[16/9] bg-secondary">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-2xl font-extrabold uppercase text-foreground">{p.name}</div>
                <p className="mt-1 text-sm text-brand">{p.tag}</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${h.visitLabel} ${p.name}`}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <span key={f} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {f}
                </span>
              ))}
            </div>
          </ImageCard>
        ))}
      </div>
      <div className="mt-8">
        <GhostButton to="/ventures">{h.platformsAll}</GhostButton>
      </div>
    </Section>
  );
}

function Why() {
  const t = useT();
  return (
    <Section eyebrow={t.home.whyEyebrow} title={t.home.whyTitle}>
      <WhyCards />
    </Section>
  );
}

export function WhyCards() {
  const t = useT();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {t.why.map((w, i) => (
        <ImageCard key={w.title} image={WHY_IMAGES[i]}>
          <div className="text-sm font-bold text-brand">{num(i)}</div>
          <div className="font-display mt-1 text-lg font-extrabold leading-snug text-foreground">
            {w.title}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
        </ImageCard>
      ))}
    </div>
  );
}

export { PillarCards };
