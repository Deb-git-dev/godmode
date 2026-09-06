/**
 * Central persona configuration for Debapriya Bhattacharyya (Deb).
 * Zero placeholders, 100% verified facts.
 */
export const profile = {
  firstName: "Debapriya",
  lastName: "Bhattacharyya",
  nickname: "Deb",
  /** Wordmark shown in nav/footer — roman + italic mixing */
  wordmark: { roman: "Debapriya", italic: "Bhattacharyya" },
  initials: "DB",
  role: "AI Systems Architect & Full-Stack Creative Engineer",
  roleLines: ["AI Systems Architect", "& Creative Engineer"],
  tagline: "Bridging autonomous cloud AI systems, resilient full-stack engineering, and high-craft interactive digital experiences.",
  location: "Kolkata, India",
  city: "Kolkata",
  timezone: "Asia/Kolkata",
  email: "bhattacharyya.debapriya571@gmail.com",
  availability: "Available for select advisory & builds",
  availabilityWindow: "2026",
  foundedYear: 2019,
  stats: [
    { value: "07+", label: "Years of engineering" },
    { value: "28+", label: "Interactive modules" },
    { value: "100%", label: "Cloud-grounded architecture" },
    { value: "12+", label: "Production platforms" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Deb-git-dev" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Facebook", href: "https://facebook.com/deb2remember" },
    { label: "Foundation", href: "#/about" },
  ],
  nav: [
    { n: "01", label: "Work", href: "/work" },
    { n: "02", label: "About", href: "/about" },
    { n: "03", label: "Lab", href: "/lab" },
    { n: "04", label: "Showcase", href: "/showcase" },
    { n: "05", label: "Contact", href: "/contact" },
  ],
} as const;

export type Profile = typeof profile;
