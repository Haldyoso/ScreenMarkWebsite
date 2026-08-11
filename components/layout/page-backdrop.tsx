/**
 * Two fixed radial glows plus a faint dotted grid, both behind all content.
 * Both glows are Signal Blue — the second is simply the darker 700 step, since
 * the brand has no third hue to reach for here.
 */
export function PageBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(900px_500px_at_78%_-8%,rgb(45_125_246/0.14),transparent_60%),radial-gradient(700px_480px_at_8%_12%,rgb(26_80_174/0.10),transparent_55%)]"
      />
      {/*
       * White at 3.5% reads as texture on the dark canvas and as nothing at all
       * on the light one, so the light theme swaps in a dark dot of the same
       * weight — see the .page-dots rule in globals.css.
       */}
      <div
        aria-hidden="true"
        className="page-dots pointer-events-none fixed inset-0 z-0 bg-size-[26px_26px] opacity-40"
      />
    </>
  );
}
