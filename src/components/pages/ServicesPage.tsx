import {
  Briefcase,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  HandCoins,
  LayoutDashboard,
  Lightbulb,
  Network,
  Rocket,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  CtaBand,
  GhostButton,
  ImageCard,
  PageHero,
  PageShell,
  PrimaryButton,
  Rule,
  Section,
} from "@/components/site/Shell";
import { EXPERTISE_IMAGES, PROCESS_IMAGES, num } from "@/lib/site-content";
import { useT } from "@/lib/i18n";
import servicesHero from "@/assets/workshop/services-hero.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

export function ServicesPage() {
  const s = useT().services;
  return (
    <PageShell>
      <PageHero
        eyebrow={s.heroEyebrow}
        title={
          <>
            {s.titleA}
            <span className="text-brand">{s.titleB}</span>
          </>
        }
        subtitle={
          <>
            <strong className="text-foreground">{s.leadStrong}</strong> {s.lead}
          </>
        }
        image={servicesHero}
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryButton to="/contact">{s.ctaPrimary}</PrimaryButton>
          <GhostButton to="/industries">{s.ctaSecondary}</GhostButton>
        </div>
      </PageHero>
      <Process />
      <Expertise />
      <BuildAndPartner />
      <CoInvest />
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}

function Process() {
  const t = useT();
  const s = t.services;
  return (
    <Section
      id="how-we-work"
      eyebrow={s.processEyebrow}
      title={
        <>
          {s.processA}
          <span className="text-brand">{s.processB}</span>
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {t.process.map((step, i) => (
          <ImageCard key={step.title} image={PROCESS_IMAGES[i]} imgClass="aspect-[3/1]">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-light text-brand">{num(i)}</span>
              <span className="font-display text-lg font-extrabold uppercase text-foreground">{step.title}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{step.sub}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {step.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-5">
              <div className="rounded-2xl bg-secondary p-4">
                <div className="eyebrow text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {t.common.keyDeliverable}
                </div>
                <div className="mt-1 flex items-center gap-2 font-bold text-foreground">
                  <FileCheck2 className="h-4 w-4 text-brand" /> {step.deliverable}
                </div>
              </div>
            </div>
          </ImageCard>
        ))}
      </div>
    </Section>
  );
}

function Expertise() {
  const t = useT();
  const s = t.services;
  return (
    <Section
      id="expertise"
      eyebrow={s.expEyebrow}
      title={
        <>
          {s.expA}
          <span className="text-brand">{s.expB}</span>
        </>
      }
      subtitle={s.expSub}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {t.expertise.map((e, i) => (
          <ImageCard key={e.title} image={EXPERTISE_IMAGES[i]}>
            <div className="text-4xl font-light text-brand">{num(i)}</div>
            <div className="font-display mt-2 text-lg font-extrabold uppercase leading-tight text-foreground">
              {e.title}
            </div>
            <Rule />
            <p className="text-sm text-muted-foreground">{e.line}</p>
            <ul className="mt-4 divide-y divide-border/70 text-sm text-foreground/85">
              {e.topics.map((topic) => (
                <li key={topic} className="py-2">
                  {topic}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <div className="flex items-center gap-3 rounded-2xl bg-secondary p-4">
                <GraduationCap className="h-6 w-6 shrink-0 text-brand" />
                <div>
                  <div className="eyebrow text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    {t.common.popularCourse}
                  </div>
                  <div className="font-bold text-foreground">{e.course}</div>
                </div>
              </div>
            </div>
          </ImageCard>
        ))}
      </div>
    </Section>
  );
}

const BUILD_ICONS = [LayoutDashboard, Briefcase, Sparkles];

function BuildAndPartner() {
  const s = useT().services;
  return (
    <Section
      id="build"
      eyebrow={s.buildEyebrow}
      title={
        <>
          {s.buildA}
          <span className="text-brand">{s.buildB}</span>
        </>
      }
      subtitle={s.buildSub}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {s.build.map((b, i) => {
          const Icon = BUILD_ICONS[i];
          return (
            <div key={b.title} className="flex flex-col rounded-3xl border border-border/80 bg-card p-7">
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {b.label}
                </span>
              </div>
              <div className="font-display mt-6 text-xl font-extrabold text-foreground">{b.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {b.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const CO_ICONS = [HandCoins, Lightbulb, TrendingUp, Network];

function CoInvest() {
  const s = useT().services;
  return (
    <Section id="co-invest">
      <div className="rounded-[2rem] bg-gradient-ink p-8 text-white md:p-12">
        <div className="max-w-2xl">
          <div className="eyebrow flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-lilac)]">
            <Rocket className="h-4 w-4" /> {s.coEyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] md:text-4xl">{s.coTitle}</h2>
          <p className="mt-4 text-white/75">{s.coBody}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.coPoints.map((p, i) => {
            const Icon = CO_ICONS[i];
            return (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon className="h-6 w-6 text-[color:var(--brand-lilac)]" />
                <div className="mt-4 font-bold">{p.title}</div>
                <p className="mt-2 text-sm text-white/70">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
