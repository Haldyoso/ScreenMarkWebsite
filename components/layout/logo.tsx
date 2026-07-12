import { cn } from "@/lib/utils";

/** Gradient tile + pen-mark glyph. The tile is decorative; the wordmark is the text. */
export function Logo({
  className,
  tileClassName,
  glow = false,
}: {
  className?: string;
  tileClassName?: string;
  glow?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 text-base font-bold tracking-[-0.2px] text-fg",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-[7px] bg-linear-[145deg] from-accent to-accent-pressed",
          glow && "shadow-[0_0_0_1px_rgb(255_255_255/0.08),0_4px_14px_rgb(76_141_214/0.35)]",
          tileClassName,
        )}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 20 L14 6 l4 4 L8 20 Z" />
          <path d="M14 6 l2-2 4 4 -2 2" />
        </svg>
      </span>
      <span>
        ScreenMark<span className="text-accent">Pro</span>
      </span>
    </span>
  );
}
