"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/container";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const showSolid = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        showSolid
          ? "border-b bg-background/75 backdrop-blur"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[84px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/future-vision-logo.png"
            alt="Future Vision"
            width={330}
            height={88}
            priority
            className="h-[66px] w-auto -ml-1"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-1 py-2 text-[15px] font-semibold uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <Button
            asChild
            href="/signin"
            variant="ghost"
            className="text-sky-300 hover:text-sky-200"
          >
            SIGN IN
          </Button>
        </div>
      </Container>
    </header>
  );
}
