import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, ShieldCheck, TrendingUp, Users2, Sparkles, HandCoins } from "lucide-react";

const thesis = [
  {
    icon: Target,
    title: "Thesis-driven",
    desc: "We invest where we have an edge: disciplined execution, distribution, and strong unit economics."
  },
  {
    icon: ShieldCheck,
    title: "Risk-aware",
    desc: "We prefer durability: governance, financial hygiene, and clear milestones over hype."
  },
  {
    icon: TrendingUp,
    title: "Compounding",
    desc: "We target businesses that can compound: recurring revenue, retention, and pricing power."
  },
  {
    icon: Users2,
    title: "Operator support",
    desc: "We help teams execute: KPI systems, process design, and strategic partnerships."
  }
];

const focus = [
  { title: "Stage", items: ["Pre-seed", "Seed", "Selective Series A"] },
  { title: "Sectors", items: ["B2B SaaS", "Infrastructure", "Industrial tech", "Security & risk", "Data products"] },
  { title: "What we look for", items: ["Strong founder-market fit", "Clear ICP", "Healthy unit economics", "Evidence of pull"] }
];

export default function InvestmentPage() {
  return (
    <main className="relative">
      <GradientBg />
      <section className="relative">
        <Container className="py-14 sm:py-20">
          <Reveal>
            <Badge className="border bg-card/60 glass">Investment</Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Focused investing with operator discipline.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
              We invest in teams building durable value — and we support them with the same execution systems we use in consulting:
              KPIs, governance, and delivery rhythm.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild href="/deck" size="lg">
                Request investment deck <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild href="/contact" size="lg" variant="outline" className="bg-card/50 glass">
                Pitch a company
              </Button>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {thesis.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.title} delay={0.05 * i}>
                  <Card className="h-full border bg-card/60 glass">
                    <CardContent className="space-y-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border bg-background/50">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="text-sm font-semibold">{t.title}</div>
                      <p className="text-sm text-muted-foreground">{t.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 grid gap-4 lg:grid-cols-12">
              <Card className="lg:col-span-7 border bg-background/40 glass">
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4" /> Focus
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {focus.map((f) => (
                      <div key={f.title} className="rounded-xl border bg-card/60 glass p-4">
                        <div className="text-sm font-semibold">{f.title}</div>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          {f.items.map((it) => (
                            <li key={it} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-5 border bg-background/40 glass">
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <HandCoins className="h-4 w-4" /> What happens after you pitch
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If the thesis fits, we move fast: initial call → metrics review → diligence → clear decision.
                    You’ll always get a direct answer.
                  </p>
                  <Button asChild href="/deck" variant="outline" className="bg-card/50 glass">
                    Request deck <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Building something durable?"
        subtitle="Send a short pitch and key metrics. We’ll reply quickly if it fits the thesis."
        primaryHref="/contact"
        primaryLabel="Pitch us"
        secondaryHref="/portfolio"
        secondaryLabel="See portfolio"
      />
    </main>
  );
}
