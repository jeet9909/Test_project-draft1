"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Do I need ethics approval to use C. elegans?",
    a: "No. C. elegans is an invertebrate model not covered by CPCSEA/IACUC regulations in most jurisdictions, making it an ideal first-line in vivo screen without the administrative burden of mammalian studies.",
  },
  {
    q: "What data format will I receive?",
    a: "Excel/CSV raw data files plus a structured PDF report with GraphPad Prism-generated graphs, statistical analysis (ANOVA, Tukey, log-rank), and annotated microscopy images.",
  },
  {
    q: "Can you handle proprietary / NDA-protected compounds?",
    a: "Yes. We sign mutual NDAs before sample submission. Confidentiality of your compound identity, data, and results is strictly maintained.",
  },
  {
    q: "Do you offer co-authorship for academic collaborations?",
    a: "Yes, for Enterprise-tier collaborations involving novel compound discovery where significant intellectual contribution is demonstrated.",
  },
  {
    q: "What is the minimum sample quantity required?",
    a: "Typically 10–20 mg for a standard assay battery. For larger panels or transgenic strain assays, 20–50 mg is recommended. Contact us for small-sample protocols.",
  },
  {
    q: "Can results be used for regulatory dossiers (AYUSH/FSSAI)?",
    a: "Our reports are structured to support regulatory dossier submissions. We recommend confirming specific requirements with your regulatory consultant before study design.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We have experience handling international shipments. Clients are responsible for export/import compliance in their jurisdiction.",
  },
  {
    q: "What strains of C. elegans do you maintain?",
    a: "We maintain N2 (wild-type) as our primary strain. We also work with transgenic strains including AM141 (polyglutamine aggregation), NL5901 (α-synuclein), and daf-2 mutants for specific assays. Contact us for a full strain list.",
  },
  {
    q: "How do you ensure reproducibility?",
    a: "All assays are run in biological triplicate with appropriate positive and negative controls. We follow published, peer-reviewed methodologies and apply rigorous statistical analysis.",
  },
  {
    q: "Can I visit the lab?",
    a: "Yes, by appointment. Contact us to schedule a visit. We are located at AIC-GISC Foundation, Chandkheda, Ahmedabad.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="card-base overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset cursor-pointer"
            aria-expanded={open === i}
          >
            <span className="font-sans font-medium text-sm md:text-base text-neutral dark:text-white">
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                "shrink-0 text-primary mt-0.5 transition-transform duration-200",
                open === i && "rotate-180"
              )}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
