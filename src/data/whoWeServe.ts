import { Testimonial } from "@/types";

export const whoWeServeIntro = {
  title: "Who We Serve",
  description:
    "We serve vulnerable populations living with non-communicable diseases — primarily Hypertension, Diabetes, and Cancer — who are often excluded from consistent care. Through collective action, we ensure that no patient is left behind, treatment becomes affordable, and communities become part of the solution.",
};

export const targetCommunities = [
  {
    title: "Urban Poor",
    description: "Low-income families in urban areas who struggle to afford consistent medication and healthcare services for chronic conditions.",
    icon: "location_city",
  },
  {
    title: "Rural Poor",
    description: "Families in remote areas who travel long distances and face high costs to access basic healthcare services and essential medicines.",
    icon: "terrain",
  },
  {
    title: "Women & Mothers",
    description: "Women and mothers who bear disproportionate healthcare burdens and often sacrifice their own treatment for their families.",
    icon: "face",
  },
  {
    title: "Orphans & Vulnerable Children",
    description: "Children without parental care who need consistent access to healthcare, nutrition, and support systems.",
    icon: "child_care",
  },
  {
    title: "Refugees & Displaced Persons",
    description: "Displaced individuals and refugee communities with limited access to healthcare facilities and essential medicines.",
    icon: "flight_land",
  },
  {
    title: "The Elderly",
    description: "Older persons who are disproportionately affected by NCDs like Hypertension, Diabetes, and Cancer, often with limited financial means for sustained treatment.",
    icon: "elderly",
  },
  {
    title: "NCD Patients",
    description: "Individuals managing non-communicable diseases — particularly Hypertension, Diabetes, and Cancer — who need consistent, affordable medication.",
    icon: "monitor_heart",
  },
];

export const collectiveActionPromise = {
  title: "Through Collective Action, We Ensure That:",
  points: [
    { text: "No patient is left behind", icon: "group" },
    { text: "Treatment becomes affordable through pooled resources", icon: "payments" },
    { text: "Communities become active participants in the solution", icon: "diversity_3" },
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Before the patient group, I had to choose between buying food for my children and buying my medication. Now, through collective purchasing, I can afford both.",
    name: "Sarah M.",
    community: "Masaka District",
  },
  {
    quote:
      "The sensitization meetings changed how our village thinks about health. We now understand that prevention is just as important as treatment.",
    name: "John K.",
    community: "Wakiso District",
  },
  {
    quote:
      "Being part of the association gave me hope. I'm no longer alone in managing my condition — we support each other.",
    name: "Grace N.",
    community: "Mukono District",
  },
];
