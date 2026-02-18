import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT, PROFILE, ROTATING_ROLES } from "@/constants/portfolio";
import cv from "@/assets/Elyor_CV.pdf";
import me from "@/assets/me.jpg";

type HeroSectionProps = {
  roleIndex: number;
};

const HeroSection = ({ roleIndex }: HeroSectionProps) => {
  const tickerItems = [...HERO_CONTENT.ticker, ...HERO_CONTENT.ticker];
  const [typedRole, setTypedRole] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const nextRole = ROTATING_ROLES[roleIndex];
    const previousRole =
      ROTATING_ROLES[
        (roleIndex - 1 + ROTATING_ROLES.length) % ROTATING_ROLES.length
      ];

    let deletingTimer: number | undefined;
    let typingTimer: number | undefined;
    let currentText = isFirstRender.current ? "" : previousRole;

    const startTyping = () => {
      let charIndex = 0;
      typingTimer = window.setInterval(() => {
        charIndex += 1;
        setTypedRole(nextRole.slice(0, charIndex));

        if (charIndex >= nextRole.length) {
          if (typingTimer) {
            window.clearInterval(typingTimer);
          }
        }
      }, 120);
    };

    if (isFirstRender.current) {
      isFirstRender.current = false;
      setTypedRole("");
      startTyping();
    } else {
      setTypedRole(previousRole);
      deletingTimer = window.setInterval(() => {
        currentText = currentText.slice(0, -1);
        setTypedRole(currentText);

        if (currentText.length === 0) {
          if (deletingTimer) {
            window.clearInterval(deletingTimer);
          }
          startTyping();
        }
      }, 85);
    }

    return () => {
      if (deletingTimer) {
        window.clearInterval(deletingTimer);
      }
      if (typingTimer) {
        window.clearInterval(typingTimer);
      }
    };
  }, [roleIndex]);

  return (
    <section id="home" className="scroll-mt-36 relative px-6 pb-20 pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              {HERO_CONTENT.badge}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
              {HERO_CONTENT.titleLead}
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-amber-200 bg-clip-text text-transparent">
                {HERO_CONTENT.titleAccent}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              {HERO_CONTENT.lead}{" "}
              <span className="inline-flex items-center bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text font-semibold text-transparent">
                {typedRole}
                <span
                  aria-hidden="true"
                  className="ml-0.5 animate-pulse text-cyan-200/80"
                >
                  |
                </span>
              </span>
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {HERO_CONTENT.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={cv} download>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_18px_40px_-18px_rgba(56,189,248,0.95)] sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {HERO_CONTENT.primaryCtaLabel}
                </Button>
              </a>
              <a
                href={HERO_CONTENT.secondaryCtaHref}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-slate-600 bg-slate-900/70 px-8 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-slate-900 hover:text-white sm:w-auto"
                >
                  {HERO_CONTENT.secondaryCtaLabel}
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {HERO_CONTENT.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-4 py-4"
                >
                  <p className="text-xl font-bold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/75 shadow-[0_32px_70px_-44px_rgba(56,189,248,0.78)]">
              <img
                src={me}
                alt={`${PROFILE.fullName} profile`}
                className="h-[460px] w-full object-cover"
                width={640}
                height={640}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">
                  Focused On
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Product-ready frontend engineering
                </p>
              </div>
            </div>

            <div className="absolute -left-7 top-10 rounded-xl border border-cyan-200/20 bg-slate-900/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
              Fast Delivery
            </div>
            <div className="absolute -bottom-4 right-0 rounded-xl border border-amber-200/20 bg-slate-900/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">
              Clean Code
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/45 py-3">
          <div className="marquee-track flex min-w-max items-center gap-5 px-4">
            {tickerItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-5 text-sm font-medium text-slate-300"
              >
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-cyan-300" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
