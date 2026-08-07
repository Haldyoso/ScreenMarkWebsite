import { Reveal } from "@/components/motion/reveal";
import { Card, IconTile } from "@/components/ui/card";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section
      aria-label="Why ScreenMark"
      className="mx-auto max-w-[1200px] px-4 pt-8 pb-24 md:px-6"
    >
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {benefits.map(({ icon: Icon, title, description }, index) => (
          <Reveal as="li" key={title} index={index} className="h-full">
            <Card className="h-full">
              <IconTile className="mb-4">
                <Icon aria-hidden="true" strokeWidth={1.75} className="size-[22px]" />
              </IconTile>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-[15px] leading-relaxed text-fg-muted">{description}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
