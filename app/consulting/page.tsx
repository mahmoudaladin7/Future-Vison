import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Workflow, Shield, LineChart, Users, Settings2 } from "lucide-react";

const offers = [
  {
    icon: Workflow,
    title: "Strategy → Execution Roadmaps",
    desc: "Turn strategy into delivery with owners, timelines, and governance. Designed for executive reporting.",
    bullets: ["90-day roadmap", "Risks & mitigations", "Decision log", "KPI framework"]
  },
  {
    icon: Settings2,
    title: "Operating Model & Process Design",
    desc: "Design workflows that scale: roles, handoffs, SLAs, and measurable performance.",
    bullets: ["Process maps", "RACI + governance", "SOP templates", "Performance KPIs"]
  },
  {
    icon: Shield,
    title: "Risk, Compliance & Controls",
    desc: "Practical governance and controls aligned to real business risk — not paperwork for its own sake.",
    bullets: ["Controls baseline", "Policy pack", "Audit readiness", "Remediation plan"]
  },
  {
    icon: LineChart,
    title: "Growth & Analytics Systems",
    desc: "Instrumentation, dashboards, and weekly operating rhythm to sustain performance improvements.",
    bullets: ["Metrics that matter", "Dashboards outline", "Weekly cadence", "Quarterly planning"]
  }
];

const engagements = [
  { title: "Advisory Sprint", tag: "2 weeks", desc: "Fast clarity: diagnosis, options, and a plan you can execute." },
  { title: "Delivery Program", tag: "6–12 weeks", desc: "Roadmap + implementation support with governance and reporting." },
  { title: "Ongoing Governance", tag: "Monthly", desc: "Leadership rhythm: KPIs, decisions, risk handling, and stakeholder alignment." }
];

export default function ConsultingPage() {
  return (
    <main className="relative">
      <GradientBg />
      <section className="relative">
        <Container className="py-14 sm:py-20">
          <Reveal>
            <Badge className="border bg-card/60 glass">Consulting</Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Consulting that ships — not just slides.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
              We build execution systems: roadmaps, governance, KPIs, and stakeholder alignment.
              The output is always forwardable to leadership.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild href="/contact" size="lg">
                Book a consulting call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild href="/portfolio" size="lg" variant="outline" className="bg-card/50 glass">
                View case studies
              </Button>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={0.05 * i}>
                  <Card className="h-full border bg-card/60 glass">
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="grid h-10 w-10 place-items-center rounded-xl border bg-background/50">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs text-muted-foreground">Packaged</span>
                      </div>
                      <div className="text-sm font-semibold">{o.title}</div>
                      <p className="text-sm text-muted-foreground">{o.desc}</p>
                      <ul className="pt-1 space-y-2 text-sm text-muted-foreground">
                        {o.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/50" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 grid gap-4 lg:grid-cols-12">
              <Card className="lg:col-span-5 border bg-background/40 glass">
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <ClipboardList className="h-4 w-4" /> What you receive
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Decision-ready deliverables: a narrative, roadmap, risks, and KPI system. Clean and executive-grade.
                  </p>
                </CardContent>
              </Card>
              <Card className="lg:col-span-7 border bg-background/40 glass">
                <CardContent className="space-y-3">
                  <div className="text-sm font-semibold">Engagement formats</div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {engagements.map((e) => (
                      <div key={e.title} className="rounded-xl border bg-card/60 glass p-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-sm font-semibold">{e.title}</div>
                          <span className="text-xs text-muted-foreground">{e.tag}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Want a 2-week advisory sprint?"
        subtitle="We’ll diagnose, propose options, and deliver a roadmap with KPIs and governance."
        primaryHref="/contact"
        primaryLabel="Start a sprint"
        secondaryHref="/deck"
        secondaryLabel="Request deck"
      />
    </main>
  );
}
