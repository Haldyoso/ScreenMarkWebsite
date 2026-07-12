import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Benefits } from "@/components/sections/benefits";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { DownloadCta } from "@/components/sections/download-cta";
import { Faq } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Shortcuts } from "@/components/sections/shortcuts";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Two fixed radial glows plus a faint dotted grid, both behind all content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(900px_500px_at_78%_-8%,rgb(76_141_214/0.14),transparent_60%),radial-gradient(700px_480px_at_8%_12%,rgb(63_182_168/0.06),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(rgb(255_255_255/0.035)_1px,transparent_1px)] bg-size-[26px_26px] opacity-40"
      />

      <Navbar />

      <main id="top" className="relative z-1">
        <Hero />
        <Benefits />
        <FeatureShowcase />
        <HowItWorks />
        <FeatureGrid />
        <ComparisonTable />
        <Gallery />
        <Shortcuts />
        <Faq />
        <DownloadCta />
      </main>

      <Footer />
    </div>
  );
}
