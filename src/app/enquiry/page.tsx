'use client'
import { useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { ArrowRight, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

const ACCESS_KEY = '146fde06-d188-4bc7-984b-57cecc0bfe41'

const SAMPLE_TYPES = ['Compound', 'Nanoparticle', 'Plant Extract', 'Drug/Formulation', 'Microbial Product', 'Other']
const STORAGE      = ['Room Temperature', '4°C', '−20°C', 'Other']
const SOLUBILITY   = ['Water', 'DMSO', 'Ethanol', 'Methanol', 'Other']
const ANALYSIS     = ['General Toxicity Assay', 'Dose-Dependent Toxicity', 'Survival Assay', 'Developmental Toxicity', 'Behavioral Assay', 'Other']
const REPORT       = ['PDF Report', 'Raw Data + Report', 'Graphs & Statistical Analysis Included', 'Other']

type Status = 'idle' | 'sending' | 'success' | 'error'

const initial = {
  name: '', designation: '', org: '', email: '', contact: '',
  sampleName: '', sampleType: [] as string[], sampleTypeOther: '',
  numSamples: '', quantity: '',
  storage: [] as string[], storageOther: '',
  solubility: [] as string[], solubilityOther: '',
  objective: '',
  analysis: [] as string[], analysisOther: '',
  controls: '', timeline: '',
  report: '', reportOther: '',
  additional: '',
  declaration: false,
}

export default function EnquiryPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [f, setF] = useState(initial)
  const [err, setErr] = useState('')

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)
  const phoneOk = /^[+]?[\d\s\-()]{7,15}$/.test(f.contact)

  const set = (k: keyof typeof f, v: string | string[] | boolean) => setF(p => ({ ...p, [k]: v }))

  const toggle = (k: 'storage' | 'solubility' | 'sampleType' | 'analysis', val: string) =>
    setF(p => ({ ...p, [k]: p[k].includes(val) ? p[k].filter(x => x !== val) : [...p[k], val] }))

  // "Other" → append the custom text; checkbox arrays → comma-joined
  const withOther = (val: string, other: string) => (val === 'Other' ? `Other: ${other || '—'}` : val)
  const listWithOther = (arr: string[], other: string) =>
    arr.map(x => (x === 'Other' ? `Other: ${other || '—'}` : x)).join(', ') || '—'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErr('')

    if (!emailOk) return setErr('Please enter a valid email address.')
    if (!phoneOk) return setErr('Please enter a valid contact number (7–15 digits).')
    if (f.sampleType.length === 0) return setErr('Please select at least one type of sample.')
    if (f.storage.length === 0) return setErr('Please select at least one storage condition.')
    if (f.solubility.length === 0) return setErr('Please select at least one solubility option.')
    if (f.analysis.length === 0) return setErr('Please select at least one type of analysis.')
    // "Other" must be specified
    if (f.sampleType.includes('Other') && !f.sampleTypeOther.trim()) return setErr('Please specify the "Other" type of sample.')
    if (f.storage.includes('Other') && !f.storageOther.trim()) return setErr('Please specify the "Other" storage condition.')
    if (f.solubility.includes('Other') && !f.solubilityOther.trim()) return setErr('Please specify the "Other" solubility.')
    if (f.analysis.includes('Other') && !f.analysisOther.trim()) return setErr('Please specify the "Other" type of analysis.')
    if (f.report === 'Other' && !f.reportOther.trim()) return setErr('Please specify the "Other" report format.')
    if (!f.declaration) return setErr('Please confirm the declaration before submitting.')

    setStatus('sending')
    const message = `Dear Team,

We have received a new sample submission and project requirement request via the website form. Please find the complete details below. Kindly review and proceed as per your respective responsibilities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBMITTER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name                       : ${f.name}
Designation                : ${f.designation}
Institute / Organization   : ${f.org}
Email ID                   : ${f.email}
Contact Number             : ${f.contact}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SAMPLE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sample Name / Code         : ${f.sampleName}
Type of Sample             : ${listWithOther(f.sampleType, f.sampleTypeOther)}
Number of Samples          : ${f.numSamples}
Quantity per Sample        : ${f.quantity || '—'}
Storage Conditions         : ${listWithOther(f.storage, f.storageOther)}
Solubility                 : ${listWithOther(f.solubility, f.solubilityOther)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STUDY & ANALYSIS REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Objective of the Study     : ${f.objective || '—'}
Type of Analysis Required  : ${listWithOther(f.analysis, f.analysisOther)}
Controls Required          : ${f.controls}
Expected Timeline          : ${f.timeline || '—'}
Preferred Report Format    : ${withOther(f.report, f.reportOther)}
Additional Requirements    : ${f.additional || '—'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTION ITEMS FOR THE TEAM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Verify sample details and storage availability.
2. Confirm the required assays and assign to the relevant analyst.
3. Acknowledge receipt to the submitter at the email above.
4. Update the project tracker with the expected timeline.
5. Flag any missing information or clarifications needed.

The submitter has confirmed that all information provided is accurate. Please reach out directly if any clarification is needed before proceeding.

— Sent automatically from the WormEra Research Lab website enquiry form`

    const payload = {
      access_key: ACCESS_KEY,
      subject: `New Sample Submission Request — ${f.name}${f.org ? ` (${f.org})` : ''}`,
      from_name: 'WormEra Enquiry Form',
      email: f.email,
      message,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-12 section-pad bg-white dark:bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 dark:bg-teal/15 border border-teal/15 dark:border-teal/30 text-teal dark:text-[#D1FAE5] text-[11px] font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal dark:bg-[#D1FAE5] animate-pulse" />
              Start your study
            </span>
            <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] text-slate dark:text-gray-100 font-bold leading-tight">
              Sample Submission &amp; Project Requirement
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────── */}
      <section className="section-pad pb-20 md:pb-28 bg-white dark:bg-gray-900">
        <div className="max-w-3xl">
          <AnimateIn>
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden">

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-20 px-8 gap-4">
                  <div className="w-16 h-16 rounded-full bg-teal/10 dark:bg-teal/15 flex items-center justify-center">
                    <CheckCircle size={30} className="text-teal dark:text-[#D1FAE5]" />
                  </div>
                  <p className="font-serif text-[24px] text-slate dark:text-gray-100 font-semibold">Submission received!</p>
                  <p className="text-[14px] text-slate/70 dark:text-gray-400 max-w-sm">
                    Thank you. Your enquiry has reached our team — we&apos;ll get back to you within 24 hours on business days.
                  </p>
                  <button onClick={() => { setF(initial); setStatus('idle') }}
                    className="text-[13px] text-teal dark:text-[#D1FAE5] hover:underline font-medium mt-2 cursor-pointer">
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-7 md:p-9 space-y-8">

                  {/* ── Contact details ── */}
                  <Group title="Your details">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Name" required>
                        <input required value={f.name} onChange={e => set('name', e.target.value)} className={inputCls} placeholder="Dr. Jane Smith" />
                      </Field>
                      <Field label="Designation" required>
                        <input required value={f.designation} onChange={e => set('designation', e.target.value)} className={inputCls} placeholder="Research Scientist" />
                      </Field>
                      <Field label="Institute / Organization" required>
                        <input required value={f.org} onChange={e => set('org', e.target.value)} className={inputCls} placeholder="Your institute or company" />
                      </Field>
                      <Field label="Email ID" required>
                        <input required type="email" value={f.email} onChange={e => set('email', e.target.value)}
                          className={`${inputCls} ${f.email && !emailOk ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`} placeholder="you@example.com" />
                        {f.email && !emailOk && <Hint>Please enter a valid email address.</Hint>}
                      </Field>
                      <Field label="Contact Number" required>
                        <input required type="tel" value={f.contact} onChange={e => set('contact', e.target.value)}
                          className={`${inputCls} ${f.contact && !phoneOk ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`} placeholder="+91 …" />
                        {f.contact && !phoneOk && <Hint>Enter a valid number (7–15 digits, + - ( ) allowed).</Hint>}
                      </Field>
                    </div>
                  </Group>

                  {/* ── Sample details ── */}
                  <Group title="Sample details">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Sample Name / Code" required>
                        <input required value={f.sampleName} onChange={e => set('sampleName', e.target.value)} className={inputCls} placeholder="e.g. Compound X-23" />
                      </Field>
                      <Field label="Number of Samples" required>
                        <input required value={f.numSamples} onChange={e => set('numSamples', e.target.value)} className={inputCls} placeholder="e.g. 3" />
                      </Field>
                      <Field label="Quantity Available per Sample">
                        <input value={f.quantity} onChange={e => set('quantity', e.target.value)} className={inputCls} placeholder="e.g. 50 mg" />
                      </Field>
                    </div>

                    <CheckGroup label="Type of Sample" required options={SAMPLE_TYPES} selected={f.sampleType}
                      onToggle={v => toggle('sampleType', v)} other={f.sampleTypeOther} onOther={v => set('sampleTypeOther', v)} />

                    <CheckGroup label="Storage Conditions Required" required options={STORAGE} selected={f.storage}
                      onToggle={v => toggle('storage', v)} other={f.storageOther} onOther={v => set('storageOther', v)} />

                    <CheckGroup label="Solubility Information" required options={SOLUBILITY} selected={f.solubility}
                      onToggle={v => toggle('solubility', v)} other={f.solubilityOther} onOther={v => set('solubilityOther', v)} />
                  </Group>

                  {/* ── Study requirements ── */}
                  <Group title="Study requirements">
                    <Field label="Objective of the Study">
                      <textarea rows={3} value={f.objective} onChange={e => set('objective', e.target.value)} className={`${inputCls} resize-none`} placeholder="What do you want to find out?" />
                    </Field>

                    <CheckGroup label="Type of Analysis Required" required options={ANALYSIS} selected={f.analysis}
                      onToggle={v => toggle('analysis', v)} other={f.analysisOther} onOther={v => set('analysisOther', v)} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Controls Required (if any)" required>
                        <input required value={f.controls} onChange={e => set('controls', e.target.value)} className={inputCls} placeholder="e.g. Positive / negative control" />
                      </Field>
                      <Field label="Expected Timeline for Results">
                        <input value={f.timeline} onChange={e => set('timeline', e.target.value)} className={inputCls} placeholder="e.g. 3 weeks" />
                      </Field>
                    </div>

                    <RadioGroup label="Preferred Report Format" required options={REPORT} value={f.report}
                      onChange={v => set('report', v)} other={f.reportOther} onOther={v => set('reportOther', v)} />

                    <Field label="Additional experimental requirements or background information">
                      <textarea rows={4} value={f.additional} onChange={e => set('additional', e.target.value)} className={`${inputCls} resize-none`} placeholder="Anything else we should know…" />
                    </Field>
                  </Group>

                  {/* ── Declaration ── */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input type="checkbox" checked={f.declaration} onChange={e => set('declaration', e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-teal cursor-pointer shrink-0" />
                    <span className="text-[13px] text-slate/80 dark:text-gray-300 leading-relaxed">
                      I confirm that the information provided above is accurate to the best of my knowledge. <span className="text-red-500">*</span>
                    </span>
                  </label>

                  {err && (
                    <div className="flex items-center gap-2 text-[13px] text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
                      <AlertCircle size={15} className="shrink-0" /> {err}
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-[13px] text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
                      <AlertCircle size={15} className="shrink-0" />
                      Something went wrong. Please try again, or email us directly at wormeraresearchlab@gmail.com.
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full justify-center py-3.5 rounded-xl text-[14px] disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === 'sending'
                      ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
                      : <>Submit Enquiry <ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}

/* ── shared styles + sub-components ── */
const inputCls =
  'w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-[14px] text-slate dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all'

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-5">
      <h2 className="font-serif text-[18px] font-semibold text-slate dark:text-gray-100 border-b border-gray-100 dark:border-gray-700 pb-2">{title}</h2>
      {children}
    </div>
  )
}

function Hint({ children }: { children: React.ReactNode }) {
  return <p className="text-[11.5px] text-red-500 mt-1.5">{children}</p>
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold text-slate dark:text-gray-300 mb-1.5 uppercase tracking-wider">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}

function RadioGroup({ label, required, options, value, onChange, other, onOther }: {
  label: string; required?: boolean; options: string[]; value: string
  onChange: (v: string) => void; other: string; onOther: (v: string) => void
}) {
  return (
    <Field label={label} required={required}>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button key={opt} type="button" onClick={() => onChange(opt)}
            className={`px-3.5 py-2 rounded-xl text-[13px] font-medium border transition-all cursor-pointer ${
              value === opt
                ? 'bg-teal text-white border-teal'
                : 'bg-gray-50 dark:bg-gray-700 text-slate dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-teal/40'
            }`}>
            {opt}
          </button>
        ))}
      </div>
      {value === 'Other' && (
        <input value={other} onChange={e => onOther(e.target.value)} placeholder="Please specify…" className={`${inputCls} mt-2.5`} />
      )}
    </Field>
  )
}

function CheckGroup({ label, required, options, selected, onToggle, other, onOther }: {
  label: string; required?: boolean; options: string[]; selected: string[]
  onToggle: (v: string) => void; other: string; onOther: (v: string) => void
}) {
  return (
    <Field label={label} required={required}>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => {
          const on = selected.includes(opt)
          return (
            <button key={opt} type="button" onClick={() => onToggle(opt)}
              className={`px-3.5 py-2 rounded-xl text-[13px] font-medium border transition-all cursor-pointer ${
                on
                  ? 'bg-teal text-white border-teal'
                  : 'bg-gray-50 dark:bg-gray-700 text-slate dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-teal/40'
              }`}>
              {opt}
            </button>
          )
        })}
      </div>
      {selected.includes('Other') && (
        <input value={other} onChange={e => onOther(e.target.value)} placeholder="Please specify…" className={`${inputCls} mt-2.5`} />
      )}
    </Field>
  )
}
