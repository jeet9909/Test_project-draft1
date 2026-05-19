import { ExternalLink } from "lucide-react";
import { Publication } from "@/types";
import { topicColors } from "@/lib/publications-data";

interface Props {
  pub: Publication;
}

export default function PublicationCard({ pub }: Props) {
  const primaryLink = pub.doi
    ? `https://doi.org/${pub.doi}`
    : pub.researchGateUrl;

  const pubmedLink = pub.pmid
    ? `https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`
    : null;

  return (
    <div className="card-base p-6 flex flex-col h-full hover:-translate-y-0.5 transition-transform cursor-default">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`tag-pill ${topicColors[pub.topic]} shrink-0`}>
          {pub.topic}
        </span>
        <div className="flex gap-2 shrink-0">
          {pub.openAccess && (
            <span className="tag-pill bg-accent/20 text-amber-800 dark:bg-accent/30 dark:text-amber-300">
              Open Access
            </span>
          )}
          {!pub.doi && pub.researchGateUrl && (
            <span className="tag-pill bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              Preprint
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-sm md:text-base text-neutral dark:text-white leading-snug mb-2 flex-1">
        {pub.title}
      </h3>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400 dark:text-dark-muted mb-3">
        {pub.journal && <span>{pub.journal}</span>}
        <span className="text-gray-300 dark:text-gray-600">·</span>
        <span className="font-semibold">{pub.year}</span>
        {pub.pmcid && (
          <>
            <span className="text-gray-300 dark:text-gray-600">·</span>
            <span className="text-sage font-medium">PubMed Central</span>
          </>
        )}
      </div>

      {/* DOI */}
      {pub.doi && (
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="doi-text hover:underline flex items-center gap-1 mb-3 text-xs"
        >
          doi: {pub.doi}
          <ExternalLink size={10} />
        </a>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
        {primaryLink && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-primary dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            {pub.doi ? "View Paper" : "ResearchGate"} <ExternalLink size={10} />
          </a>
        )}
        {pubmedLink && (
          <a
            href={pubmedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-primary dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            PubMed <ExternalLink size={10} />
          </a>
        )}
      </div>
    </div>
  );
}
