import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const roles = [
  { title: "Analyst — Consulting", location: "Riyadh (Hybrid)", desc: "Research, models, decks, KPI systems, and delivery support." },
  { title: "Associate — Investment", location: "Riyadh (Hybrid)", desc: "Thesis research, sourcing, diligence, and portfolio support." }
];

export default function CareersPage() {
  return (
    <main className="relative">
      <GradientBg />
      <Container className="py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Careers"
            title="Work with a team that cares about quality"
            subtitle="These are placeholder roles — replace with real openings anytime."
          />
        </Reveal>

        <div className="mt-10 grid gap-4">
          {roles.map((r) => (
            <Reveal key={r.title} delay={0.05}>
              <Card className="border bg-card/60 glass">
                <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold">{r.title}</div>
                    <div className="text-xs text-muted-foreground">{r.location}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                  <Button asChild href="/contact" variant="outline" className="bg-card/50 glass">
                    Apply via Contact
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
