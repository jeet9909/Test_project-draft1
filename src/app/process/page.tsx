import type { Metadata } from 'next'
import Link from 'next/link'
import { Package, ArrowRight } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import ProcessTimeline from '@/components/process/ProcessTimeline'
import FAQAccordion from '@/components/process/FAQAccordion'

export const metadata: Metadata = {
  title: 'Process — WormEra Research Lab',
  description:
    'Understand WormEra\'s 6-step research workflow — from enquiry to data delivery. Transparent timelines, NDAs available, no ethics clearance required for C. elegans studies.',
}

const submissionGuidelines = [
  {
    title: 'Compound Form',
    body: 'Powder preferred (min. 10 mg); DMSO solutions accepted (max 1% final concentration in assay).',
  },
  {
    title: 'Labeling Requirements',
    body: 'Compound name, molecular weight, CAS number, concentration (if solution), and safety hazard class.',
  },
  {
    title: 'Shipping Conditions',
    body: 'Ambient (stable compounds); 4°C (labile compounds). Include MSDS/SDS with each shipment.',
  },
  {
    title: 'Shipping Address',
    body: 'AIC-GISC Foundation, Block No. 5, Bh. GTU Main Building, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat-382424.',
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-0 section-pad bg-white dark:bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="relative pb-12">
          <AnimateIn>
            <p className="eyebrow text-teal dark:text-[#9FE1CB] mb-2">How it works</p>
            <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] text-slate dark:text-gray-100 font-bold leading-tight mb-4">
              From Enquiry to<br className="hidden md:block" /> Data Delivery
            </h1>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              A transparent, researcher-friendly workflow designed to minimise friction
              and maximise the scientific value you receive.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────── */}
      <section className="section-pad py-16 md:py-20 bg-white dark:bg-gray-900">
        <AnimateIn className="mb-12">
          <p className="eyebrow text-teal dark:text-[#9FE1CB] mb-2">Workflow</p>
          <h2 className="font-serif text-2xl md:text-3xl text-slate dark:text-gray-100 font-bold">6-Step Research Process</h2>
          <p className="text-[14px] text-gray-400 dark:text-gray-500 mt-2 max-w-xl">
            Every project follows the same rigorous workflow — predictable, transparent, and reproducible.
          </p>
        </AnimateIn>
        <ProcessTimeline />
      </section>

      {/* ── SUBMISSION GUIDELINES ─────────────────────────── */}
      <section className="section-pad py-16 bg-offwhite dark:bg-gray-800 dot-grid border-t border-gray-100 dark:border-gray-700">
        <AnimateIn className="mb-8">
          <p className="eyebrow text-teal dark:text-[#9FE1CB] mb-2">Sample Submission</p>
          <h2 className="font-serif text-2xl md:text-3xl text-slate dark:text-gray-100 font-bold">Submission Guidelines</h2>
          <p className="text-[14px] text-gray-400 dark:text-gray-500 mt-2 max-w-xl">
            Follow these guidelines to ensure your compound arrives in optimal condition for testing.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {submissionGuidelines.map((g, i) => (
            <AnimateIn key={g.title} delay={i * 0.08}>
              <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl p-5 flex gap-4 hover:border-teal/25 hover:shadow-md transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-teal/8 dark:bg-teal/15 flex items-center justify-center shrink-0">
                  <Package size={16} className="text-teal dark:text-[#9FE1CB]" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[13.5px] text-slate dark:text-gray-100 mb-1">{g.title}</h3>
                  <p className="text-[13px] text-gray-400 dark:text-gray-500 leading-relaxed">{g.body}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="mt-5 bg-teal/5 dark:bg-teal/10 border border-teal/15 dark:border-teal/25 rounded-xl p-5">
            <p className="text-[13.5px] text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-slate dark:text-gray-100">Questions about shipping?</span>{' '}
              Contact us before sending — we&apos;ll confirm receiving conditions and any special handling requirements for your specific compound.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-teal dark:text-[#9FE1CB] hover:underline mt-2"
            >
              Contact us before shipping →
            </Link>
          </div>
        </AnimateIn>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-pad py-16 md:py-20 bg-white dark:bg-gray-900">
        <AnimateIn className="mb-8">
          <p className="eyebrow text-teal dark:text-[#9FE1CB] mb-2">FAQ</p>
          <h2 className="font-serif text-2xl md:text-3xl text-slate dark:text-gray-100 font-bold">Frequently Asked Questions</h2>
          <p className="text-[14px] text-gray-400 dark:text-gray-500 mt-2">Everything you need to know before starting a study with WormEra.</p>
        </AnimateIn>
        <div className="max-w-3xl">
          <FAQAccordion />
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────── */}
      <section className="section-pad pb-16 bg-white dark:bg-gray-900">
        <AnimateIn>
          <div className="bg-teal/5 dark:bg-teal/10 border border-teal/15 dark:border-teal/25 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[14px] font-semibold text-slate dark:text-gray-100 mb-0.5">Ready to submit your compound?</p>
              <p className="text-[13px] text-gray-500 dark:text-gray-400">Fill our enquiry form and we&apos;ll send you a customised assay proposal within 2–3 business days.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 text-[13px] px-5 py-2.5 rounded-xl">
              Start Your Enquiry
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
