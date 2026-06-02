'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import servicesHero from '@/../public/images/services-hero.jpg'
import AnimateIn from '@/components/ui/AnimateIn'
import { FlaskConical, Leaf, Microscope, ArrowRight, CheckCircle } from 'lucide-react'

const PILLARS = [
  {
    id: 'toxicity',
    tab: 'Toxicity & Safety',
    icon: FlaskConical,
    title: 'Toxicity & Safety Profiling',
    description: 'Quantifying systemic physiological responses to chemical and environmental challenges using whole-organism readouts — from lethality curves to motility analysis.',
    tags: ['Pharma', 'Nutraceuticals', 'Agrochemicals'],
    subservices: [
      { name: 'Acute toxicity', detail: 'Rapid LD₅₀ determination; lethality dose curves; live-dead microscopic count; worm activity quantification.' },
      { name: 'Sub-chronic toxicity', detail: 'Long-term exposure effects over 7–14 days; survival curves; motility analysis at multiple time points.' },
      { name: 'Live-dead staining', detail: 'Trypan Blue or Neutral Red validation to confirm cuticular and membrane integrity in dead worms.' },
      { name: 'Anthelmintic screening', detail: 'LD₅₀/LD₁₀₀ determination for nematocide compounds; comparative liquid/solid media assays.' },
    ],
  },
  {
    id: 'efficacy',
    tab: 'Efficacy & Functional',
    icon: Leaf,
    title: 'Efficacy & Functional Bioassays',
    description: 'Measuring systemic health, longevity, and metabolic responses in a living host — validating anti-aging claims, probiotic efficacy, neuroprotection, and AYUSH formulations.',
    tags: ['Nutraceuticals', 'Cosmetics', 'AYUSH', 'Biotech'],
    subservices: [
      { name: 'Anti-aging & longevity', detail: 'Simultaneous quantification of lifespan and healthspan (motility) to validate anti-aging claims.' },
      { name: 'Probiotic screening', detail: 'Gnotobiotic worm models to study host-probiotic interactions, survival improvement, and immune modulation.' },
      { name: 'Neuroprotection', detail: "Wild-type and transgenic models (e.g. CL4176) for symptoms relevant to Alzheimer's and Parkinson's disease." },
      { name: 'Metabolic health', detail: 'Optimized Alamar Blue® assays providing a linear correlation between worm number and metabolic response.' },
      { name: 'Stress biology', detail: 'Assessing AYUSH formulations against stress induced by mitotoxins, neurotoxins, oxidizing agents, or heat.' },
    ],
  },
  {
    id: 'antimicrobial',
    tab: 'Microbiological & AMR',
    icon: Microscope,
    title: 'Microbiological & Anti-Infective Assays',
    description: 'C. elegans is an excellent in vivo host for studying human-pathogenic bacteria and fungi — enabling simultaneous anti-virulence and immunomodulatory readouts.',
    tags: ['Pharma', 'Biotech', 'AMR Research'],
    subservices: [
      { name: 'In vivo anti-pathogenic assay', detail: 'Challenge with human-pathogenic bacteria/fungi to detect simultaneous anti-virulence and immunomodulatory effects.' },
      { name: 'Prophylactic & post-infection', detail: 'Testing immunomodulatory effects and therapeutic efficacy in established infections.' },
      { name: 'Anti-virulence studies', detail: 'Screening for quorum sensing inhibition and virulence factor attenuation.' },
      { name: 'AMR research', detail: 'Long-term resistance development studies and Post-Antibiotic Effect (PAE) analysis.' },
    ],
  },
]

const PRICING = [
  {
    name: 'Fee-for-service',
    color: 'border-teal/30 hover:border-teal/60',
    accent: 'text-teal',
    items: ['Fixed price per assay (e.g. toxicity)', 'Volume discounts for bulk orders', 'Add-on mechanistic analysis'],
  },
  {
    name: 'Subscriptions',
    color: 'border-coral/30 hover:border-coral/60',
    accent: 'text-coral',
    items: ['Monthly/quarterly testing packages', 'Priority slot allocation', 'Dedicated scientific support'],
  },
  {
    name: 'Workshops & Training',
    color: 'border-gold/30 hover:border-gold/60',
    accent: 'text-gold',
    items: ['Hands-on certification training', 'Custom corporate onboarding', 'High per-seat registration options'],
  },
]

export default function ServicesPage() {
  const [active, setActive] = useState('toxicity')
  const pillar = PILLARS.find(p => p.id === active)!

  return (
    <>
      {/* ── HERO BANNER ───────────────────────────────────── */}
      <section className="relative w-full overflow-hidden mt-16 md:mt-20">
        {/* Full image — natural 1920×1080, zero cropping */}
        <Image
          src={servicesHero}
          alt="WormEra laboratory — in vivo screening services"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
        {/* Left-heavy gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/10" />

        <div className="absolute inset-0 flex items-center section-pad">
          <div className="max-w-lg lg:max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="text-[#D1FAE5] font-semibold uppercase tracking-[0.22em] text-[12px] md:text-[13px] mb-4"
            >
              What we offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-white leading-[1.1] tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[14px] md:text-[15px] text-white/75 leading-relaxed max-w-md"
            >
              Three core pillars of whole-organism research, each delivering true <em>in vivo</em> data
              that goes beyond what cell-based assays can provide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── TAB PILLS ─────────────────────────────────────── */}
      <section className="relative pt-10 pb-0 section-pad bg-white dark:bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="relative">
          <div className="flex flex-wrap gap-2 pb-0">
            {PILLARS.map(p => {
              const Icon = p.icon
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                    active === p.id
                      ? 'bg-teal text-white shadow-md shadow-teal/25'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-teal/40 hover:text-teal hover:bg-teal/3 dark:hover:bg-teal/10'
                  }`}
                >
                  <Icon size={14} />
                  {p.tab}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PILLAR DETAIL ─────────────────────────────────── */}
      <section className="section-pad py-12 bg-white dark:bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
              {/* Description column */}
              <div className="lg:col-span-1">
                <div className="w-12 h-12 rounded-2xl bg-teal/8 dark:bg-teal/15 flex items-center justify-center mb-5">
                  <pillar.icon size={22} className="text-teal" />
                </div>
                <h2 className="font-serif text-[22px] font-semibold text-slate dark:text-gray-100 mb-3 leading-snug">{pillar.title}</h2>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{pillar.description}</p>
                <Link href="/contact" className="btn-primary text-[13px] px-5 py-2.5 rounded-xl">
                  Request this service
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Sub-services grid */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillar.subservices.map((s, i) => (
                  <div
                    key={s.name}
                    className="group bg-offwhite dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 hover:border-teal/25 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md hover:shadow-teal/5 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal/10 dark:bg-teal/20 flex items-center justify-center text-teal text-[10px] font-bold mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-[14px] font-semibold text-slate dark:text-gray-100 group-hover:text-teal transition-colors leading-tight">{s.name}</h3>
                    </div>
                    <p className="text-[13px] text-gray-400 dark:text-gray-500 leading-relaxed pl-8">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pricing tiers */}
        <div className="border-t border-gray-100 dark:border-gray-700 pt-12">
          <AnimateIn className="mb-8">
            <p className="eyebrow text-teal mb-2">Engagement models</p>
            <h2 className="font-serif text-2xl md:text-3xl text-slate dark:text-gray-100 font-bold">Pricing &amp; packages</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {PRICING.map((pr, i) => (
              <AnimateIn key={pr.name} delay={i * 0.08}>
                <div className={`bg-white dark:bg-gray-800 border-2 rounded-2xl p-6 h-full transition-all duration-200 ${pr.color}`}>
                  <h4 className={`text-[15px] font-semibold mb-4 ${pr.accent}`}>{pr.name}</h4>
                  <ul className="space-y-2.5">
                    {pr.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-500 dark:text-gray-400">
                        <CheckCircle size={13} className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <AnimateIn delay={0.1}>
          <div className="mt-10 bg-teal/5 dark:bg-teal/10 border border-teal/15 dark:border-teal/25 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[14px] font-semibold text-slate dark:text-gray-100 mb-0.5">Not sure which service fits your compound?</p>
              <p className="text-[13px] text-gray-500 dark:text-gray-400">We design the study around your research question — free consultation.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 text-[13px] px-5 py-2.5 rounded-xl">
              Request consultation
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
