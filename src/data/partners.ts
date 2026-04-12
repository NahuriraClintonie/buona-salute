import { Partner } from "@/types";

export const partnersIntro = {
  title: "Our Partners",
  description:
    "We work with partners who believe in access to medicine through collective action. Together, we are building a healthier future for Uganda's most vulnerable communities.",
};

export const partners: Partner[] = [
  { name: "Ministry of Health, Uganda" },
  { name: "Uganda National Health Consumers Organisation" },
  { name: "World Health Organization" },
  { name: "UNICEF Uganda" },
  { name: "Local Government Health Departments" },
  { name: "Community Health Worker Networks" },
  { name: "International Medical Corps" },
  { name: "Global Fund Partners" },
];

export const partnershipBenefits = [
  {
    title: "Direct Community Impact",
    description: "Your partnership directly supports patient associations, enabling communities to access affordable medicines through collective purchasing.",
    icon: "favorite",
  },
  {
    title: "Transparent Reporting",
    description: "We provide detailed impact reports showing exactly how resources are used — from medication costs reduced to patients reached.",
    icon: "assessment",
  },
  {
    title: "Scalable Model",
    description: "Our proven collective action model can be replicated across regions, making your investment scalable and high-impact.",
    icon: "trending_up",
  },
  {
    title: "Government Alignment",
    description: "Our programs work within Uganda's public health system, ensuring alignment with national health priorities and sustainable results.",
    icon: "account_balance",
  },
];

export const partnershipTypes = [
  {
    title: "Funding Partner",
    description: "Provide financial support to expand patient associations, subsidize medication costs, and strengthen diagnostic capacity at health centers.",
    icon: "payments",
    examples: ["Sponsor a patient association", "Fund bulk medication procurement", "Support diagnostic equipment"],
  },
  {
    title: "Technical Partner",
    description: "Contribute expertise in healthcare delivery, supply chain management, data systems, or community health worker training.",
    icon: "engineering",
    examples: ["Health systems strengthening", "Supply chain optimization", "Training program design"],
  },
  {
    title: "Government & Institutional Partner",
    description: "Collaborate at policy level to integrate our collective action model into district and national health strategies.",
    icon: "apartment",
    examples: ["Policy integration support", "Health facility collaboration", "District-level scaling"],
  },
  {
    title: "Corporate & CSR Partner",
    description: "Align your corporate social responsibility goals with measurable health impact in underserved communities.",
    icon: "business",
    examples: ["Employee volunteer programs", "Cause marketing campaigns", "In-kind donations"],
  },
];

export const partnersCta = {
  title: "Become a Partner",
  description:
    "Join us in making access to medicine a reality for Uganda's poor and vulnerable communities — through collective action.",
  buttonLabel: "Start a Conversation",
  buttonHref: "/contact",
};
