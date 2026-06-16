import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";
import founderThanawin from "@/assets/founder-thanawin.png";
import founderKritchapon from "@/assets/founder-kritchapon.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SX Transformation" },
      {
        name: "description",
        content:
          "Talk to the SX Transformation team. Email, phone, social, and our founders — let’s build your next growth system.",
      },
      { property: "og:title", content: "Contact Us — SX Transformation" },
      {
        property: "og:description",
        content: "Let’s build your next growth system — together.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <Hero />
        <ContactGrid />
        <Founders />
        <CompanyMap />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
          Contact Us
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Let’s build your{" "}
          <span className="text-gradient">next growth system.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Tell us about your venture, your system, or your leadership challenge.
          We’ll reply within one business day.
        </p>
      </div>
    </section>
  );
}

function ContactGrid() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@sxtech.me",
      href: "mailto:contact@sxtech.me",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+66 83 946 2656",
      href: "tel:+66839462656",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "sxtech",
      href: "https://facebook.com/sxtech",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@sxtech",
      href: "https://instagram.com/sxtech",
    },
    {
      icon: MapPin,
      label: "Office",
      value:
        "เลขที่ 15 ห้อง A124 ซอยประดิพัทธ์ 17 ถนนประดิพัทธ์ แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400",
      href: null,
    },
    {
      icon: Building2,
      label: "Company",
      value: "Sixsheet Tech Co., Ltd.",
      href: null,
    },
  ];
  return (
    <Section>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const inner = (
            <div className="flex h-full items-start gap-4 rounded-[20px] border border-border bg-card/50 p-7 backdrop-blur transition-colors hover:border-[color:var(--brand-indigo)]">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {it.label}
                </div>
                <div className="mt-1 text-base font-semibold text-foreground">
                  {it.value}
                </div>
              </div>
            </div>
          );
          return it.href ? (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block"
            >
              {inner}
            </a>
          ) : (
            <div key={it.label}>{inner}</div>
          );
        })}
      </div>
    </Section>
  );
}

function Founders() {
  const people = [
    {
      name: "Thanawin Ratametha",
      role: "Co-Founder · Digital Transformation & Ventures",
      bio: "Dynamic executive with 15+ years in Digital Transformation, specializing in Commerce Tech, Finance Tech, and Blockchain — blending business and technical expertise to drive innovation.",
      initials: "TR",
      photo: founderThanawin,
      linkedin: "https://www.linkedin.com/in/thanawin-ratametha-25385763/",
    },
    {
      name: "Kritchapon Choktananan",
      role: "Co-Founder · Engineering & Platforms",
      bio: "Senior Full-stack Software Developer at Robowealth Mutual Fund Brokerage Securities. Experienced in building investment platforms and SAP systems, with a strong track record across the information technology and services industry.",
      initials: "KC",
      photo: founderKritchapon,
      linkedin: "https://www.linkedin.com/in/kritchapon-choktananan-176595b2/",
    },
  ];
  return (
    <Section
      eyebrow="Founders"
      title={<>The people behind <span className="text-gradient">the system.</span></>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {people.map((p) => (
          <GradientCard key={p.name}>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-gradient-primary p-[2px] shadow-glow">
                <img
                  src={p.photo}
                  alt={`Portrait of ${p.name}`}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-full w-full rounded-[14px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
                <div className="text-sm text-[color:var(--brand-cyan)]">
                  {p.role}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {p.bio}
            </p>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-cyan)] underline-offset-4 hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              View LinkedIn profile
            </a>
          </GradientCard>
        ))}
      </div>
    </Section>
  );
}

function CompanyMap() {
  return (
    <Section>
      <div className="overflow-hidden rounded-[28px] border border-border bg-card/40 backdrop-blur">
        <div className="p-8 md:p-12">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              Company
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Sixsheet Tech Co., Ltd.
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              A transformation company combining technology and human
              performance. We build revenue systems and upgrade the leaders
              behind them.
            </p>
            <div className="mt-6 space-y-2 text-sm text-foreground/90">
              <div>
                · Address: เลขที่ 15 ห้องเลขที่ A124 ซอยประดิพัทธ์ 17 ถนนประดิพัทธ์
                แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400
              </div>
            </div>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow hover:opacity-95"
            >
              <a href="mailto:contact@sxtech.me">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-muted-foreground">
        Prefer a different channel?{" "}
        <Link to="/" className="text-foreground underline-offset-4 hover:underline">
          Back to home
        </Link>
      </div>
    </Section>
  );
}