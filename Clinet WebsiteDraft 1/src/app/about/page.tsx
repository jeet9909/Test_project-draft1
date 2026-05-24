import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import geminiPhoto from '@/../public/images/team/gemini-gajera.png'
import nidhiPhoto from '@/../public/images/team/nidhi-thakkar.png'
import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, ArrowRight, Eye, Target } from 'lucide-react'

export const metadata: Metadata = { title: 'About — WormEra Research Lab' }

const TEAM = [
  {
    name: 'Dr. Gemini Gajera',
    role: 'Principal Investigator & Co-Founder',
    expertise: ['Host-pathogen interactions', 'Stress biology', 'C. elegans functional screening'],
    scholar: 'https://scholar.google.com/citations?user=9gwqNg8AAAAJ',
    affiliation: 'Nirma University, Ahmedabad',
    note: '',
    photo: geminiPhoto,
    accent: 'from-teal to-teal/60',
  },
  {
    name: 'Ms. Nidhi Thakkar',
    role: 'Research Scientist & Co-Founder',
    expertise: ['Antimicrobial research', 'Experimental design', 'In vivo bioassays'],
    scholar: 'https://scholar.google.com/citations?user=3T0DfMcAAAAJ',
    affiliation: 'Nirma University, Ahmedabad',
    note: 'Ph.D. Thesis Submitted',
    photo: nidhiPhoto,
    accent: 'from-coral to-coral/60',
  },
]

const INDUSTRIES = [
  { name: 'Pharma', icon: '💊' },
  { name: 'Nutraceuticals', icon: '🌿' },
  { name: 'Cosmetics', icon: '✨' },
  { name: 'AYUSH', icon: '🌺' },
  { name: 'Biotechnology', icon: '🔬' },
  { name: 'Agrochemicals', icon: '🌱' },
  { name: 'Academia', icon: '🎓' },
  { name: 'Startups', icon: '🚀' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── TEAM ─────────────────────────────────────────── */}
      <section className="section-pad pt-28 md:pt-36 pb-20 md:pb-24 bg-offwhite dark:bg-gray-900 dot-grid">
        <AnimateIn className="mb-12">
          <p className="eyebrow text-teal dark:text-[#9FE1CB] mb-2">Meet the founders</p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate dark:text-gray-100 font-bold">The people behind the research</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((person, i) => (
            <AnimateIn key={person.name} delay={i * 0.12}>
              <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden card-hover hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5 h-full flex flex-col">
                {/* Gradient accent bar */}
                <div className={`h-1 bg-gradient-to-r ${person.accent}`} />

                <div className="flex flex-col sm:flex-row flex-1">
                  {/* Photo */}
                  <div className="relative w-full sm:w-52 lg:w-60 flex-shrink-0 aspect-[4/3] sm:aspect-auto bg-gradient-to-br from-teal/5 to-teal/10 overflow-hidden">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between p-6 lg:p-7 flex-1">
                    <div>
                      <h3 className="font-serif text-[20px] font-semibold text-slate dark:text-gray-100 mb-0.5">{person.name}</h3>
                      <p className="text-[13px] text-coral font-semibold mb-1">{person.role}</p>
                      <p className="text-[11.5px] text-gray-400 dark:text-gray-500 mb-4">
                        {person.affiliation}{person.note ? ` — ${person.note}` : ''}
                      </p>
                      {/* Expertise as pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {person.expertise.map(e => (
                          <span key={e} className="text-[11px] px-2.5 py-1 rounded-full bg-teal/6 dark:bg-teal/12 text-teal dark:text-[#9FE1CB] font-medium border border-teal/15 dark:border-teal/25">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <a
                        href={person.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-teal dark:text-[#9FE1CB] hover:text-teal-dark dark:hover:text-white transition-colors"
                      >
                        Google Scholar Profile →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── STORY + VISION/MISSION ───────────────────────── */}
      <section className="section-pad py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Story */}
          <AnimateIn direction="left">
            <p className="eyebrow text-coral mb-3">Our story</p>
            <h2 className="font-serif text-3xl md:text-[2.2rem] text-slate dark:text-gray-100 font-bold mb-6 leading-snug">
              About WormEra<br />Research Lab
            </h2>
            <div className="space-y-4 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                WormEra Research Lab is a specialized research platform founded by researchers, for researchers. Built on over five years of hands-on expertise in <em>Caenorhabditis elegans</em> biology, we offer scientifically rigorous, whole-organism bioassay services to industries that demand reliable pre-clinical data.
              </p>
              {/* Pull quote */}
              <blockquote className="my-6 border-l-4 border-teal pl-5 py-1">
                <p className="font-serif text-[17px] font-semibold text-slate dark:text-gray-200 leading-snug italic">
                  &ldquo;Grounded in science, not shortcuts — 12+ peer-reviewed publications and counting.&rdquo;
                </p>
              </blockquote>
              <p>
                Established in Ahmedabad and founded by researchers from Nirma University with deep expertise in host-pathogen interactions, stress biology, functional screening, and validated experimental design.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {['12+ publications', '3R-aligned', 'No ethics clearance', 'Peer-reviewed methods'].map(badge => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-[12px] bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium px-3 py-1.5 rounded-full">
                  <CheckCircle size={12} className="text-teal dark:text-[#9FE1CB] shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </AnimateIn>

          {/* Vision + Mission */}
          <AnimateIn delay={0.1}>
            <div className="space-y-5">
              {/* Vision */}
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="h-1 bg-gradient-to-r from-gold to-gold/40" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gold/12 flex items-center justify-center shrink-0">
                      <Eye size={17} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-[19px] font-semibold text-slate dark:text-gray-100">Vision</h3>
                  </div>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    To advance biological research through innovative and scientifically validated model systems that contribute to better health, sustainable science, and next-generation product development. We aim to bridge academic excellence with industrial research globally.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="h-1 bg-gradient-to-r from-coral to-coral/40" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                      <Target size={17} className="text-coral" />
                    </div>
                    <h3 className="font-serif text-[19px] font-semibold text-slate dark:text-gray-100">Mission</h3>
                  </div>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    We are committed to providing standardized, accurate, and research-driven assay services using advanced in vivo model systems. Our mission is to support researchers and industries with reliable biological screening platforms that accelerate scientific discovery and translational research.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="section-pad py-16 bg-offwhite dark:bg-gray-800 dot-grid border-t border-gray-100 dark:border-gray-700">
        <AnimateIn className="mb-10">
          <p className="eyebrow text-teal dark:text-[#9FE1CB] mb-2">Who we serve</p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate dark:text-gray-100 font-bold">Industries &amp; Clients</h2>
        </AnimateIn>
        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((ind, i) => (
            <AnimateIn key={ind.name} delay={i * 0.05}>
              <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl text-[14px] font-medium text-slate dark:text-gray-200 hover:border-teal/30 hover:text-teal dark:hover:text-teal hover:bg-teal/4 dark:hover:bg-teal/8 transition-all duration-200 cursor-default card-hover">
                <span className="text-[20px] leading-none">{ind.icon}</span>
                {ind.name}
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative section-pad py-20 bg-teal overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <AnimateIn className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="eyebrow text-[#9FE1CB] mb-3">Start a collaboration</p>
              <h3 className="font-serif text-[26px] md:text-[30px] font-bold text-white mb-2 leading-tight">
                Ready to start a study?
              </h3>
              <p className="text-[15px] text-white/70 max-w-md leading-relaxed">
                Free initial consultation — we design the assay panel around your compound and research question.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-white text-teal hover:bg-white/95 active:scale-[0.98] px-8 py-4 rounded-xl text-[14px] font-semibold transition-all duration-200 shadow-xl shadow-black/15 shrink-0 whitespace-nowrap"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
