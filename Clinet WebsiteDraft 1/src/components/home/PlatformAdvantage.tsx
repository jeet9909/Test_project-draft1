import ScrollReveal from "@/components/common/ScrollReveal";
import SectionHeader from "@/components/common/SectionHeader";
import { Eye, Zap, Dna, TrendingDown } from "lucide-react";

const advantages = [
  {
    icon: Eye,
    title: "Transparent Organism",
    body: "Enables live imaging, photography, and real-time monitoring at every stage of the assay — no sacrifice required mid-study.",
  },
  {
    icon: Zap,
    title: "Rapid Lifecycle Model",
    body: "Short life cycle enables accelerated experimental timelines compared to rodent models — results in days, not months.",
  },
  {
    icon: Dna,
    title: "Conserved Biology",
    body: "~1mm organism with conserved pathways relevant to human systems — true in vivo context beyond cell culture.",
  },
  {
    icon: TrendingDown,
    title: "Cost-Efficient Screening",
    body: "Organism-level screening with measurable phenotypic outputs at a fraction of mammalian study costs.",
  },
];

export default function PlatformAdvantage() {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="section-padding">
        <SectionHeader
          eyebrow="Why C. elegans?"
          title="The Platform Advantage"
          subtitle="C. elegans combines the rigor of in vivo biology with the speed and economy of cell-based assays — making it the ideal pre-clinical model."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 0.1}>
              <div className="card-base p-6 border-l-4 border-l-primary hover:-translate-y-1 cursor-default group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <adv.icon
                    size={20}
                    className="text-primary group-hover:text-secondary transition-colors"
                  />
                </div>
                <h3 className="font-sans font-semibold text-base text-neutral dark:text-white mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-dark-muted leading-relaxed">
                  {adv.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
