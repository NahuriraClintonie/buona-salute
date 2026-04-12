import type { NavItem } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
    ],
  },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];
