import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Building2, Hash, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Eyebrow, PageShell, Section } from "@/components/site/Shell";
import { CONTACT, TEAM } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SIXSHEET Tech" },
      {
        name: "description",
        content:
          "Let’s build what’s next. Tell us about your business challenge — AI transformation, in-house training, or a platform to build.",
      },
      { property: "og:title", content: "Contact Us — SIXSHEET Tech" },
      { property: "og:description", content: "Let’s build what’s next — together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-2 md:pt-20">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.02] text-foreground md:text-6xl">
          Let’s build <span className="text-brand">what’s next.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Tell us where your business is today and where you want to go — scaling, execution, AI
          adoption or your next growth engine. We’ll reply within one business day.
        </p>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </Section>
    </PageShell>
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
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="rounded-[2rem] border border-border/80 bg-card p-8 shadow-elevated md:p-10">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">New inquiry</div>
      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@company.com" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Company (optional)" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your business challenge, team, or the AI program you have in mind."
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
            Your email app should open with the message ready to send. Prefer email directly?{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-brand underline-offset-4 hover:underline">
              {CONTACT.email}
            </a>
          </p>
        )}
      </form>
    </div>
  );
}

function ContactDetails() {
  const items = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: MapPin, label: "Office", value: CONTACT.address },
    { icon: Building2, label: "Company", value: `${CONTACT.companyTh} (${CONTACT.companyEn})` },
    { icon: Hash, label: "Registration no.", value: CONTACT.registration },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-border/80 bg-card p-8">
        <ul className="space-y-5">
          {items.map((it) => (
            <li key={it.label} className="flex gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {it.label}
                </div>
                {it.href ? (
                  <a href={it.href} className="font-semibold text-foreground hover:text-brand">
                    {it.value}
                  </a>
                ) : (
                  <div className="text-sm leading-relaxed text-foreground">{it.value}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/about"
        hash="team"
        className="group flex items-center justify-between rounded-[2rem] border border-border/80 bg-card p-6 transition-all hover:shadow-glow"
      >
        <div className="flex -space-x-3">
          {TEAM.map((m) => (
            <img
              key={m.name}
              src={m.photo}
              alt={m.name}
              className="h-11 w-11 rounded-full border-2 border-card object-cover object-top"
            />
          ))}
        </div>
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-brand">
          Meet the team <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}
