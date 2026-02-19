import { Award, Code, GraduationCap, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ABOUT_CONTENT } from "@/constants/portfolio";

type AboutSectionProps = {
  className: string;
};

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className={`scroll-mt-36 px-6 py-24 transition-all duration-700 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            About
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            {ABOUT_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {ABOUT_CONTENT.cards.map((card, index) => (
            <Card
              key={card.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/55 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/0 via-cyan-300/0 to-cyan-300/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-content-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                    {card.icon === "user" ? (
                      <User className="h-6 w-6" />
                    ) : card.icon === "award" ? (
                      <Award className="h-6 w-6" />
                    ) : card.icon === "graduation" ? (
                      <GraduationCap className="h-6 w-6" />
                    ) : (
                      <Code className="h-6 w-6" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-slate-500">{`0${index + 1}`}</span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 whitespace-pre-line leading-relaxed text-slate-300">
                  {card.description}
                </p>
                {card.links && card.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {card.links.map((link) => (
                      <a
                        key={`${card.id}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex text-sm font-semibold text-cyan-200 underline decoration-cyan-400/60 underline-offset-4 transition-colors hover:text-cyan-100"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
