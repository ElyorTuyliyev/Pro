export type SectionId = "home" | "about" | "skills" | "experience" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type AboutCard = {
  id: "who-i-am" | "what-i-do";
  title: string;
  description: string;
  icon: "user" | "code";
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
};

export type ContactAction = {
  id: "linkedin" | "github" | "instagram" | "phone";
  label: string;
  href: string;
  external?: boolean;
};

export type HeroMetric = {
  value: string;
  label: string;
};

export const PROFILE = {
  fullName: "Tuyliyev Elyor",
  firstName: "Tuyliyev",
  lastName: "Elyor",
  footerText:
    "(c) 2026 Tuyliyev Elyor. Crafted with React, motion, and attention to detail.",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const ROTATING_ROLES = [
  "Frontend Architect",
  "React Specialist",
  "UX-Focused Builder",
  "Performance Enthusiast",
];

export const HERO_CONTENT = {
  badge: "Open for Freelance and Product Teams",
  titleLead: "Elyor Tuyliyev",
  titleAccent: "Web Developer",
  lead: "Software Engineer with",
  description:
    "I design and ship fast, modern, and conversion-focused web products. Clean architecture, smooth UX, and measurable business impact.",
  primaryCtaLabel: "Download CV",
  secondaryCtaLabel: "View Projects",
  secondaryCtaHref: "https://github.com/ElyorTuyliyev",
  metrics: [
    { value: "2+ Years", label: "Hands-on Experience" },
    { value: "20+ Projects", label: "Delivered Products" },
    { value: "100%", label: "Responsive-First Builds" },
  ] satisfies HeroMetric[],
  ticker: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Redux Toolkit",
    "REST APIs",
    "Clean UI",
    "Performance",
  ],
} as const;

export const ABOUT_CONTENT = {
  title: "About Me",
  subtitle: "I combine engineering discipline with product thinking.",
  cards: [
    {
      id: "who-i-am",
      title: "Who I Am",
      icon: "user",
      description:
        "I am a product-minded software engineer with a strong JavaScript and React background. I care about maintainable code, clear communication, and outcomes that move business metrics.",
    },
    {
      id: "what-i-do",
      title: "What I Do",
      icon: "code",
      description:
        "I build accessible interfaces, reusable component systems, and scalable front-end architecture. My focus is shipping fast without sacrificing quality or long-term maintainability.",
    },
  ] satisfies AboutCard[],
} as const;

export const SKILLS_TITLE = "Technical Stack";
export const SKILLS_SUBTITLE =
  "Tools and technologies I use to build fast, scalable products.";

export const SKILLS = [
  "HTML/CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Sass",
  "TypeScript",
  "Git",
  "Tailwind CSS",
  "Redux Toolkit",
  "Node.js",
  "RESTful APIs",
  "Responsive Design",
];

export const EXPERIENCE_CONTENT = {
  title: "Experience",
  subtitle: "Production work across multiple products and teams.",
  items: [
    {
      company: "Alitech",
      role: "Frontend Engineer",
      location: "Uzbekistan",
      duration: "2023 - Present",
      description:
        "Contributed to multiple software products from feature delivery to interface optimization. Worked closely with designers and backend teams to ship reliable, user-focused solutions.",
    },
  ] satisfies ExperienceItem[],
} as const;

export const CONTACT_CONTENT = {
  title: "Lets Connect",
  description:
    "Have a project idea, open role, or collaboration in mind? Send a message and I will reply quickly.",
  quickMessageTitle: "Send Direct Message",
  quickMessageDescription: "Fill out the form and your message will be sent to me on Telegram.",
  formNamePlaceholder: "Your name",
  formPhonePlaceholder: "Your phone",
  formMessagePlaceholder: "Tell me about your project...",
  sendButtonLabel: "Send Message",
  sendingButtonLabel: "Sending...",
  sentMessage: "Message sent successfully.",
  errorMessage:
    "Could not send the message. Check VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID.",
} as const;

export const CONTACT_EMAIL = "mailto:elyor.tuyliyev@gmail.com";
export const CONTACT_EMAIL_LABEL = "Email Me";

export const CONTACT_ACTIONS: ContactAction[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elyor-web-developer/",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/ElyorTuyliyev",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/stackmaster_el/",
    external: true,
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+998884848833",
  },
];
