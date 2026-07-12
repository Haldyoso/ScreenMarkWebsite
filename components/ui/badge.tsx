import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border border-border text-[13px] text-fg-muted",
  {
    variants: {
      variant: {
        /** Hero status pill / Windows pill. */
        status: "bg-accent/8 px-3.5 py-1.5",
        /** Plain pill on the section background. */
        plain: "px-3.5 py-1.5",
        /** The outline chips under the hero CTAs. */
        chip: "px-[13px] py-[7px]",
      },
    },
    defaultVariants: {
      variant: "plain",
    },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
