import Link from "next/link";
import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import {
  ArrowRight,
  ShieldCheck,
  LineChart,
  BriefcaseBusiness,
  Compass,
  Banknote,
} from "lucide-react";

const lanes = [
  {
    icon: BriefcaseBusiness,
    title: "Consulting",
    desc: "Strategy-to-execution programs for operations, digital, risk, and transformation — built with measurable KPIs and governance.",
  },
  {
    icon: Banknote,
    title: "Investment",
    desc: "Focused, thesis-driven investing with strong operator support — we back teams that build durable products and cashflows.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Governance",
    desc: "We reduce execution risk with clear decision logs, controls, and delivery rituals — no chaos, no surprises.",
  },
  {
    icon: LineChart,
    title: "Growth Systems",
    desc: "From funnel to retention: instrumentation, dashboards, playbooks, and quarterly execution cycles.",
  },
];

const faqs = [
  {
    value: "v1",
    title: "Can this site evolve into a full platform?",
    content:
      "Yes. This starter already has a scalable structure (multi-page, reusable UI, clean layout). Next step is adding a /dashboard area for client portals, gated content, reporting, and admin tools.",
  },
  {
    value: "v2",
    title: "What makes your consulting different?",
    content:
      "We don’t stop at slides. Every engagement ships with an execution system: owners, timelines, governance, and KPIs that actually change outcomes.",
  },
  {
    value: "v3",
    title: "What type of investments do you do?",
    content:
      "Thesis-driven: we focus on businesses where disciplined execution and operator support create an edge — not hype. See the Investment page for thesis, stages, and sectors.",
  },
];

export default function HomePage() {
  return (
    <main className="relative -mt-[84px]">
      <GradientBg />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/riyadh-drone-poster.jpg"
          >
            <source src="/videos/riyadh-drone.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/80"
          />
        </div>
        <Container className="relative py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-7 text-center lg:col-span-12 lg:max-w-4xl lg:mx-auto">
              <Reveal>
                <Badge className="border bg-card/60 glass mx-auto">
                  Consulting & Investment • Premium, scalable website foundation
                </Badge>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                  Build outcomes with{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    strategy that ships
                  </span>{" "}
                  and capital that compounds.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
                  FUTURE Vision blends consulting-grade execution systems with
                  thesis driven investing. We help leadership teams move faster,
                  derisk decisions, and build durable value.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="border-t bg-card/30 glass">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Two engines, one discipline"
              subtitle="Consulting drives measurable execution. Investing compounds durable value. Both run on the same operating system: clarity, governance, and results."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lanes.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={0.05 * idx}>
                  <Card className="group h-full border bg-card/60 glass transition hover:-translate-y-0.5 hover:bg-card/80">
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="grid h-10 w-10 place-items-center rounded-xl border bg-background/50">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          Explore
                        </span>
                      </div>
                      <div className="text-sm font-semibold">{s.title}</div>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              <Card className="lg:col-span-7 border bg-background/40 glass">
                <CardContent className="space-y-3">
                  <div className="text-sm font-semibold">Consulting track</div>
                  <p className="text-sm text-muted-foreground">
                    We build execution rhythms: weekly decisions, clear owners,
                    and KPI visibility. This becomes a client portal later.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {[
                      "Roadmaps",
                      "Governance",
                      "KPIs",
                      "Change management",
                      "Vendor strategy",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border bg-card/60 glass px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    href="/consulting"
                    variant="outline"
                    className="bg-card/50 glass"
                  >
                    See consulting <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="lg:col-span-5 border bg-background/40 glass">
                <CardContent className="space-y-3">
                  <div className="text-sm font-semibold">Investment track</div>
                  <p className="text-sm text-muted-foreground">
                    Thesis-driven investing with operator support. We care about
                    teams, distribution, unit economics, and discipline.
                  </p>
                  <Button asChild href="/investment">
                    See investment thesis{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-t">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="How it works"
                  title="Simple, premium, repeatable"
                  subtitle="A process that scales: discovery → design → delivery. Then optional ongoing governance."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid gap-4">
              {[
                {
                  step: "01",
                  title: "Diagnose",
                  desc: "Fast discovery, constraints, and success metrics. Define the real problem.",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "Decision-ready options, tradeoffs, roadmap, and KPI system.",
                },
                {
                  step: "03",
                  title: "Deliver",
                  desc: "Execution support, governance, and stakeholder alignment until it lands.",
                },
              ].map((x, i) => (
                <Reveal key={x.step} delay={0.05 * i}>
                  <Card className="border bg-card/60 glass">
                    <CardContent className="flex gap-4">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border bg-background/50 text-sm font-semibold">
                        {x.step}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">{x.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {x.desc}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t bg-card/30 glass">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Clear answers, no noise"
              subtitle="This section is ready for real client questions. Update text anytime."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <Accordion items={faqs} />
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Ready to move fast with clarity?"
        subtitle="Book a call or request the deck. We’ll align on outcomes, scope, and next steps."
        primaryHref="/contact"
        primaryLabel="Book a call"
        secondaryHref="/deck"
        secondaryLabel="Request deck"
      />
    </main>
  );
}
