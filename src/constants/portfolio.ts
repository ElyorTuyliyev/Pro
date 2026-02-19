export type SectionId = "home" | "about" | "skills" | "experience" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type AboutCard = {
  id: "who-i-am" | "what-i-do" | "credentials" | "education" | "certifications";
  title: string;
  description: string;
  icon: "user" | "code" | "award" | "graduation";
  links?: {
    label: string;
    href: string;
  }[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
};

export type ContactAction = {
  id: "telegram" | "linkedin" | "github" | "instagram" | "phone";
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
  "Frontend Engineer",
  "React & Next.js Developer",
  "Mentor & Product Builder",
  "Performance-Focused Coder",
];

export const HERO_CONTENT = {
  badge: "Open for Freelance and Product Teams",
  titleLead: "Elyor Tuyliyev",
  titleAccent: "Web Developer",
  lead: "Software Engineer with",
  description:
    "Frontend Engineer with 2+ years of hands-on experience building production-ready web applications using React, Next.js, and TypeScript.",
  primaryCtaLabel: "Download CV",
  secondaryCtaLabel: "View Projects",
  secondaryCtaHref: "https://github.com/ElyorTuyliyev",
  metrics: [
    { value: "2+ Years", label: "Frontend Experience" },
    { value: "2 Platforms", label: "Business Products Built" },
    { value: "1 Year", label: "Mentorship Experience" },
  ] satisfies HeroMetric[],
  ticker: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Redux Toolkit",
    "GraphQL",
    "REST APIs",
    "SASS",
    "Figma",
    "Performance",
  ],
} as const;

export const ABOUT_CONTENT = {
  title: "About Me",
  subtitle:
    "I build practical products, mentor juniors, and focus on maintainable frontend architecture.",
  cards: [
    {
      id: "who-i-am",
      title: "Who I Am",
      icon: "user",
      description:
        "I am a frontend engineer from Jizzakh with 2+ years of hands-on experience. I am comfortable working independently and inside structured teams with clear communication and delivery focus.",
    },
    {
      id: "what-i-do",
      title: "What I Do",
      icon: "code",
      description:
        "I build responsive and production-ready interfaces, integrate REST and GraphQL APIs, and keep component architecture clean. I have worked on both construction and marketplace-style platforms.",
    },
    {
      id: "credentials",
      title: "Mentorship & Credentials",
      icon: "award",
      description:
        "I mentored beginner developers for 1 year in HTML, CSS, JavaScript, and React. I completed the Meta Front-End Developer path and an AI & Machine Learning course.",
    },
    {
      id: "education",
      title: "Education",
      icon: "graduation",
      description:
        "Samarkand Institute of Agro-Innovations and Research - Economics / Accounting.\nAlicode IT Academy - Frontend Development Program (2023).",
    },
    {
      id: "certifications",
      title: "Certificates",
      icon: "award",
      description:
        "Meta Front-End Developer Professional Certificate (Coursera).\nIssued: May 7, 2025.",
      links: [
        {
          label: "Verify on Coursera",
          href: "https://coursera.org/verify/professional-cert/GSWDKWPBDAMO",
        },
        {
          label: "View Certificate",
          href: "/Coursera.pdf",
        },
      ],
    },
  ] satisfies AboutCard[],
} as const;

export const SKILLS_TITLE = "Technical Stack";
export const SKILLS_SUBTITLE =
  "Core frontend, API, and tooling skills listed in my CV.";

export const SKILLS = [
  "React.js (Hooks)",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Redux Toolkit",
  "React Router",
  "HTML5 / CSS3",
  "SASS",
  "Responsive / Adaptive Layout",
  "Cross-Browser Compatibility",
  "RESTful APIs",
  "GraphQL",
  "Async Data Handling",
  "Git / GitHub",
  "Figma",
];

export const EXPERIENCE_CONTENT = {
  title: "Experience",
  subtitle:
    "Hands-on work across startup products, marketplace platforms, and mentoring.",
  items: [
    {
      company: "Construction Management Platform",
      role: "Founder & Frontend Developer",
      location: "Jizzakh, Uzbekistan",
      duration: "Startup Product",
      description:
        "Built the frontend architecture for cost estimation, material tracking, and salary calculation workflows. Implemented reusable components, responsive views, and backend API integration.",
    },
    {
      company: "Kunjut.uz",
      role: "Frontend Developer",
      location: "Uzbekistan",
      duration: "Marketplace Platform",
      description:
        "Developed and improved UI components, integrated dynamic API data, and optimized rendering structure for better performance across desktop and mobile.",
    },
    {
      company: "Web Development Mentorship",
      role: "Mentor",
      location: "Remote",
      duration: "1 Year",
      description:
        "Mentored beginner developers in HTML, CSS, JavaScript, and React. Guided students through practical projects and improved their code structure and frontend logic.",
    },
  ] satisfies ExperienceItem[],
} as const;

export const CONTACT_CONTENT = {
  title: "Lets Connect",
  description:
    "Have a project idea, open role, or collaboration in mind? Send a message and I will reply quickly.",
  quickMessageTitle: "Send Direct Message",
  quickMessageDescription:
    "Fill out the form and your message will be sent to me on Telegram.",
  formNamePlaceholder: "Your name",
  formPhonePlaceholder: "97-123-4567",
  formMessagePlaceholder: "Tell me about your project...",
  sendButtonLabel: "Send Message",
  sendingButtonLabel: "Sending...",
  sentMessage: "Message sent successfully.",
  errorMessage:
    "Could not send the message. Check NEXT_PUBLIC_TELEGRAM_BOT_TOKEN and NEXT_PUBLIC_TELEGRAM_CHAT_ID.",
} as const;

export const CONTACT_EMAIL = "mailto:tuyliyevelyor@gmail.com";
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
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/+998884848833",
    external: true,
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+998884848833",
  },
];
