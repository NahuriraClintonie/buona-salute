import { ImpactMetric } from "@/types";

export const impactIntro = {
  title: "Our Impact",
  description:
    "Every number tells a story of a life changed. Our collective action model is delivering measurable results across Uganda.",
};

export const impactMetrics: ImpactMetric[] = [
  { label: "Patients Reached", value: "5,000+", icon: "people" },
  { label: "Patient Associations", value: "24", icon: "diversity_3" },
  { label: "Health Center Partnerships", value: "12", icon: "local_hospital" },
  { label: "Communities Served", value: "40+", icon: "location_on" },
  { label: "Outreach Activities", value: "150+", icon: "campaign" },
  { label: "Medications Distributed", value: "25,000+", icon: "medication" },
];

export const kayonzaPilot = {
  title: "Kayonza Pilot Project",
  subtitle: "A Proven Model in Action",
  summary:
    "In Kayonza Sub-county, Ntungamo District, Buona Salute has implemented a pilot intervention demonstrating a practical and scalable solution to improve access to treatment for Diabetes Mellitus and Hypertension.",
  coverage: {
    parishes: ["Kijubwe Parish", "Ruhega Parish", "Kabasheshe Parish"],
    patients: 164,
    association: "Kayonza Diabetic and Pressure Association",
    healthCenter: "Rwamanjonnyi Health Center III",
  },
  keyResults: [
    "Improved access to essential medicines for 164 patients",
    "Reduced treatment interruptions despite public sector supply gaps",
    "Increased adherence to prescribed treatment",
    "Functional patient association covering three parishes",
    "Strengthened collaboration with government health facilities",
    "Deployment and effective use of diagnostic equipment",
    "Inclusion of vulnerable patients through targeted financial support",
  ],
  model: {
    title: "How It Works in Kayonza",
    steps: [
      {
        title: "Patient Organization",
        description: "Patients are mobilized into structured associations aligned to administrative units and linked to a shared government health facility.",
        icon: "group_add",
      },
      {
        title: "Pooled Financing",
        description: "Each member contributes UGX 5,000 (~$1.5) per month. Funds are pooled to procure medicines in bulk, reducing costs and improving availability.",
        icon: "savings",
      },
      {
        title: "Equity Mechanism",
        description: "BSGI provides financial top-ups and subsidizes contributions for those unable to pay, ensuring no patient is left behind.",
        icon: "balance",
      },
      {
        title: "Health System Collaboration",
        description: "Close collaboration with Rwamanjonnyi Health Center III enables clinical diagnosis, prescription, patient monitoring, and follow-up.",
        icon: "local_hospital",
      },
    ],
  },
  lessons: [
    { point: "Collective action is an effective mechanism for improving access to medicines", icon: "check_circle" },
    { point: "Patient-led associations enhance ownership, accountability, and sustainability", icon: "check_circle" },
    { point: "Small contributions can improve access but require subsidies for equity", icon: "check_circle" },
    { point: "Partnerships with government facilities are essential for quality assurance", icon: "check_circle" },
    { point: "Basic diagnostic investments yield high-impact results", icon: "check_circle" },
  ],
};

export const impactCta = {
  title: "Support Proven Impact",
  description:
    "The Kayonza pilot demonstrates that community-driven collective action can bridge critical gaps in care. Help us scale this model to reach more communities.",
  buttonLabel: "Get Involved",
  buttonHref: "/get-involved",
};
