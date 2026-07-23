export interface NavLink {
  label: string;
  href: string;
}

// Unified navigation menu links
export const siteNav: NavLink[] = [
  { label: 'Resume', href: '/resume' },
  { label: 'Docs', href: '/#docs-section' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' }
];

// Fallbacks protecting legacy layouts and other component imports from crashing
export const heroLeftNav: NavLink[] = siteNav;
export const heroRightNav: NavLink[] = siteNav;

// Core metadata payloads utilized by FooterSection component rendering loops
export const footerDirectory = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Resume", href: "/resume" }
    ]
  }
];

export const footerMeta = {
  tagline: "System Integrity // Continuous Optimization",
  copyright: "© 2026 Más Wild Labs. All rights reserved."
};

export const footerPolicies = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" }
];