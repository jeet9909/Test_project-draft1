import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import WormBackground from "@/components/WormBackground";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-cta relative overflow-hidden">
      <WormBackground config={{ count: 16, alpha: 0.09, speedMultiplier: 1.0 }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6">
          Get Started
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
          Ready to start your study?
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Reach out for a free consultation. We&apos;ll design the right assay for
          your compound &mdash; from feasibility to full bioassay panel.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Get in Touch
            <ArrowRight size={18} />
          </Link>
          <a
            href="mailto:wormeraresearchlab@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-white/40 text-white hover:bg-white/10 font-semibold transition-all cursor-pointer"
          >
            <Mail size={18} />
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
