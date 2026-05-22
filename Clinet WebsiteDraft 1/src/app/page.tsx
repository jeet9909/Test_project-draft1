import Link from 'next/link'
import WormBackground from '@/components/WormBackground'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 section-pad bg-white">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate leading-tight mb-6">
            Whole-organism research platform.<br />
            <span className="text-teal">Pioneering Rapid In Vivo Screening</span><br />
            through <em>C. elegans</em> Model.
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mb-10">
            WormEra Research Lab is a specialized research and service laboratory focused on{' '}
            <em>Caenorhabditis elegans</em>–based in vivo screening for nutraceutical, pharmaceutical,
            antimicrobial, and functional ingredient evaluation. With a strong emphasis on scientific
            accuracy, innovation, and translational research, the laboratory provides reliable
            preclinical screening solutions for academia and industry.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-white px-6 py-3 rounded text-[14px] font-medium transition-colors cursor-pointer">
              Request a free consultation
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-teal text-teal hover:bg-teal/5 px-6 py-3 rounded text-[14px] font-medium transition-colors cursor-pointer">
              View our services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY C. ELEGANS */}
      <section className="section-pad py-16 md:py-24 bg-offwhite">
        <p className="eyebrow text-teal mb-3">The platform advantage</p>
        <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-12 max-w-xl">Why <em>C. elegans</em>?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Transparent organism',
              body: 'Enables live imaging, photography, and real-time monitoring at every stage of the assay — no sacrifice required mid-study.',
            },
            {
              title: 'Rapid lifecycle model',
              body: 'Short life cycle enables accelerated experimental timelines compared to rodent models — results in days, not months.',
            },
            {
              title: 'Conserved biology',
              body: '~1 mm organism with conserved pathways relevant to human systems — true in vivo context beyond cell culture.',
            },
            {
              title: 'Cost-efficient screening',
              body: 'Organism-level screening with measurable phenotypic outputs at a fraction of mammalian study costs.',
            },
          ].map(card => (
            <div key={card.title} className="bg-white border-l-4 border-teal rounded p-6">
              <h3 className="font-serif text-[17px] font-semibold text-slate mb-3">{card.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad py-12 bg-white border-y border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '14+', label: 'Peer-reviewed publications' },
            { value: '5+', label: 'Years C. elegans expertise' },
            { value: '3', label: 'Service pillars' },
            { value: '8', label: 'Industries served' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-bold text-teal">{s.value}</p>
              <p className="text-[12px] text-gray-400 mt-1 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section-pad py-16 md:py-24 bg-offwhite">
        <p className="eyebrow text-teal mb-3">Who we serve</p>
        <h2 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-10">Industries &amp; Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['Pharma', 'Nutraceuticals', 'Cosmetics', 'AYUSH', 'Biotechnology', 'Agrochemicals', 'Academia', 'Startups'].map(ind => (
            <div key={ind} className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-teal/30 hover:shadow-sm transition-all">
              <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-teal/40" />
              </div>
              <span className="text-[13px] text-slate text-center">{ind}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-teal">
        <WormBackground count={18} alpha={0.08} speed={0.9} />
        <div className="relative z-10 section-pad py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 max-w-lg">
            Ready to start your study?
          </h2>
          <p className="text-[16px] text-white/70 mb-8 max-w-lg">
            Reach out for a free consultation. We&apos;ll design the right assay for your compound.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-coral hover:bg-coral-dark text-white px-7 py-3 rounded text-[14px] font-medium transition-colors cursor-pointer">
              Get in touch
            </Link>
            <a href="mailto:wormeraresearchlab@gmail.com" className="border border-white/30 text-white/80 hover:border-white hover:text-white px-7 py-3 rounded text-[14px] font-medium transition-colors">
              wormeraresearchlab@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
