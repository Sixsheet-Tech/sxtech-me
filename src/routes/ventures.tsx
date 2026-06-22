import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";
import venturesHero from "@/assets/ventures-hero.jpg";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Ventures — SX Tech" },
      {
        name: "description",
        content:
          "Selected ventures designed, built, and activated through the SX Tech ecosystem — co-created and scaled together.",
      },
      { property: "og:title", content: "Ventures — SX Tech" },
      {
        property: "og:description",
        content:
          "We don't just launch — we co-create and scale ventures together.",
      },
    ],
  }),
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <PageHero />
        <Ventures />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative isolate w-full overflow-hidden px-6 py-24 md:py-32">
      <img
        src={venturesHero}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-65"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background via-background/75 to-background/35" />
      <div className="relative z-20 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
          Ventures / Proof
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          We don’t just launch —{" "}
          <span className="text-gradient">we co-create and scale.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Selected ventures designed, built, and activated through the SX
          Transformation Ecosystem.
        </p>
      </div>
    </section>
  );
}

function Ventures() {
  const cases = [
    {
      name: "CAP*TURES Booth",
      type: "SaaS Photobooth Platform",
      url: "https://captures.photo/booth",
      problem:
        "Event organizers needed scalable, branded photo experiences without heavy production overhead.",
      system:
        "Built a multi-tenant SaaS platform with white-label branding, real-time AI capture, and event analytics.",
      result:
        "Recurring revenue model with rapid market expansion across event operators.",
    },
    {
      name: "Innerly",
      type: "Wellness Discovery Platform",
      url: "https://innerly.live/",
      problem:
        "People struggle to find wellness experiences that match their actual emotional state — generic marketplaces don't meet them where they are.",
      system:
        "Built a personalized discovery platform: a Mind Longevity quiz maps inner archetypes, then matches curated, vetted spaces across healing, movement, mindfulness, and spiritual growth.",
      result:
        "A quiet space to meet yourself — connecting people to conscious-living experiences tailored to their inner state.",
    },
    {
      name: "KengSob",
      type: "Education Platform",
      url: "https://kengsob.com/",
      problem:
        "Learners lacked an outcomes-driven, high-trust prep ecosystem with monetizable instructor networks.",
      system:
        "Designed and built a vertical education platform with content engine, performance tracking, and creator economy layer.",
      result:
        "Scaled an active community and unlocked multi-channel revenue across instructors and partners.",
    },
  ];
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-2">
        {cases.map((c) => (
          <GradientCard key={c.name}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">{c.name}</h3>
                <div className="mt-1 text-sm text-[color:var(--brand-cyan)]">
                  {c.type}
                </div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <Rocket className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Problem
                </div>
                <p className="mt-1 text-foreground/90">{c.problem}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  System Built
                </div>
                <p className="mt-1 text-foreground/90">{c.system}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Result
                </div>
                <p className="mt-1 text-foreground/90">{c.result}</p>
              </div>
            </div>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-[color:var(--brand-cyan)]/40 bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)] hover:bg-[color:var(--brand-cyan)]/20"
              >
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  Visit site <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </GradientCard>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card/40 px-8 py-20 text-center backdrop-blur md:px-16 md:py-24">
        <img
          src={venturesHero}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-50"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/70 to-background/40"
        />
        <h2 className="relative z-20 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Have a venture in mind? Let’s build it together.
        </h2>
        <div className="relative z-20 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow hover:opacity-95"
          >
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-card/40 px-7 text-base font-semibold backdrop-blur hover:bg-card"
          >
            <Link to="/business-ventures">Explore Business &amp; Ventures</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}