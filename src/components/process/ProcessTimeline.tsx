import { Mail, FileText, Package, FlaskConical, BarChart3, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const steps = [
  {
    step: 1,
    name: "Enquiry",
    Icon: Mail,
    description:
      "Submit your compound details and screening objectives via our contact form or email. We acknowledge within 24 hours.",
    duration: "Day 1",
  },
  {
    step: 2,
    name: "Proposal",
    Icon: FileText,
    description:
      "We prepare a customized assay proposal with methodology, endpoints, timeline, and pricing. No obligations.",
    duration: "2–3 business days",
  },
  {
    step: 3,
    name: "Sample Submission",
    Icon: Package,
    description:
      "Ship your compound (powder or solution) per our submission guidelines. We confirm receipt and storage conditions.",
    duration: "Day 5–7",
  },
  {
    step: 4,
    name: "Assay Execution",
    Icon: FlaskConical,
    description:
      "Assays run in triplicate under standardized NGM conditions. Live updates available on request.",
    duration: "5–25 days (assay-dependent)",
  },
  {
    step: 5,
    name: "Data Delivery",
    Icon: BarChart3,
    description:
      "Full dataset (Excel/CSV), annotated microscopy images, and a structured PDF report with statistical analysis.",
    duration: "Within 2 days of assay completion",
  },
  {
    step: 6,
    name: "Follow-up",
    Icon: MessageSquare,
    description:
      "Free 30-minute data interpretation call. Guidance on next steps, regulatory data packages, or follow-up assays.",
    duration: "Post-delivery",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop: horizontal connecting line */}
      <div className="hidden lg:block absolute top-8 left-[8.33%] right-[8.33%] h-0.5 bg-gray-200 dark:bg-gray-700 z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
        {steps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 0.08}>
            <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3 lg:text-center">
              {/* Circle */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary dark:bg-primary flex items-center justify-center shadow-md">
                  <s.Icon size={24} className="text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>

              <div className="flex-1 lg:flex-none">
                <h3 className="font-sans font-semibold text-sm text-neutral dark:text-white mb-1">
                  {s.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-dark-muted leading-relaxed mb-2">
                  {s.description}
                </p>
                <span className="inline-block px-2 py-0.5 rounded-md bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 text-xs font-medium">
                  {s.duration}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
