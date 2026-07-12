import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md font-semibold transition-colors duration-[120ms] ease-standard disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white shadow-glow-sm hover:bg-accent-hover active:bg-accent-pressed",
        secondary:
          "border border-border bg-surface text-fg hover:border-[#3a3e45] hover:bg-surface-elevated",
        elevated:
          "border border-border bg-surface-elevated text-fg hover:bg-[#26282e]",
        ghost: "text-fg-muted hover:bg-white/6 hover:text-fg",
      },
      size: {
        sm: "h-10 px-4 text-[15px]",
        md: "h-12 px-6 text-base",
        lg: "h-13 px-[30px] text-[17px]",
        icon: "size-10",
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
