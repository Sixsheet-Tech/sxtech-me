import {
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
import { useT } from "@/lib/i18n";
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
              className="grid overflow-hidden rounded-[2rem] border border-border/80 bg-card lg:grid-cols-2"
            >
              <img
                src={INDUSTRY_IMAGES[idx]}
                alt=""
                loading="lazy"
                className={`aspect-[16/10] h-full w-full object-cover ${idx % 2 ? "lg:order-2" : ""}`}
              />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-light text-brand">{num(idx)}</span>
                  <h2 className="text-2xl font-extrabold uppercase leading-tight text-foreground md:text-3xl">
                    {ind.title}
                  </h2>
                </div>
                <div className="mt-3 text-lg font-bold text-brand">{ind.tag}</div>
                <p className="mt-3 text-muted-foreground">{ind.line}</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {ind.areas.map((a, ai) => {
                    const Icon = AREA_ICONS[idx][ai];
                    return (
                      <div
                        key={a}
                        className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background p-4"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-brand" />
                        <span className="text-sm font-semibold text-foreground">{a}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-muted-foreground">{p.closing}</p>
          <PrimaryButton to="/contact">{p.closingCta}</PrimaryButton>
        </div>
      </Section>
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}
