import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Building2, Hash, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Eyebrow, PageShell, Section } from "@/components/site/Shell";
import { CONTACT, TEAM } from "@/lib/site-content";
import { useLocalePath, useT } from "@/lib/i18n";

export function ContactPage() {
  const c = useT().contactPage;
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-2 md:pt-20">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.02] text-foreground md:text-6xl">
          {c.titleA}
          <span className="text-brand">{c.titleB}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">{c.sub}</p>
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
  const c = useT().contactPage;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `${c.subject}${name ? ` — ${name}` : ""}`;
    const body = `${c.name}: ${name}\n${c.email}: ${email}\n${c.company}: ${company}\n\n${message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="rounded-[2rem] border border-border/80 bg-card p-8 shadow-elevated md:p-10">
      <div className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-brand">{c.newInquiry}</div>
      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">{c.name}</Label>
            <Input id="name" name="name" required placeholder={c.namePh} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{c.email}</Label>
            <Input id="email" name="email" type="email" required placeholder={c.emailPh} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{c.company}</Label>
          <Input id="company" name="company" placeholder={c.companyPh} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">{c.message}</Label>
          <Textarea id="message" name="message" required rows={5} placeholder={c.messagePh} />
        </div>
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-full bg-gradient-primary px-8 text-base font-semibold text-white shadow-glow hover:opacity-95"
        >
          {c.send} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {sent && (
          <p className="text-center text-sm text-muted-foreground">
            {c.sent}{" "}
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
  const c = useT().contactPage;
  const L = useLocalePath();
  const items = [
    { icon: Mail, label: c.labelEmail, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: c.labelPhone, value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: MapPin, label: c.labelOffice, value: CONTACT.address },
    { icon: Building2, label: c.labelCompany, value: c.companyValue },
    { icon: Hash, label: c.labelRegistration, value: CONTACT.registration },
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
                <div className="eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
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
        to={L("/about")}
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
          {c.meetTeam} <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}
