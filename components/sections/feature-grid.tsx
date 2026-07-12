import { Reveal } from "@/components/motion/reveal";
import { Card, IconTile } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { gridFeatures } from "@/lib/content";

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 md:px-6">
      <SectionHeading
        overline="Everything included"
        title="One portable tool, the whole annotation toolkit"
        align="left"
        className="mb-12"
      />

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {gridFeatures.map(({ icon: Icon, title, description }, index) => (
          <Reveal as="li" key={title} index={index % 3} className="h-full">
            <Card interactive className="h-full p-[22px]">
              <IconTile size="sm" className="mb-3.5">
                <Icon aria-hidden="true" strokeWidth={1.75} className="size-5" />
              </IconTile>
              <h3 className="mb-1.5 text-base font-semibold">{title}</h3>
              <p className="text-sm leading-[1.55] text-fg-muted">{description}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
