import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sxLogo from "@/assets/sx-logo.png";

export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="absolute top-[40%] -left-40 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-indigo)] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-cyan)] opacity-10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export function Nav() {
  const links: Array<{ to: string; label: string; hash?: string; external?: boolean }> = [
    { to: "/", label: "Home" },
    { to: "/business-ventures", label: "TECH™ Services" },
    { to: "/ventures", label: "Ventures Studio" },
    { to: "/human-transform", label: "HUMAN™ Services" },
    { to: "/contact", label: "Contact Us" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={sxLogo}
            alt="SIXSHEET Tech"
            className="h-8 w-8 object-contain drop-shadow-[0_0_12px_color-mix(in_oklab,var(--brand-indigo)_60%,transparent)]"
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            SIXSHEET <span className="text-gradient">Tech</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.external ? (
              <a
                key={`${l.to}-${l.label}`}
                href={l.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={`${l.to}-${l.label}`}
                to={l.to}
                hash={l.hash}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-gradient-primary text-white shadow-glow hover:opacity-90 md:inline-flex"
          >
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) =>
              l.external ? (
                <a
                  key={`m-${l.to}-${l.label}`}
                  href={l.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={`m-${l.to}-${l.label}`}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-foreground bg-card/60" }}
                >
                  {l.label}
                </Link>
              )
            )}
            <Button
              asChild
              size="sm"
              className="mt-2 w-full rounded-full bg-gradient-primary text-white shadow-glow hover:opacity-90"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src={sxLogo} alt="SIXSHEET Tech" className="h-7 w-7 object-contain" />
          <div className="leading-tight">
            <div className="font-semibold text-foreground">SIXSHEET Tech</div>
            <div className="text-xs text-muted-foreground">Sixsheet Tech Co., Ltd.</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5 md:items-end">
          <a
            href="mailto:contact@sxtech.me"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-[color:var(--brand-cyan)]" /> contact@sxtech.me
          </a>
          <a
            href="tel:+66839462656"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-[color:var(--brand-cyan)]" /> +66 83 946 2656
          </a>
        </div>
        <div className="text-center text-xs md:text-right">
          © {new Date().getFullYear()} Sixsheet Tech Co., Ltd.
          <br className="hidden md:block" /> Strategic Intelligence + Human Depth.
        </div>
      </div>
    </footer>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-7xl px-6 py-14 md:py-20 ${className}`}
    >
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-5 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-cyan)]">
              <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
              {eyebrow}
              <span className="h-px w-8 bg-[color:var(--brand-cyan)]" />
            </div>
          )}
          {title && (
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export function GradientCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-3xl p-px transition-all duration-300 hover:shadow-glow ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(140deg, color-mix(in oklab, var(--brand-indigo) 50%, transparent), color-mix(in oklab, var(--brand-cyan) 30%, transparent) 50%, transparent 80%)",
      }}
    >
      <Card className="h-full rounded-3xl border-0 bg-card/80 backdrop-blur">
        <CardContent className="p-8">{children}</CardContent>
      </Card>
    </div>
  );
}