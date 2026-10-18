import {
  ArrowRight,
  Blocks,
  Bot,
  CheckCircle2,
  Database,
  Megaphone,
  Target,
  Unplug,
  UserX,
  Users,
  Workflow,
  FileStack,
} from "lucide-react";
import {
  CtaBand,
  Eyebrow,
  GhostButton,
  PageHero,
  PageShell,
  PrimaryButton,
  Section,
} from "@/components/site/Shell";
import { num } from "@/lib/site-content";
import { useT } from "@/lib/i18n";
import heroImage from "@/assets/workshop/step-build.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

/* Products and builds the team has shipped and run — proof for "what we build". */
const PROOF = ["PopCont", "Captures Booth", "Captures Customize", "AfterImage", "OneFreeOne"];

export function FdePage() {
  const p = useT().fdePage;
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
        image={heroImage}
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryButton to="/contact">{p.ctaPrimary}</PrimaryButton>
          <GhostButton to="/forward-deployed-ai" hash="how">{p.ctaSecondary}</GhostButton>
        </div>
      </PageHero>
      <PlainEnglish />
      <WhyPilotsStall />
      <HowWeWork />
      <WhatWeBuild />
      <Example />
      <Engagement />
      <CtaBand image={ctaCity} titleA={p.ctaTitleA} titleB={p.ctaTitleB} button={p.ctaButton} />
    </PageShell>
  );
}

const PRINCIPLE_ICONS = [Target, Users, CheckCircle2];

function PlainEnglish() {
  const p = useT().fdePage;
  return (
    <Section>
      <div className="grid gap-10 rounded-[2rem] border border-border/80 bg-card p-8 md:p-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>{p.plainEyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-foreground md:text-4xl">
            {p.plainTitle}
          </h2>
          <p className="mt-5 text-muted-foreground">{p.plainBody}</p>
        </div>
        <div className="grid gap-3">
          {p.principles.map((pr, i) => {
            const Icon = PRINCIPLE_ICONS[i];
            return (
              <div key={pr.title} className="flex gap-4 rounded-2xl bg-secondary/70 p-5">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                <div>
                  <div className="font-bold text-foreground">{pr.title}</div>
                  <p className="text-sm text-muted-foreground">{pr.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

const STALL_ICONS = [FileStack, Unplug, Workflow, UserX];

function WhyPilotsStall() {
  const p = useT().fdePage;
  return (
    <Section
      eyebrow={p.stallEyebrow}
      title={
        <>
          {p.stallA}
          <span className="text-brand">{p.stallB}</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {p.stall.map((item, i) => {
          const Icon = STALL_ICONS[i];
          return (
            <div key={item.title} className="rounded-3xl border border-border/80 bg-card p-6">
              <Icon className="h-6 w-6 text-brand" />
              <div className="font-display mt-4 text-lg font-extrabold text-foreground">{item.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function HowWeWork() {
  const p = useT().fdePage;
  return (
    <Section
      id="how"
      eyebrow={p.howEyebrow}
      title={
        <>
          {p.howA}
          <span className="text-brand">{p.howB}</span>
        </>
      }
    >
      <ol className="grid gap-4 md:grid-cols-5">
        {p.how.map((step, i) => (
          <li key={step.title} className="relative rounded-3xl border border-border/80 bg-card p-6">
            <div className="text-4xl font-light text-brand">{num(i)}</div>
            <div className="font-display mt-3 text-lg font-extrabold uppercase text-foreground">{step.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            {i < p.how.length - 1 && (
              <ArrowRight className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand md:block" />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

const BUILD_ICONS = [Bot, Megaphone, Database, Blocks];

function WhatWeBuild() {
  const p = useT().fdePage;
  return (
    <Section
      eyebrow={p.buildEyebrow}
      title={
        <>
          {p.buildA}
          <span className="text-brand">{p.buildB}</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {p.builds.map((b, i) => {
          const Icon = BUILD_ICONS[i];
          return (
            <div key={b.title} className="flex gap-5 rounded-3xl border border-border/80 bg-card p-7">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-lg font-extrabold text-foreground">{b.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {p.proofLabel}
        </span>
        {PROOF.map((name) => (
          <span key={name} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-foreground">
            {name}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Example() {
  const p = useT().fdePage;
  return (
    <Section>
      <div className="rounded-[2rem] bg-gradient-ink p-8 text-white md:p-12">
        <div className="max-w-3xl">
          <div className="eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-lilac)]">
            {p.exampleEyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] md:text-4xl">
            {p.exampleA}
            <span className="text-[color:var(--brand-lilac)]">{p.exampleB}</span>
          </h2>
          <p className="mt-4 text-sm text-white/65">{p.exampleNote}</p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {p.example.map((e, i) => (
            <li key={e.stage} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl font-light text-[color:var(--brand-lilac)]">{num(i)}</div>
              <div className="font-display mt-2 font-extrabold uppercase tracking-wide">{e.stage}</div>
              <p className="mt-2 text-sm text-white/70">{e.body}</p>
              {i < p.example.length - 1 && (
                <ArrowRight className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[color:var(--brand-lilac)] md:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Engagement() {
  const p = useT().fdePage;
  return (
    <Section eyebrow={p.engageEyebrow} title={p.engageTitle}>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-[2rem] border-2 border-[color:var(--brand-violet)]/40 bg-card p-8 shadow-glow md:p-10">
          <div className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-brand">{p.sprintLabel}</div>
          <p className="mt-3 text-xl font-semibold text-foreground">{p.sprintBody}</p>
          <div className="eyebrow mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {p.sprintGetLabel}
          </div>
          <ul className="mt-3 space-y-2.5">
            {p.sprintGets.map((g) => (
              <li key={g} className="flex gap-2 text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                {g}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-secondary/70 p-4 text-sm text-muted-foreground">{p.nextSteps}</p>
          <div className="mt-8">
            <PrimaryButton to="/contact">{p.ctaButton}</PrimaryButton>
          </div>
        </div>
        <div className="grid gap-6">
          {[
            { title: p.whoTitle, body: p.whoBody },
            { title: p.ownTitle, body: p.ownBody },
          ].map((b) => (
            <div key={b.title} className="rounded-[2rem] border border-border/80 bg-card p-8">
              <div className="font-display text-lg font-extrabold text-foreground">{b.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
