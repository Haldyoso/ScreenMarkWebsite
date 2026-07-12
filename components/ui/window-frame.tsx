import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface WindowFrameProps extends ComponentProps<"div"> {
  /** Title shown in the Windows-11 chrome bar. Omit for dots only. */
  title?: string;
  /** Set false to drop the chrome bar entirely. */
  chrome?: boolean;
  children: ReactNode;
}

/** The standard screenshot frame: 1px border, radius 14, Win-11 chrome bar. */
export function WindowFrame({
  title,
  chrome = true,
  className,
  children,
  ...props
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border border-border bg-code-bg",
        className,
      )}
      {...props}
    >
      {chrome && (
        <div
          aria-hidden="true"
          className="flex h-[38px] items-center gap-2 border-b border-divider bg-surface px-3.5"
        >
          <span className="size-2.5 rounded-full bg-danger" />
          <span className="size-2.5 rounded-full bg-warning" />
          <span className="size-2.5 rounded-full bg-success" />
          {title && <span className="ml-2.5 text-xs text-fg-subtle">{title}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
