'use client'
import { useState, useMemo } from 'react'

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
const TAG_COLORS: Record<string, string> = {
  'Anti-Pathogenic': 'bg-teal/10 text-teal',
  'Anthelmintic':    'bg-coral/10 text-coral',
  'Aging & Lifespan':'bg-amber-50 text-amber-700',
  'Stress / Aging':  'bg-sage/10 text-sage',
  'Microbiome':      'bg-purple-50 text-purple-600',
  'Review':          'bg-gray-100 text-gray-500',
  'In Vivo Model':   'bg-blue-50 text-blue-600',
}

export default function PublicationsPage() {
  const [search, setSearch] = useState('')
  const [tag, setTag] = useState('All')
  const [year, setYear] = useState('All Years')

  const filtered = useMemo(() =>
    PUBS.filter(p => {
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.journal.toLowerCase().includes(search.toLowerCase())
      const matchTag  = tag === 'All' || p.tag === tag
      const matchYear = year === 'All Years' || p.year.toString() === year
      return matchSearch && matchTag && matchYear
    }), [search, tag, year]
  )

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10 section-pad bg-teal text-white">
        <p className="eyebrow text-[#9FE1CB] mb-3">Research</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Publications</h1>
        <p className="text-[16px] text-white/70 max-w-2xl">
          14 peer-reviewed publications spanning antimicrobial discovery, aging biology, functional screening, and model organism validation.
        </p>
      </section>

      {/* Filters */}
      <section className="section-pad py-6 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Search title or journal..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 border border-gray-200 rounded px-4 py-2 text-[14px] focus:outline-none focus:border-teal"
          />
          <select
            value={year}
            onChange={e => setYear(e.target.value)}
            className="border border-gray-200 rounded px-3 py-2 text-[14px] focus:outline-none focus:border-teal bg-white cursor-pointer"
          >
            {['All Years', '2025', '2024', '2023', '2022', '2021'].map(y => <option key={y}>{y}</option>)}
          </select>
          <span className="text-[13px] text-gray-400 self-center sm:ml-2 shrink-0">{filtered.length} / {PUBS.length} papers</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {TAGS.map(t => (
            <button key={t} onClick={() => setTag(t)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors cursor-pointer ${tag === t ? 'bg-teal text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="section-pad py-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p => (
            <div key={p.id} className="border border-gray-100 rounded-lg p-5 hover:shadow-sm hover:border-teal/20 transition-all flex flex-col gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${TAG_COLORS[p.tag] || 'bg-gray-100 text-gray-500'}`}>
                  {p.tag}
                </span>
                {p.oa && (
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600 uppercase tracking-wide">
                    Open Access
                  </span>
                )}
                {!p.pmid && !p.pmcid && (
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 uppercase tracking-wide">
                    Preprint
                  </span>
                )}
              </div>
              <h3 className="font-sans text-[14px] font-medium text-slate leading-snug flex-1">{p.title}</h3>
              <p className="text-[12px] text-gray-400">{p.journal} · {p.year}</p>
              <div className="flex flex-wrap gap-2 text-[12px]">
                <a href={p.doi} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline font-medium">View Paper →</a>
                {p.pmid && <a href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal">PubMed</a>}
                {p.pmcid && <a href={`https://www.ncbi.nlm.nih.gov/pmc/articles/${p.pmcid}/`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal">PMC</a>}
              </div>
            </div>
          ))}
        </div>

        {/* Scholar links */}
        <div className="mt-16 text-center">
          <p className="font-serif text-[18px] text-slate font-semibold mb-2">View Complete Publication Profiles</p>
          <p className="text-[13px] text-gray-400 mb-6">Explore all citations and metrics on Google Scholar.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://scholar.google.com/citations?user=9gwqNg8AAAAJ" target="_blank" rel="noopener noreferrer"
              className="border border-teal text-teal hover:bg-teal hover:text-white px-5 py-2.5 rounded text-[13px] font-medium transition-colors">
              Dr. Gemini Gajera — Scholar
            </a>
            <a href="https://scholar.google.com/citations?user=3T0DfMcAAAAJ" target="_blank" rel="noopener noreferrer"
              className="border border-teal text-teal hover:bg-teal hover:text-white px-5 py-2.5 rounded text-[13px] font-medium transition-colors">
              Ms. Nidhi Thakkar — Scholar
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
