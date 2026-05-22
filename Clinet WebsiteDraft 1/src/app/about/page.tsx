import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import geminiPhoto from '@/../public/images/team/gemini-gajera.png'
import nidhiPhoto from '@/../public/images/team/nidhi-thakkar.png'
import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, BookOpen, FlaskConical, Award, Users } from 'lucide-react'

export const metadata: Metadata = { title: 'About — WormEra Research Lab' }

const TEAM = [
  {
    name: 'Dr. Gemini Gajera',
    role: 'Principal Investigator & Co-Founder',
    expertise: 'Host-pathogen interactions · Stress biology · C. elegans functional screening',
    scholar: 'https://scholar.google.com/citations?user=9gwqNg8AAAAJ',
    affiliation: 'Nirma University, Ahmedabad',
    note: '',
    photo: geminiPhoto,
  },
  {
    name: 'Ms. Nidhi Thakkar',
    role: 'Research Scientist & Co-Founder',
    expertise: 'Antimicrobial research · Experimental design · In vivo bioassays',
    scholar: 'https://scholar.google.com/citations?user=3T0DfMcAAAAJ',
    affiliation: 'Nirma University, Ahmedabad',
    note: 'Ph.D. Thesis Submitted',
    photo: nidhiPhoto,
  },
]

const TRUST = [
  { icon: BookOpen, label: '14+', desc: 'Peer-reviewed publications' },
  { icon: FlaskConical, label: '5+', desc: 'Years C. elegans expertise' },
  { icon: Award, label: '3R', desc: 'Aligned — no mammalian ethics required' },
  { icon: Users, label: '8', desc: 'Industries served globally' },
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
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 section-pad bg-white overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="relative">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 border border-teal/15 text-teal text-[11px] font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Ahmedabad, India
            </span>
            <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] text-slate font-bold leading-tight mb-4">
              A blend of scientific expertise<br className="hidden md:block" /> and business acumen driving innovation.
            </h1>
            <p className="text-[16px] text-gray-500 max-w-xl leading-relaxed">
              WormEra Research Lab is built on 5+ years of hands-on expertise in <em>C. elegans</em> biology,
              delivering reproducible whole-organism bioassay data to researchers and industry worldwide.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── TRUST SIGNALS ────────────────────────────────── */}
      <section className="section-pad py-10 bg-offwhite border-y border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST.map((t, i) => (
            <AnimateIn key={t.label} delay={i * 0.07}>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-teal/8 flex items-center justify-center">
                  <t.icon size={18} className="text-teal" />
                </div>
                <p className="font-serif text-[2.2rem] font-bold text-teal leading-none">{t.label}</p>
                <p className="text-[12px] text-gray-500">{t.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── TEAM CARDS ───────────────────────────────────── */}
      <section className="section-pad py-20 md:py-28 bg-white">
        <AnimateIn className="mb-12">
          <p className="eyebrow text-teal mb-2">Meet the founders</p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold">The people behind the research</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
          {TEAM.map((person, i) => (
            <AnimateIn key={person.name} delay={i * 0.12}>
              <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5">
                {/* Photo */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-teal/5 to-teal/10 overflow-hidden">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={person.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-teal text-[12px] font-semibold px-3.5 py-1.5 rounded-full shadow-sm"
                    >
                      Google Scholar →
                    </a>
                  </div>
                </div>
                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif text-[19px] font-semibold text-slate mb-1">{person.name}</h3>
                  <p className="text-[13px] text-coral font-medium mb-1">{person.role}</p>
                  <p className="text-[12px] text-gray-400 mb-3">
                    {person.affiliation}{person.note ? ` — ${person.note}` : ''}
                  </p>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{person.expertise}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── STORY + VISION/MISSION ───────────────────────── */}
      <section className="section-pad py-20 md:py-28 bg-offwhite dot-grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimateIn direction="left">
            <p className="eyebrow text-coral mb-3">Our story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-6">About WormEra Research Lab</h2>
            <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed">
              <p>
                WormEra Research Lab is a specialized research platform founded by researchers, for researchers. Built on over five years of hands-on expertise in <em>Caenorhabditis elegans</em> biology, we offer scientifically rigorous, whole-organism bioassay services to industries that demand reliable pre-clinical data — faster and more affordably than conventional models allow.
              </p>
              <p>
                We are established in Ahmedabad and founded by researchers from Nirma University with deep expertise in host-pathogen interactions, stress biology, functional screening, and validated experimental design.
              </p>
              <p>
                With 14+ peer-reviewed publications and a commitment to reproducibility, our work is grounded in science — not shortcuts.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['14+ publications', '3R-aligned', 'No ethics clearance', 'Peer-reviewed methods'].map(badge => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 font-medium">
                  <CheckCircle size={13} className="text-teal shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="space-y-5">
              <div className="bg-white border-l-4 border-gold rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-[19px] font-semibold text-teal mb-3">Vision</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  To advance biological research through innovative and scientifically validated model systems that contribute to better health, sustainable science, and next-generation product development. We aim to bridge academic excellence with industrial research by delivering reliable and impactful scientific solutions globally.
                </p>
              </div>
              <div className="bg-white border-l-4 border-coral rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-[19px] font-semibold text-teal mb-3">Mission</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  We are committed to providing standardized, accurate, and research-driven assay services using advanced in vivo model systems and modern scientific methodologies. Our mission is to support researchers and industries with reliable biological screening platforms that accelerate scientific discovery, product validation, and translational research.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="section-pad py-16 bg-white">
        <AnimateIn className="mb-10">
          <p className="eyebrow text-teal mb-2">Who we serve</p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold">Industries &amp; Clients</h2>
        </AnimateIn>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <AnimateIn key={ind.name} delay={i * 0.05}>
              <div className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-3 card-hover hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5 cursor-default">
                <div className="text-3xl">{ind.icon}</div>
                <span className="text-[13px] font-medium text-slate text-center">{ind.name}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-pad py-16 bg-offwhite border-t border-gray-100">
        <AnimateIn>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="font-serif text-[22px] font-semibold text-slate mb-1">Ready to start a study?</h3>
              <p className="text-[14px] text-gray-500">Free initial consultation — we design the assay panel around your compound.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 px-7 py-3.5 rounded-xl text-[14px]">
              Get in touch
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
