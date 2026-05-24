import ScrollReveal from "@/components/common/ScrollReveal";
import SectionHeader from "@/components/common/SectionHeader";
import {
  Pill,
  Leaf,
  Sparkles,
  FlaskConical,
  Microscope,
  Sprout,
  GraduationCap,
  Rocket,
} from "lucide-react";

const industries = [
  { icon: Pill, label: "Pharma" },
  { icon: Leaf, label: "Nutraceuticals" },
  { icon: Sparkles, label: "Cosmetics" },
  { icon: FlaskConical, label: "AYUSH" },
  { icon: Microscope, label: "Biotechnology" },
  { icon: Sprout, label: "Agrochemicals" },
  { icon: GraduationCap, label: "Academia" },
  { icon: Rocket, label: "Startups" },
];

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="section-padding">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Trusted Across Sectors"
          subtitle="From pharmaceutical R&D to academic research, our C. elegans platform serves diverse scientific and commercial needs."
          centered
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.label} delay={i * 0.06}>
              <div className="card-base p-6 flex flex-col items-center gap-3 group cursor-default hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <ind.icon
                    size={22}
                    className="text-gray-400 dark:text-gray-400 group-hover:text-white transition-colors"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-dark-muted group-hover:text-primary dark:group-hover:text-white transition-colors">
                  {ind.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
