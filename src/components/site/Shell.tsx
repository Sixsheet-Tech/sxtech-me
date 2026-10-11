import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import sxMark from "@/assets/sx-mark.png";
import { CONTACT } from "@/lib/site-content";
import { localePath, stripLocale, useLang, useLocalePath, useT } from "@/lib/i18n";

const NAV_KEYS = [
  { to: "/", key: "home" },
  { to: "/services", key: "services" },
  { to: "/industries", key: "industries" },
  { to: "/ventures", key: "platforms" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

/** Soft lavender light wash + faint grid, echoing the company profile. */
export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 right-[-10%] h-[620px] w-[620px] rounded-full bg-[color:var(--brand-lilac)] opacity-20 blur-3xl" />
      <div className="absolute top-[45%] -left-48 h-[520px] w-[520px] rounded-full bg-[color:var(--brand-indigo)] opacity-[0.08] blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--brand-indigo) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--brand-indigo) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  const L = useLocalePath();
  return (
    <Link to={L("/")} className={`flex items-center gap-2.5 ${className}`}>
      <img src={sxMark} alt="" className="h-7 w-auto" />
      <span className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-foreground md:text-xl">
        AI{" "}
        <span className="bg-gradient-primary bg-clip-text text-transparent">Transformation</span>
      </span>
    </Link>
  );
}

/** TH | EN toggle that keeps the visitor on the same page. */
function LangSwitch({ className = "" }: { className?: string }) {
  const lang = useLang();
  const t = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = stripLocale(pathname);
  return (
    <div
      className={`flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold ${className}`}
      aria-label={t.nav.switchTo}
    >
      {(["th", "en"] as const).map((l) => (
        <Link
          key={l}
          to={localePath(l, base)}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            l === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const L = useLocalePath();
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_KEYS.map((l) => (
            <Link
              key={l.to}
              to={L(l.to)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "!text-foreground" }}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-foreground px-5 text-background hover:bg-foreground/90 lg:inline-flex"
          >
            <Link to={L("/contact")}>
              {t.nav.letsTalk} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_KEYS.map((l) => (
              <Link
                key={`m-${l.to}`}
                to={L(l.to)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeOptions={{ exact: true }}
                activeProps={{ className: "!text-foreground bg-secondary" }}
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to={L("/contact")} onClick={() => setOpen(false)}>
                {t.nav.letsTalk} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const t = useT();
  const L = useLocalePath();
  return (
    <footer className="border-t border-border/70 bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t.footer.tagline}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            {t.footer.slogan}
          </p>
        </div>
        <div>
          <div className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            {t.footer.explore}
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground md:grid-cols-1">
            {NAV_KEYS.slice(1).map((l) => (
              <li key={`f-${l.to}`}>
                <Link to={L(l.to)} className="transition-colors hover:text-foreground">
                  {t.nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            {t.footer.contact}
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-4 flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-brand" /> {CONTACT.email}
          </a>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-brand" /> {CONTACT.phone}
          </a>
          <p className="pt-2 text-xs leading-relaxed">
            {CONTACT.companyTh} · {CONTACT.companyEn}
            <br />
            {t.footer.registration} {CONTACT.registration}
          </p>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {CONTACT.companyEn} {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

/** Small uppercase label with the profile's vertical accent bar. */
export function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`eyebrow mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-4 w-[3px] rounded-full bg-gradient-primary" />
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  center = false,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-14 md:py-20 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className={`mb-10 max-w-3xl md:mb-12 ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
          {title && (
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-foreground md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg ${
                center ? "mx-auto" : ""
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

/** Page header: copy on the left, profile imagery on the right. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-14 pb-10 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-balance text-4xl font-extrabold uppercase leading-[1.02] text-foreground md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      {image && (
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
          <img
            src={image}
            alt=""
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elevated"
          />
        </div>
      )}
    </section>
  );
}

/** Image-topped card used across pillars, moments, expertise, industries. */
export function ImageCard({
  image,
  children,
  imgClass = "aspect-[16/10]",
  className = "",
}: {
  image: string;
  children: React.ReactNode;
  imgClass?: string;
  className?: string;
}) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[0_1px_0_0_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${className}`}
    >
      <div className={`overflow-hidden ${imgClass}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">{children}</div>
    </div>
  );
}

/** Short accent rule used under card titles in the profile. */
export function Rule() {
  return <span className="my-3 block h-[3px] w-10 rounded-full bg-gradient-primary" />;
}

/** Buttons take a locale-neutral path ("/contact") and localize it. */
export function PrimaryButton({
  to,
  hash,
  children,
}: {
  to: string;
  hash?: string;
  children: React.ReactNode;
}) {
  const L = useLocalePath();
  return (
    <Button
      asChild
      size="lg"
      className="rounded-full bg-gradient-primary px-7 text-white shadow-glow hover:opacity-90"
    >
      <Link to={L(to)} hash={hash}>
        {children} <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </Button>
  );
}

export function GhostButton({ to, children }: { to: string; children: React.ReactNode }) {
  const L = useLocalePath();
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className="rounded-full border-border bg-card px-7 text-foreground hover:bg-secondary"
    >
      <Link to={L(to)}>{children}</Link>
    </Button>
  );
}

/** Closing call-to-action band — "Let's Build What's Next." */
export function CtaBand({ image }: { image?: string }) {
  const t = useT();
  const L = useLocalePath();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-ink text-white">
        {image && (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-90 md:block"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 45%)",
              maskImage: "linear-gradient(to right, transparent, #000 45%)",
            }}
          />
        )}
        <div className="relative max-w-xl p-8 md:p-14">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-lilac)]">
            {t.cta.slogan}
          </div>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] md:text-5xl">
            {t.cta.titleA} <span className="text-[color:var(--brand-lilac)]">{t.cta.titleB}</span>
          </h2>
          <div className="mt-6 space-y-1.5 text-sm text-white/80">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-white px-7 text-[color:var(--brand-ink)] hover:bg-white/90"
          >
            <Link to={L("/contact")}>
              {t.cta.button} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BackgroundFX />
      <Nav />
      <main className="relative overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
