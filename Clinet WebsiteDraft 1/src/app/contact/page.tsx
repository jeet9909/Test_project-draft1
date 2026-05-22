'use client'
import { useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'

const CONTACT_ITEMS = [
  { icon: Phone, label: 'Phone / WhatsApp', value: '+91-9925993634', href: 'tel:+919925993634' },
  { icon: Mail, label: 'Email', value: 'wormeraresearchlab@gmail.com', href: 'mailto:wormeraresearchlab@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'AIC-GISC Foundation, Block No. 5, Bh. GTU Main Building, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat-382424', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat, 9:00 AM – 6:00 PM IST', href: null },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}${form.org ? ` (${form.org})` : ''}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\n${form.message}`)
    window.open(`mailto:wormeraresearchlab@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 section-pad bg-white overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="relative">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 border border-teal/15 text-teal text-[11px] font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Free consultation
            </span>
            <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] text-slate font-bold leading-tight mb-4">
              Let&apos;s talk about your compound.
            </h1>
            <p className="text-[16px] text-gray-500 max-w-xl leading-relaxed">
              Whether you need a single assay or a full screening panel, we&apos;ll design the right study around your research question — no commitment required.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── MAIN GRID ─────────────────────────────────────── */}
      <section className="section-pad pb-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ─ FORM ─ */}
          <AnimateIn direction="left">
            <div className="bg-offwhite border border-gray-100 rounded-2xl p-8">
              {sent ? (
                <div className="flex flex-col items-center text-center py-12 gap-4">
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center">
                    <CheckCircle size={26} className="text-teal" />
                  </div>
                  <div>
                    <p className="font-serif text-[22px] text-slate font-semibold mb-1">Message sent!</p>
                    <p className="text-[14px] text-gray-500">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => { setForm({ name: '', email: '', org: '', message: '' }); setSent(false) }}
                    className="text-[13px] text-teal hover:underline font-medium mt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-semibold text-slate mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-coral">*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Dr. Jane Smith"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-slate placeholder:text-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-slate mb-1.5 uppercase tracking-wide">
                        Email <span className="text-coral">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-slate placeholder:text-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-slate mb-1.5 uppercase tracking-wide">
                      Organization / Company
                    </label>
                    <input
                      value={form.org}
                      onChange={e => setForm({ ...form, org: e.target.value })}
                      placeholder="Your company or institution"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-slate placeholder:text-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-slate mb-1.5 uppercase tracking-wide">
                      Message <span className="text-coral">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your compound, screening goals, or any questions…"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-slate placeholder:text-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3.5 rounded-xl text-[14px]"
                  >
                    Send Message
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">
                    Your message opens your email client — no data is stored on our server.
                  </p>
                </form>
              )}
            </div>
          </AnimateIn>

          {/* ─ INFO SIDE ─ */}
          <AnimateIn delay={0.1}>
            <div className="space-y-5">

              {/* Contact details */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-[17px] font-semibold text-slate mb-5">Contact Details</h3>
                <div className="space-y-4">
                  {CONTACT_ITEMS.map(item => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-teal/8 flex items-center justify-center shrink-0">
                        <item.icon size={16} className="text-teal" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                        {item.href
                          ? <a href={item.href} className="text-[13.5px] text-slate hover:text-teal transition-colors font-medium">{item.value}</a>
                          : <p className="text-[13.5px] text-slate leading-relaxed">{item.value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919925993634?text=Hi%20WormEra%2C%20I%27d%20like%20to%20enquire%20about%20your%20screening%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fb956] text-white py-3 rounded-xl text-[13.5px] font-semibold transition-colors mt-5 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Free consultation callout */}
              <div className="bg-teal/5 border border-teal/15 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <CheckCircle size={18} className="text-teal" />
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-slate mb-1">Book a Free Consultation</h3>
                <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
                  30-minute call to discuss your compound and design the right assay panel. No commitment required.
                </p>
                <a
                  href="mailto:wormeraresearchlab@gmail.com?subject=Consultation%20Request"
                  className="btn-primary text-[13px] px-5 py-2.5 rounded-xl"
                >
                  Schedule via Email
                  <ArrowRight size={13} />
                </a>
              </div>

              {/* Incubatee badge */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
                <p className="text-[12px] font-semibold text-teal mb-1 uppercase tracking-wide">AIC-GISC Foundation Incubatee</p>
                <p className="text-[12px] text-gray-400 leading-relaxed">
                  Founded by researchers from Nirma University, Ahmedabad.<br />
                  Supported by AIC-GISC Foundation, GTU Campus.
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </section>
    </>
  )
}
