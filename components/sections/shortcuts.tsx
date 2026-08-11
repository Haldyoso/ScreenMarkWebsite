import { Reveal } from "@/components/motion/reveal";
import { KbdCombo } from "@/components/ui/kbd";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HeadingCopy, Shortcut } from "@/types";

interface ShortcutsProps {
  heading: HeadingCopy;
  shortcuts: Shortcut[];
}

export function Shortcuts({ heading, shortcuts }: ShortcutsProps) {
  return (
    <section id="shortcuts" className="scroll-mt-16 border-t border-divider bg-code-bg">
      <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-6">
        <SectionHeading {...heading} className="mb-12" />

        <Reveal>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {shortcuts.map((shortcut) => (
              <li
                key={shortcut.label}
                className="flex items-center justify-between gap-4 rounded-[10px] border border-border bg-card px-4 py-3.5"
              >
                <span className="text-[15px] text-fg">{shortcut.label}</span>
                <KbdCombo keys={shortcut.keys} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
