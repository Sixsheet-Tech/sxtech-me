import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Workflow,
  Activity,
  Gauge,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  Nav,
  Section,
} from "@/components/site/Shell";
import ritualImg from "@/assets/ritual-experience.jpg";

/* HUMAN™ uses the brand indigo accent (TECH uses cyan). */
const INDIGO_FRAME =
  "grid h-12 w-12 place-items-center rounded-lg border border-[color:var(--brand-indigo)]/40 bg-[color:var(--brand-indigo)]/10 text-[color:var(--brand-indigo)]";

function BlueprintGrid({
  size = "34px 34px",
  mask = "radial-gradient(120% 90% at 50% 20%, #000 45%, transparent 100%)",
}: {
  size?: string;
  mask?: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
        backgroundSize: size,
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  );
}

export const Route = createFileRoute("/human-transform")({
  head: () => ({
    meta: [
      { title: "HUMAN™ — Mind Longevity for Leaders | SX Tech" },
      {
        name: "description",
        content:
          "A Human Operating System for high-performance leaders. Not wellness, not coaching — cognitive system design under real business pressure.",
      },
      { property: "og:title", content: "HUMAN™ — Mind Longevity for Leaders" },
      {
        property: "og:description",
        content:
          "Think · Decide · Perform · Sustain. Built like a software stack — Align, Reset, Integrate, Sustain.",
      },
    ],
  }),
  component: HumanTransformPage,
});

function HumanTransformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <PageHero />
        <HowTo />
        <RitualPartnership />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* =========================================================
   1. HERO
   ========================================================= */
function PageHero() {
  return (
    <section className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-32 md:mt-8 md:py-44">
      <BlueprintGrid
        size="44px 44px"
        mask="radial-gradient(100% 100% at 50% 40%, #000 45%, transparent 95%)"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[520px] w-[680px] max-w-full -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-indigo) 50%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-7 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
          <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
          SYS // HUMAN™
          <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
        </div>
        <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          Your business is not the bottleneck.
          <br />
          <span className="text-gradient">You are.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          A human operating system for leaders. Think · Decide · Perform · Sustain.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
          >
            <Link to="/contact">
              Talk to us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   2. THE FRAMEWORK — THINK / DECIDE / PERFORM / SUSTAIN
   ========================================================= */
function HowTo() {
  const nodes = [
    { k: "THINK", v: "Clarity under noise.", icon: Brain },
    { k: "DECIDE", v: "Conviction under pressure.", icon: Workflow },
    { k: "PERFORM", v: "Execution under load.", icon: Activity },
    { k: "SUSTAIN", v: "Compounding without burnout.", icon: Gauge },
  ];
  return (
    <Section
      eyebrow="The framework"
      title={<>Think · Decide · Perform · <span className="text-gradient">Sustain.</span></>}
      className="!py-14 md:!py-20"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {nodes.map((n, i) => (
          <div
            key={n.k}
            className="group relative isolate overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-[color:var(--brand-indigo)]/50"
          >
            <div className="flex items-center justify-between">
              <div className={INDIGO_FRAME}>
                <n.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--brand-cyan)]">
              Layer 0{i + 1}
            </div>
            <div className="mt-2 text-3xl font-bold tracking-tight">{n.k}</div>
            <p className="mt-3 text-base text-muted-foreground">{n.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   3. RITUAL PARTNERSHIP  (real partner — keeps its photo)
   ========================================================= */
function RitualPartnership() {
  return (
    <Section eyebrow="Partnership" className="!py-14 md:!py-20">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-white/[0.02] backdrop-blur">
        <div className="grid gap-0 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-72 md:h-auto">
            <img
              src={ritualImg}
              alt="Ritual Experience — gong ceremony for mind longevity"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-background/60 md:bg-gradient-to-r md:from-transparent md:to-background/40" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              In partnership with Ritual Experience
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Ritual Experiences for{" "}
              <span className="text-gradient">Mind Longevity.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Designed to help leaders reset, realign, and expand awareness.
              Small group · Private · Intentionally guided — integrated into the
              HUMAN™ Integrate layer.
            </p>
            <ul className="mt-7 grid gap-2 font-mono text-sm text-foreground/85 sm:grid-cols-2">
              <li className="flex gap-2"><span className="text-[color:var(--brand-cyan)]">·</span> Reset &amp; realign</li>
              <li className="flex gap-2"><span className="text-[color:var(--brand-cyan)]">·</span> Expand awareness</li>
              <li className="flex gap-2"><span className="text-[color:var(--brand-cyan)]">·</span> Small group · Private</li>
              <li className="flex gap-2"><span className="text-[color:var(--brand-cyan)]">·</span> Intentionally guided</li>
            </ul>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border bg-card/30 px-7 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground backdrop-blur hover:border-[color:var(--brand-cyan)] hover:text-foreground"
              >
                <a
                  href="https://ritual-exp.life/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Ritual Experience
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* =========================================================
   4. CTA
   ========================================================= */
function CTA() {
  return (
    <Section className="!py-14 md:!py-20">
      <div className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-white/[0.02] px-8 py-24 text-center backdrop-blur md:px-16 md:py-28">
        <BlueprintGrid
          size="40px 40px"
          mask="radial-gradient(90% 90% at 50% 50%, #000 35%, transparent 80%)"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand-indigo) 50%, transparent), transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
            <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
            Initialize
            <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Upgrade your <span className="text-gradient">operating system.</span>
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
            >
              <Link to="/contact">
                Apply for program <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
