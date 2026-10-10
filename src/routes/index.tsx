import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, FileCheck2 } from "lucide-react";
import {
  CtaBand,
  Eyebrow,
  GhostButton,
  ImageCard,
  PageShell,
  PrimaryButton,
  Rule,
  Section,
} from "@/components/site/Shell";
import {
  EXPERTISE,
  INDUSTRIES,
  MISSION,
  MOMENTS,
  PILLARS,
  PROCESS,
  WHY,
} from "@/lib/site-content";
import heroCity from "@/assets/profile/hero-city.jpg";
import beliefPeople from "@/assets/profile/belief-people.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";
import popcontProduct from "@/assets/profile/popcont-product.jpg";
import capturesProduct from "@/assets/profile/captures-product.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIXSHEET Tech — We Build & Transform Businesses, Powered by AI" },
      {
        name: "description",
        content:
          "A transformation company. We partner with businesses to transform people, processes and technology through practical AI, real-world expertise and solutions we build together.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <CoreBelief />
      <Formula />
      <Moments />
      <ServicesTeaser />
      <IndustriesTeaser />
      <Platforms />
      <Why />
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-14 pb-16 md:pt-20 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <Eyebrow>A Transformation Company</Eyebrow>
        <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.98] text-foreground md:text-7xl">
          We build &amp; transform <span className="text-brand">businesses</span> — powered by AI.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
          {MISSION}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton to="/contact">Let’s Talk</PrimaryButton>
          <GhostButton to="/services">Explore our services</GhostButton>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold uppercase tracking-[0.18em] text-foreground/80">
          {["People", "Business", "Technology", "AI"].map((p, i) => (
            <span key={p} className="flex items-center gap-5">
              {i > 0 && <span className="h-4 w-px bg-border" />}
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-25 blur-3xl" />
        <img
          src={heroCity}
          alt="Modern city skyline at sunrise"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elevated"
        />
      </div>
    </section>
  );
}

function CoreBelief() {
  const business = PILLARS[0];
  const people = PILLARS[1];
  return (
    <Section>
      <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-border/80 bg-card p-8 md:p-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Eyebrow>Our Core Belief</Eyebrow>
          <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-foreground md:text-5xl">
            Real transformation happens when both the{" "}
            <span className="text-brand">business</span> and the{" "}
            <span className="text-brand">people</span> evolve together.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Technology enables transformation.
            <br />
            People make it happen.
          </p>
          <div className="mt-8 grid max-w-md grid-cols-2 gap-6">
            {[business, people].map((p) => (
              <div key={p.key} className="border-l-2 border-[color:var(--brand-violet)] pl-4">
                <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                  {p.key}
                </div>
                <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                  {p.traits?.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <img
          src={beliefPeople}
          alt="Business and people evolving together"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
      </div>
    </Section>
  );
}

function Formula() {
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-extrabold uppercase leading-[1.05] text-foreground md:text-5xl">
          Business × People
          <br />
          Technology × AI
        </h2>
        <div className="flex items-center gap-4">
          <ArrowRight className="h-10 w-10 text-brand" />
          <div className="text-2xl font-extrabold uppercase leading-[1.05] text-brand md:text-3xl font-display">
            Real business
            <br />
            impact
          </div>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <ImageCard key={p.key} image={p.image}>
            <div className="text-lg font-extrabold uppercase text-foreground font-display">
              {p.key}
            </div>
            <Rule />
            <div className="font-semibold text-[color:var(--brand-indigo)]">{p.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{p.line}</p>
          </ImageCard>
        ))}
      </div>
    </Section>
  );
}

function Moments() {
  return (
    <Section
      eyebrow="Who we work with"
      title={
        <>
          We work with businesses at critical moments of{" "}
          <span className="text-brand">change.</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MOMENTS.map((m) => (
          <ImageCard key={m.title} image={m.image}>
            <div className="text-sm font-extrabold uppercase tracking-wide text-foreground font-display">
              {m.title}
            </div>
            <p className="mt-3 text-pretty text-muted-foreground">“{m.quote}”</p>
          </ImageCard>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold text-foreground md:text-2xl">
          Different businesses. Different challenges. One common need:
        </p>
        <p className="mt-2 text-3xl font-extrabold uppercase tracking-wide text-brand md:text-4xl font-display">
          Transformation.
        </p>
      </div>
    </Section>
  );
}

function ServicesTeaser() {
  return (
    <Section>
      <div className="rounded-[2rem] border border-border/80 bg-card p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.1] text-foreground md:text-4xl">
              AI Transformation &amp; Capability Building
            </h2>
            <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand">
              In-house Training
            </span>
            <p className="mt-6 text-lg font-semibold text-foreground">
              We don’t just teach AI. We <span className="text-brand underline decoration-2 underline-offset-4">transform</span> how your team works with AI.
            </p>
            <p className="mt-3 text-muted-foreground">
              Tailored AI training, business consulting and hands-on implementation — so your team
              solves real challenges, improves productivity and builds AI solutions they can use
              from day one.
            </p>
            <div className="mt-8">
              <PrimaryButton to="/services">See how we work</PrimaryButton>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              From learning to real impact
            </div>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {PROCESS.map((s) => (
                <li key={s.n} className="rounded-2xl border border-border/80 bg-background p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-light text-brand">{s.n}</span>
                    <span className="font-extrabold uppercase text-foreground font-display">
                      {s.title}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <FileCheck2 className="h-4 w-4 text-brand" /> {s.deliverable}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Transformation expertise
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {EXPERTISE.map((e) => (
                <Link
                  key={e.n}
                  to="/services"
                  hash="expertise"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--brand-violet)] hover:text-brand"
                >
                  {e.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IndustriesTeaser() {
  return (
    <Section
      eyebrow="Industry Focus"
      title={
        <>
          Where we create the <span className="text-brand">most impact.</span>
        </>
      }
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {INDUSTRIES.map((i) => (
          <Link key={i.n} to="/industries" className="block">
            <ImageCard image={i.image}>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-light text-brand">{i.n}</span>
                <div className="text-lg font-extrabold uppercase leading-tight text-foreground font-display">
                  {i.title}
                </div>
              </div>
              <div className="mt-2 font-semibold text-brand">{i.tag}</div>
              <p className="mt-2 text-sm text-muted-foreground">{i.line}</p>
            </ImageCard>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Platforms() {
  const items = [
    {
      name: "PopCont",
      tag: "AI Marketing & Content Automation Platform for Thai Businesses",
      image: popcontProduct,
      features: ["AI Content Creation", "Multi-channel Publishing", "Brand Growth & Analytics"],
      url: "https://popcont.ai/",
    },
    {
      name: "Captures Booth",
      tag: "Photobooth Business OS for Events & Brand Experiences",
      image: capturesProduct,
      features: ["Event Photobooth", "Instant Sharing", "Event Management & Templates"],
      url: "https://captures.photo/booth",
    },
  ];
  return (
    <Section
      eyebrow="Our Platforms"
      title={
        <>
          We don’t only advise.
          <br />
          We <span className="text-brand">build &amp; operate.</span>
        </>
      }
      subtitle="Our own platforms give us first-hand experience in product development, AI, customer adoption, operations and scale."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((p) => (
          <ImageCard key={p.name} image={p.image} imgClass="aspect-[16/9] bg-secondary">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-extrabold uppercase text-foreground font-display">
                  {p.name}
                </div>
                <p className="mt-1 text-sm text-brand">{p.tag}</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${p.name}`}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <span key={f} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {f}
                </span>
              ))}
            </div>
          </ImageCard>
        ))}
      </div>
      <div className="mt-8">
        <GhostButton to="/ventures">All platforms &amp; ventures</GhostButton>
      </div>
    </Section>
  );
}

function Why() {
  return (
    <Section eyebrow="Why SIXSHEET Tech?" title="Built to create real impact.">
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
