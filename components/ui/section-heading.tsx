import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  /** Uppercase accent overline above the H2. */
  overline: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        align === "center" ? "text-center" : "max-w-[640px]",
        className,
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[1px] text-accent-hover">
        {overline}
      </p>
      <h2 className="text-[clamp(28px,4vw,32px)] font-semibold tracking-[-0.5px]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-[1.55] text-fg-muted",
            align === "center" ? "mx-auto max-w-[640px]" : "max-w-[640px]",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
