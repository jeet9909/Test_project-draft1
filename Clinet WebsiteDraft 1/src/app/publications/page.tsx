'use client'
import { useState, useMemo, useRef, useEffect } from 'react'
import { Search, X, ExternalLink, ChevronDown } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'

const PUBS = [
  { id: 1,  title: "Berberine Attenuates Chromobacterium violaceum's Virulence by Targeting Efflux and Denitrification Machinery", journal: 'Chemistry & Biodiversity', year: 2025, doi: 'https://doi.org/10.1002/cbdv.202503727', pmid: '42127231', pmcid: null, tag: 'Anti-Pathogenic', oa: false },
  { id: 2,  title: 'Withania somnifera root extract reduces susceptibility of the model worm Caenorhabditis elegans to different types of stressors', journal: 'Preprint', year: 2025, doi: 'https://doi.org/10.64898/2025.12.18.695325', pmid: null, pmcid: 'PMC12767675', tag: 'Stress / Aging', oa: true },
  { id: 3,  title: 'Withania somnifera root extract (LongeFera™) confers beneficial effects on health and lifespan of Caenorhabditis elegans', journal: 'Drug Target Insights', year: 2025, doi: 'https://doi.org/10.33393/dti.2025.3368', pmid: null, pmcid: 'PMC11969495', tag: 'Aging & Lifespan', oa: true },
  { id: 4,  title: 'Emerging Prevalence of Fungal Infections and Challenges in Development of New Antifungals', journal: 'CRC Press (Book Chapter)', year: 2024, doi: 'https://doi.org/10.1201/9781032642864', pmid: null, pmcid: null, tag: 'Review', oa: false },
  { id: 5,  title: 'Deciphering the molecular mechanisms underlying anti-pathogenic potential of a polyherbal formulation Enteropan® against multidrug-resistant Pseudomonas aeruginosa', journal: 'Drug Target Insights', year: 2024, doi: 'https://doi.org/10.33393/dti.2024.3082', pmid: '39224464', pmcid: null, tag: 'Anti-Pathogenic', oa: false },
  { id: 6,  title: 'Identification of anthelmintic activity in a small chemical library through random screening using the worm Caenorhabditis elegans as a model helminth', journal: 'ResearchGate Preprint', year: 2024, doi: 'https://www.researchgate.net/publication/396252218', pmid: null, pmcid: null, tag: 'Anthelmintic', oa: false },
  { id: 7,  title: 'Silversol® (a Colloidal Nanosilver Formulation) Inhibits Growth of Antibiotic-Resistant Staphylococcus aureus by Disrupting Its Physiology in Multiple Ways', journal: 'Pharmaceutics', year: 2024, doi: 'https://doi.org/10.3390/pharmaceutics16060726', pmid: null, pmcid: 'PMC11206351', tag: 'Anti-Pathogenic', oa: true },
  { id: 8,  title: 'Duration of fermentation affects microbiome composition and biological activity of an Indian traditional formulation – Panchagavya', journal: 'Journal of Ayurveda and Integrative Medicine', year: 2023, doi: 'https://doi.org/10.1016/j.jaim.2023.100880', pmid: null, pmcid: 'PMC10940934', tag: 'Microbiome', oa: true },
  { id: 9,  title: 'Sub-lethal concentration of a colloidal nanosilver formulation (Silversol®) triggers dysregulation of iron homeostasis and nitrogen metabolism in multidrug resistant Pseudomonas aeruginosa', journal: 'BMC Microbiology', year: 2023, doi: 'https://doi.org/10.1186/s12866-023-03062-x', pmid: null, pmcid: 'PMC10591374', tag: 'Anti-Pathogenic', oa: true },
  { id: 10, title: 'Identification of anti-pathogenic activity among in silico predicted small-molecule inhibitors of Pseudomonas aeruginosa LasR or nitric oxide reductase (NOR)', journal: 'Drug Target Insights', year: 2023, doi: 'https://doi.org/10.33393/dti.2023.2638', pmid: '37811195', pmcid: null, tag: 'Anti-Pathogenic', oa: false },
  { id: 11, title: 'Potent anthelmintic activity of a colloidal nano-silver formulation (Silversol®) against the model worm Caenorhabditis elegans', journal: 'BMC Research Notes', year: 2023, doi: 'https://doi.org/10.1186/s13104-023-06392-1', pmid: null, pmcid: 'PMC10318827', tag: 'Anthelmintic', oa: true },
  { id: 12, title: 'Network analysis for identifying potential anti-virulence targets from whole transcriptome of Pseudomonas aeruginosa and Staphylococcus aureus exposed to certain anti-pathogenic polyherbal formulations', journal: 'Drug Target Insights', year: 2022, doi: 'https://doi.org/10.33393/dti.2022.2595', pmid: '37275512', pmcid: null, tag: 'Anti-Pathogenic', oa: false },
  { id: 13, title: 'Antipathogenic Potential of Ferula asafoetida Essential Oil', journal: 'ResearchGate Preprint', year: 2021, doi: 'https://www.researchgate.net/publication/354563471', pmid: null, pmcid: null, tag: 'Anti-Pathogenic', oa: false },
  { id: 14, title: 'Sonic Stimulation at Certain Frequencies Can Confer Limited Protection on Nematode Host Infected with Serratia marcescens', journal: 'ResearchGate Preprint', year: 2021, doi: 'https://www.researchgate.net/publication/354563563', pmid: null, pmcid: null, tag: 'In Vivo Model', oa: false },
  { id: 15, title: 'Anthelmintic activity of Ferula asafoetida against the model worm Caenorhabditis elegans', journal: 'OSF Preprints', year: 2021, doi: 'https://doi.org/10.31219/osf.io/ra3zp', pmid: null, pmcid: null, tag: 'Anthelmintic', oa: false },
]

const TAGS = ['All', 'Anti-Pathogenic', 'Anthelmintic', 'Aging & Lifespan', 'Stress / Aging', 'Microbiome', 'Review', 'In Vivo Model']

const TAG_STYLES: Record<string, string> = {
  'Anti-Pathogenic': 'bg-teal/10 text-teal border-teal/20',
  'Anthelmintic':    'bg-coral/10 text-coral border-coral/20',
  'Aging & Lifespan':'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/25 dark:text-amber-400 dark:border-amber-700/30',
  'Stress / Aging':  'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/25 dark:text-emerald-400 dark:border-emerald-700/30',
  'Microbiome':      'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/25 dark:text-purple-400 dark:border-purple-700/30',
  'Review':          'bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600',
  'In Vivo Model':   'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/25 dark:text-blue-400 dark:border-blue-700/30',
}

const YEARS = ['All Years', '2025', '2024', '2023', '2022', '2021']


export default function PublicationsPage() {
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('All')
  const [year, setYear] = useState('All Years')
  const [yearOpen, setYearOpen] = useState(false)
  const yearRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (yearRef.current && !yearRef.current.contains(e.target as Node)) {
        setYearOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = useMemo(() =>
    PUBS.filter(p => {
      const q = search.toLowerCase()
      const matchSearch = !search || p.title.toLowerCase().includes(q) || p.journal.toLowerCase().includes(q)
      const matchTag    = tag === 'All' || p.tag === tag
      const matchYear   = year === 'All Years' || p.year.toString() === year
      return matchSearch && matchTag && matchYear
    }), [search, tag, year]
  )

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 section-pad bg-white dark:bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="relative">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 dark:bg-teal/15 border border-teal/15 dark:border-teal/30 text-teal text-[11px] font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Research output
            </span>
            <h1 className="font-serif text-[2.6rem] md:text-[3.2rem] text-slate dark:text-gray-100 font-bold leading-tight mb-4">
              Publications
            </h1>
            <p className="text-[16px] text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              12+ peer-reviewed publications spanning antimicrobial discovery, aging biology, functional screening, and model organism validation.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="section-pad py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { end: 12, suffix: '+', label: 'Peer-reviewed publications', desc: 'Spanning 5 research areas' },
            { end: 5,  suffix: '+', label: 'Years C. elegans expertise', desc: 'Deep domain knowledge' },
            { end: 3,  suffix: '',  label: 'Core service pillars',       desc: 'Toxicity · Efficacy · AMR' },
            { end: 8,  suffix: '',  label: 'Industries served',          desc: 'Pharma to AYUSH' },
          ].map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.07} className="text-center">
              <p className="font-serif text-[3.2rem] font-bold text-teal leading-none mb-1">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-[13px] font-semibold text-slate dark:text-gray-100 mb-0.5">{s.label}</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500">{s.desc}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── FILTERS ──────────────────────────────────────── */}
      <section className="section-pad py-5 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 sticky top-16 z-30 shadow-sm shadow-gray-100/50 dark:shadow-black/20">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search title or journal…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl pl-9 pr-9 py-2.5 text-[14px] text-slate dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate dark:hover:text-gray-200 transition-colors cursor-pointer">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Custom year dropdown */}
          <div ref={yearRef} className="relative">
            <button
              onClick={() => setYearOpen(v => !v)}
              className="flex items-center justify-between gap-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl px-4 py-2.5 text-[14px] text-slate dark:text-gray-100 focus:outline-none focus:border-teal hover:border-teal/40 transition-all cursor-pointer min-w-[140px]"
            >
              {year}
              <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${yearOpen ? 'rotate-180' : ''}`} />
            </button>
            {yearOpen && (
              <div className="absolute top-full mt-1.5 left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg shadow-black/8 dark:shadow-black/30 overflow-hidden z-50">
                {YEARS.map(y => (
                  <button
                    key={y}
                    onClick={() => { setYear(y); setYearOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-[13.5px] transition-colors cursor-pointer ${
                      year === y
                        ? 'bg-teal text-white font-semibold'
                        : 'text-slate dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="text-[13px] text-gray-400 dark:text-gray-500 self-center sm:ml-1 shrink-0 font-medium">
            {filtered.length} <span className="text-gray-300 dark:text-gray-600">/</span> {PUBS.length}
          </span>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-2">
          {TAGS.map(t => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-150 cursor-pointer ${
                tag === t
                  ? 'bg-teal text-white shadow-sm shadow-teal/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-slate dark:hover:text-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ── CARDS ────────────────────────────────────────── */}
      <section className="section-pad py-10 bg-white dark:bg-gray-900 min-h-[40vh]">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-[18px] text-slate dark:text-gray-100 mb-2">No publications match your filters.</p>
            <button onClick={() => { setSearch(''); setTag('All'); setYear('All Years') }}
              className="text-[13px] text-teal hover:underline font-medium mt-2 cursor-pointer">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <div key={p.id} className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 flex flex-col gap-3 card-hover hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5">
                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${TAG_STYLES[p.tag] || 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                    {p.tag}
                  </span>
                  {p.oa && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-900/25 dark:text-emerald-400 dark:border-emerald-700/30 uppercase tracking-wider">
                      Open Access
                    </span>
                  )}
                  {!p.pmid && !p.pmcid && !p.oa && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-400 dark:text-gray-400 border border-gray-200 dark:border-gray-600 uppercase tracking-wider">
                      Preprint
                    </span>
                  )}
                </div>
                <h3 className="font-sans text-[14px] font-semibold text-slate dark:text-gray-100 leading-snug flex-1 group-hover:text-teal transition-colors">
                  {p.title}
                </h3>
                <p className="text-[12px] text-gray-400 dark:text-gray-500 font-medium">{p.journal} · {p.year}</p>
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <a href={p.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12px] font-semibold text-teal hover:text-teal-dark transition-colors">
                    View Paper <ExternalLink size={11} />
                  </a>
                  {p.pmid && (
                    <a href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-[12px] text-gray-400 dark:text-gray-500 hover:text-teal transition-colors font-medium">
                      PubMed
                    </a>
                  )}
                  {p.pmcid && (
                    <a href={`https://www.ncbi.nlm.nih.gov/pmc/articles/${p.pmcid}/`} target="_blank" rel="noopener noreferrer" className="text-[12px] text-gray-400 dark:text-gray-500 hover:text-teal transition-colors font-medium">
                      PMC
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scholar profiles */}
        <AnimateIn delay={0.1}>
          <div className="mt-16 bg-offwhite dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 text-center">
            <p className="font-serif text-[20px] text-slate dark:text-gray-100 font-semibold mb-2">View Complete Publication Profiles</p>
            <p className="text-[13px] text-gray-400 dark:text-gray-500 mb-6">Explore all citations and metrics on Google Scholar.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://scholar.google.com/citations?user=9gwqNg8AAAAJ" target="_blank" rel="noopener noreferrer" className="btn-outline text-[13px] px-6 py-2.5 rounded-xl">
                Dr. Gemini Gajera
              </a>
              <a href="https://scholar.google.com/citations?user=3T0DfMcAAAAJ" target="_blank" rel="noopener noreferrer" className="btn-outline text-[13px] px-6 py-2.5 rounded-xl">
                Ms. Nidhi Thakkar
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
