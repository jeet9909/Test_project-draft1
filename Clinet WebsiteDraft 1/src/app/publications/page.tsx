"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { publications } from "@/lib/publications-data";
import PublicationCard from "@/components/publications/PublicationCard";
import ScrollReveal from "@/components/common/ScrollReveal";
import { TopicTag } from "@/types";
import { cn } from "@/lib/utils";

const allTopics: { label: string; value: TopicTag | "All" }[] = [
  { label: "All",            value: "All" },
  { label: "Anti-Pathogenic",value: "Anti-Pathogenic" },
  { label: "Anthelmintic",   value: "Anthelmintic" },
  { label: "Aging & Lifespan",value: "Aging & Lifespan" },
  { label: "Stress / Aging", value: "Stress / Aging" },
  { label: "Microbiome",     value: "Microbiome" },
  { label: "Review",         value: "Review" },
  { label: "In Vivo Model",  value: "In Vivo Model" },
];

const allYears = Array.from(new Set(publications.map((p) => p.year))).sort(
  (a, b) => b - a
);

const topicPillClass: Record<string, string> = {
  "All":            "border-[#0A4F5C] bg-[#0A4F5C] text-white",
  "Anti-Pathogenic":"border-teal-600 bg-teal-600 text-white",
  "Anthelmintic":   "border-green-600 bg-green-600 text-white",
  "Aging & Lifespan":"border-amber-500 bg-amber-500 text-white",
  "Stress / Aging": "border-rose-500 bg-rose-500 text-white",
  "Microbiome":     "border-blue-600 bg-blue-600 text-white",
  "Review":         "border-purple-600 bg-purple-600 text-white",
  "In Vivo Model":  "border-orange-500 bg-orange-500 text-white",
};

const topicInactiveClass: Record<string, string> = {
  "All":            "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-[#0A4F5C] hover:text-[#0A4F5C] dark:hover:border-teal-400 dark:hover:text-teal-400",
  "Anti-Pathogenic":"border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-teal-600 hover:text-teal-700 dark:hover:text-teal-300",
  "Anthelmintic":   "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-green-600 hover:text-green-700 dark:hover:text-green-300",
  "Aging & Lifespan":"border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-300",
  "Stress / Aging": "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-300",
  "Microbiome":     "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-300",
  "Review":         "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-purple-600 hover:text-purple-700 dark:hover:text-purple-300",
  "In Vivo Model":  "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-300",
};

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<TopicTag | "All">("All");
  const [selectedYear, setSelectedYear] = useState<number | "All">("All");

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const matchSearch =
        !search ||
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        (pub.journal?.toLowerCase().includes(search.toLowerCase()) ?? false);
      const matchTopic = selectedTopic === "All" || pub.topic === selectedTopic;
      const matchYear  = selectedYear === "All" || pub.year === selectedYear;
      return matchSearch && matchTopic && matchYear;
    });
  }, [search, selectedTopic, selectedYear]);

  const hasFilters = search || selectedTopic !== "All" || selectedYear !== "All";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0A4F5C] dark:bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="tag-pill bg-white/15 text-white mb-4 inline-block">Research</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            Publications
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            14+ peer-reviewed publications spanning antimicrobial discovery, aging biology,
            functional screening, and model organism validation.
          </p>
        </div>
      </section>

      {/* Sticky filters */}
      <section className="sticky top-16 z-30 bg-white dark:bg-[#0F172A] border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 space-y-3">
          {/* Search + Year row */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[220px] max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search title or journal..."
                className="form-input pl-8 pr-8"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Year */}
            <div className="relative">
              <select
                value={selectedYear === "All" ? "All" : String(selectedYear)}
                onChange={(e) =>
                  setSelectedYear(e.target.value === "All" ? "All" : parseInt(e.target.value))
                }
                className="form-select min-w-[130px]"
              >
                <option value="All">All Years</option>
                {allYears.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            {/* Result count + clear */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {filtered.length} / {publications.length} papers
              </span>
              {hasFilters && (
                <button
                  onClick={() => { setSearch(""); setSelectedTopic("All"); setSelectedYear("All"); }}
                  className="text-xs text-[#E86A33] hover:text-[#C55A28] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <X size={12} /> Clear all
                </button>
              )}
            </div>
          </div>

          {/* Topic pill row */}
          <div className="flex flex-wrap gap-2">
            {allTopics.map((t) => {
              const isActive = selectedTopic === t.value;
              return (
                <button
                  key={t.value}
                  onClick={() => setSelectedTopic(t.value)}
                  className={cn(
                    "px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-150 cursor-pointer",
                    isActive
                      ? topicPillClass[t.value] ?? "border-gray-600 bg-gray-600 text-white"
                      : (topicInactiveClass[t.value] ?? "border-gray-300 text-gray-600") + " bg-transparent"
                  )}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-gray-50 dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 dark:text-gray-500 text-lg mb-3">No papers match your filters.</p>
              <button
                onClick={() => { setSearch(""); setSelectedTopic("All"); setSelectedYear("All"); }}
                className="btn-outline text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((pub, i) => (
                <ScrollReveal key={pub.id} delay={Math.min(i * 0.04, 0.25)}>
                  <PublicationCard pub={pub} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Scholar links */}
      <section className="py-14 bg-white dark:bg-[#1E293B] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="font-display font-semibold text-xl text-[#0A4F5C] dark:text-white mb-2">
            View Complete Publication Profiles
          </h3>
          <p className="text-sm text-gray-500 dark:text-[#94A3B8] mb-6">
            Explore all citations and metrics on Google Scholar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://scholar.google.com/citations?user=9gwqNg8AAAAJ" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              Dr. Gemini Gajera — Scholar
            </a>
            <a href="https://scholar.google.com/citations?user=3T0DfMcAAAAJ" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              Ms. Nidhi Thakkar — Scholar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
