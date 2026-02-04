import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";

export default function CtaBand({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="border-t bg-card/50 glass">
      <Container className="py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border bg-background/40 p-6 glass">
          <div className="space-y-1">
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-sm text-muted-foreground">{subtitle}</div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button asChild href={secondaryHref} size="lg" variant="outline" className="bg-card/50 glass">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}
