import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Building2,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  BackgroundFX,
  Footer,
  GradientCard,
  Nav,
  Section,
} from "@/components/site/Shell";
import founderThanawin from "@/assets/founder-thanawin.png";
import founderKritchapon from "@/assets/founder-kritchapon.png";
import teamKho from "@/assets/team-kho.jpg";
import teamJSettha from "@/assets/team-jsettha.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SIXSHEET Tech" },
      {
        name: "description",
        content:
          "Talk to the SIXSHEET Tech team. Email, phone, and our founders — let’s build your next growth system.",
      },
      { property: "og:title", content: "Contact Us — SIXSHEET Tech" },
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
        <ContactForm />
        <ContactGrid />
        <Team />
        <CompanyMap />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate mx-auto max-w-7xl overflow-hidden px-6 pt-20 pb-12 md:pt-28 md:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(90% 100% at 50% 0%, #000 40%, transparent 95%)",
          maskImage: "radial-gradient(90% 100% at 50% 0%, #000 40%, transparent 95%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
          <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
          SYS // Contact
          <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
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

function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `Project inquiry${name ? ` — ${name}` : ""}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;
    window.location.href = `mailto:contact@sxtech.me?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
          <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
          New inquiry
        </div>
        <GradientCard>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="Company / venture (optional)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project, system, or leadership challenge."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
            >
              Send message <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {sent && (
              <p className="text-center text-sm text-muted-foreground">
                Your email app should open with the message ready to send. Prefer
                email directly?{" "}
                <a
                  href="mailto:contact@sxtech.me"
                  className="text-[color:var(--brand-cyan)] underline-offset-4 hover:underline"
                >
                  contact@sxtech.me
                </a>
              </p>
            )}
          </form>
        </GradientCard>
      </div>
    </Section>
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
      icon: MapPin,
      label: "Office",
      value:
        "เลขที่ 15 ห้อง A124 ซอยประดิพัทธ์ 17 ถนนประดิพัทธ์ แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400",
      href: null,
    },
    {
      icon: Building2,
      label: "Company",
      value: "บริษัท ซิกชีทเทค จำกัด",
      href: null,
    },
    {
      icon: Hash,
      label: "Registration No.",
      value: "0105569101976",
      href: null,
    },
  ];
  return (
    <Section>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => {
          const inner = (
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-white/[0.02] p-7 backdrop-blur transition-colors hover:border-[color:var(--brand-cyan)]/50">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[color:var(--brand-cyan)]/30 bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)]">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {it.label}
                </div>
                <div className="mt-1.5 text-base font-semibold text-foreground">
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

type Person = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  initials?: string;
  email?: string;
  phone?: string;
  phoneHref?: string;
  linkedin: string;
};

function Team() {
  const people: Person[] = [
    {
      name: "Thanawin Ratametha",
      role: "CEO · Digital Transformation & Ventures",
      bio: "Dynamic executive with 15+ years in Digital Transformation, specializing in Commerce Tech, Finance Tech, and Blockchain — blending business and technical expertise to drive innovation.",
      photo: founderThanawin,
      email: "Ter@sixsheet.me",
      phone: "+66 83 946 2656",
      phoneHref: "tel:+66839462656",
      linkedin: "https://www.linkedin.com/in/thanawin-ratametha-25385763/",
    },
    {
      name: "Kritchapon Choktananan",
      role: "Co-CEO · Tech Engineering & Platforms Builder",
      bio: "Senior Full-stack Software Developer at Robowealth Mutual Fund Brokerage Securities. Experienced in building investment platforms and SAP systems, with a strong track record across the information technology and services industry.",
      photo: founderKritchapon,
      email: "contact@sxtech.me",
      phone: "+66 91 532 4195",
      phoneHref: "tel:+66915324195",
      linkedin: "https://www.linkedin.com/in/kritchapon-choktananan-176595b2/",
    },
    {
      name: "Kho Schwat",
      role: "AI Consultant · Marketing, Creative & Sales",
      bio: "AI adoption & governance specialist blending creativity, business, and AI. He helps organizations turn AI from experimentation into practical business impact — connecting strategy, people, workflows, and real-world adoption.",
      photo: teamKho,
      initials: "KS",
      linkedin: "https://www.linkedin.com/in/schwat-tangboontina-ba4285128",
    },
    {
      name: "J Settha",
      role: "Content Creator & AI Consultant",
      bio: "Creative Strategist Manager with 5+ years at Heroleads Asia, leading a team of 6+. Directs pitches, manages creative campaigns, and oversees strategic creative product management to hit revenue targets — with deep expertise in performance marketing.",
      photo: teamJSettha,
      initials: "JS",
      linkedin: "https://www.linkedin.com/in/jsettha",
    },
  ];
  return (
    <Section
      eyebrow="Team"
      title={<>The people behind <span className="text-gradient">the system.</span></>}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {people.map((p) => (
          <GradientCard key={p.name}>
            <div className="flex items-center gap-4">
              {p.photo ? (
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
              ) : (
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-lg font-bold text-white shadow-glow">
                  {p.initials}
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--brand-cyan)]">
                  {p.role}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {p.bio}
            </p>
            {(p.email || p.phone) && (
              <div className="mt-5 space-y-2.5">
                {p.email && (
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2.5 text-sm text-foreground/90 transition-colors hover:text-[color:var(--brand-cyan)]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" />
                    {p.email}
                  </a>
                )}
                {p.phone && (
                  <a
                    href={p.phoneHref}
                    className="flex items-center gap-2.5 text-sm text-foreground/90 transition-colors hover:text-[color:var(--brand-cyan)]"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[color:var(--brand-cyan)]" />
                    {p.phone}
                  </a>
                )}
              </div>
            )}
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
      <div className="relative isolate overflow-hidden rounded-[28px] border border-border bg-white/[0.02] backdrop-blur">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "36px 36px",
            WebkitMaskImage: "radial-gradient(120% 100% at 100% 0%, #000 35%, transparent 85%)",
            maskImage: "radial-gradient(120% 100% at 100% 0%, #000 35%, transparent 85%)",
          }}
        />
        <div className="relative z-10 p-8 md:p-12">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
              Company
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              บริษัท ซิกชีทเทค จำกัด
            </h3>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              A transformation company combining technology and human
              performance. We build revenue systems and upgrade the leaders
              behind them.
            </p>
            <div className="mt-6 space-y-2.5 text-[13px] leading-relaxed text-foreground/85">
              <div className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[11px] tracking-[0.16em] text-[color:var(--brand-cyan)]">REG</span>
                <span>เลขทะเบียนนิติบุคคล · 0105569101976</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[11px] tracking-[0.16em] text-[color:var(--brand-cyan)]">LOC</span>
                <span>
                  เลขที่ 15 ห้องเลขที่ A124 ซอยประดิพัทธ์ 17 ถนนประดิพัทธ์
                  แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400
                </span>
              </div>
            </div>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow hover:opacity-95"
            >
              <a href="mailto:contact@sxtech.me">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
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