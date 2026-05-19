import { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, BookOpen, Award, Calendar, Users } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "About — WormEra Research Lab",
  description:
    "Founded by Nirma University researchers, WormEra Research Lab brings 5+ years of C. elegans expertise and 14+ peer-reviewed publications to contract research in India.",
};

const team = [
  {
    name: "Dr. Gemini Gajera",
    role: "Principal Investigator & Co-Founder",
    affiliation: "Nirma University, Ahmedabad",
    expertise: "Host-pathogen interactions, functional screening, C. elegans biology",
    scholarUrl: "https://scholar.google.com/citations?user=9gwqNg8AAAAJ",
    photo: "/images/team/gemini-gajera.png",
  },
  {
    name: "Ms. Nidhi Thakkar",
    role: "Research Scientist & Co-Founder",
    affiliation: "Nirma University, Ahmedabad (Ph.D. Thesis Submitted)",
    expertise: "Stress biology, antimicrobial research, experimental design",
    scholarUrl: "https://scholar.google.com/citations?user=3T0DfMcAAAAJ",
    photo: "/images/team/nidhi-thakkar.png",
  },
];

const trustBadges = [
  { icon: Award,    label: "Nirma University Heritage", sub: "Founded by Nirma researchers" },
  { icon: BookOpen, label: "14+ Publications",          sub: "Peer-reviewed scientific output" },
  { icon: Calendar, label: "5+ Years Expertise",        sub: "Deep C. elegans specialization" },
  { icon: Users,    label: "AIC-GISC Incubatee",        sub: "Supported by AIC Foundation" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0A4F5C] dark:bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="tag-pill bg-white/15 text-white mb-4 inline-block">
              About Us
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Founded by Researchers,
              <br />
              <span className="text-[#E86A33]">for Researchers</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              WormEra Research Lab is a specialized research platform built on
              over five years of hands-on expertise in{" "}
              <em>Caenorhabditis elegans</em> biology — delivering scientifically
              rigorous, whole-organism bioassay services to industries that demand
              reliable pre-clinical data.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Story */}
      <section className="py-20 bg-white dark:bg-[#0F172A]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <SectionHeader eyebrow="Our Story" title="About WormEra Research Lab" />
              <div className="space-y-4 text-gray-600 dark:text-[#94A3B8] leading-relaxed text-[15px]">
                <p>
                  WormEra Research Lab is a specialized research platform founded
                  by researchers, for researchers. Built on over five years of
                  hands-on expertise in <em>Caenorhabditis elegans</em> biology, we
                  offer scientifically rigorous, whole-organism bioassay services to
                  industries that demand reliable pre-clinical data — faster and more
                  affordably than conventional models allow.
                </p>
                <p>
                  We are established in Ahmedabad and founded by researchers from
                  Nirma University with deep expertise in host-pathogen interactions,
                  stress biology, functional screening, and validated experimental
                  design. With 14+ peer-reviewed publications and a commitment to
                  reproducibility, our work is grounded in science — not shortcuts.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              <ScrollReveal delay={0.1}>
                <div className="card-base p-7 border-l-4 border-l-[#E86A33]">
                  <h3 className="font-display font-semibold text-lg text-[#0A4F5C] dark:text-white mb-3">
                    Vision
                  </h3>
                  <p className="text-gray-600 dark:text-[#94A3B8] text-sm leading-relaxed">
                    Our vision is to advance biological research through innovative
                    and scientifically validated model systems that contribute to
                    better health, sustainable science and next-generation product
                    development. We aim to bridge academic excellence with industrial
                    research by delivering reliable and impactful scientific solutions
                    globally.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="card-base p-7 border-l-4 border-l-[#C9A227]">
                  <h3 className="font-display font-semibold text-lg text-[#0A4F5C] dark:text-white mb-3">
                    Mission
                  </h3>
                  <p className="text-gray-600 dark:text-[#94A3B8] text-sm leading-relaxed">
                    Innovation, scientific integrity, quality and collaboration are
                    the core values of WormEra Research Lab. We are committed to
                    providing standardized, accurate and research-driven assay
                    services using advanced in vivo model systems and modern
                    scientific methodologies. Our mission is to support researchers
                    and industries with reliable biological screening platforms that
                    accelerate scientific discovery, product validation and
                    translational research.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-14 bg-gray-50 dark:bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((b, i) => (
              <ScrollReveal key={b.label} delay={i * 0.08}>
                <div className="card-base p-5 text-center hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl bg-[#0A4F5C]/10 dark:bg-[#0A4F5C]/30 flex items-center justify-center mx-auto mb-3">
                    <b.icon size={20} className="text-[#0A4F5C] dark:text-teal-400" />
                  </div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{b.label}</p>
                  <p className="text-xs text-gray-500 dark:text-[#94A3B8] mt-1">{b.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-[#0F172A]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="The Team"
              title="Meet Our Scientists"
              subtitle="A blend of scientific expertise and business acumen driving innovation."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.15}>
                <div className="card-base p-0 overflow-hidden group text-center">
                  {/* Photo */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A4F5C]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-[#0A4F5C] dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#E86A33] text-sm font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-[#94A3B8] mb-3">
                      {member.affiliation}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-[#94A3B8] leading-relaxed mb-5">
                      {member.expertise}
                    </p>
                    <a
                      href={member.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C9A227]/15 text-amber-800 dark:text-amber-300 text-xs font-semibold hover:bg-[#C9A227]/25 transition-colors"
                    >
                      <BookOpen size={12} />
                      Google Scholar
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50 dark:bg-[#1E293B]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="Who We Serve"
              title="Industries & Clients"
              centered
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["Pharma","Nutraceuticals","Cosmetics","AYUSH","Biotechnology","Agrochemicals","Academia","Startups"].map(
              (ind, i) => (
                <ScrollReveal key={ind} delay={i * 0.06}>
                  <div className="card-base p-4 text-center hover:-translate-y-1 cursor-default">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">{ind}</p>
                  </div>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="py-20 bg-white dark:bg-[#0F172A]">
        <div className="section-padding">
          <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <ScrollReveal key={n} delay={n * 0.1}>
                <div className="card-base p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-[#C9A227] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-[#94A3B8] text-sm italic leading-relaxed mb-4">
                    &ldquo;Testimonial from a satisfied client about the lab&apos;s
                    scientific rigor, turnaround time, or data quality — to be
                    filled with real quotes.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">Client Name</p>
                      <p className="text-xs text-gray-400 dark:text-[#94A3B8]">Designation, Company</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
