import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BedDouble,
  Cog,
  FileText,
  Flower2,
  Heart,
  Image as ImageIcon,
  Megaphone,
  ShoppingCart,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import { CtaBand, PageHero, PageShell, PrimaryButton, Section } from "@/components/site/Shell";
import { INDUSTRY_IMAGES, num } from "@/lib/site-content";
import { useLocalePath, useT } from "@/lib/i18n";
import heroCity from "@/assets/profile/hero-city.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

/* Icons per focus area, in the same order as `industries[i].areas`. */
const AREA_ICONS = [
  [Megaphone, ShoppingCart, Users, Cog],
  [BedDouble, Heart, Flower2, ImageIcon],
  [FileText, Zap, UsersRound, BarChart3],
];

export function IndustriesPage() {
  const t = useT();
  const p = t.industriesPage;
  const L = useLocalePath();
  return (
    <PageShell>
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            {p.titleA}
            <span className="text-brand">{p.titleB}</span>
          </>
        }
        subtitle={p.sub}
        image={heroCity}
      />
      <Section>
        <div className="space-y-8">
          {t.industries.map((ind, idx) => (
            <article
              key={ind.title}
              className="grid overflow-hidden rounded-[2rem] border border-border/80 bg-card lg:grid-cols-[0.85fr_1.15fr]"
            >
              <img
                src={INDUSTRY_IMAGES[idx]}
                alt=""
                loading="lazy"
                className={`aspect-[16/10] h-full w-full object-cover lg:aspect-auto ${idx % 2 ? "lg:order-2" : ""}`}
              />
              <div className="flex flex-col p-8 md:p-10">
                {/* Industry + outcome headline */}
                <div className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className="text-brand">{num(idx)}</span>
                  <span className="text-foreground">{ind.title}</span>
                  <span className="text-muted-foreground">· {ind.tag}</span>
                </div>
                <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight text-foreground md:text-3xl">
                  {ind.outcome}
                </h2>

                {/* From → To shift */}
                <div className="mt-6 grid gap-2 sm:grid-cols-[auto_1fr]">
                  <span className="eyebrow pt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {p.fromLabel}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {ind.from}
                  </span>
                  <span className="eyebrow pt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {p.toLabel}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{ind.to}</span>
                </div>

                {/* Results we target */}
                <div className="eyebrow mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {p.resultsLabel}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ind.results.map((r) => {
                    const Icon = r.dir === "up" ? ArrowUpRight : ArrowDownRight;
                    return (
                      <span
                        key={r.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-foreground"
                      >
                        <Icon className="h-4 w-4 text-brand" />
                        {r.label}
                      </span>
                    );
                  })}
                </div>

                {/* Area → outcome */}
                <ul className="mt-6 divide-y divide-border/70 border-y border-border/70">
                  {ind.areas.map((a, ai) => {
                    const Icon = AREA_ICONS[idx][ai];
                    return (
                      <li key={a} className="grid gap-1 py-3 sm:grid-cols-[minmax(0,13rem)_1fr] sm:items-center sm:gap-4">
                        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Icon className="h-4 w-4 shrink-0 text-brand" />
                          {a}
                        </span>
                        <span className="text-sm text-muted-foreground">{ind.areaOutcomes[ai]}</span>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  to={L("/forward-deployed-ai")}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:opacity-80"
                >
                  {ind.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="max-w-2xl text-lg font-semibold text-foreground">{p.closing}</p>
          <p className="max-w-xl text-sm text-muted-foreground">{p.closingNote}</p>
          <div className="mt-2">
            <PrimaryButton to="/contact">{p.closingCta}</PrimaryButton>
          </div>
        </div>
      </Section>
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}
