import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "From Landing Page to Platform: the real roadmap",
    date: "2026-01-31",
    tag: "Product",
    desc:
      "Information architecture, content model, and how to add a dashboard without redesigning everything."
  },
  {
    title: "KPIs that change behavior (and avoid vanity metrics)",
    date: "2026-01-22",
    tag: "Execution",
    desc:
      "The smallest set of metrics that create accountability and momentum."
  },
  {
    title: "Investment theses: how to be focused without being narrow",
    date: "2026-01-12",
    tag: "Investment",
    desc:
      "Thesis, filters, and decision systems that keep quality high."
  }
];

export default function InsightsPage() {
  return (
    <main className="relative">
      <GradientBg />
      <Container className="py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Authority you can build on"
            subtitle="Later you can switch this to MDX or a CMS. The layout already supports tags and dates."
          />
        </Reveal>

        <div className="mt-10 grid gap-4">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <Card className="border bg-card/60 glass">
                <CardContent className="space-y-2">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm font-semibold">{p.title}</div>
                    <div className="flex items-center gap-2">
                      <Badge className="border bg-card/60 glass">{p.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{p.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <CtaBand
        title="Want us to publish your thought leadership?"
        subtitle="We can build a full Insights system: categories, search, MDX/CMS, and a publishing workflow."
        primaryHref="/contact"
        primaryLabel="Discuss content system"
      />
    </main>
  );
}
