import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends ComponentProps<"div"> {
  /** Adds the border→accent + lift treatment used by grid and gallery cards. */
  interactive?: boolean;
}

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6",
        interactive &&
          "transition-[border-color,transform] duration-[120ms] ease-standard hover:-translate-y-0.5 hover:border-accent/50",
        className,
      )}
      {...props}
    />
  );
}

/** The rounded square that holds a lucide icon at the top of a card. */
export function IconTile({
  className,
  size = "md",
  ...props
}: ComponentProps<"span"> & { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "size-9 rounded-[9px]",
    md: "size-10 rounded-[10px]",
    lg: "size-11 rounded-[11px]",
  } as const;

  return (
    <span
      className={cn(
        "flex items-center justify-center bg-accent-subtle text-accent",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
