import type { Metadata } from 'next'
import Image from 'next/image'
import geminiPhoto from '@/../public/images/team/gemini-gajera.png'
import nidhiPhoto from '@/../public/images/team/nidhi-thakkar.png'

export const metadata: Metadata = { title: 'About' }

const team = [
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

export default function AboutPage() {
  return (
    <>
      {/* TEAM HEADER */}
      <section className="pt-28 md:pt-36 pb-12 section-pad bg-white">
        <p className="eyebrow text-teal mb-2">The Team</p>
        <h1 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-3">
          A blend of scientific expertise and business acumen driving innovation.
        </h1>
      </section>

      {/* TEAM PHOTOS */}
      <section className="section-pad pb-16 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          {team.map(person => (
            <div key={person.name} className="flex flex-col gap-4">
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden max-w-[200px]">
                <Image
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top"
                  width={200}
                  height={250}
                />
              </div>
              <div>
                <h3 className="font-serif text-[18px] font-semibold text-slate">{person.name}</h3>
                <p className="text-[13px] text-coral mb-1">{person.role}</p>
                <p className="text-[12px] text-gray-400 mb-2">
                  {person.affiliation}{person.note ? ` — ${person.note}` : ''}
                </p>
                <p className="text-[12px] text-gray-500 mb-3 leading-relaxed">{person.expertise}</p>
                <a href={person.scholar} target="_blank" rel="noopener noreferrer"
                  className="text-[12px] text-teal hover:underline font-medium">
                  Google Scholar Profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY + VISION/MISSION */}
      <section className="section-pad py-16 md:py-24 bg-offwhite">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow text-coral mb-3">Our story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-6">About WormEra Research Lab</h2>
            <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed">
              <p>WormEra Research Lab is a specialized research platform founded by researchers, for researchers. Built on over five years of hands-on expertise in <em>Caenorhabditis elegans</em> biology, we offer scientifically rigorous, whole-organism bioassay services to industries that demand reliable pre-clinical data — faster and more affordably than conventional models allow.</p>
              <p>We are established in Ahmedabad and founded by researchers from Nirma University with deep expertise in host-pathogen interactions, stress biology, functional screening, and validated experimental design.</p>
              <p>With 14+ peer-reviewed publications and a commitment to reproducibility, our work is grounded in science — not shortcuts.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-gold rounded p-6">
              <h3 className="font-serif text-[20px] font-semibold text-teal mb-3">Vision</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">Our vision is to advance biological research through innovative and scientifically validated model systems that contribute to better health, sustainable science, and next-generation product development. We aim to bridge academic excellence with industrial research by delivering reliable and impactful scientific solutions globally.</p>
            </div>
            <div className="bg-white border-l-4 border-coral rounded p-6">
              <h3 className="font-serif text-[20px] font-semibold text-teal mb-3">Mission</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">Innovation, scientific integrity, quality, and collaboration are the core values of WormEra Research Lab. We are committed to providing standardized, accurate, and research-driven assay services using advanced in vivo model systems and modern scientific methodologies. Our mission is to support researchers and industries with reliable biological screening platforms that accelerate scientific discovery, product validation, and translational research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section-pad py-16 bg-white">
        <p className="eyebrow text-teal mb-3">Who we serve</p>
        <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-10">Industries &amp; Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['Pharma', 'Nutraceuticals', 'Cosmetics', 'AYUSH', 'Biotechnology', 'Agrochemicals', 'Academia', 'Startups'].map(ind => (
            <div key={ind} className="border border-gray-100 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-teal/30 hover:shadow-sm transition-all">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-teal/40" />
              </div>
              <span className="text-[13px] text-slate text-center">{ind}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
