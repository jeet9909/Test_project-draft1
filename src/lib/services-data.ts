import { ServicePillar } from "@/types";

export const servicePillars: ServicePillar[] = [
  {
    id: "toxicity",
    title: "Toxicity & Safety Profiling",
    overview:
      "Comprehensive toxicological assessment using C. elegans as a validated pre-clinical model. Ideal for compounds requiring rapid, cost-effective safety data before mammalian studies.",
    icon: "ShieldCheck",
    color: "from-primary/10 to-primary/5",
    subServices: [
      {
        name: "Acute Toxicity (LC₅₀)",
        methodology:
          "Dose-response survival assay on N2 wild-type worms. 5–7 concentrations, 24/48h exposure, triplicate wells.",
        deliverables:
          "LC₅₀ value, dose-response curve (GraphPad Prism), statistical report (ANOVA + Tukey)",
        timeline: "5–7 working days",
      },
      {
        name: "Sub-chronic Toxicity",
        methodology:
          "Repeated 72h exposure, growth, reproduction and lifespan endpoints",
        deliverables:
          "Survival %, brood size, body length measurements, full data tables",
        timeline: "10–14 working days",
      },
      {
        name: "Live-Dead Staining",
        methodology:
          "SYTOX Green or propidium iodide fluorescent viability assay",
        deliverables:
          "Fluorescence microscopy images, % live/dead quantification",
        timeline: "3–5 working days",
      },
      {
        name: "Anthelmintic Activity Screening",
        methodology:
          "Paralysis, motility (thrashing assay), egg-hatching inhibition at multiple concentrations",
        deliverables:
          "EC₅₀, motility index, microscopy images, comparison to reference anthelmintic (levamisole)",
        timeline: "5–7 working days",
      },
    ],
  },
  {
    id: "efficacy",
    title: "Efficacy & Functional Bioassays",
    overview:
      "Phenotypic functional screening for health-promoting, neuroprotective, metabolic, and stress-resilience claims. Scientifically validated endpoints suitable for AYUSH, nutraceutical, and cosmetic ingredient dossiers.",
    icon: "FlaskConical",
    color: "from-accent/10 to-accent/5",
    subServices: [
      {
        name: "Anti-Aging / Lifespan",
        methodology:
          "Lifespan assay on N2 worms, daily survival scoring, oxidative stress (juglone/paraquat)",
        deliverables:
          "Kaplan-Meier survival curves, mean/max lifespan, statistical significance",
        timeline: "20–25 working days",
      },
      {
        name: "Probiotic Efficacy",
        methodology:
          "C. elegans colonization model, pathogen challenge (S. aureus / P. aeruginosa), survival scoring",
        deliverables:
          "Survival curves vs. control, protective index, microscopy",
        timeline: "10–14 working days",
      },
      {
        name: "Neuroprotection",
        methodology:
          "Polyglutamine (AM141) or α-synuclein (NL5901) transgenic strain assays, motility scoring",
        deliverables:
          "Aggregate quantification, motility vs. control, fluorescence images",
        timeline: "10–14 working days",
      },
      {
        name: "Metabolic Screening",
        methodology:
          "Oil Red O fat staining, body size measurement on daf-2 or wild-type background",
        deliverables:
          "Fat content %, microscopy images, body length data",
        timeline: "7–10 working days",
      },
      {
        name: "Stress Resistance",
        methodology:
          "Heat (35°C), oxidative (H₂O₂/juglone), osmotic (NaCl) survival assays",
        deliverables:
          "Survival % at multiple stressor levels, dose-response",
        timeline: "7–10 working days",
      },
    ],
  },
  {
    id: "antimicrobial",
    title: "Microbiological & Anti-Infective Assays",
    overview:
      "In vivo anti-pathogenic screening using C. elegans infection models — the gold-standard invertebrate host system for evaluating anti-infective compounds without mammalian ethics clearance.",
    icon: "Microscope",
    color: "from-secondary/10 to-secondary/5",
    subServices: [
      {
        name: "In Vivo Anti-Pathogenic",
        methodology:
          "Liquid killing or slow killing model (S. aureus, P. aeruginosa, C. albicans), compound at sub-MIC doses",
        deliverables:
          "Survival curves, log-rank p-value, microscopy, protective index",
        timeline: "10–14 working days",
      },
      {
        name: "Prophylactic Activity",
        methodology:
          "Pre-treatment protocol, pathogen challenge, 5-day survival tracking",
        deliverables:
          "Comparative survival curves, protection % vs. infected control",
        timeline: "10–14 working days",
      },
      {
        name: "Anti-Virulence Screening",
        methodology:
          "Violacein inhibition (C. violaceum), biofilm, swarming, pyocyanin assays + worm survival",
        deliverables:
          "Virulence factor inhibition %, survival data, mechanistic summary",
        timeline: "10–14 working days",
      },
      {
        name: "AMR / Anti-Biofilm",
        methodology:
          "MDR strain challenge (MRSA, MDR-PA), compound efficacy in biofilm eradication",
        deliverables:
          "MBIC/MBEC values, SEM images (if applicable), survival data",
        timeline: "12–15 working days",
      },
    ],
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    description:
      "Single assay, standard strain, basic statistical report. For feasibility studies and academic collaborators.",
    highlight: false,
  },
  {
    name: "Professional",
    description:
      "Panel of 3–5 assays, multiple concentrations, full statistical analysis, annotated microscopy images, discussion section.",
    highlight: true,
  },
  {
    name: "Enterprise",
    description:
      "Custom multi-assay battery, proprietary strain (if applicable), priority turnaround, co-authorship discussion for publications.",
    highlight: false,
  },
];
