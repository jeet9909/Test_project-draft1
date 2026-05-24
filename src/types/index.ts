export interface Publication {
  id: number;
  title: string;
  doi?: string;
  pmid?: string;
  pmcid?: string;
  journal?: string;
  year: number;
  topic: TopicTag;
  openAccess: boolean;
  authors?: string[];
  abstract?: string;
  researchGateUrl?: string;
}

export type TopicTag =
  | "Anti-Pathogenic"
  | "Anthelmintic"
  | "Aging & Lifespan"
  | "Microbiome"
  | "Toxicology"
  | "Review"
  | "In Vivo Model"
  | "Stress / Aging";

export interface ServiceSubItem {
  name: string;
  methodology: string;
  deliverables: string;
  timeline: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  overview: string;
  icon: string;
  color: string;
  subServices: ServiceSubItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  expertise: string;
  scholarId: string;
  scholarUrl: string;
}

export interface ProcessStep {
  step: number;
  name: string;
  icon: string;
  description: string;
  duration: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
