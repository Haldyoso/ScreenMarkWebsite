import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[820px] scroll-mt-16 px-4 py-24 md:px-6">
      <SectionHeading overline="Questions" title="Frequently asked" className="mb-12" />

      <Reveal>
        {/* Answers are server-rendered inside the panels, so they stay indexable. */}
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
