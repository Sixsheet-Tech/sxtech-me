import { createFileRoute } from "@tanstack/react-router";
import { Box, Hammer, Linkedin, Mail, Phone, Target } from "lucide-react";
import {
  CtaBand,
  Eyebrow,
  ImageCard,
  PageShell,
  Rule,
  Section,
} from "@/components/site/Shell";
import { MISSION, PILLARS, PRINCIPLES, TEAM, VISION, WHY } from "@/lib/site-content";
import visionMountain from "@/assets/profile/vision-mountain.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

const PRINCIPLE_ICONS = [Box, Hammer, Target];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SIXSHEET Tech" },
      {
        name: "description",
        content:
          "Our vision: to make transformation possible for every business. Meet the team — built on decades of real experience in transformation, AI, creative and technology.",
      },
      { property: "og:title", content: "About — SIXSHEET Tech" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <VisionMission />
      <Pillars />
      <Team />
      <Why />
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}

function VisionMission() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-14 pb-10 md:pt-20 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <Eyebrow>Vision &amp; Mission</Eyebrow>
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Our vision
        </div>
        <h1 className="mt-2 text-balance text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
          {VISION.replace(" business.", "")} <span className="text-brand">business.</span>
        </h1>
        <div className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Our mission
        </div>
        <p className="mt-2 max-w-xl text-pretty text-lg text-foreground/85">{MISSION}</p>
        <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
          {PRINCIPLES.map((p, i) => {
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
        alt="A person standing on a path facing a mountain sunrise"
        className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elevated"
      />
    </section>
  );
}

function Pillars() {
  return (
    <Section
      eyebrow="What we bring together"
      title={
        <>
          Business × People × Technology × AI →{" "}
          <span className="text-brand">real business impact.</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <ImageCard key={p.key} image={p.image}>
            <div className="text-lg font-extrabold uppercase text-foreground font-display">{p.key}</div>
            <Rule />
            <div className="font-semibold text-[color:var(--brand-indigo)]">{p.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{p.line}</p>
          </ImageCard>
        ))}
      </div>
    </Section>
  );
}

function Team() {
  return (
    <Section
      id="team"
      eyebrow="Our team"
      title={
        <>
          Built on decades of <span className="text-brand">real experience.</span>
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m) => (
          <div
            key={m.name}
            className="flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card"
          >
            <img
              src={m.photo}
              alt={m.name}
              loading="lazy"
              className="aspect-[9/10] w-full object-cover object-top"
            />
            <div className="flex flex-1 flex-col p-6">
              <div className="text-xl font-extrabold text-foreground font-display">
                {m.name.split(" ")[0]} “{m.nickname}”
              </div>
              <div className="text-sm text-muted-foreground">{m.role}</div>
              <Rule />
              <div className="text-lg font-extrabold uppercase text-brand font-display">
                {m.years} years
              </div>
              <div className="text-sm font-semibold text-foreground">{m.focus}</div>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              <div className="mt-auto flex gap-2 pt-5">
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    aria-label={`Email ${m.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}
                {m.phoneHref && (
                  <a
                    href={m.phoneHref}
                    aria-label={`Call ${m.name}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  return (
    <Section eyebrow="Why SIXSHEET Tech?" title="Why teams choose us.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w) => (
          <ImageCard key={w.n} image={w.image}>
            <div className="text-sm font-bold text-brand">{w.n}</div>
            <div className="mt-1 text-lg font-extrabold leading-snug text-foreground font-display">
              {w.title}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
          </ImageCard>
        ))}
      </div>
    </Section>
  );
}
