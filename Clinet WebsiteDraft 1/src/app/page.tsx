'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Clock, Eye, DollarSign, CheckCircle } from 'lucide-react'
import WormBackground from '@/components/WormBackground'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

const PLATFORM_CARDS = [
  {
    icon: Eye,
    title: 'Transparent organism',
    body: 'Enables live imaging and real-time monitoring at every assay stage — no sacrifice required mid-study.',
  },
  {
    icon: Clock,
    title: 'Rapid lifecycle',
    body: 'Short life cycle delivers results in days, not months — far faster than rodent model timelines.',
  },
  {
    icon: FlaskConical,
    title: 'Conserved biology',
    body: '~1 mm organism with human-relevant conserved pathways — true in vivo context beyond cell culture.',
  },
  {
    icon: DollarSign,
    title: 'Cost-efficient',
    body: 'Organism-level screening with measurable phenotypic outputs at a fraction of mammalian study costs.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 section-pad bg-white overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 border border-teal/15 text-teal text-[11px] font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              C. elegans Model Platform · Ahmedabad, India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.6rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-slate leading-[1.1] mb-6 tracking-tight"
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
            className="text-[16px] md:text-[17px] text-gray-500 leading-relaxed max-w-2xl mb-10"
          >
            WormEra Research Lab provides scientifically rigorous, whole-organism bioassay services
            for nutraceutical, pharmaceutical, antimicrobial, and functional ingredient evaluation —
            grounded in 5+ years of expertise and 14+ peer-reviewed publications.
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
            {['14+ Peer-reviewed publications', '5+ Years C. elegans expertise', 'No ethics clearance required'].map(t => (
              <span key={t} className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 font-medium">
                <CheckCircle size={13} className="text-teal shrink-0" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PLATFORM ADVANTAGE ────────────────────────────── */}
      <section className="section-pad py-20 md:py-28 bg-offwhite dot-grid">
        <AnimateIn className="mb-12">
          <p className="eyebrow text-teal mb-2">The platform advantage</p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold">Why <em>C. elegans</em>?</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLATFORM_CARDS.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 card-hover h-full
                             hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-teal/8 flex items-center justify-center mb-4 group-hover:bg-teal/14 transition-colors">
                  <card.icon size={20} className="text-teal" />
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-slate mb-2.5">{card.title}</h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────── */}
      <section className="section-pad py-14 bg-white border-y border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { end: 14, suffix: '+', label: 'Peer-reviewed publications', desc: 'Spanning 5 research areas' },
            { end: 5,  suffix: '+', label: 'Years C. elegans expertise', desc: 'Deep domain knowledge' },
            { end: 3,  suffix: '',  label: 'Core service pillars',       desc: 'Toxicity · Efficacy · AMR' },
            { end: 8,  suffix: '',  label: 'Industries served',          desc: 'Pharma to AYUSH' },
          ].map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.07} className="text-center">
              <p className="font-serif text-[3.2rem] font-bold text-teal leading-none mb-1">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-[13px] font-semibold text-slate mb-0.5">{s.label}</p>
              <p className="text-[11px] text-gray-400">{s.desc}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-teal">
        <WormBackground count={20} alpha={0.09} speed={0.85} />
        <div className="relative z-10 section-pad py-20 md:py-24">
          <AnimateIn>
            <p className="eyebrow text-[#9FE1CB] mb-4">Start your study</p>
            <h2 className="font-serif text-3xl md:text-[2.6rem] text-white font-bold mb-4 max-w-xl leading-tight">
              Ready to screen your compound with a living organism?
            </h2>
            <p className="text-[15px] text-white/65 mb-9 max-w-lg leading-relaxed">
              We design the right assay panel for your research question — free initial consultation,
              fast turnaround, and peer-reviewed methodology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal hover:bg-white/95 px-7 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-200 shadow-lg shadow-black/10 cursor-pointer">
                Get in touch
                <ArrowRight size={16} />
              </Link>
              <a href="mailto:wormeraresearchlab@gmail.com"
                className="inline-flex items-center gap-2 border border-white/25 text-white/80 hover:border-white hover:text-white px-7 py-3.5 rounded-xl text-[14px] font-medium transition-all duration-200 cursor-pointer">
                wormeraresearchlab@gmail.com
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
