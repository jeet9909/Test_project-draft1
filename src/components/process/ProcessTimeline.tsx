import { Mail, FileText, Package, FlaskConical, BarChart3, MessageSquare } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'

const steps = [
  {
    step: 1,
    name: 'Enquiry',
    Icon: Mail,
    description: 'Submit your compound details and screening objectives via our contact form or email. We acknowledge within 24 hours.',
    duration: 'Day 1',
  },
  {
    step: 2,
    name: 'Proposal',
    Icon: FileText,
    description: 'We prepare a customized assay proposal with methodology, endpoints, timeline, and pricing. No obligations.',
    duration: '2–3 business days',
  },
  {
    step: 3,
    name: 'Sample Submission',
    Icon: Package,
    description: 'Ship your compound (powder or solution) per our submission guidelines. We confirm receipt and storage conditions.',
    duration: 'Day 5–7',
  },
  {
    step: 4,
    name: 'Assay Execution',
    Icon: FlaskConical,
    description: 'Assays run in triplicate under standardized NGM conditions. Live updates available on request.',
    duration: '5–25 days (assay-dependent)',
  },
  {
    step: 5,
    name: 'Data Delivery',
    Icon: BarChart3,
    description: 'Full dataset (Excel/CSV), annotated microscopy images, and a structured PDF report with statistical analysis.',
    duration: 'Within 2 days of completion',
  },
  {
    step: 6,
    name: 'Follow-up',
    Icon: MessageSquare,
    description: 'Data interpretation support. Guidance on next steps, regulatory data packages, or follow-up assays.',
    duration: 'Post-delivery',
  },
]

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop connecting line */}
      <div className="hidden lg:block absolute top-8 left-[8.33%] right-[8.33%] h-0.5 bg-gray-100 dark:bg-gray-700 z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
        {steps.map((s, i) => (
          <AnimateIn key={s.step} delay={i * 0.08}>
            <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3 lg:text-center">
              {/* Icon circle */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full bg-teal dark:bg-teal flex items-center justify-center shadow-md shadow-teal/20">
                  <s.Icon size={24} className="text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-coral text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {s.step}
                </span>
              </div>

              <div className="flex-1 lg:flex-none">
                <h3 className="font-sans font-semibold text-[13.5px] text-slate dark:text-gray-100 mb-1">
                  {s.name}
                </h3>
                <p className="text-[12px] text-gray-400 dark:text-gray-500 leading-relaxed mb-2">
                  {s.description}
                </p>
                <span className="inline-block px-2 py-0.5 rounded-md bg-teal/8 dark:bg-teal/15 text-teal dark:text-[#D1FAE5] text-[11px] font-medium">
                  {s.duration}
                </span>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  )
}
