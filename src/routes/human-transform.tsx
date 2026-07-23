import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ExternalLink,
  Sun,
  Leaf,
  Sprout,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundFX, Footer, Nav } from "@/components/site/Shell";
import heroHuman from "@/assets/hero-human.jpg";
import humanFocus from "@/assets/human-focus.jpg";
import humanMind from "@/assets/human-mind.jpg";
import humanCoaching from "@/assets/human-coaching.jpg";
import ritualImg from "@/assets/ritual-experience.jpg";

const GOLD = "#d4b06a";

export const Route = createFileRoute("/human-transform")({
  head: () => ({
    meta: [
      { title: "HUMAN™ — Mind Longevity for Leaders | SX Tech" },
      {
        name: "description",
        content:
          "A calm, guided program to restore clarity, resilience, and presence for high-performance leaders — align, reset, integrate, sustain.",
      },
      { property: "og:title", content: "HUMAN™ — Mind Longevity for Leaders" },
      {
        property: "og:description",
        content:
          "Mind Longevity for Leaders — a real 4-step program: Align · Reset · Integrate · Sustain.",
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
        <Program />
        <RitualPartnership />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* Gentle section eyebrow (warm gold, with a leaf) */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.3em]"
      style={{ color: GOLD }}
    >
      <Leaf className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

/* =========================================================
   1. HERO — calm, natural, photographic
   ========================================================= */
function PageHero() {
  return (
    <section className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] md:mt-8">
      <img
        src={heroHuman}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/55 to-background/95"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 28%, rgba(212,176,106,0.18), transparent 70%)",
        }}
      />
      <div className="relative z-20 mx-auto max-w-3xl px-6 py-32 text-center md:py-44">
        <div
          className="mb-7 inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em]"
          style={{ color: GOLD }}
        >
          <Leaf className="h-3.5 w-3.5" />
          Mind Longevity for Leaders™
        </div>
        <h1 className="font-display text-balance text-5xl font-medium leading-[1.04] tracking-tight text-stone-50 md:text-7xl lg:text-8xl">
          Your business is not the bottleneck.
          <br />
          <span className="italic" style={{ color: GOLD }}>
            You are.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-stone-300/90">
          A calm, guided program to restore clarity, resilience, and presence —
          for the human behind the leader.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full px-8 text-base font-semibold text-stone-950 hover:opacity-90"
            style={{ backgroundColor: GOLD }}
          >
            <Link to="/contact">
              Begin with a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   2. THE PROGRAM — Align / Reset / Integrate / Sustain
   ========================================================= */
function Program() {
  const steps = [
    {
      roman: "I",
      key: "Align",
      icon: Sun,
      img: humanFocus,
      subtitle: "Understand the human behind the leader",
      goal: "We build psychological safety and deeply understand your current inner operating system — before we change anything.",
      items: [
        "Executive mental-health assessment",
        "Burnout risk analysis",
        "Personality mapping (MBTI · Enneagram)",
        "Leadership profile",
        "Growth goals",
      ],
      outcome: "Clarity on who you are, what's holding you back, and what matters most.",
      motto: "Diagnose before prescribing.",
    },
    {
      roman: "II",
      key: "Reset",
      icon: Leaf,
      img: humanMind,
      subtitle: "Restore mental capacity",
      goal: "Restore mental clarity, emotional balance, and physical energy through guided, restorative experiences.",
      items: [
        "Breathwork",
        "Ice bath",
        "Sound healing",
        "Yoga / movement",
        "Deep rest",
        "Somatic release",
        "Nature therapy",
        "Ceremony (Cacao / Blue Lotus)",
      ],
      outcome: "Reduced stress. Increased presence. Mental capacity restored.",
      motto: "Recover. Recharge. Return.",
      note: true,
    },
    {
      roman: "III",
      key: "Integrate",
      icon: Sprout,
      img: humanCoaching,
      subtitle: "Turn insight into new behavior",
      goal: "Turn insight into a new identity, new habits, and lasting leadership behavior — gently, and for good.",
      items: [
        "Executive coaching",
        "Reflection & journaling",
        "Habit design & accountability",
        "AI reflection companion",
        "Personal action plan",
        "Team communication practice",
      ],
      outcome: "New mindset. New habits. New leadership.",
      motto: "Insight without integration is just inspiration.",
    },
    {
      roman: "IV",
      key: "Sustain",
      icon: InfinityIcon,
      img: heroHuman,
      subtitle: "Build long-term mind longevity",
      goal: "Build the systems and community that sustain growth and performance long after the program ends.",
      items: [
        "Monthly check-in & guidance",
        "Executive community",
        "Quarterly retreats",
        "Follow-up assessment",
        "Leadership roundtable",
        "Annual mental-performance review",
        "Personalized growth dashboard",
      ],
      outcome: "Long-term resilience. Continuous growth.",
      motto: "Consistency today. Legacy tomorrow.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <Eyebrow>The program</Eyebrow>
        <h2 className="font-display mt-5 text-balance text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          Not a concept.{" "}
          <span className="italic" style={{ color: GOLD }}>
            A real program.
          </span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          Four gentle steps — from deep understanding to lasting change.
        </p>
      </div>

      <div className="space-y-12 md:space-y-20">
        {steps.map((s, i) => (
          <div
            key={s.key}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            {/* image */}
            <div
              className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 ${
                i % 2 ? "md:order-2" : ""
              }`}
            >
              <img
                src={s.img}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-64 w-full object-cover md:h-96"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(18,18,22,0.55), transparent 55%)",
                }}
              />
              <div
                className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] backdrop-blur"
                style={{ color: "#e6c98a" }}
              >
                <s.icon className="h-3.5 w-3.5" />
                Step {s.roman}
              </div>
            </div>

            {/* content */}
            <div>
              <h3 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                {s.key}
              </h3>
              <div
                className="mt-1.5 text-sm uppercase tracking-[0.18em]"
                style={{ color: GOLD }}
              >
                {s.subtitle}
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">
                {s.goal}
              </p>
              {s.note && (
                <p className="mt-4 text-sm font-medium text-emerald-300/90">
                  Delivered with our partner, Ritual Experience.
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border px-3 py-1 text-[13px] text-stone-200"
                    style={{
                      borderColor: "rgba(212,176,106,0.28)",
                      backgroundColor: "rgba(212,176,106,0.06)",
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm text-muted-foreground">
                  <span className="text-emerald-300">Outcome — </span>
                  {s.outcome}
                </p>
                <p
                  className="font-display mt-2 text-lg italic md:text-xl"
                  style={{ color: GOLD }}
                >
                  “{s.motto}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   3. RITUAL PARTNERSHIP
   ========================================================= */
function RitualPartnership() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-12 text-center">
        <Eyebrow>Partnership</Eyebrow>
      </div>
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative h-72 md:h-auto">
            <img
              src={ritualImg}
              alt="Ritual Experience — gong ceremony for mind longevity"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-background/60 md:to-background/40" />
          </div>
          <div className="p-8 md:p-12">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                color: "#e6c98a",
                borderColor: "rgba(212,176,106,0.4)",
                backgroundColor: "rgba(212,176,106,0.1)",
                borderWidth: 1,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: GOLD }}
              />
              In partnership with Ritual Experience
            </div>
            <h2 className="font-display mt-6 text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Ritual Experiences for{" "}
              <span className="italic" style={{ color: GOLD }}>
                Mind Longevity.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Designed to help leaders reset, realign, and expand awareness.
              Small group · Private · Intentionally guided — the experiences
              behind the Reset step of the program.
            </p>
            <ul className="mt-7 grid gap-2.5 text-sm text-foreground/85 sm:grid-cols-2">
              {[
                "Reset & realign",
                "Expand awareness",
                "Small group · Private",
                "Intentionally guided",
              ].map((li) => (
                <li key={li} className="flex gap-2.5">
                  <Leaf
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: GOLD }}
                  />
                  {li}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/15 bg-transparent px-7 text-sm font-medium text-stone-200 hover:bg-white/5"
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
    </section>
  );
}

/* =========================================================
   4. CTA — calm invitation
   ========================================================= */
function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-28 pt-6 md:pb-40">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-8 py-20 text-center md:px-16 md:py-24">
        <img
          src={humanMind}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/85 via-background/80 to-background/95"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 40%, rgba(212,176,106,0.14), transparent 70%)",
          }}
        />
        <div className="relative z-20">
          <Eyebrow>Your next chapter</Eyebrow>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Invest in the{" "}
            <span className="italic" style={{ color: GOLD }}>
              leader
            </span>{" "}
            behind the business.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            No pressure, no pitch — just a conversation about where you are and
            where you'd like to be.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-8 text-base font-semibold text-stone-950 hover:opacity-90"
              style={{ backgroundColor: GOLD }}
            >
              <Link to="/contact">
                Begin with a conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
