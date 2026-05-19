import { Metadata } from "next";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/common/SectionHeader";
import ScrollReveal from "@/components/common/ScrollReveal";
import { servicePillars, pricingTiers } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services — WormEra Research Lab",
  description:
    "Explore WormEra's three service pillars: Toxicity & Safety Profiling, Efficacy & Functional Bioassays, and Microbiological & Anti-Infective Assays — all using C. elegans as the in vivo model.",
};

const pillarColors: Record<string, { bg: string; border: string; text: string }> = {
  toxicity: { bg: "bg-primary/10 dark:bg-primary/20", border: "border-primary", text: "text-primary dark:text-teal-300" },
  efficacy: { bg: "bg-accent/10 dark:bg-accent/20", border: "border-accent", text: "text-amber-700 dark:text-amber-300" },
  antimicrobial: { bg: "bg-secondary/10 dark:bg-secondary/20", border: "border-secondary", text: "text-secondary dark:text-orange-300" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="tag-pill bg-white/15 text-white mb-4 inline-block">
            Services
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            C. elegans-Based Bioassay Services
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Three pillars of scientifically validated, whole-organism screening
            — covering toxicity, functional efficacy, and antimicrobial
            evaluation.
          </p>
          <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/15 max-w-xl">
            <p className="text-white/80 text-sm">
              ✓ All assays follow published, peer-reviewed methodologies ·
              Raw data delivered in Excel/CSV · Reports in PDF
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      {servicePillars.map((pillar, idx) => {
        const colors = pillarColors[pillar.id];
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`py-20 ${idx % 2 === 0 ? "bg-white dark:bg-dark-bg" : "bg-gray-50 dark:bg-dark-surface"}`}
          >
            <div className="section-padding">
              <ScrollReveal>
                <div className="flex items-start gap-4 mb-10">
                  <div
                    className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center shrink-0`}
                  >
                    <span className={`font-bold text-xl ${colors.text}`}>
                      {idx + 1}
                    </span>
                  </div>
                  <div>
                    <h2 className="section-title mb-2">{pillar.title}</h2>
                    <p className="text-gray-600 dark:text-dark-muted max-w-2xl">
                      {pillar.overview}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Sub-services */}
              <div className="space-y-4">
                {pillar.subServices.map((sub, si) => (
                  <ScrollReveal key={sub.name} delay={si * 0.06}>
                    <div
                      className={`card-base p-6 border-l-4 ${colors.border}`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-1">
                          <h3 className="font-sans font-semibold text-sm text-neutral dark:text-white mb-1">
                            {sub.name}
                          </h3>
                          <span className={`tag-pill text-xs ${colors.bg} ${colors.text}`}>
                            {sub.timeline}
                          </span>
                        </div>
                        <div className="md:col-span-1">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                            Methodology
                          </p>
                          <p className="text-xs text-gray-600 dark:text-dark-muted leading-relaxed">
                            {sub.methodology}
                          </p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                            Deliverables
                          </p>
                          <p className="text-xs text-gray-600 dark:text-dark-muted leading-relaxed">
                            {sub.deliverables}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="btn-primary text-sm"
                >
                  Request Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Pricing Tiers */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-padding">
          <SectionHeader
            eyebrow="Pricing"
            title="Choose Your Tier"
            subtitle="No public pricing — we scope every project to your exact needs. All tiers include raw data, statistical report, and a post-delivery consultation call."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`card-base p-8 flex flex-col text-center ${
                    tier.highlight
                      ? "ring-2 ring-secondary shadow-lg scale-105"
                      : ""
                  }`}
                >
                  {tier.highlight && (
                    <span className="tag-pill bg-secondary text-white mb-4 self-center">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display font-bold text-2xl text-primary dark:text-white mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-dark-muted leading-relaxed flex-1 mb-6">
                    {tier.description}
                  </p>
                  <div className="space-y-2 text-sm text-left mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-dark-muted">
                      <CheckCircle size={14} className="text-sage shrink-0" />
                      Raw data (Excel/CSV)
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-dark-muted">
                      <CheckCircle size={14} className="text-sage shrink-0" />
                      PDF report with statistics
                    </div>
                    {tier.highlight && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-dark-muted">
                        <CheckCircle size={14} className="text-sage shrink-0" />
                        Annotated microscopy images
                      </div>
                    )}
                  </div>
                  <Link href="/contact" className={tier.highlight ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}>
                    Request Quote
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-gray-500 dark:text-dark-muted mb-3">
              Not sure which assay is right for you?
            </p>
            <Link href="/contact" className="btn-outline text-sm">
              Book a Free Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 bg-gray-50 dark:bg-dark-surface">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Download size={32} className="text-primary mx-auto mb-3" />
          <h3 className="font-display font-semibold text-xl text-primary dark:text-white mb-2">
            Sample Report
          </h3>
          <p className="text-gray-500 dark:text-dark-muted text-sm mb-4">
            Download a sample assay report to understand the level of detail we
            deliver — including GraphPad Prism graphs, statistical tables, and
            microscopy images.
          </p>
          <Link href="/contact" className="btn-primary text-sm">
            Request Sample Report
          </Link>
        </div>
      </section>
    </>
  );
}
