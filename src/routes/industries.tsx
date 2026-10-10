import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  BedDouble,
  Cog,
  FileText,
  Flower2,
  Heart,
  Image as ImageIcon,
  Megaphone,
  ShoppingCart,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import { CtaBand, PageHero, PageShell, PrimaryButton, Section } from "@/components/site/Shell";
import { INDUSTRIES } from "@/lib/site-content";
import heroCity from "@/assets/profile/hero-city.jpg";
import ctaCity from "@/assets/profile/cta-city.jpg";

const AREA_ICONS: Record<string, typeof Megaphone> = {
  "Marketing & Content": Megaphone,
  "Commerce & Sales": ShoppingCart,
  "Customer Engagement": Users,
  "Process Automation": Cog,
  "Customer Journey": BedDouble,
  "Personalization & Engagement": Heart,
  "Service Productivity": Flower2,
  "Content & Marketing": ImageIcon,
  "Knowledge & Documents": FileText,
  "Productivity & Automation": Zap,
  "Customer Service AI": UsersRound,
  "Business Intelligence": BarChart3,
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industry Focus — SIXSHEET Tech" },
      {
        name: "description",
        content:
          "Where we create the most impact: Retail, FMCG & Consumer Brands; Hospitality, Tourism & Wellness; Financial & Professional Services.",
      },
      { property: "og:title", content: "Industry Focus — SIXSHEET Tech" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industry Focus"
        title={
          <>
            Where we create the <span className="text-brand">most impact.</span>
          </>
        }
        subtitle="Three industries where people, data and AI unlock the biggest gains — and where our team has built, operated and delivered before."
        image={heroCity}
      />
      <Section>
        <div className="space-y-8">
          {INDUSTRIES.map((ind, idx) => (
            <article
              key={ind.n}
              className="grid overflow-hidden rounded-[2rem] border border-border/80 bg-card lg:grid-cols-2"
            >
              <img
                src={ind.image}
                alt=""
                loading="lazy"
                className={`aspect-[16/10] h-full w-full object-cover ${idx % 2 ? "lg:order-2" : ""}`}
              />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-light text-brand">{ind.n}</span>
                  <h2 className="text-2xl font-extrabold uppercase leading-tight text-foreground md:text-3xl">
                    {ind.title}
                  </h2>
                </div>
                <div className="mt-3 text-lg font-bold text-brand">{ind.tag}</div>
                <p className="mt-3 text-muted-foreground">{ind.line}</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {ind.areas.map((a) => {
                    const Icon = AREA_ICONS[a] ?? Zap;
                    return (
                      <div
                        key={a}
                        className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background p-4"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-brand" />
                        <span className="text-sm font-semibold text-foreground">{a}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-muted-foreground">
            Not in these industries? Our programs start with your business challenges — let’s talk
            about where AI can create value for you.
          </p>
          <PrimaryButton to="/contact">Talk to us</PrimaryButton>
        </div>
      </Section>
      <CtaBand image={ctaCity} />
    </PageShell>
  );
}
