import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  Camera,
  CircleDollarSign,
  Fingerprint,
  Image as ImageIcon,
  Send,
  Share2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Eyebrow, PageShell, Section } from "@/components/site/Shell";
import popcontProduct from "@/assets/profile/popcont-product.jpg";
import capturesProduct from "@/assets/profile/captures-product.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Platforms & Ventures — SIXSHEET Tech" },
      {
        name: "description",
        content:
          "We don’t only advise — we build & operate. PopCont, Captures Booth and the ventures we’ve designed, built and run ourselves.",
      },
      { property: "og:title", content: "Platforms & Ventures — SIXSHEET Tech" },
      {
        property: "og:description",
        content: "We don’t only advise. We build & operate.",
      },
    ],
  }),
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-4 md:pt-20">
        <Eyebrow>Our Platforms</Eyebrow>
        <h1 className="max-w-4xl text-balance text-4xl font-extrabold uppercase leading-[1.02] text-foreground md:text-6xl">
          We don’t only advise.
          <br />
          We <span className="text-brand">build &amp; operate.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Our own platforms give us first-hand experience in product development, AI, customer
          adoption, operations and scale — the same lessons we bring to every client.
        </p>
      </section>
      <PopCont />
      <Captures />
      <OtherVentures />
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}

/** Real product screenshot shown inside a minimal browser window. */
function BrowserFrame({ url, src, alt }: { url: string; src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-elevated">
      <div className="flex items-center gap-2 border-b border-border/80 bg-secondary/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-card px-3 py-0.5 text-xs text-muted-foreground">
          {url}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

function VisitButton({ href, label }: { href: string; label: string }) {
  return (
    <Button
      asChild
      size="lg"
      className="rounded-full bg-gradient-primary px-7 text-white shadow-glow hover:opacity-90"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label} <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>
    </Button>
  );
}

function PopCont() {
  const features = [
    { icon: Fingerprint, title: "Brand DNA", body: "Set up your brand once — AI learns who you are." },
    { icon: ImageIcon, title: "AI Content Creation", body: "Images, captions and video in high quality with AI." },
    { icon: Send, title: "Automated Publishing", body: "Auto-post to Facebook, Instagram, TikTok and LINE." },
    { icon: BarChart3, title: "Analytics", body: "Track results and see what drives growth." },
  ];
  const stats = [
    { v: "159+", l: "Brands started" },
    { v: "211,000+", l: "Content created" },
    { v: "12,000+", l: "Images created" },
    { v: "2,500+", l: "Video generations" },
    { v: "80%+", l: "Active users create content weekly" },
  ];
  return (
    <Section>
      <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card">
        <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Platform 01
            </div>
            <h2 className="mt-2 text-4xl font-extrabold text-foreground">PopCont</h2>
            <p className="mt-2 text-lg font-semibold text-brand">
              AI Marketing &amp; Content Automation Platform for Thai Businesses
            </p>
            <p className="mt-4 text-muted-foreground">
              No content team? PopCont helps businesses create images, write captions, plan posts
              and publish automatically — all in one platform.
            </p>
            <div className="mt-8">
              <VisitButton href="https://popcont.ai/" label="Visit PopCont" />
            </div>
          </div>
          <BrowserFrame url="popcont.ai" src={popcontProduct} alt="PopCont website homepage" />
        </div>
        <div className="grid gap-px border-t border-border/80 bg-border/80 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="bg-card p-6">
              <f.icon className="h-6 w-6 text-brand" />
              <div className="mt-3 font-bold text-foreground">{f.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-border/80 bg-secondary/60 p-8 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-extrabold text-foreground font-display">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Captures() {
  const flow = [
    { icon: Camera, title: "Create", body: "Design your experience" },
    { icon: Calendar, title: "Capture", body: "Live capture & print" },
    { icon: Users, title: "Engage", body: "Interactive experience" },
    { icon: Share2, title: "Share", body: "Live capture & online gallery" },
    { icon: BarChart3, title: "Data", body: "Analytics & insights" },
    { icon: CircleDollarSign, title: "Monetize", body: "Turn engagement into revenue" },
  ];
  const useCases = [
    { title: "Photobooth Business", body: "Run professional photobooths with full flexibility." },
    { title: "Event Activation", body: "Create branded, interactive experiences." },
    { title: "Self Photo Studio", body: "Automated studio with a payment system." },
    { title: "Brand & Marketing", body: "Drive engagement and collect first-party data." },
    { title: "Retail & Venue", body: "Attract visitors and increase foot traffic." },
    { title: "Custom & Installation", body: "Fully customizable for any creative concept." },
  ];
  return (
    <Section>
      <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card">
        <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Platform 02
            </div>
            <h2 className="mt-2 text-4xl font-extrabold text-foreground">Captures Booth</h2>
            <p className="mt-2 text-lg font-semibold text-brand">
              Event Tech Platform for Photo-Based Engagement
            </p>
            <p className="mt-4 text-muted-foreground">
              More than photobooth software — a complete platform for creating, operating and
              scaling modern photobooth experiences that engage people and drive real business
              results.
            </p>
            <div className="mt-8">
              <VisitButton href="https://captures.photo/booth" label="Visit Captures" />
            </div>
          </div>
          <BrowserFrame url="captures.photo/booth" src={capturesProduct} alt="Captures Booth website homepage" />
        </div>
        <div className="grid grid-cols-2 gap-px border-t border-border/80 bg-border/80 md:grid-cols-3 xl:grid-cols-6">
          {flow.map((f) => (
            <div key={f.title} className="bg-card p-5">
              <f.icon className="h-5 w-5 text-brand" />
              <div className="mt-2 text-sm font-extrabold uppercase text-foreground font-display">
                {f.title}
              </div>
              <p className="text-xs text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 border-t border-border/80 bg-secondary/60 p-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div key={u.title}>
              <div className="font-bold text-foreground">{u.title}</div>
              <p className="text-sm text-muted-foreground">{u.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function OtherVentures() {
  const ventures = [
    {
      name: "Innerly",
      type: "Wellness Discovery Platform",
      url: "https://innerly.live/",
      body: "A personalized discovery platform — a Mind Longevity quiz maps inner archetypes, then matches curated, vetted spaces across healing, movement, mindfulness and spiritual growth.",
    },
    {
      name: "PokerOS",
      type: "Poker Club Operating System",
      url: "https://pokeros-pearl.vercel.app/",
      body: "Automates the full tournament — blind clock, QR check-in, auto seating & rebalancing, prize-pool payouts, leaderboards and club analytics.",
    },
  ];
  return (
    <Section eyebrow="More ventures" title="Built, launched and operated by our team.">
      <div className="grid gap-5 md:grid-cols-2">
        {ventures.map((v) => (
          <a
            key={v.name}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-3xl border border-border/80 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-extrabold text-foreground font-display">{v.name}</div>
                <div className="text-sm font-semibold text-brand">{v.type}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{v.body}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
