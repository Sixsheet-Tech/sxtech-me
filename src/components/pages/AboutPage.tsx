import { Box, Hammer, Linkedin, Mail, Phone, Target } from "lucide-react";
import { CtaBand, Eyebrow, PageShell, Rule, Section } from "@/components/site/Shell";
import { PillarCards, WhyCards } from "@/components/pages/HomePage";
import { TEAM } from "@/lib/site-content";
import { useT } from "@/lib/i18n";
import visionMountain from "@/assets/profile/vision-mountain.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

const PRINCIPLE_ICONS = [Box, Hammer, Target];

export function AboutPage() {
  const a = useT().about;
  return (
    <PageShell>
      <VisionMission />
      <Section
        eyebrow={a.pillarsEyebrow}
        title={
          <>
            {a.pillarsA}
            <span className="text-brand">{a.pillarsB}</span>
          </>
        }
      >
        <PillarCards />
      </Section>
      <Team />
      <Section eyebrow={a.whyEyebrow} title={a.whyTitle}>
        <WhyCards />
      </Section>
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}

function VisionMission() {
  const t = useT();
  const a = t.about;
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-14 pb-10 md:pt-20 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <Eyebrow>{a.eyebrow}</Eyebrow>
        <div className="eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {a.visionLabel}
        </div>
        <h1 className="mt-2 text-balance text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
          {a.visionA}
          <span className="text-brand">{a.visionB}</span>
        </h1>
        <div className="eyebrow mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {a.missionLabel}
        </div>
        <p className="mt-2 max-w-xl text-pretty text-lg text-foreground/85">{t.mission}</p>
        <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
          {t.principles.map((p, i) => {
            const Icon = PRINCIPLE_ICONS[i];
            return (
              <div key={p} className="rounded-2xl border border-border/80 bg-card p-4">
                <Icon className="h-6 w-6 text-brand" />
                <div className="mt-3 text-sm font-semibold leading-snug text-foreground">{p}</div>
              </div>
            );
          })}
        </div>
      </div>
      <img
        src={visionMountain}
        alt=""
        className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elevated"
      />
    </section>
  );
}

function Team() {
  const t = useT();
  const a = t.about;
  return (
    <Section
      id="team"
      eyebrow={a.teamEyebrow}
      title={
        <>
          {a.teamA}
          <span className="text-brand">{a.teamB}</span>
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => {
          const copy = t.team[i];
          return (
            <div key={m.name} className="flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card">
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                className="aspect-[9/10] w-full object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="font-display text-xl font-extrabold text-foreground">
                  {m.name.split(" ")[0]} “{m.nickname}”
                </div>
                <div className="text-sm text-muted-foreground">{copy.role}</div>
                <Rule />
                <div className="font-display text-lg font-extrabold uppercase text-brand">{a.years(m.years)}</div>
                <div className="text-sm font-semibold text-foreground">{copy.focus}</div>
                <p className="mt-3 text-sm text-muted-foreground">{copy.bio}</p>
                <div className="mt-auto flex gap-2 pt-5">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} — LinkedIn`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  {m.email && (
                    <a
                      href={`mailto:${m.email}`}
                      aria-label={`${m.name} — Email`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  {m.phoneHref && (
                    <a
                      href={m.phoneHref}
                      aria-label={`${m.name} — Phone`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
