'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 dark:bg-teal/15 border border-teal/15 dark:border-teal/30 text-teal text-[11px] font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              C. elegans Model Platform · Ahmedabad, India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-slate dark:text-gray-100 leading-[1.1] mb-6 tracking-tight"
          >
            Science-backed screening<br className="hidden md:block" /> for your compound —{' '}
            <span className="text-teal">faster</span>, smarter, and truly{' '}
            <span className="relative whitespace-nowrap">
              <em>in vivo</em>
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4" preserveAspectRatio="none">
                <path d="M0 3 Q50 0 100 2 Q150 4 200 1" stroke="#E86A33" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="text-[16px] md:text-[17px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-10"
          >
            WormEra Research Lab provides scientifically rigorous, whole-organism bioassay services
            for nutraceutical, pharmaceutical, antimicrobial, and functional ingredient evaluation —
            grounded in 5+ years of expertise and 12+ peer-reviewed publications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: 'easeOut' }}
            className="flex flex-wrap gap-3"
          >
            <Link href="/contact" className="btn-primary text-[14px] px-7 py-3.5 rounded-xl shadow-md shadow-coral/15">
              Request a free consultation
              <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline text-[14px] px-7 py-3.5 rounded-xl">
              Explore services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {['12+ Peer-reviewed publications', '5+ Years C. elegans expertise', 'No ethics clearance required'].map(t => (
              <span key={t} className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 dark:text-gray-400 font-medium">
                <CheckCircle size={13} className="text-teal shrink-0" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────── */}
      <section className="section-pad py-14 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { end: 12, suffix: '+', label: 'Peer-reviewed publications', desc: 'Spanning 5 research areas' },
            { end: 5,  suffix: '+', label: 'Years C. elegans expertise', desc: 'Deep domain knowledge' },
            { end: 3,  suffix: '',  label: 'Core service pillars',       desc: 'Toxicity · Efficacy · AMR' },
            { end: 8,  suffix: '',  label: 'Industries served',          desc: 'Pharma to AYUSH' },
          ].map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.07} className="text-center">
              <p className="font-serif text-[3.2rem] font-bold text-teal leading-none mb-1">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-[13px] font-semibold text-slate dark:text-gray-100 mb-0.5">{s.label}</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500">{s.desc}</p>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  )
}
