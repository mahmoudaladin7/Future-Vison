import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    title: "Operational Turnaround Program",
    tag: "Consulting",
    desc:
      "Diagnosed bottlenecks, designed KPIs, and built a governance cadence. Result: improved delivery speed and decision clarity.",
    metrics: ["Roadmap shipped", "Weekly exec reporting", "Risk register & mitigations"]
  },
  {
    title: "Security Baseline & Controls Pack",
    tag: "Consulting",
    desc:
      "Built pragmatic controls baseline, policies, and remediation roadmap aligned to business risk.",
    metrics: ["Control inventory", "Prioritized remediation", "Audit readiness"]
  },
  {
    title: "Thesis-aligned Seed Investment",
    tag: "Investment",
    desc:
      "Backed a team with strong distribution and repeatable unit economics. Provided operator support on KPIs and GTM motion.",
    metrics: ["Metrics discipline", "GTM playbook", "Operating rhythm"]
  },
  {
    title: "Industrial Reliability Framework",
    tag: "Consulting",
    desc:
      "Created maintenance strategy, downtime tracking, and continuous improvement cadence for reliability.",
    metrics: ["Downtime visibility", "SOP templates", "KPI dashboard outline"]
  }
];

export default function PortfolioPage() {
  return (
    <main className="relative">
      <GradientBg />
      <Container className="py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Proof beats promises"
            subtitle="Replace these examples with your real engagements and investments. The layout is already designed for case studies."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i}>
              <Card className="h-full border bg-card/60 glass">
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold">{c.title}</div>
                    <Badge className="border bg-card/60 glass">{c.tag}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {c.metrics.map((m) => (
                      <div key={m} className="rounded-xl border bg-background/50 p-3 text-xs text-muted-foreground">
                        {m}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <CtaBand
        title="Want a case-study style proposal?"
        subtitle="We can present scope, milestones, and outcomes in an executive-ready format."
        primaryHref="/contact"
        primaryLabel="Request proposal"
        secondaryHref="/consulting"
        secondaryLabel="See consulting"
      />
    </main>
  );
}
