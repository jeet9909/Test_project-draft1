import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import MultiStepForm from "@/components/contact/MultiStepForm";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — WormEra Research Lab",
  description:
    "Get in touch with WormEra Research Lab for a free consultation, RFP submission, or WhatsApp enquiry. Based in Ahmedabad, serving clients globally.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91-9925993634",
    href: "tel:+919925993634",
  },
  {
    icon: Mail,
    label: "Email",
    value: "wormeraresearchlab@gmail.com",
    href: "mailto:wormeraresearchlab@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "AIC-GISC Foundation, Block No. 5, Bh. GTU Main Building, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat-382424",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 9:00 AM – 6:00 PM IST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0A4F5C] dark:bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="tag-pill bg-white/15 text-white mb-4 inline-block">Contact</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="card-base p-8">
                  <MultiStepForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact Details */}
              <ScrollReveal delay={0.1}>
                <div className="card-base p-6">
                  <h3 className="font-display font-semibold text-lg text-[#0A4F5C] dark:text-white mb-5">
                    Contact Details
                  </h3>
                  <ul className="space-y-4">
                    {contactDetails.map((c) => (
                      <li key={c.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#0A4F5C]/10 dark:bg-[#0A4F5C]/30 flex items-center justify-center shrink-0">
                          <c.icon size={15} className="text-[#0A4F5C] dark:text-teal-400" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                            {c.label}
                          </p>
                          {c.href ? (
                            <a
                              href={c.href}
                              className="text-sm text-gray-800 dark:text-[#E2E8F0] hover:text-[#0A4F5C] dark:hover:text-white transition-colors"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <p className="text-sm text-gray-700 dark:text-[#E2E8F0] leading-relaxed">
                              {c.value}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/919925993634?text=Hi%20WormEra%2C%20I%27d%20like%20to%20enquire%20about%20your%20screening%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center mt-6 text-sm"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </ScrollReveal>

              {/* Booking */}
              <ScrollReveal delay={0.2}>
                <div className="card-base p-6 text-center">
                  <Calendar size={28} className="text-[#E86A33] mx-auto mb-3" />
                  <h4 className="font-display font-semibold text-base text-[#0A4F5C] dark:text-white mb-2">
                    Book a Free Consultation
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-[#94A3B8] mb-4">
                    30-minute call to discuss your compound and design the right assay panel.
                  </p>
                  <a
                    href="mailto:wormeraresearchlab@gmail.com?subject=Consultation Booking Request&body=Hi WormEra, I'd like to book a free 30-minute consultation."
                    className="btn-outline w-full justify-center text-sm"
                  >
                    Schedule via Email
                  </a>
                </div>
              </ScrollReveal>

              {/* AIC-GISC badge */}
              <ScrollReveal delay={0.3}>
                <div className="card-base p-5 bg-[#0A4F5C]/5 dark:bg-[#0A4F5C]/15 border-[#0A4F5C]/20">
                  <p className="text-xs text-gray-600 dark:text-[#94A3B8] leading-relaxed text-center">
                    <span className="font-semibold text-[#0A4F5C] dark:text-teal-300 block mb-1">
                      AIC-GISC Foundation Incubatee
                    </span>
                    Founded by researchers from Nirma University, Ahmedabad.<br />
                    Supported by AIC-GISC Foundation, GTU Campus.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
