'use client'
import { useState } from 'react'
import Link from 'next/link'

const PILLARS = [
  {
    id: 'toxicity',
    tab: 'Toxicity & safety',
    title: 'Toxicity & safety profiling',
    description: 'Quantifying systemic physiological responses to chemical and environmental challenges using whole-organism readouts — from lethality curves to motility analysis.',
    tags: ['Ideal for pharma', 'nutraceuticals', 'agrochemicals'],
    subservices: [
      { name: 'Acute & sub-chronic toxicity', detail: 'Rapid LD₅₀ determination; lethality dose curves; live-dead microscopic count; worm activity quantification.' },
      { name: 'Sub-chronic toxicity', detail: 'Long-term exposure effects over 7–14 days; survival curves; motility analysis at multiple time points.' },
      { name: 'Live-dead staining', detail: 'Trypan Blue or Neutral Red validation to confirm cuticular and membrane integrity in dead worms.' },
      { name: 'Anthelmintic screening', detail: 'LD₅₀/LD₁₀₀ determination for nematocide compounds; comparative liquid/solid media assays.' },
    ],
  },
  {
    id: 'efficacy',
    tab: 'Efficacy & functional',
    title: 'Efficacy & functional bioassays',
    description: 'Measuring systemic health, longevity, and metabolic responses in a living host — validating anti-aging claims, probiotic efficacy, neuroprotection, and AYUSH formulations.',
    tags: ['Ideal for nutraceuticals', 'cosmetics', 'AYUSH', 'biotech'],
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
    tab: 'Microbiological & anti-infective',
    title: 'Microbiological & anti-infective assays',
    description: 'C. elegans is an excellent in vivo host for studying human-pathogenic bacteria and fungi — enabling simultaneous anti-virulence and immunomodulatory readouts.',
    tags: ['Ideal for pharma', 'biotech', 'AMR research'],
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
    items: ['Fixed price per assay (e.g. toxicity)', 'Volume discounts for bulk orders', 'Add-on mechanistic analysis'],
  },
  {
    name: 'Subscriptions',
    items: ['Monthly/quarterly testing packages', 'Priority slot allocation', 'Dedicated scientific support'],
  },
  {
    name: 'Workshops & training',
    items: ['Hands-on certification training', 'Custom corporate onboarding', 'High per-seat registration options'],
  },
]

export default function ServicesPage() {
  const [active, setActive] = useState('toxicity')
  const pillar = PILLARS.find(p => p.id === active)!

  return (
    <>
      <section className="pt-28 md:pt-36 pb-0 section-pad bg-white">
        <p className="eyebrow text-teal mb-3">What we offer</p>
        <h1 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-3">Our services</h1>
        <p className="text-[15px] text-gray-500 max-w-xl mb-10">
          Three core pillars of whole-organism research, each delivering true <em>in vivo</em> data
          that goes beyond what cell-based assays can provide.
        </p>

        <div className="flex flex-wrap gap-2">
          {PILLARS.map(p => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                active === p.id
                  ? 'bg-teal text-white'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-teal/40 hover:text-teal'
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>
      </section>

      <section className="section-pad py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="w-10 h-10 rounded bg-teal/10 mb-4" />
            <h2 className="font-serif text-[22px] font-semibold text-slate mb-3">{pillar.title}</h2>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-4">{pillar.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {pillar.tags.map(t => (
                <span key={t} className="bg-sage/10 text-sage text-[11px] font-medium px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillar.subservices.map(s => (
              <div key={s.name} className="border-t border-gray-100 pt-4">
                <h3 className="text-[14px] font-semibold text-slate mb-1.5">{s.name}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {PRICING.map(pr => (
            <div key={pr.name}>
              <h4 className="text-[13px] font-semibold text-slate mb-3">{pr.name}</h4>
              <ul className="space-y-1.5">
                {pr.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-gray-400">
                    <span className="mt-1 w-1 h-1 rounded-full bg-teal/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-sage/10 border border-sage/20 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[14px] font-medium text-slate">Not sure which service fits your compound?</p>
            <p className="text-[13px] text-gray-400">We design the study around your research question — free consultation.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-teal hover:bg-teal-dark text-white px-5 py-2.5 rounded text-[13px] font-medium transition-colors whitespace-nowrap cursor-pointer">
            Request consultation →
          </Link>
        </div>
      </section>
    </>
  )
}
