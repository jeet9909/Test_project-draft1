'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Enquiry from website')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:wormeraresearchlab@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <>
      <section className="pt-28 md:pt-36 pb-0 section-pad bg-white">
        <p className="eyebrow text-teal mb-2">Get in touch</p>
        <h1 className="font-serif text-3xl md:text-4xl text-slate font-bold mb-2">Contact us</h1>
      </section>

      <section className="section-pad py-12 bg-navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Form card */}
          <div className="bg-[#1E293B] rounded-xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-serif text-[20px] text-white font-semibold mb-2">Message sent</p>
                <p className="text-[14px] text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[12px] text-gray-400 mb-1.5 font-medium">Full Name *</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Dr. Jane Smith"
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-2.5 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:border-teal transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] text-gray-400 mb-1.5 font-medium">Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="you@example.com"
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-2.5 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:border-teal transition-colors" />
                </div>
                <div>
                  <label className="block text-[12px] text-gray-400 mb-1.5 font-medium">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Tell us about your compound, screening goals, or any questions..."
                    className="w-full bg-[#0F172A] border border-gray-700 rounded-md px-4 py-2.5 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:border-teal transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-coral hover:bg-coral-dark text-white py-3 rounded-md text-[14px] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            <div className="bg-[#1E293B] rounded-xl p-6 space-y-4">
              <h3 className="font-serif text-[16px] font-semibold text-white">Contact Details</h3>
              {[
                { label: 'PHONE / WHATSAPP', value: '+91-9925993634', href: 'tel:+919925993634' },
                { label: 'EMAIL', value: 'wormeraresearchlab@gmail.com', href: 'mailto:wormeraresearchlab@gmail.com' },
                { label: 'ADDRESS', value: 'AIC-GISC Foundation, Block No. 5, Bh. GTU Main Building, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat-382424', href: null },
                { label: 'HOURS', value: 'Mon–Sat, 9:00 AM – 6:00 PM IST', href: null },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-teal/60" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="text-[13px] text-gray-300 hover:text-teal transition-colors">{item.value}</a>
                      : <p className="text-[13px] text-gray-300 leading-relaxed">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
              <a href="https://wa.me/919925993634?text=Hi%20WormEra%2C%20I%27d%20like%20to%20enquire%20about%20your%20screening%20services."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-coral hover:bg-coral-dark text-white py-2.5 rounded-md text-[13px] font-medium transition-colors mt-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-[15px] font-semibold text-white mb-1">Book a Free Consultation</h3>
              <p className="text-[12px] text-gray-400 mb-4">30-minute call to discuss your compound and design the right assay panel.</p>
              <a href="mailto:wormeraresearchlab@gmail.com?subject=Consultation%20Request"
                className="w-full inline-block border border-gray-600 text-gray-300 hover:border-teal hover:text-teal py-2.5 rounded-md text-[13px] font-medium transition-colors">
                Schedule via Email
              </a>
            </div>

            <div className="bg-[#1E293B] rounded-xl p-4 text-center">
              <p className="text-[12px] font-semibold text-teal mb-1">AIC-GISC Foundation Incubatee</p>
              <p className="text-[11px] text-gray-500">Founded by researchers from Nirma University, Ahmedabad.<br />Supported by AIC-GISC Foundation, GTU Campus.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
