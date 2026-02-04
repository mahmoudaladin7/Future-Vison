import Container from "@/components/container";
import GradientBg from "@/components/gradient-bg";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="relative">
      <GradientBg />
      <Container className="py-14 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A firm built on execution discipline"
            subtitle="This page is ready for your real story: mission, values, leadership, and proof."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-7 border bg-card/60 glass">
            <CardContent className="space-y-3">
              <div className="text-sm font-semibold">Mission</div>
              <p className="text-sm text-muted-foreground">
                FUTURE Vision exists to help leaders make better decisions, execute faster, and build durable value —
                through premium consulting and focused investing.
              </p>
              <div className="text-sm font-semibold pt-3">Values</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Clarity over noise</li>
                <li>• Discipline over hype</li>
                <li>• Systems over heroics</li>
                <li>• Trust through quality</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="lg:col-span-5 border bg-background/40 glass">
            <CardContent className="space-y-3">
              <div className="text-sm font-semibold">What to add next</div>
              <p className="text-sm text-muted-foreground">
                Add leadership bios, credentials, partner logos, and a timeline. This layout supports it.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}
