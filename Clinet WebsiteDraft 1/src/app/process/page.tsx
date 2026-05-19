import { Metadata } from "next";
import { Package } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import ScrollReveal from "@/components/common/ScrollReveal";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import FAQAccordion from "@/components/process/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Process — WormEra Research Lab",
  description:
    "Understand WormEra's 6-step research workflow — from enquiry to data delivery. Transparent timelines, NDAs available, no ethics clearance required for C. elegans studies.",
};

const submissionGuidelines = [
  {
    title: "Compound Form",
    body: "Powder preferred (min. 10 mg); DMSO solutions accepted (max 1% final concentration in assay).",
  },
  {
    title: "Labeling Requirements",
    body: "Compound name, molecular weight, CAS number, concentration (if solution), and safety hazard class.",
  },
  {
    title: "Shipping Conditions",
    body: "Ambient (stable compounds); 4°C (labile compounds). Include MSDS/SDS with each shipment.",
  },
  {
    title: "Shipping Address",
    body: "AIC-GISC Foundation, Block No. 5, Bh. GTU Main Building, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat-382424.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="tag-pill bg-white/15 text-white mb-4 inline-block">
            How It Works
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            From Enquiry to
            <br />
            <span className="text-secondary">Data Delivery</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            A transparent, researcher-friendly workflow designed to minimise
            friction and maximise the scientific value you receive.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-padding">
          <SectionHeader
            eyebrow="Workflow"
            title="6-Step Research Process"
            subtitle="Every project follows the same rigorous workflow — predictable, transparent, and reproducible."
            centered
          />
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Sample Submission Guidelines */}
      <section className="py-20 bg-gray-50 dark:bg-dark-surface">
        <div className="section-padding">
          <SectionHeader
            eyebrow="Sample Submission"
            title="Submission Guidelines"
            subtitle="Follow these guidelines to ensure your compound arrives in optimal condition for testing."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {submissionGuidelines.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.08}>
                <div className="card-base p-6 flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Package size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-neutral dark:text-white mb-1">
                      {g.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-dark-muted leading-relaxed">
                      {g.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 card-base p-6 bg-primary/5 dark:bg-primary/10 border-primary/20">
              <p className="text-sm text-gray-700 dark:text-dark-text">
                <span className="font-semibold">Questions about shipping?</span>{" "}
                Contact us before sending — we&apos;ll confirm receiving conditions and
                any special handling requirements for your specific compound.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-blue-400 hover:underline mt-2"
              >
                Contact us before shipping →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-padding">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before starting a study with WormEra."
          />
          <div className="mt-8 max-w-3xl">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-cta text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-white mb-3">
            Ready to submit your compound?
          </h2>
          <p className="text-white/75 mb-6">
            Fill out our enquiry form and we&apos;ll send you a customized assay
            proposal within 2–3 business days.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
