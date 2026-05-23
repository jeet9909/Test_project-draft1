'use client'
import { useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf75NpI7cz_5LjIB1yEk1lrgd6toUdbzCybNUJyZ0a6B74AYg/viewform'

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
      <section className="relative pt-28 md:pt-36 pb-16 section-pad bg-white dark:bg-navy overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full bg-coral/4 blur-3xl pointer-events-none" />
        <div className="relative">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 dark:bg-teal/15 border border-teal/15 dark:border-teal/30 text-teal text-[11px] font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Free consultation
            </span>
            <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] text-slate dark:text-gray-100 font-bold leading-tight mb-4">
              Let&apos;s talk about<br className="hidden md:block" /> your compound.
            </h1>
            <p className="text-[16px] text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              Whether you need a single assay or a full screening panel, we&apos;ll design
              the right study around your research question — no commitment required.
            </p>

            {/* Quick action chips */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="mailto:wormeraresearchlab@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/8 dark:bg-teal/15 border border-teal/20 text-teal text-[12.5px] font-semibold hover:bg-teal/15 transition-colors">
                <Mail size={13} />
                Email us directly
              </a>
              <a href="https://wa.me/919925993634?text=Hi%20WormEra%2C%20I%27d%20like%20to%20enquire%20about%20your%20screening%20services."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/25 text-[#1aa755] dark:text-[#25D366] text-[12.5px] font-semibold hover:bg-[#25D366]/15 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Chat on WhatsApp
              </a>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/8 border border-coral/20 text-coral text-[12.5px] font-semibold hover:bg-coral/12 transition-colors">
                <ExternalLink size={13} />
                Quick Enquiry Form
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── MAIN GRID ─────────────────────────────────────── */}
      <section className="section-pad pb-20 bg-offwhite dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">

          {/* ─ FORM ─ */}
          <AnimateIn direction="left">
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm">
              {/* Form header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-100 dark:border-gray-700">
                <h2 className="font-serif text-[20px] font-semibold text-slate dark:text-gray-100 mb-1">Send us a message</h2>
                <p className="text-[13px] text-gray-400 dark:text-gray-500">We typically respond within 24 hours on business days.</p>
              </div>

              {/* Form body */}
              <div className="p-8">
                {sent ? (
                  <div className="flex flex-col items-center text-center py-12 gap-4">
                    <div className="w-16 h-16 rounded-full bg-teal/10 dark:bg-teal/15 flex items-center justify-center">
                      <CheckCircle size={28} className="text-teal" />
                    </div>
                    <div>
                      <p className="font-serif text-[22px] text-slate dark:text-gray-100 font-semibold mb-1">Message sent!</p>
                      <p className="text-[14px] text-gray-500 dark:text-gray-400">We&apos;ll get back to you within 24 hours.</p>
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
                        <label className="block text-[11px] font-semibold text-slate dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                          Full Name <span className="text-coral">*</span>
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Dr. Jane Smith"
                          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-[14px] text-slate dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                          Email <span className="text-coral">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-[14px] text-slate dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                        Organization / Company
                      </label>
                      <input
                        value={form.org}
                        onChange={e => setForm({ ...form, org: e.target.value })}
                        placeholder="Your company or institution"
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-[14px] text-slate dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                        Message <span className="text-coral">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your compound, screening goals, or any questions…"
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-[14px] text-slate dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center py-3.5 rounded-xl text-[14px]"
                    >
                      Send Message
                      <ArrowRight size={16} />
                    </button>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center">
                      Your message opens your email client — no data is stored on our server.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </AnimateIn>

          {/* ─ INFO SIDE ─ */}
          <AnimateIn delay={0.1}>
            <div className="space-y-4">

              {/* Contact details */}
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-[16px] font-semibold text-slate dark:text-gray-100 mb-5">Contact Details</h3>
                <div className="space-y-4">
                  {CONTACT_ITEMS.map(item => (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-teal/8 dark:bg-teal/15 flex items-center justify-center shrink-0">
                        <item.icon size={14} className="text-teal" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                        {item.href
                          ? <a href={item.href} className="text-[13px] text-slate dark:text-gray-300 hover:text-teal transition-colors font-medium">{item.value}</a>
                          : <p className="text-[13px] text-slate dark:text-gray-300 leading-relaxed">{item.value}</p>
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
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fb956] text-white py-3 rounded-xl text-[13px] font-semibold transition-colors mt-5 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Free consultation callout */}
              <div className="bg-teal/5 dark:bg-teal/10 border border-teal/15 dark:border-teal/25 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-xl bg-teal/10 dark:bg-teal/20 flex items-center justify-center mb-4">
                  <CheckCircle size={18} className="text-teal" />
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-slate dark:text-gray-100 mb-1">Book a Free Consultation</h3>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                  30-minute call to discuss your compound and design the right assay panel. No commitment required.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-[13px] px-5 py-2.5 rounded-xl w-full justify-center"
                  >
                    Enquiry Now
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="mailto:wormeraresearchlab@gmail.com?subject=Consultation%20Request"
                    className="inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold text-teal hover:text-teal-dark transition-colors"
                  >
                    Schedule via Email
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Incubatee badge */}
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 text-center shadow-sm">
                <p className="text-[11px] font-semibold text-teal mb-1 uppercase tracking-wide">AIC-GISC Foundation Incubatee</p>
                <p className="text-[12px] text-gray-400 dark:text-gray-500 leading-relaxed">
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
