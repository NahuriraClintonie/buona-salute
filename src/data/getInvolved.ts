import { InvolvementOption } from "@/types";

export const getInvolvedIntro = {
  title: "Be Part of the Collective Action",
  description:
    "Your support helps us expand access to medicine through community-driven solutions. Every contribution — big or small — strengthens patient associations and brings affordable healthcare closer to those who need it most.",
};

export const involvementOptions: InvolvementOption[] = [
  {
    title: "Support a Patient Group",
    description:
      "Sponsor a patient association and help cover the cost of bulk medication purchases for an entire community. Your support enables groups to sustain their collective purchasing power.",
    icon: "volunteer_activism",
    linkLabel: "Learn More",
    linkHref: "/contact",
  },
  {
    title: "Fund Medication Access",
    description:
      "Contribute directly to our medication fund. Your donation goes toward subsidizing medicine costs for the most vulnerable patients who cannot afford even small monthly contributions.",
    icon: "medication",
    linkLabel: "Donate Now",
    linkHref: "/contact",
  },
  {
    title: "Volunteer Your Skills",
    description:
      "Lend your expertise in healthcare, communications, logistics, data, or administration. Volunteers play a critical role in strengthening our programs on the ground.",
    icon: "emoji_people",
    linkLabel: "Apply to Volunteer",
    linkHref: "/contact",
  },
  {
    title: "Partner With Us",
    description:
      "Join us as a strategic partner — whether you're an NGO, government body, corporation, or health institution. Together, we can scale collective action across Uganda.",
    icon: "handshake",
    linkLabel: "Become a Partner",
    linkHref: "/contact",
  },
];

export const donationImpact = [
  {
    amount: "UGX 25,000",
    approx: "~$7",
    description: "Covers one month of essential medication for a patient through bulk purchasing.",
    icon: "medication",
  },
  {
    amount: "UGX 150,000",
    approx: "~$40",
    description: "Supports the formation and training of a new patient association in a community.",
    icon: "groups",
  },
  {
    amount: "UGX 500,000",
    approx: "~$135",
    description: "Funds a community health education and sensitization campaign reaching hundreds.",
    icon: "campaign",
  },
  {
    amount: "UGX 2,000,000",
    approx: "~$540",
    description: "Equips a health center with basic diagnostic tools — blood pressure monitors and screening equipment.",
    icon: "biotech",
  },
];

export const volunteerRoles = [
  {
    title: "Community Health Mobilizer",
    description: "Help identify and organize patients in underserved communities into associations.",
    icon: "people",
  },
  {
    title: "Health Educator",
    description: "Facilitate health education sessions on disease management, prevention, and treatment adherence.",
    icon: "school",
  },
  {
    title: "Data & Monitoring Support",
    description: "Help track patient outcomes, medication costs, and program effectiveness through data collection.",
    icon: "insights",
  },
  {
    title: "Communications & Outreach",
    description: "Support storytelling, social media, and awareness campaigns to amplify our mission.",
    icon: "share",
  },
];

export const getInvolvedCta = {
  title: "Every Action Counts",
  description:
    "Whether you donate, volunteer, or partner with us — your involvement directly helps communities access life-saving medicine through collective action.",
  buttonLabel: "Contact Us Today",
  buttonHref: "/contact",
};
