import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Faq as FaqItem, HeadingCopy } from "@/types";

interface FaqProps {
  heading: HeadingCopy;
  faqs: FaqItem[];
}

export function Faq({ heading, faqs }: FaqProps) {
  return (
    <section id="faq" className="mx-auto max-w-[820px] scroll-mt-16 px-4 py-24 md:px-6">
      <SectionHeading {...heading} className="mb-12" />

      <Reveal>
        {/*
         * Answers are server-rendered inside the panels, so they stay indexable
         * — and match the FAQPage JSON-LD emitted alongside this page word for
         * word, which is what Google requires of rich-result markup.
         */}
        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="overflow-hidden rounded-lg border border-border bg-card"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
