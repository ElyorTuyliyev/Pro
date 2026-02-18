import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EXPERIENCE_CONTENT } from "@/constants/portfolio";

type ExperienceSectionProps = {
  className: string;
};

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className={`scroll-mt-36 px-6 py-24 transition-all duration-700 ${className}`}
      style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Journey
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">{EXPERIENCE_CONTENT.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">{EXPERIENCE_CONTENT.subtitle}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-blue-400/30 to-transparent" />

          {EXPERIENCE_CONTENT.items.map((experience, index) => (
            <div key={`${experience.company}-${index}`} className="relative pl-14">
              <span className="absolute left-0 top-8 grid h-10 w-10 place-content-center rounded-full border border-cyan-300/50 bg-slate-900 text-cyan-200">
                <Briefcase className="h-5 w-5" />
              </span>

              <Card className="mb-6 rounded-3xl border-slate-700/70 bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
                <CardContent className="p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-400">
                    <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
                      {experience.duration}
                    </span>
                    <span>{experience.location}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {experience.role} at {experience.company}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-300">{experience.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
