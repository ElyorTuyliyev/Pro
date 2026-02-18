import PortfolioPage from "@/components/portfolio/PortfolioPage";

const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com").replace(
    /\/$/,
    "",
  );

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Elyor Tuyliyev Portfolio",
      url: siteUrl,
      description:
        "Web developer portfolio with React and TypeScript projects, experience, and direct contact.",
    },
    {
      "@type": "WebPage",
      name: "Elyor Tuyliyev | Web Developer Portfolio",
      url: siteUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Elyor Tuyliyev Portfolio",
        url: siteUrl,
      },
      description:
        "Portfolio website of Elyor Tuyliyev, software engineer focused on modern frontend development.",
    },
    {
      "@type": "Person",
      name: "Elyor Tuyliyev",
      jobTitle: "Web Developer",
      description:
        "Software engineer focused on React, TypeScript, and high-performance frontend products.",
      email: "mailto:elyor.tuyliyev@gmail.com",
      telephone: "+998884848833",
      sameAs: [
        "https://www.linkedin.com/in/elyor-web-developer/",
        "https://github.com/ElyorTuyliyev",
        "https://www.instagram.com/stackmaster_el/",
        "https://t.me/+998884848833",
      ],
      knowsAbout: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Frontend Development",
      ],
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPage />
    </>
  );
};

export default HomePage;
