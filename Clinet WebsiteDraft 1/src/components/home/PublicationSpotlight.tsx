import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { publications, topicColors } from "@/lib/publications-data";
import SectionHeader from "@/components/common/SectionHeader";
import ScrollReveal from "@/components/common/ScrollReveal";

const featured = publications.slice(0, 3);

export default function PublicationSpotlight() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="section-padding">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Latest Research"
            title="Recent Publications"
            subtitle="Peer-reviewed work from WormEra's research team."
            className="mb-0"
          />
          <Link
            href="/publications"
            className="shrink-0 flex items-center gap-1 text-sm font-semibold text-primary dark:text-blue-400 hover:underline"
          >
            View All 15 <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((pub, i) => (
            <ScrollReveal key={pub.id} delay={i * 0.1}>
              <div className="card-base p-6 flex flex-col h-full hover:-translate-y-1 cursor-default">
                {/* Topic badge */}
                <span className={`tag-pill ${topicColors[pub.topic]} mb-4 self-start`}>
                  {pub.topic}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-base text-neutral dark:text-white leading-snug mb-3 flex-1">
                  {pub.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-dark-muted mb-3">
                  <span>{pub.journal}</span>
                  <span>·</span>
                  <span>{pub.year}</span>
                  {pub.openAccess && (
                    <>
                      <span>·</span>
                      <span className="text-accent font-semibold">Open Access</span>
                    </>
                  )}
                </div>

                {/* DOI */}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doi-text hover:underline flex items-center gap-1 text-xs"
                  >
                    DOI: {pub.doi}
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
