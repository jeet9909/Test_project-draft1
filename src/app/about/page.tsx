import type { Metadata } from 'next'
import Image from 'next/image'
import geminiPhoto from '@/../public/images/team/gemini-gajera.png'
import nidhiPhoto from '@/../public/images/team/nidhi-thakkar.png'
import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Eye, Target, Pill, Leaf, Sparkles, Sprout, FlaskConical, Microscope, GraduationCap, Rocket } from 'lucide-react'

export const metadata: Metadata = { title: 'About — WormEra Research Lab' }

const TEAM = [
  {
    name: 'Dr. Gemini Gajera',
    note: '',
    scholar: 'https://scholar.google.com/citations?user=9gwqNg8AAAAJ',
    photo: geminiPhoto,
    accentBar: 'bg-teal',
  },
  {
    name: 'Ms. Nidhi Thakkar',
    note: 'Ph.D. Thesis Submitted',
    scholar: 'https://scholar.google.com/citations?user=3T0DfMcAAAAJ',
    photo: nidhiPhoto,
    accentBar: 'bg-coral',
  },
]

const INDUSTRIES = [
  { name: 'Pharma',          Icon: Pill },
  { name: 'Nutraceuticals',  Icon: Leaf },
  { name: 'Cosmetics',       Icon: Sparkles },
  { name: 'AYUSH',           Icon: Sprout },
  { name: 'Biotechnology',   Icon: Microscope },
  { name: 'Agrochemicals',   Icon: FlaskConical },
  { name: 'Academia',        Icon: GraduationCap },
  { name: 'Startups',        Icon: Rocket },
]

export default function AboutPage() {
  return (
    <>
      {/* ── TEAM ─────────────────────────────────────────── */}
      <section className="relative section-pad pt-28 md:pt-36 pb-20 md:pb-24 bg-white dark:bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />

        {/* Title left | Both portraits right — fills full width */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT — section header */}
          <AnimateIn direction="left">
            <p className="eyebrow text-teal dark:text-[#9FE1CB] mb-3">Meet the Founders</p>
            <h1 className="font-serif text-[2.2rem] md:text-[2.8rem] text-slate dark:text-gray-100 font-bold leading-tight mb-4">
              The people behind the research
            </h1>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
              A blend of scientific expertise and business acumen driving innovation.
            </p>
          </AnimateIn>

          {/* RIGHT — two equal portrait cards */}
          <div className="grid grid-cols-2 gap-5">
            {TEAM.map((person, i) => (
              <AnimateIn key={person.name} delay={i * 0.12}>
                <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-teal/25 hover:shadow-2xl hover:shadow-teal/8 hover:-translate-y-1 transition-all duration-300 flex flex-col">

                  {/* Portrait — same fixed height on both */}
                  <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-teal/5 to-teal/10">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Accent bar */}
                  <div className={`h-[3px] w-full ${person.accentBar}`} />

                  {/* Details */}
                  <div className="p-4 flex flex-col gap-1.5">
                    <h3 className="font-serif text-[17px] font-semibold text-slate dark:text-gray-100 leading-snug">
                      {person.name}
                    </h3>
                    {person.note && (
                      <p className="text-[12px] text-gray-400 dark:text-gray-500">{person.note}</p>
                    )}
                    <a
                      href={person.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-teal dark:text-[#9FE1CB] hover:underline mt-1"
                    >
                      Google Scholar Profile →
                    </a>
                  </div>

                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── STORY + VISION/MISSION ───────────────────────── */}
      <section className="section-pad py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Story */}
          <AnimateIn direction="left">
            <h2 className="font-serif text-3xl md:text-[2.2rem] text-slate dark:text-gray-100 font-bold mb-6 leading-snug">
              About WormEra<br />Research Lab
            </h2>
            <div className="space-y-4 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                WormEra Research Lab is a specialized research platform founded by researchers, for researchers. Built on over five years of hands-on expertise in <em>Caenorhabditis elegans</em> biology, we offer scientifically rigorous, whole-organism bioassay services to industries that demand reliable pre-clinical data &#8212; faster and more affordably than conventional models allow.
              </p>
              <p>
                We are established in Ahmedabad and founded by researchers from Nirma University with deep expertise in host-pathogen interactions, stress biology, functional screening, and validated experimental design. With 14+ peer-reviewed publications and a commitment to reproducibility, our work is grounded in science &#8212; not shortcuts.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {['14+ publications', '3R-aligned', 'No ethics clearance', 'Peer-reviewed methods'].map(badge => (
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
                    Our vision is to advance biological research through innovative and scientifically validated model systems that contribute to better health, sustainable science and next-generation product development. We aim to bridge academic excellence with industrial research by delivering reliable and impactful scientific solutions globally.
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
                    Innovation, scientific integrity, quality and collaboration are the core values of WormEra Research Lab. We are committed to providing standardized, accurate and research-driven assay services using advanced <em>in vivo</em> model systems and modern scientific methodologies. Our mission is to support researchers and industries with reliable biological screening platforms that accelerate scientific discovery, product validation and translational research.
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <AnimateIn key={ind.name} delay={i * 0.05}>
              <div className="flex flex-col items-center justify-center gap-3 py-7 px-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl cursor-default hover:border-teal/30 hover:shadow-md transition-all duration-200">
                <ind.Icon size={26} className="text-teal dark:text-[#9FE1CB]" strokeWidth={1.5} />
                <span className="text-[13.5px] font-medium text-teal dark:text-[#9FE1CB]">{ind.name}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

    </>
  )
}
