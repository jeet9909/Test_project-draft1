"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import WormBackground from "@/components/WormBackground";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1614308457447-0e0e97c5fd35?w=1920&q=80')",
          }}
        />
        {/* Strong teal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A4F5C]/95 via-[#0A4F5C]/80 to-[#0A4F5C]/40" />
        <div className="absolute inset-0 bg-[#0A4F5C]/20" />
        <WormBackground count={20} alpha={0.08} speed={0.9} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/90 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E86A33] animate-pulse" />
              C. elegans Model Platform
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl md:text-6xl lg:text-[68px] text-white leading-[1.08] mb-4"
          >
            Whole-organism research platform
          </motion.h1>

          {/* H2 */}
          <motion.h2
            variants={itemVariants}
            className="font-sans font-medium text-lg md:text-xl text-white/85 mb-6 leading-relaxed"
          >
            Pioneering Rapid In Vivo Screening through <em>C. elegans</em> Model.
          </motion.h2>

          {/* Body — exact PDF wording */}
          <motion.p
            variants={itemVariants}
            className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
          >
            WormEra Research Lab is a specialized research and service laboratory
            focused on <em>Caenorhabditis elegans</em>–based in vivo screening for
            nutraceutical, pharmaceutical, antimicrobial and functional ingredient
            evaluation. With a strong emphasis on scientific accuracy, innovation
            and translational research, the laboratory provides reliable preclinical
            screening solutions for academia and industry.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Request a Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white/60 text-white font-semibold hover:bg-white hover:text-[#0A4F5C] transition-all duration-200 text-base"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 mt-12 text-white/55 text-sm"
          >
            {["14+ Publications", "5+ Years Expertise", "No Ethics Clearance Needed"].map(
              (badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#E86A33]" />
                  {badge}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-1"
        animate={prefersReduced ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
