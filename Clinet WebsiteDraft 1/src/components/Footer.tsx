import AnimateIn from '@/components/ui/AnimateIn'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
      <div className="section-pad py-16 md:py-20">
        <AnimateIn>
          <div className="flex flex-col items-center text-center gap-6">

            {/* Tagline */}
            <p className="font-serif text-[20px] md:text-[22px] text-slate dark:text-gray-100 font-semibold leading-snug max-w-md">
              Reach out for a free consultation. We&apos;ll design the right assay for your compound.
            </p>

            {/* Email */}
            <a
              href="mailto:wormeraresearchlab@gmail.com"
              className="text-[15px] font-semibold text-coral hover:text-coral-dark transition-colors"
            >
              wormeraresearchlab@gmail.com
            </a>

            {/* Divider */}
            <div className="w-16 h-px bg-gray-200 dark:bg-gray-700" />

            {/* Founded by */}
            <p className="text-[11px] font-bold text-teal dark:text-[#9FE1CB] uppercase tracking-widest">
              Founded by researchers from Nirma University, Ahmedabad
            </p>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/919925993634"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 hover:text-[#1aa755] dark:hover:text-[#25D366] transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a
                href="https://www.linkedin.com/in/wormera-research-lab-752521407"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 hover:text-teal dark:hover:text-[#9FE1CB] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a
                href="https://www.instagram.com/_wormera?igsh=dTdpams1M3ZmazFo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 hover:text-coral dark:hover:text-coral transition-colors"
              >
                Instagram
              </a>
            </div>

          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}
