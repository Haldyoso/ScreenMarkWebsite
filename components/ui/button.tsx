import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex max-w-full items-center justify-center gap-2.5 rounded-md text-center font-semibold transition-colors duration-[120ms] ease-standard disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-action text-white shadow-glow-sm hover:bg-action-hover active:bg-action-pressed",
        secondary:
          "border border-border bg-surface text-fg hover:border-border-strong hover:bg-surface-elevated",
        elevated:
          "border border-border bg-surface-elevated text-fg hover:bg-surface-hover",
        // fg/6, not white/6 — the hover tint has to darken on a light page.
        ghost: "text-fg-muted hover:bg-fg/6 hover:text-fg",
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-[15px]",
        md: "min-h-12 px-6 py-3 text-base",
        lg: "min-h-13 px-[30px] py-3 text-[17px]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/** `asChild` is how CTAs render as <a> while keeping button styling. */
export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
