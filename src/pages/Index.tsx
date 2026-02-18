import { useEffect, useState } from "react";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import HeroSection from "@/components/portfolio/HeroSection";
import PageProgress from "@/components/portfolio/PageProgress";
import PortfolioFooter from "@/components/portfolio/PortfolioFooter";
import PortfolioNavbar from "@/components/portfolio/PortfolioNavbar";
import SkillsSection from "@/components/portfolio/SkillsSection";
import { NAV_ITEMS, ROTATING_ROLES, type SectionId } from "@/constants/portfolio";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [visibleSections, setVisibleSections] = useState<
    Partial<Record<SectionId, boolean>>
  >({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const sectionId = entry.target.id as SectionId;
          if (!sectionIds.includes(sectionId)) {
            return;
          }

          setVisibleSections((prev) =>
            prev[sectionId] ? prev : { ...prev, [sectionId]: true },
          );
        });

        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (currentSection?.target?.id) {
          const sectionId = currentSection.target.id as SectionId;
          if (sectionIds.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleHashChange = () => {
      const hashSection = window.location.hash.replace("#", "") as SectionId;
      if (sectionIds.includes(hashSection)) {
        setActiveSection(hashSection);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const getSectionVisibilityClass = (sectionId: SectionId) =>
    visibleSections[sectionId]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute right-0 top-64 h-80 w-80 rounded-full bg-blue-500/15 blur-[140px]" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-amber-300/10 blur-[130px]" />
      </div>

      <PageProgress value={scrollProgress} />
      <PortfolioNavbar activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection roleIndex={roleIndex} />
      <AboutSection className={getSectionVisibilityClass("about")} />
      <SkillsSection
        className={getSectionVisibilityClass("skills")}
        isVisible={Boolean(visibleSections.skills)}
      />
      <ExperienceSection className={getSectionVisibilityClass("experience")} />
      <ContactSection className={getSectionVisibilityClass("contact")} />
      <PortfolioFooter />
    </div>
  );
};

export default Index;
