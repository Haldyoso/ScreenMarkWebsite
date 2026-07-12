import { Fragment } from "react";

import { cn } from "@/lib/utils";

export function Kbd({ children, className }: { children: string; className?: string }) {
  return (
    <kbd
      className={cn(
        "rounded-[5px] border border-border border-b-2 bg-bg px-2 py-[3px] font-mono text-xs leading-none text-fg",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

/** Renders ["Ctrl", "G"] as Ctrl + G. */
export function KbdCombo({ keys }: { keys: readonly string[] }) {
  return (
    <span className="flex items-center gap-1">
      {keys.map((key, index) => (
        <Fragment key={key}>
          {index > 0 && <span className="px-0.5 text-fg-subtle">+</span>}
          <Kbd>{key}</Kbd>
        </Fragment>
      ))}
    </span>
  );
}
