import { Program } from "@/types";

export const programsIntro = {
  title: "Our Programs",
  description:
    "Buona Salute runs focused programs designed to make healthcare affordable and accessible for people living with non-communicable diseases — primarily Hypertension, Diabetes, and Cancer — through community-driven collective action.",
};

export const flagshipProgram: Program = {
  title: "Access to Medicine Through Collective Action",
  description:
    "Our flagship program brings together community members living with non-communicable diseases (NCDs) into patient associations that pool resources to purchase medicines in bulk at significantly reduced prices. This model ensures that even the most vulnerable families — including the elderly — can access life-saving treatments.",
  icon: "local_pharmacy",
  details: [
    "Community mobilization and patient group formation",
    "Health education on Hypertension, Diabetes, Cancer, and NCD management",
    "Linkage to government health centres for diagnosis and prescriptions",
    "Resource pooling among association members",
    "Bulk procurement of essential medicines at reduced cost",
    "Community-based distribution of medicines",
    "Ongoing monitoring, follow-up, and treatment adherence support",
  ],
};

export const howItWorks = [
  {
    step: 1,
    title: "Organize Patients",
    description: "Patients within the same administrative units or served by the same government health centres are organized into community-based associations.",
    icon: "group_add",
  },
  {
    step: 2,
    title: "Sensitize & Educate",
    description: "Members receive continuous health education on disease management, prevention, and the importance of treatment adherence.",
    icon: "school",
  },
  {
    step: 3,
    title: "Link to Health Centres",
    description: "Patients are connected to government health centres for proper diagnosis, prescriptions, and clinical oversight.",
    icon: "local_hospital",
  },
  {
    step: 4,
    title: "Pool Resources",
    description: "Members contribute small, manageable amounts into a shared fund. Even minimal contributions are supplemented for the most vulnerable.",
    icon: "savings",
  },
  {
    step: 5,
    title: "Purchase in Bulk",
    description: "Pooled funds are used to procure prescribed medicines collectively in bulk, achieving significant cost reductions.",
    icon: "shopping_cart",
  },
  {
    step: 6,
    title: "Distribute & Follow Up",
    description: "Medicines are distributed within the group, and continuous follow-up ensures adherence and tracks outcomes.",
    icon: "local_shipping",
  },
];

export const keyResults = [
  { label: "Lower Cost", description: "Bulk purchasing reduces the cost of medication, making treatment affordable for low-income patients.", icon: "payments" },
  { label: "Better Adherence", description: "Community support systems and follow-up improve treatment adherence and health outcomes.", icon: "monitor_heart" },
  { label: "Fewer Complications", description: "Consistent access to medicine reduces preventable complications and emergency cases.", icon: "health_and_safety" },
  { label: "Stronger Communities", description: "Patient associations build lasting peer support networks that extend beyond healthcare.", icon: "groups" },
];

export const kayonzaProject = {
  title: "Kayonza Pilot Project",
  subtitle: "A Proven Model in Action — Kayonza Sub-county, Ntungamo District, Uganda",
  summary:
    "Buona Salute Global Initiatives has successfully implemented a pilot intervention in Kayonza Sub-county, Ntungamo District, demonstrating a practical and scalable solution to improve access to treatment for Diabetes Mellitus and Hypertension. The pilot is built on BSGI's core model: Access to Medicine Through Collective Action.",
  coverage: {
    parishes: ["Kijubwe Parish", "Ruhega Parish", "Kabasheshe Parish"],
    patients: 164,
    association: "Kayonza Diabetic and Pressure Association",
    healthCenter: "Rwamanjonnyi Health Center III",
  },
  context:
    "At Health Center III and IV levels in rural Uganda, there is limited and inconsistent supply of medicines for diabetes and hypertension. Facilities experience frequent stock-outs of essential medicines like Metformin, Glibenclamide, Amlodipine, and Losartan — resulting in treatment interruptions, increased out-of-pocket expenditure, and preventable complications.",
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
  keyResults: [
    "Improved access to essential medicines for 164 patients",
    "Reduced treatment interruptions despite public sector supply gaps",
    "Increased adherence to prescribed treatment",
    "Functional patient association covering three parishes",
    "Strengthened collaboration with government health facilities",
    "Deployment and effective use of diagnostic equipment",
    "Inclusion of vulnerable patients through targeted financial support",
  ],
  lessons: [
    { point: "Collective action is an effective mechanism for improving access to medicines", icon: "check_circle" },
    { point: "Patient-led associations enhance ownership, accountability, and sustainability", icon: "check_circle" },
    { point: "Small contributions can improve access but require subsidies for equity", icon: "check_circle" },
    { point: "Partnerships with government facilities are essential for quality assurance", icon: "check_circle" },
    { point: "Addressing the gap between prescription and supply is critical", icon: "check_circle" },
    { point: "Basic diagnostic investments yield high-impact results", icon: "check_circle" },
  ],
  scaleUp: {
    title: "Scale-Up Potential",
    description: "The pilot provides a tested, low-cost, and scalable model aligned with Universal Health Coverage, NCD prevention strategies, and health equity goals.",
    steps: [
      "Establishing patient associations at sub-county level",
      "Linking them to Health Center III and IV facilities",
      "Scaling pooled procurement systems",
      "Strengthening partnerships with government health services",
    ],
  },
};

export const futurePrograms: Program[] = [
  {
    title: "Maternal & Child Health",
    description:
      "Expanding access to prenatal care, safe delivery, and child nutrition programs in underserved areas.",
    icon: "child_care",
    details: [],
  },
  {
    title: "Mental Health Awareness",
    description:
      "Addressing the stigma around mental health and integrating mental wellness into community healthcare.",
    icon: "psychology",
    details: [],
  },
];

export const programsCta = {
  title: "Support Our Programs",
  description:
    "Help us expand the collective action model to more communities across Uganda. Your support enables patient associations to form, grow, and sustain affordable healthcare access.",
  buttonLabel: "Get Involved",
  buttonHref: "/get-involved",
};
