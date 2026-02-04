import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "secondary",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "secondary" | "outline" }) {
  const styles =
    variant === "outline"
      ? "border bg-transparent text-foreground"
      : "border bg-secondary text-secondary-foreground";
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        styles,
        className
      )}
      {...props}
    />
  );
}
