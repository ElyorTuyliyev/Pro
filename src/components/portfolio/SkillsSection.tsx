import { Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS, SKILLS_SUBTITLE, SKILLS_TITLE } from "@/constants/portfolio";

type SkillsSectionProps = {
  className: string;
  isVisible: boolean;
};

const SkillsSection = ({ className, isVisible }: SkillsSectionProps) => {
  return (
    <section
      id="skills"
      className={`scroll-mt-36 px-6 py-24 transition-all duration-700 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Stack
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">{SKILLS_TITLE}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">{SKILLS_SUBTITLE}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <Card
              key={skill}
              className={`group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/55 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/0 via-blue-400/0 to-cyan-300/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative flex items-center gap-4 p-5">
                <div className="grid h-10 w-10 place-content-center rounded-xl bg-slate-800 text-cyan-200">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Core Skill</p>
                  <h3 className="text-lg font-semibold text-white">{skill}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
