import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HeadingCopy, Step } from "@/types";

interface HowItWorksProps {
  heading: HeadingCopy;
  steps: Step[];
}

export function HowItWorks({ heading, steps }: HowItWorksProps) {
  return (
    <section id="how" className="scroll-mt-16 border-y border-divider bg-code-bg">
      <div className="mx-auto max-w-[1200px] px-4 py-24 md:px-6">
        <SectionHeading {...heading} className="mb-14" />

        <ol className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} index={index} className="px-2 text-center">
              <span
                aria-hidden="true"
                className="mx-auto mb-5 flex size-14 items-center justify-center rounded-[14px] border border-border bg-card text-[22px] font-bold text-accent"
              >
                {index + 1}
              </span>
              <h3 className="mb-2 text-[19px] font-semibold">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-fg-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
