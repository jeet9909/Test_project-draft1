import { Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Berberine Attenuates Chromobacterium violaceum's Virulence by Targeting Efflux and Denitrification Machinery",
    doi: "10.1002/cbdv.202503727",
    pmid: "42127231",
    year: 2025,
    topic: "Anti-Pathogenic",
    openAccess: false,
    journal: "Chemistry & Biodiversity",
  },
  {
    id: 2,
    title:
      "Withania somnifera root extract reduces susceptibility of the model worm Caenorhabditis elegans to different types of stressors",
    doi: "10.64898/2025.12.18.695325",
    pmcid: "PMC12767675",
    year: 2025,
    topic: "Stress / Aging",
    openAccess: true,
    journal: "Preprint",
  },
  {
    id: 3,
    title:
      "Withania somnifera root extract (LongeFera™) confers beneficial effects on health and lifespan of the model worm Caenorhabditis elegans",
    doi: "10.33393/dti.2025.3368",
    pmcid: "PMC11969495",
    year: 2025,
    topic: "Aging & Lifespan",
    openAccess: true,
    journal: "Drug Target Insights",
  },
  {
    id: 4,
    title:
      "Emerging Prevalence of Fungal Infections and Challenges in Development of New Antifungals",
    doi: "10.1201/9781032642864",
    year: 2024,
    topic: "Review",
    openAccess: false,
    journal: "CRC Press (Book Chapter)",
  },
  {
    id: 5,
    title:
      "Deciphering the molecular mechanisms underlying anti-pathogenic potential of a polyherbal formulation Enteropan® against multidrug-resistant Pseudomonas aeruginosa",
    doi: "10.33393/dti.2024.3082",
    pmid: "39224464",
    year: 2024,
    topic: "Anti-Pathogenic",
    openAccess: false,
    journal: "Drug Target Insights",
  },
  {
    id: 6,
    title:
      "Identification of anthelmintic activity in a small chemical library through random screening using the worm Caenorhabditis elegans as a model helminth",
    researchGateUrl:
      "https://www.researchgate.net/publication/396252218_Identification_of_Anthelmintic_Activity_in_a_Small_Chemical_Library_through_Random_Screening_Using_the_Worm_Caenorhabditis_elegans_as_a_Model_Helminth",
    year: 2024,
    topic: "Anthelmintic",
    openAccess: false,
    journal: "ResearchGate Preprint",
  },
  {
    id: 7,
    title:
      "Silversol® (a Colloidal Nanosilver Formulation) Inhibits Growth of Antibiotic-Resistant Staphylococcus aureus by Disrupting Its Physiology in Multiple Ways",
    doi: "10.3390/pharmaceutics16060726",
    pmcid: "PMC11206351",
    year: 2024,
    topic: "Anti-Pathogenic",
    openAccess: true,
    journal: "Pharmaceutics",
  },
  {
    id: 8,
    title:
      "Duration of fermentation affects microbiome composition and biological activity of an Indian traditional formulation – Panchagavya",
    doi: "10.1016/j.jaim.2023.100880",
    pmcid: "PMC10940934",
    year: 2023,
    topic: "Microbiome",
    openAccess: true,
    journal: "Journal of Ayurveda and Integrative Medicine",
  },
  {
    id: 9,
    title:
      "Sub-lethal concentration of a colloidal nanosilver formulation (Silversol®) triggers dysregulation of iron homeostasis and nitrogen metabolism in multidrug resistant Pseudomonas aeruginosa",
    doi: "10.1186/s12866-023-03062-x",
    pmcid: "PMC10591374",
    year: 2023,
    topic: "Anti-Pathogenic",
    openAccess: true,
    journal: "BMC Microbiology",
  },
  {
    id: 10,
    title:
      "Identification of anti-pathogenic activity among in silico predicted small-molecule inhibitors of Pseudomonas aeruginosa LasR or nitric oxide reductase (NOR)",
    doi: "10.33393/dti.2023.2638",
    pmid: "37811195",
    year: 2023,
    topic: "Anti-Pathogenic",
    openAccess: false,
    journal: "Drug Target Insights",
  },
  {
    id: 11,
    title:
      "Potent anthelmintic activity of a colloidal nano-silver formulation (Silversol®) against the model worm Caenorhabditis elegans",
    doi: "10.1186/s13104-023-06392-1",
    pmcid: "PMC10318827",
    year: 2023,
    topic: "Anthelmintic",
    openAccess: true,
    journal: "BMC Research Notes",
  },
  {
    id: 12,
    title:
      "Network analysis for identifying potential anti-virulence targets from whole transcriptome of Pseudomonas aeruginosa and Staphylococcus aureus exposed to certain anti-pathogenic polyherbal formulations",
    doi: "10.33393/dti.2022.2595",
    pmid: "37275512",
    year: 2022,
    topic: "Anti-Pathogenic",
    openAccess: false,
    journal: "Drug Target Insights",
  },
  {
    id: 13,
    title: "Antipathogenic Potential of Ferula asafoetida Essential Oil",
    researchGateUrl:
      "https://www.researchgate.net/publication/354563471_ANTIPATHOGENIC_POTENTIAL_OF_FERULA_ASAFOETIDA_ESSENTIAL_OIL",
    year: 2021,
    topic: "Anti-Pathogenic",
    openAccess: false,
    journal: "ResearchGate",
  },
  {
    id: 14,
    title:
      "Sonic Stimulation at Certain Frequencies Can Confer Limited Protection on Nematode Host Infected with Serratia marcescens",
    researchGateUrl:
      "https://www.researchgate.net/publication/354563563_SONIC_STIMULATION_AT_CERTAIN_FREQUENCIES_CAN_CONFER_LIMITED_PROTECTION_ON_NEMATODE_HOST_INFECTED_WITH_Serratia_marcescens",
    year: 2021,
    topic: "In Vivo Model",
    openAccess: false,
    journal: "ResearchGate",
  },
  {
    id: 15,
    title:
      "Anthelmintic activity of Ferula asafoetida against the model worm Caenorhabditis elegans",
    doi: "10.31219/osf.io/ra3zp",
    year: 2021,
    topic: "Anthelmintic",
    openAccess: false,
    journal: "OSF Preprints",
  },
];

export const topicColors: Record<string, string> = {
  "Anti-Pathogenic": "tag-anti-pathogenic",
  "Anthelmintic":    "tag-anthelmintic",
  "Aging & Lifespan":"tag-aging",
  "Microbiome":      "tag-microbiome",
  "Review":          "tag-review",
  "In Vivo Model":   "tag-in-vivo",
  "Stress / Aging":  "tag-stress",
  "Toxicology":      "tag-anti-pathogenic",
};
