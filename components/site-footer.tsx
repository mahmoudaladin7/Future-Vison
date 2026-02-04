import Link from "next/link";
import Container from "@/components/container";
import { site } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="text-sm font-semibold">{site.name}</div>
            <p className="text-sm text-muted-foreground max-w-md">
              Premium consulting and focused investment. We combine clarity, discipline, and execution to create durable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-semibold">Explore</div>
              <div className="flex flex-col gap-1 text-muted-foreground">
                {site.nav.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-foreground">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold">Company</div>
              <div className="flex flex-col gap-1 text-muted-foreground">
                <Link href="/about" className="hover:text-foreground">About</Link>
                <Link href="/careers" className="hover:text-foreground">Careers</Link>
                <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                <Link href="/terms" className="hover:text-foreground">Terms</Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.shortName}. All rights reserved.</div>
          <div className="flex gap-4">
            {site.social.map((s) => (
              <Link key={s.title} href={s.href} className="hover:text-foreground">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
