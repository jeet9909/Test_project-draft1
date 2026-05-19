"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 14, suffix: "+", label: "Peer-Reviewed Publications" },
  { end: 5,  suffix: "+", label: "Years of C. elegans Expertise" },
  { end: 3,  suffix: "",  label: "Service Pillars" },
  { end: 8,  suffix: "",  label: "Industries Served" },
];

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-[#0A4F5C] dark:bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
                {inView ? (
                  <CountUp end={stat.end} duration={2} delay={i * 0.15} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
