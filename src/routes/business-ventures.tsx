import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Rocket,
  HandCoins,
  TrendingUp,
  LayoutDashboard,
  Briefcase,
  Sparkles,
  CalendarDays,
  Target,
  Lightbulb,
  Network,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  Nav,
  Section,
} from "@/components/site/Shell";

/* Shared instrument-language primitives (matches the homepage). */
const ICON_FRAME =
  "grid h-12 w-12 place-items-center rounded-lg border border-[color:var(--brand-cyan)]/30 bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)]";

function BlueprintGrid({
  size = "34px 34px",
  mask = "radial-gradient(120% 90% at 50% 0%, #000 45%, transparent 100%)",
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

export const Route = createFileRoute("/business-ventures")({
  head: () => ({
    meta: [
      { title: "TECH™ — Technology Venture Builder | SX Tech" },
      {
        name: "description",
        content:
          "A system to create and scale revenue. Design, Build, Activate, Scale — engineered as one.",
      },
      {
        property: "og:title",
        content: "TECH™ — Technology Venture Builder | SX Tech",
      },
      {
        property: "og:description",
        content:
          "A system to create and scale revenue. Design → Build → Activate → Scale.",
      },
    ],
  }),
  component: BusinessVenturesPage,
});

function BusinessVenturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <PageHero />
        <CompanyOverview />
        <Capabilities />
        <InvestmentThesis />
        <FocusDomains />
        <OurEdge />
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
    <section className="relative isolate w-full overflow-hidden px-6 py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "140px 140px,140px 140px,28px 28px,28px 28px",
          WebkitMaskImage: "radial-gradient(120% 90% at 60% 25%, #000 50%, transparent 100%)",
          maskImage: "radial-gradient(120% 90% at 60% 25%, #000 50%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 z-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-indigo) 60%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 z-0 h-[520px] w-[520px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
          <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
          SYS // TECH™ Services
        </div>
        <h1 className="text-balance text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-white">
          We build &amp; transform <span className="text-gradient">businesses</span> — powered by AI.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg text-neutral-300 md:text-xl">
          From idea to growth — we partner, build, and invest.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-cyan)] md:text-sm">
          <span>Strategy</span>
          <span className="text-muted-foreground/50">→</span>
          <span>Build</span>
          <span className="text-muted-foreground/50">→</span>
          <span>Scale</span>
          <span className="text-muted-foreground/50">→</span>
          <span>Co-invest</span>
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
          >
            <Link to="/contact">
              Start your transformation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   2. COMPANY OVERVIEW
   ========================================================= */
function CompanyOverview() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Our Vision",
      desc: "Build the next generation of ventures — powered by AI.",
    },
    {
      icon: Rocket,
      title: "Our Mission",
      desc: "We partner with early-stage founders, AI builders, and business owners to build, scale, and co-invest in ventures — powered by technology, execution, and strong networks.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-white/[0.02] px-6 py-20 md:px-12 md:py-28">
        <BlueprintGrid
          size="40px 40px"
          mask="radial-gradient(100% 80% at 50% 0%, #000 40%, transparent 90%)"
        />
        <div className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
              Why we exist
              <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
            </div>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              We build the <span className="text-gradient">growth engine.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              Platforms, ventures, and revenue systems — designed to compound.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-white/[0.02] p-7 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className={ICON_FRAME}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   3. CAPABILITIES
   ========================================================= */
function Capabilities() {
  const items = [
    {
      icon: Briefcase,
      title: "Consult — Transformation Advisory",
      tagline: "Strategy, framework, and execution — end to end",
      desc: "We turn ambition into a clear plan you can act on. Through executive advisory and hands-on workshops, we redesign your business model, map your AI adoption, and rewire how your team operates — guided by our proven Diagnose → Design → Build → Activate → Scale framework.",
    },
    {
      icon: Sparkles,
      title: "Platform Builder — Powered by AI",
      tagline: "AI-native platforms that run your business",
      desc: "We design and ship scalable web, mobile, and backend systems with AI built in from day one — across content, operations, and sales. The result: less manual work, faster decisions, and measurable gains in revenue and efficiency.",
    },
    {
      icon: LayoutDashboard,
      title: "Projects — PMO & Delivery Management",
      tagline: "Delivered on time, on budget, on target",
      desc: "We own the execution so you don't have to chase it. Our PMO aligns teams, tracks every milestone, and clears blockers — keeping your projects moving and your outcomes on track.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div
        className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-8 py-20 md:px-16 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.30 0.04 265) 0%, oklch(0.26 0.05 260) 50%, oklch(0.22 0.06 255) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-20 z-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
            <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
            SYS // Capabilities
          </div>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Our services. <span className="text-gradient">One integrated team.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-sm text-neutral-300 md:text-base">
            Hire us for any of these — or fold the whole set into a single transformation program.
          </p>
        </div>
        <div className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/40 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between">
                <div className={ICON_FRAME}>
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs tracking-[0.16em] text-[color:var(--brand-cyan)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight text-white">
                {it.title}
              </h3>
              <p className="mt-3 text-sm font-semibold text-[color:var(--brand-cyan)]">
                {it.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {it.desc}
              </p>
              <div className="mt-8 h-px w-12 bg-gradient-primary opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. FOCUS DOMAINS
   ========================================================= */
function FocusDomains() {
  const domains = [
    {
      icon: Rocket,
      title: "Build Startup & Platform",
      desc: "From zero to product — we co-build startups and platforms ready to scale, with technology, team, and go-to-market in place from day one.",
    },
    {
      title: "Marketing & Technology",
      icon: Target,
      desc: "Marketing engines fused with the right tech stack — content, growth loops, and automation that drive measurable conversion and lower CAC.",
    },
    {
      icon: Sparkles,
      title: "AI Transformation",
      desc: "Embed AI across operations, decisions, and customer experience — rewiring how the business runs to unlock new efficiency and revenue.",
    },
    {
      icon: CalendarDays,
      title: "Events & Photobooth Business",
      desc: "Experience-driven ventures — from live events to AI-powered photobooth activations that turn brand moments into recurring revenue streams.",
    },
  ];
  return (
    <Section
      eyebrow="Focus areas"
      title={<>Where <span className="text-gradient">growth is happening.</span></>}
      subtitle={
        <>We build where the <span className="text-gradient">market is moving.</span></>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {domains.map((d, i) => (
          <div
            key={d.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-10 backdrop-blur transition-all hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/40 hover:shadow-elevated"
          >
            <div className="flex items-center justify-between">
              <div className={ICON_FRAME}>
                <d.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight">
              {d.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   5. INVESTMENT THESIS
   ========================================================= */
function InvestmentThesis() {
  const principles = [
    {
      icon: HandCoins,
      label: "01",
      title: "Capital + Execution",
      desc: "Funding combined with real product, tech, and growth support — we operate alongside you.",
    },
    {
      icon: Sparkles,
      label: "02",
      title: "AI & Technology Power",
      desc: "AI-driven development, automation, and scalable platforms built into every venture.",
    },
    {
      icon: TrendingUp,
      label: "03",
      title: "Go-to-Market & Growth",
      desc: "Marketing, content, and distribution engines to accelerate traction from day one.",
    },
    {
      icon: Network,
      label: "04",
      title: "Strong Network Access",
      desc: "Partners, customers, and ecosystems that unlock real opportunities at every stage.",
    },
  ];
  return (
    <Section
      eyebrow="Co-invest"
      title={<>We co-build and co-invest in <span className="text-gradient">what we believe.</span></>}
      subtitle={
        <>
          We don’t just invest capital — we invest execution. We partner with founders to build, scale, and grow together.
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((p) => (
          <div
            key={p.title}
            className="group relative isolate overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/40 hover:shadow-elevated"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-4 select-none font-mono text-[5rem] font-black leading-none tracking-tighter text-foreground/[0.05]"
            >
              {p.label}
            </div>
            <div className="relative z-10">
              <div className={ICON_FRAME}>
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   6. OUR EDGE
   ========================================================= */
function OurEdge() {
  const edges = [
    {
      title: "Strong business + tech execution",
      desc: "Operators who have built and scaled real ventures — not just consultants.",
    },
    {
      title: "AI-first approach",
      desc: "AI embedded into every venture, every workflow, every decision loop.",
    },
    {
      title: "Network-driven growth",
      desc: "Tap into our mentor, partner, and investor pool to accelerate every stage.",
    },
    {
      title: "Co-build & co-invest model",
      desc: "Skin in the game — we share the risk and the upside alongside you.",
    },
  ];
  return (
    <Section
      eyebrow="What makes us different"
      title={<>Our <span className="text-gradient">unfair advantage.</span></>}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {edges.map((e) => (
          <div
            key={e.title}
            className="flex items-start gap-5 rounded-3xl border border-border bg-white/[0.02] p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-[color:var(--brand-cyan)]/40 hover:shadow-elevated"
          >
            <div className={`shrink-0 ${ICON_FRAME} h-11 w-11`}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold leading-tight tracking-tight">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   7. CTA
   ========================================================= */
function CTA() {
  return (
    <Section>
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
              "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 45%, transparent), transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
            <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
            Initialize
            <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Build your next <span className="text-gradient">revenue system.</span>
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
            >
              <Link to="/contact">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border bg-card/30 px-8 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground backdrop-blur hover:border-[color:var(--brand-cyan)] hover:text-foreground"
            >
              <Link to="/contact">Build a venture ↗</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
