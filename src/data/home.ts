import { HeroData, FocusArea, ImpactMetric } from "@/types";

export const heroData: HeroData = {
  headline: "Restoring Hope For Uganda's Poor Living With Non Communicable Disease Acess Medicine Through Collective Action",
  tagline: "Access to Medicine Through Collective Action",
  subheading:
    "Buona Salute Global Initiatives supports the urban and rural poor — including women, orphans, refugees, the elderly, and vulnerable families — through community-based patient associations and innovative models for affordable medication.",
  ctaPrimary: {
    label: "Join a Patient Group",
    href: "https://forms.google.com",
  },
  ctaSecondary: {
    label: "Partner With Us",
    href: "/contact",
  },
};

export const whatMakesUsDifferent = {
  title: "Access to Medicine Through Collective Action",
  description:
    "At Buona Salute, we organize patients living with non-communicable diseases — primarily Hypertension, Diabetes, and Cancer — into community-based associations within the same administrative units or those served by the same government health centres. Through this approach, we create a sustainable solution to the cost barrier of treatment.",
  points: [
    "Mobilize and sensitize patients within their communities",
    "Link patients to government health centres for diagnosis and prescriptions",
    "Build peer support systems within communities",
    "Enable patients to pool resources for collective purchasing",
    "Facilitate bulk purchase of prescribed medicines at reduced costs",
  ],
};

export const briefAbout = {
  title: "About Buona Salute",
  description:
    "Buona Salute Global Initiatives is a health-focused NGO dedicated to improving access to care for people affected by non-communicable diseases — including Hypertension, Diabetes, and Cancer — in Uganda. We focus on the urban and rural poor who cannot afford long-term treatment and medication — especially women, orphans, refugees, the elderly, and low-income households.",
};

export const focusAreas: FocusArea[] = [
  {
    title: "Patient Associations",
    description:
      "We form community-based patient associations that operate within the same communities, linked to specific government health centres.",
    icon: "diversity_3",
  },
  {
    title: "Medication Access",
    description:
      "Through pooled resources and bulk purchasing, we make essential medicines for Hypertension, Diabetes, and Cancer affordable and consistently available.",
    icon: "medication",
  },
  {
    title: "Health Education",
    description:
      "Sensitizing communities on NCD prevention, treatment adherence, and healthy living for lasting wellbeing.",
    icon: "school",
  },
  {
    title: "Health System Partnerships",
    description:
      "Collaborating with government health centres and partners to ensure quality diagnosis, prescriptions, and clinical oversight.",
    icon: "handshake",
  },
];

export const impactHighlights: ImpactMetric[] = [
  { label: "Patients Reached", value: "5,000+", icon: "people" },
  { label: "Associations Formed", value: "24", icon: "diversity_3" },
  { label: "Health Centers Partnered", value: "12", icon: "local_hospital" },
  { label: "Communities Served", value: "40+", icon: "location_on" },
];

export const kayonzaHighlight = {
  title: "Kayonza Pilot Project",
  subtitle: "A Proven Model in Action — Ntungamo District, Uganda",
  description:
    "In Kayonza Sub-county, Ntungamo District, Buona Salute has implemented a pilot intervention demonstrating a practical and scalable solution to improve access to treatment for Diabetes Mellitus and Hypertension. The pilot has mobilized 164 patients under the Kayonza Diabetic and Pressure Association, served by Rwamanjonnyi Health Center III across three parishes.",
  stats: [
    { label: "Patients Mobilized", value: "164", icon: "people" },
    { label: "Parishes Covered", value: "3", icon: "location_on" },
    { label: "Monthly Contribution", value: "UGX 5,000", icon: "savings" },
    { label: "Health Center", value: "1", icon: "local_hospital" },
  ],
  buttonLabel: "Learn More About This Project",
  buttonHref: "/programs#kayonza-pilot",
};

export const trustSignals = [
  {
    title: "Financial Transparency",
    description: "We publish annual reports and financial statements, ensuring every resource is accounted for and directed toward impact.",
    icon: "account_balance",
  },
  {
    title: "Community Governance",
    description: "Our patient groups are self-governed with elected leaders, ensuring decisions are made by and for the communities we serve.",
    icon: "how_to_vote",
  },
  {
    title: "Measurable Impact",
    description: "We track clear metrics — from medication costs saved to patients reached — so partners see real, verifiable results.",
    icon: "insights",
  },
  {
    title: "Registered & Compliant",
    description: "Buona Salute is a fully registered NGO operating in compliance with Ugandan law and international best practices.",
    icon: "verified",
  },
  {
    title: "Government Integration",
    description: "We work within Uganda's public health system, ensuring our programs align with national health priorities.",
    icon: "apartment",
  },
  {
    title: "Sustainable Model",
    description: "Our collective action model is designed to be community-sustained, reducing dependence on external funding over time.",
    icon: "eco",
  },
];

export const ctaSection = {
  title: "Together, We Can Change Lives",
  description:
    "Join us in making healthcare accessible for every community. Whether you're a partner, donor, volunteer, or community member — your action matters.",
  buttonLabel: "Get Involved",
  buttonHref: "/get-involved",
};
