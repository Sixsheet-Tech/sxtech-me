import { createFileRoute } from "@tanstack/react-router";
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
import { EXPERTISE, PROCESS } from "@/lib/site-content";
import servicesHero from "@/assets/profile/services-hero.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Transformation & Capability Building | SIXSHEET Tech" },
      {
        name: "description",
        content:
          "We don’t just teach AI — we transform how your team works with AI. Tailored in-house AI training, consulting and hands-on implementation, plus platform and development services.",
      },
      { property: "og:title", content: "Services — SIXSHEET Tech" },
      {
        property: "og:description",
        content: "AI Transformation & Capability Building — from learning to real impact.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services · In-house Training"
        title={
          <>
            AI Transformation &amp; <span className="text-brand">Capability Building</span>
          </>
        }
        subtitle={
          <>
            <strong className="text-foreground">
              We don’t just teach AI. We transform how your team works with AI.
            </strong>{" "}
            We combine tailored AI training, business consulting and hands-on implementation to
            help your team solve real challenges, improve productivity and build AI solutions they
            can use from day one.
          </>
        }
        image={servicesHero}
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryButton to="/contact">Design my program</PrimaryButton>
          <GhostButton to="/industries">Industry focus</GhostButton>
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
  return (
    <Section
      id="how-we-work"
      eyebrow="How we work"
      title={
        <>
          From learning to <span className="text-brand">real impact.</span>
        </>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PROCESS.map((s) => (
          <ImageCard key={s.n} image={s.image} imgClass="aspect-[3/1]">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-light text-brand">{s.n}</span>
              <span className="text-lg font-extrabold uppercase text-foreground font-display">
                {s.title}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-5">
              <div className="rounded-2xl bg-secondary p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Key deliverable
                </div>
                <div className="mt-1 flex items-center gap-2 font-bold text-foreground">
                  <FileCheck2 className="h-4 w-4 text-brand" /> {s.deliverable}
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
  return (
    <Section
      id="expertise"
      eyebrow="Our transformation expertise"
      title={
        <>
          Four tracks. <span className="text-brand">Real skills.</span>
        </>
      }
      subtitle="Turn real business challenges into practical AI skills, workflows and solutions."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {EXPERTISE.map((e) => (
          <ImageCard key={e.n} image={e.image}>
            <div className="text-4xl font-light text-brand">{e.n}</div>
            <div className="mt-2 text-lg font-extrabold uppercase leading-tight text-foreground font-display">
              {e.title}
            </div>
            <Rule />
            <p className="text-sm text-muted-foreground">{e.line}</p>
            <ul className="mt-4 divide-y divide-border/70 text-sm text-foreground/85">
              {e.topics.map((t) => (
                <li key={t} className="py-2">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <div className="flex items-center gap-3 rounded-2xl bg-secondary p-4">
                <GraduationCap className="h-6 w-6 shrink-0 text-brand" />
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    Popular course
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

function BuildAndPartner() {
  const services = [
    {
      icon: LayoutDashboard,
      label: "Platform",
      title: "Platform Builder",
      body: "Productized platforms we build, own and operate — the recurring, compounding core of our portfolio.",
      tags: ["Captures", "PopCont", "+ more in development"],
    },
    {
      icon: Briefcase,
      label: "Project",
      title: "Development Solution",
      body: "End-to-end development — custom software, AI builds and system integrations engineered to solve real business problems.",
      tags: ["Captures Customize", "AfterImage", "OneFreeOne"],
    },
    {
      icon: Sparkles,
      label: "Partnership",
      title: "Partnership & Authorized Reseller",
      body: "Strategic partnerships and authorized reselling — licensed software and group-buy access delivered through trusted partners.",
      tags: ["BytePlus", "Zoom", "Captures WOW"],
    },
  ];
  return (
    <Section
      id="build"
      eyebrow="Beyond training"
      title={
        <>
          From prototype to <span className="text-brand">production.</span>
        </>
      }
      subtitle="We don’t stop at advice — when your team is ready, we design, build, integrate and scale the solution with you."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col rounded-3xl border border-border/80 bg-card p-7">
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </span>
            </div>
            <div className="mt-6 text-xl font-extrabold text-foreground font-display">{s.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CoInvest() {
  const points = [
    {
      icon: HandCoins,
      title: "Capital + Execution",
      body: "Funding combined with real product, tech and growth support — we operate alongside you.",
    },
    {
      icon: Lightbulb,
      title: "AI & Technology Power",
      body: "AI-driven development, automation and scalable platforms built into every venture.",
    },
    {
      icon: TrendingUp,
      title: "Go-to-Market & Growth",
      body: "Marketing, content and distribution engines to accelerate traction from day one.",
    },
    {
      icon: Network,
      title: "Strong Network Access",
      body: "Partners, customers and ecosystems that unlock real opportunities at every stage.",
    },
  ];
  return (
    <Section id="co-invest">
      <div className="rounded-[2rem] bg-gradient-ink p-8 text-white md:p-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-lilac)]">
            <Rocket className="h-4 w-4" /> Co-build &amp; Co-invest
          </div>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] md:text-4xl">
            We co-build and co-invest in what we believe.
          </h2>
          <p className="mt-4 text-white/75">
            We don’t just invest capital — we invest execution. We partner with founders to build,
            scale and grow together.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p.icon className="h-6 w-6 text-[color:var(--brand-lilac)]" />
              <div className="mt-4 font-bold">{p.title}</div>
              <p className="mt-2 text-sm text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
