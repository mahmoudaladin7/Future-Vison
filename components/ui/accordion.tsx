"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  items: Array<{ value: string; title: string; content: React.ReactNode }>;
  className?: string;
  defaultValue?: string;
};

export function Accordion({ items, className, defaultValue }: AccordionProps) {
  const [open, setOpen] = React.useState<string | null>(defaultValue ?? null);
  return (
    <div className={cn("divide-y rounded-2xl border bg-card/60 glass", className)}>
      {items.map((it) => {
        const isOpen = open === it.value;
        return (
          <div key={it.value} className="p-2">
            <button
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-accent"
              onClick={() => setOpen(isOpen ? null : it.value)}
              type="button"
            >
              <span>{it.title}</span>
              <ChevronDown className={cn("h-4 w-4 transition", isOpen && "rotate-180")} />
            </button>
            {isOpen ? (
              <div className="px-4 pb-4 text-sm text-muted-foreground">{it.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
