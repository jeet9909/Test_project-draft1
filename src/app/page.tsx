'use client'
import { motion } from 'framer-motion'
import { Eye, Clock, FlaskConical, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import heroBanner from '@/../public/images/hero-banner.png'
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
    body: '~1mm organism with conserved pathways relevant to human systems — true <em>in vivo</em> context beyond cell culture.',
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
      {/* ── HERO BANNER ───────────────────────────────────── */}
      {/* mt-16/mt-20 = navbar height — image starts exactly where navbar ends */}
      <section className="relative w-full overflow-hidden mt-16 md:mt-20">
        {/* Full image — natural 1919×820 ratio, zero cropping */}
        <Image
          src={heroBanner}
          alt="C. elegans whole-organism research platform"
          width={1919}
          height={820}
          className="w-full h-auto block"
          priority
        />

        {/* Left-heavy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/5" />

        {/* text — vertically centred, left-aligned */}
        <div className="absolute inset-0 flex items-center section-pad">
          <div className="max-w-lg lg:max-w-2xl">

            {/* H1 — Main headline */}
            <motion.h1
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Whole-organism<br />research platform
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 font-medium text-[15px] md:text-[17px] leading-snug mb-6 max-w-md"
            >
              Pioneering Rapid <em>In&nbsp;Vivo</em> Screening through{' '}
              <em>Caenorhabditis elegans</em> Model
            </motion.p>

            {/* coral accent bar */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="w-12 h-[3px] bg-coral rounded-full origin-left"
            />

          </div>
        </div>
      </section>

      {/* ── PARAGRAPH ─────────────────────────────────────── */}
      <section className="section-pad py-14 md:py-20 bg-white dark:bg-navy">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] md:text-[17px] text-gray-500 dark:text-gray-400 leading-[1.9] max-w-3xl"
        >
          WormEra Research Lab is a specialized research and service laboratory focused on{' '}
          <em>C. elegans</em>&#8211;based <em>in vivo</em> screening for nutraceutical, pharmaceutical,
          antimicrobial and functional ingredient evaluation. With a strong emphasis on scientific
          accuracy, innovation and translational research, the laboratory provides reliable
          preclinical screening solutions for academia and industry.
        </motion.p>
      </section>

      {/* ── PLATFORM ADVANTAGE ────────────────────────────── */}
      <section className="section-pad py-20 md:py-28 bg-offwhite dark:bg-gray-800 dot-grid">

        {/* header */}
        <AnimateIn className="mb-12">
          <p className="eyebrow text-coral mb-2">Why WormEra</p>
          <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-slate dark:text-gray-100 font-bold mb-3">
            The Platform Advantage
          </h2>
          <p className="text-[15px] text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
            <em>C. elegans</em> offers a unique combination of biological relevance, speed, and cost-efficiency.
          </p>
        </AnimateIn>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLATFORM_CARDS.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 0.08}>
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 h-full flex flex-col gap-4 hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5 transition-all duration-300 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-teal/8 dark:bg-teal/15 flex items-center justify-center group-hover:bg-teal/14 transition-colors">
                  <card.icon size={20} className="text-teal dark:text-[#9FE1CB]" />
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-slate dark:text-gray-100">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: card.body }} />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA strip */}
        <AnimateIn delay={0.15}>
          <div className="mt-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[14.5px] font-semibold text-slate dark:text-gray-100 mb-0.5">
                Ready to screen your compound?
              </p>
              <p className="text-[13px] text-gray-400 dark:text-gray-500">
                Explore our three service pillars — toxicity, efficacy, and anti-infective assays.
              </p>
            </div>
            <Link href="/services" className="btn-primary shrink-0 text-[13px] px-6 py-2.5 rounded-xl">
              View Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateIn>

      </section>
    </>
  )
}
