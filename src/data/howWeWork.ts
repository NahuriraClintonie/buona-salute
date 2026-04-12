import type { WorkStep, ApproachPoint } from "../types";

export const howWeWorkIntro = {
  title: "How We Work",
  description:
    "Our model follows a proven, step-by-step approach that transforms fragmented healthcare access into a coordinated community effort.",
};

export const workSteps: WorkStep[] = [
  {
    step: 1,
    title: "Community Identification",
    description: "We identify vulnerable communities with limited access to essential medicines.",
    icon: "location_searching",
  },
  {
    step: 2,
    title: "Association Formation",
    description: "We help community members form patient associations and elect leaders.",
    icon: "group_add",
  },
  {
    step: 3,
    title: "Sensitization",
    description: "Health education campaigns raise awareness about diseases, prevention, and treatment.",
    icon: "campaign",
  },
  {
    step: 4,
    title: "Health Center Partnership",
    description: "We partner with local health centers to ensure quality diagnosis and care.",
    icon: "local_hospital",
  },
  {
    step: 5,
    title: "Resource Pooling",
    description: "Association members pool resources to collectively fund medication purchases.",
    icon: "savings",
  },
  {
    step: 6,
    title: "Bulk Purchasing",
    description: "Medicines are procured in bulk at negotiated, reduced prices.",
    icon: "shopping_cart",
  },
  {
    step: 7,
    title: "Distribution",
    description: "Medicines are distributed to members through health centers and community points.",
    icon: "local_shipping",
  },
  {
    step: 8,
    title: "Follow-up & Support",
    description: "Ongoing monitoring ensures treatment adherence and continuous care.",
    icon: "monitor_heart",
  },
];

export const approachPoints: ApproachPoint[] = [
  {
    title: "Affordability",
    description: "Bulk purchasing reduces costs by up to 60%, making medicines accessible to low-income families.",
    icon: "payments",
  },
  {
    title: "Accessibility",
    description: "We bring medicines closer to communities, eliminating long travel distances to pharmacies.",
    icon: "near_me",
  },
  {
    title: "Sustainability",
    description: "Our model is community-funded, reducing dependence on external donors.",
    icon: "eco",
  },
  {
    title: "Trust",
    description: "Community ownership builds trust and ensures transparent management of resources.",
    icon: "verified_user",
  },
  {
    title: "Empowerment",
    description: "Communities gain the knowledge and structures to manage their own healthcare needs.",
    icon: "emoji_people",
  },
];
