import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import {
  BackgroundFX,
  Footer,
  Nav,
} from "@/components/site/Shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SX Tech — We build revenue systems. We upgrade leaders." },
      {
        name: "description",
        content:
          "A Transformation Company combining Technology + Human Performance. We build business systems and upgrade the leaders behind them.",
      },
      { property: "og:title", content: "SX Tech — The Transformation Company" },
      {
        property: "og:description",
        content: "We build revenue systems. And upgrade the leaders behind them.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <Hero />
        <MainSolution />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Wrapper ---------- */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
  );
}

/* ---------- 1. HERO — art-directed engineering blueprint ---------- */
function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const crossRef = useRef<HTMLDivElement | null>(null);

  // Instrument-style cursor crosshair (fine pointers only; SSR-safe).
  useEffect(() => {
    const section = sectionRef.current;
    const cross = crossRef.current;
    if (!section || !cross) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const h = cross.querySelector<HTMLElement>("[data-h]");
    const v = cross.querySelector<HTMLElement>("[data-v]");
    const label = cross.querySelector<HTMLElement>("[data-coord]");
    const onMove = (e: MouseEvent) => {
      cross.style.opacity = "1";
      if (v) v.style.transform = `translateX(${e.clientX}px)`;
      if (h) h.style.transform = `translateY(${e.clientY}px)`;
      if (label) {
        label.style.transform = `translate(${e.clientX + 12}px, ${e.clientY + 12}px)`;
        const x = ((e.clientX / window.innerWidth) * 100).toFixed(2);
        const y = ((e.clientY / window.innerHeight) * 100).toFixed(2);
        label.textContent = `${x}, ${y}`;
      }
    };
    const onLeave = () => {
      cross.style.opacity = "0";
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const specs = [
    { k: "Output", v: "Revenue engine", cy: false },
    { k: "Mode", v: "Production-grade", cy: false },
    { k: "Stack", v: "AI-native", cy: true },
    { k: "Stage", v: "0 → 1 → N", cy: false },
    { k: "Lift", v: "3–10×", cy: true },
  ];
  const stages = ["Design", "Build", "Activate", "Scale"];

  return (
    <section ref={sectionRef} className="relative isolate min-h-[100svh] overflow-hidden">
      {/* measured blueprint grid (fine + coarse), masked toward a focal point */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "140px 140px,140px 140px,28px 28px,28px 28px",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 62% 28%, #000 50%, transparent 100%)",
          maskImage: "radial-gradient(120% 90% at 62% 28%, #000 50%, transparent 100%)",
        }}
      />
      {/* brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 z-0 h-[620px] w-[620px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-indigo) 55%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-40 z-0 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 50%, transparent), transparent 70%)",
        }}
      />

      {/* corner registration marks */}
      <RegMark className="left-5 top-24" />
      <RegMark className="right-5 top-24" />
      <RegMark className="bottom-28 left-5" />
      <RegMark className="bottom-28 right-5" />

      {/* instrument crosshair */}
      <div
        ref={crossRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-20 opacity-0 transition-opacity duration-300"
      >
        <div data-h className="absolute inset-x-0 top-0 h-px bg-[color:var(--brand-cyan)]/25" />
        <div data-v className="absolute inset-y-0 left-0 w-px bg-[color:var(--brand-cyan)]/25" />
        <div
          data-coord
          className="absolute left-0 top-0 rounded border border-border bg-background/70 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-[color:var(--brand-cyan)]"
        >
          0.00, 0.00
        </div>
      </div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col">
        {/* technical top bar */}
        <div className="flex items-center justify-between gap-4 border-b border-border/70 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <div className="flex items-center gap-2.5 font-semibold tracking-[0.18em] text-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-primary shadow-glow" />
            SX·TECH
          </div>
          <div className="hidden md:block">[ SYS.LOG / TRANSFORMATION CO. / 2026 ]</div>
          <div>BKK · 13.7563°N 100.5018°E</div>
        </div>

        {/* main */}
        <div className="grid flex-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.55fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
              SYS.01 — Revenue Systems
            </div>
            <h1 className="text-balance text-[clamp(2.75rem,9vw,6.5rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em]">
              We engineer
              <br />
              <span className="text-gradient">revenue</span> systems
              <span className="ml-2 align-super font-mono text-[clamp(0.6rem,1.1vw,0.85rem)] font-medium normal-case tracking-wide text-muted-foreground">
                [0→1→N]
              </span>
            </h1>
            <p className="mt-7 max-w-[46ch] text-pretty text-lg leading-relaxed text-[color:#cbd5e1] md:text-xl">
              Not slide decks. Not frameworks. We{" "}
              <span className="font-semibold text-foreground">design, build, and ship</span>{" "}
              the platforms, AI, and ventures that compound revenue — in production, at scale.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-gradient-primary px-8 py-6 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
              >
                <Link to="/contact">
                  Start a project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-border bg-card/30 px-7 py-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground backdrop-blur hover:border-[color:var(--brand-cyan)] hover:text-foreground"
              >
                <Link to="/business-ventures">View the build spec ↗</Link>
              </Button>
            </div>
          </div>

          {/* system spec panel */}
          <div className="rounded-2xl border border-border bg-white/[0.02] p-1.5 backdrop-blur">
            <div className="flex items-center justify-between border-b border-border px-3.5 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>System spec</span>
              <span className="flex items-center gap-1.5 text-[color:var(--brand-cyan)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--brand-cyan)] shadow-glow" />
                Live
              </span>
            </div>
            {specs.map((s, i) => (
              <div
                key={s.k}
                className={`flex items-baseline gap-3 px-3.5 py-3 font-mono text-[13px] ${
                  i ? "border-t border-dashed border-border/60" : ""
                }`}
              >
                <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                  {s.k}
                </span>
                <span className="-translate-y-1 flex-1 border-b border-dotted border-foreground/20" />
                <span
                  className={`font-semibold ${
                    s.cy ? "text-[color:var(--brand-cyan)]" : "text-foreground"
                  }`}
                >
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* measured ruler baseline — the four-stage process, drawn in */}
        <div className="relative border-t border-border/70 py-5">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-2.5"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "calc(100% / 24) 100%",
            }}
          />
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {stages.map((s, i) => (
              <span key={s} className={i === 1 || i === 2 ? "hidden sm:inline" : ""}>
                <b className="font-semibold text-foreground">0{i + 1}</b> {s}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function RegMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-0 hidden h-[18px] w-[18px] opacity-50 md:block ${className}`}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--brand-cyan)]" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[color:var(--brand-cyan)]" />
    </span>
  );
}

/* ---------- 4. MAIN SOLUTION ---------- */
function MainSolution() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,color-mix(in_oklab,var(--brand-cyan)_18%,transparent),transparent_70%)]"
      />
      <Container>
        {/* Impact-first header */}
        <div className="mb-14 grid items-end gap-10 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
              SYS.02 — Built for impact
            </div>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Revenue you can <span className="text-gradient">measure.</span>
              <br />
              Leaders you can <span className="text-gradient">trust.</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              We don't sell frameworks. We build the systems and the leaders that turn strategy into compounding business outcomes.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-3 gap-3">
              <ImpactStat index="01" value="3–10×" label="Revenue lift" />
              <ImpactStat index="02" value="90 days" label="To activate" />
              <ImpactStat index="03" value="0→1" label="Ventures" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <SolutionBlock
            tone="tech"
            sys="SYS.03"
            tag="TECH™"
            title="A system to create and scale revenue."
            description="Production-grade platforms, AI, and growth engines — engineered to compound revenue, not just ship features."
            outputs={[
              "New revenue streams launched",
              "Scalable platforms in production",
              "AI & automation that ships",
              "Co-built ventures, ready to scale",
            ]}
            ctaLabel="Explore TECH™"
            href="/business-ventures"
          />
          <SolutionBlock
            tone="human"
            sys="SYS.04"
            tag="HUMAN™"
            title="Your business is not the bottleneck. You are."
            description="A leader operating system that sharpens decisions, raises performance, and keeps the engine running."
            outputs={[
              "Sharper decisions under pressure",
              "Clearer thinking, less noise",
              "Higher performance, sustained",
              "Leaders your team can trust",
            ]}
            ctaLabel="Explore HUMAN™"
            href="/human-transform"
          />
        </div>
      </Container>
    </section>
  );
}

function ImpactStat({
  index,
  value,
  label,
}: {
  index: string;
  value: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-white/[0.02] p-4 backdrop-blur">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {index}
      </div>
      <div className="text-3xl font-extrabold leading-none tracking-tight md:text-4xl">
        <span className="text-gradient">{value}</span>
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function SolutionBlock({
  tone,
  sys,
  tag,
  title,
  description,
  outputs,
  ctaLabel,
  href,
}: {
  tone: "tech" | "human";
  sys: string;
  tag: string;
  title: string;
  description: string;
  outputs: string[];
  ctaLabel: string;
  href: "/business-ventures" | "/human-transform";
}) {
  const accentVar = tone === "tech" ? "var(--brand-cyan)" : "var(--brand-indigo)";
  const accent =
    tone === "tech"
      ? "text-[color:var(--brand-cyan)]"
      : "text-[color:var(--brand-indigo)]";
  const accentBorder =
    tone === "tech"
      ? "hover:border-[color:var(--brand-cyan)]/50"
      : "hover:border-[color:var(--brand-indigo)]/50";
  return (
    <Link
      to={href}
      className={`group relative isolate flex min-h-[520px] flex-col overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated md:p-10 ${accentBorder}`}
    >
      {/* blueprint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "34px 34px",
          WebkitMaskImage: "radial-gradient(120% 80% at 100% 0%, #000 28%, transparent 75%)",
          maskImage: "radial-gradient(120% 80% at 100% 0%, #000 28%, transparent 75%)",
        }}
      />
      {/* corner registration mark */}
      <span aria-hidden className="pointer-events-none absolute right-6 top-6 z-0 h-3.5 w-3.5 opacity-50">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ background: accentVar }} />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2" style={{ background: accentVar }} />
      </span>

      <div className="relative z-10 flex h-full flex-col">
        {/* module header */}
        <div className="flex items-center gap-2.5 border-b border-border/70 pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className={accent}>{sys}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span className={`font-semibold ${accent}`}>{tag}</span>
          <span className="ml-auto">Module</span>
        </div>

        <h3 className="mt-7 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>

        <div className="mt-auto pt-9">
          <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
            // Deliverables
          </div>
          <ul>
            {outputs.map((o, i) => (
              <li
                key={o}
                className="flex items-baseline gap-3 border-t border-dashed border-border/50 py-2.5 font-mono text-[13px]"
              >
                <span className={`text-[11px] ${accent}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85">{o}</span>
              </li>
            ))}
          </ul>
          <div className={`mt-7 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] ${accent} transition-transform group-hover:translate-x-1`}>
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ---------- 5. PROOF ---------- */
function Proof() {
  const cases = [
    {
      name: "CAP*TURES",
      desc: "AI photobooth platform",
      problem: "Event photo tech was fragmented and didn't scale.",
      built: "A cloud photobooth SaaS platform.",
      result: "Live & scaling — captures.photo",
      status: "Live",
      open: false,
      href: "https://captures.photo/booth",
    },
    {
      name: "KengSob",
      desc: "Education platform",
      problem: "Manual learning operations limited reach.",
      built: "A digital learning system.",
      result: "Scalable learning platform",
      status: "Shipped",
      open: false,
    },
    {
      name: "Your venture?",
      desc: "Co-built with founders",
      problem: "A new category opportunity, no system yet.",
      built: "Co-building — capital + execution.",
      result: "Slot open",
      status: "Open",
      open: true,
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-14 max-w-3xl">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
            <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
            SYS.05 — Build log
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Built. <span className="text-gradient">Not just advised.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => {
            const dot = c.open ? "#f59e0b" : "var(--brand-cyan)";
            const cardClass =
              "group relative isolate flex flex-col overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-7 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elevated hover:border-[color:var(--brand-cyan)]/40";
            const inner = (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
                    backgroundSize: "30px 30px",
                    WebkitMaskImage: "radial-gradient(120% 80% at 100% 0%, #000 25%, transparent 75%)",
                    maskImage: "radial-gradient(120% 80% at 100% 0%, #000 25%, transparent 75%)",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border/70 pb-4 font-mono text-[11px] uppercase tracking-[0.16em]">
                    <span className="text-muted-foreground">LOG.0{i + 1}</span>
                    <span className="flex items-center gap-1.5" style={{ color: dot }}>
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: dot, boxShadow: `0 0 10px ${dot}` }}
                      />
                      {c.status}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <div className="text-lg font-bold leading-tight">{c.name}</div>
                      <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                        {c.desc}
                      </div>
                    </div>
                    {"href" in c && c.href && (
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-[color:var(--brand-cyan)] transition-colors group-hover:border-[color:var(--brand-cyan)]/60">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex flex-1 flex-col gap-3">
                    <Row label="Problem" value={c.problem} />
                    <Row label="Built" value={c.built} />
                    <Row label="Result" value={c.result} accent />
                  </div>

                  {"href" in c && c.href && (
                    <div className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-cyan)] transition-transform group-hover:translate-x-1">
                      Visit captures.photo <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              </>
            );
            return "href" in c && c.href ? (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <div key={c.name} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="border-t border-dashed border-border/50 pt-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div
        className={`mt-1 text-sm leading-snug ${
          accent ? "font-semibold text-[color:var(--brand-cyan)]" : "text-foreground/85"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

/* ---------- 10. FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="contact" className="pb-32 pt-8 md:pb-40">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-white/[0.02] px-8 py-20 text-center backdrop-blur md:px-16 md:py-28">
          {/* blueprint grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
              WebkitMaskImage: "radial-gradient(90% 90% at 50% 50%, #000 35%, transparent 80%)",
              maskImage: "radial-gradient(90% 90% at 50% 50%, #000 35%, transparent 80%)",
            }}
          />
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 z-0 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--brand-indigo) 45%, transparent), transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
              SYS.06 — Initialize
              <span className="h-px w-9 bg-[color:var(--brand-cyan)]" />
            </div>
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Let's build your <span className="text-gradient">next growth system.</span>
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-gradient-primary px-8 py-6 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
              >
                <Link to="/contact">
                  Start a project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-border bg-card/30 px-7 py-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground backdrop-blur hover:border-[color:var(--brand-cyan)] hover:text-foreground"
              >
                <Link to="/contact">Talk to us ↗</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
