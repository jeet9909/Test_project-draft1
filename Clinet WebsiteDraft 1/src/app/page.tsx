'use client'
import { motion } from 'framer-motion'
import { FlaskConical, Clock, Eye, DollarSign } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'

const PLATFORM_CARDS = [
  {
    icon: Eye,
    title: 'Transparent organism',
    body: 'Enables live imaging, photography, and real-time monitoring at every stage of the assay.',
  },
  {
    icon: Clock,
    title: 'Rapid lifecycle model',
    body: 'Short life cycle enables accelerated experimental timelines compared to rodent models.',
  },
  {
    icon: FlaskConical,
    title: 'Conserved biology',
    body: '~1mm organism with conserved pathways relevant to human systems — true in vivo context beyond cell culture.',
  },
  {
    icon: DollarSign,
    title: 'Cost-efficient screening',
    body: 'Organism-level screening with measurable phenotypic outputs at a fraction of mammalian study costs.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 section-pad bg-white dark:bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 dark:bg-teal/15 border border-teal/15 dark:border-teal/30 text-teal dark:text-[#9FE1CB] text-[11px] font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal dark:bg-[#9FE1CB] animate-pulse" />
              Whole-organism research platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-slate dark:text-gray-100 leading-[1.1] mb-6 tracking-tight"
          >
            Pioneering Rapid <em>In Vivo</em> Screening<br className="hidden md:block" /> through{' '}
            <span className="relative whitespace-nowrap">
              <em>C. elegans</em>
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4" preserveAspectRatio="none">
                <path d="M0 3 Q50 0 100 2 Q150 4 200 1" stroke="#E86A33" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}Model.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="text-[16px] md:text-[17px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-10"
          >
            WormEra Research Lab is a specialized research and service laboratory focused on{' '}
            <em>Caenorhabditis elegans</em>&#8211;based in vivo screening for nutraceutical, pharmaceutical,
            antimicrobial and functional ingredient evaluation. With a strong emphasis on scientific
            accuracy, innovation and translational research, the laboratory provides reliable
            preclinical screening solutions for academia and industry.
          </motion.p>

        </div>
      </section>

      {/* ─── PLATFORM ADVANTAGE ────────────────────────────── */}
      <section className="section-pad py-20 md:py-28 bg-offwhite dark:bg-gray-800 dot-grid">
        <AnimateIn className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-slate dark:text-gray-100 font-bold mb-3">The Platform Advantage</h2>
          <p className="text-[16px] text-gray-500 dark:text-gray-400 max-w-xl">
            <em>C. elegans</em> offers a unique combination of biological relevance, speed, and cost-efficiency.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLATFORM_CARDS.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 0.08}>
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 card-hover h-full
                             hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-teal/8 dark:bg-teal/15 flex items-center justify-center mb-4 group-hover:bg-teal/14 transition-colors">
                  <card.icon size={20} className="text-teal dark:text-[#9FE1CB]" />
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-slate dark:text-gray-100 mb-2.5">{card.title}</h3>
                <p className="text-[13.5px] text-gray-500 dark:text-gray-400 leading-relaxed">{card.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  )
}
