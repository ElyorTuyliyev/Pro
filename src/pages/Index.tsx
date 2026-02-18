import { useEffect, useState } from "react";
import AboutSection from "@/pages/AboutSection";
import ContactSection from "@/pages/ContactSection";
import ExperienceSection from "@/pages/ExperienceSection";
import HeroSection from "@/pages/HeroSection";
import PageProgress from "@/pages/PageProgress";
import PortfolioFooter from "@/pages/PortfolioFooter";
import PortfolioNavbar from "@/pages/PortfolioNavbar";
import SkillsSection from "@/pages/SkillsSection";
import {
  NAV_ITEMS,
  ROTATING_ROLES,
  type SectionId,
} from "@/constants/portfolio";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [visibleSections, setVisibleSections] = useState<
    Partial<Record<SectionId, boolean>>
  >({
    about: false,
    skills: false,
    experience: false,
    contact: false,
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (window.matchMedia("(max-width: 768px)").matches) {
      setVisibleSections((prev) =>
        sectionIds.reduce<Partial<Record<SectionId, boolean>>>(
          (acc, id) => ({ ...acc, [id]: prev[id] ?? true }),
          {},
        ),
      );
    }

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
        rootMargin: "-10% 0px -15% 0px",
        threshold: [0.01, 0.08, 0.2],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const revealFallback = window.setTimeout(() => {
      setVisibleSections((prev) =>
        sectionIds.reduce<Partial<Record<SectionId, boolean>>>(
          (acc, id) => ({ ...acc, [id]: prev[id] ?? true }),
          {},
        ),
      );
    }, 1500);

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
      window.clearTimeout(revealFallback);
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
    visibleSections[sectionId] === false
      ? "opacity-0 translate-y-8"
      : "opacity-100 translate-y-0";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-12 h-52 w-52 rounded-full bg-cyan-400/10 blur-[70px] sm:-left-24 sm:h-72 sm:w-72 sm:bg-cyan-400/14 sm:blur-[110px]" />
        <div className="absolute right-0 top-64 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px] sm:h-80 sm:w-80 sm:bg-blue-500/14 sm:blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 hidden h-72 w-72 rounded-full bg-amber-300/10 blur-[110px] sm:block" />
      </div>

      <PageProgress value={scrollProgress} />
      <PortfolioNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
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
