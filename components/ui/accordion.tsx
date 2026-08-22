"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-divider last:border-b-0", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          // fg/3, not white/3 — the hover tint has to darken on a light page.
          "flex flex-1 items-center justify-between gap-4 px-[22px] py-5 text-left text-base font-semibold text-fg transition-colors duration-[120ms] hover:bg-fg/3 focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-accent)] [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          aria-hidden="true"
          className="size-[18px] shrink-0 text-fg-muted transition-transform duration-200 ease-standard"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div
        className={cn(
          "max-w-[680px] px-[22px] pb-[22px] text-[15px] leading-[1.65] text-fg-muted",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}
