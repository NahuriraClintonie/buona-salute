export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroData {
  headline: string;
  tagline: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface Program {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ImpactMetric {
  label: string;
  value: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  community: string;
}

export interface Partner {
  name: string;
  logoUrl?: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export interface WorkStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ApproachPoint {
  title: string;
  description: string;
  icon: string;
}

export interface InvolvementOption {
  title: string;
  description: string;
  icon: string;
  linkLabel: string;
  linkHref: string;
}
