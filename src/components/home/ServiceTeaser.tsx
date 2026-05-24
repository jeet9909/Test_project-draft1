import Link from "next/link";
import { ShieldCheck, FlaskConical, Microscope, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionHeader from "@/components/common/SectionHeader";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Toxicity & Safety Profiling",
    description:
      "Acute/chronic LC₅₀, live-dead staining, anthelmintic screening — validated safety data before mammalian studies.",
    href: "/services#toxicity",
    color: "text-primary bg-primary/10",
    border: "hover:border-primary",
    tags: ["LC₅₀", "Sub-chronic", "Anthelmintic"],
  },
  {
    icon: FlaskConical,
    title: "Efficacy & Functional Bioassays",
    description:
      "Anti-aging, probiotic, neuroprotection, metabolic and stress-resistance endpoints for nutraceutical & AYUSH dossiers.",
    href: "/services#efficacy",
    color: "text-accent bg-accent/10",
    border: "hover:border-accent",
    tags: ["Anti-Aging", "Probiotic", "Neuroprotection"],
  },
  {
    icon: Microscope,
    title: "Microbiological & Anti-Infective",
    description:
      "In vivo infection models, anti-virulence, prophylactic and AMR/anti-biofilm screening — no ethics clearance required.",
    href: "/services#antimicrobial",
    color: "text-secondary bg-secondary/10",
    border: "hover:border-secondary",
    tags: ["Anti-Pathogenic", "AMR", "Anti-Virulence"],
  },
];

export default function ServiceTeaser() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="section-padding">
        <SectionHeader
          eyebrow="Our Services"
          title="Three Pillars of Screening"
          subtitle="End-to-end in vivo bioassay services designed for pharma, nutraceutical, cosmetics, AYUSH, and academic researchers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12}>
              <Link
                href={p.href}
                className={`card-base p-8 flex flex-col h-full border-2 border-transparent ${p.border} group cursor-pointer`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${p.color}`}
                >
                  <p.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-xl text-neutral dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-dark-muted leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-blue-400 group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            All Services & Pricing
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
