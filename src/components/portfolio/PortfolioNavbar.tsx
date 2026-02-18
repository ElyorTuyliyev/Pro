import { NAV_ITEMS, PROFILE, type SectionId } from "@/constants/portfolio";

type PortfolioNavbarProps = {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
};

const PortfolioNavbar = ({ activeSection, onNavigate }: PortfolioNavbarProps) => {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-slate-700/60 bg-slate-950/72 shadow-[0_18px_50px_-34px_rgba(34,211,238,0.55)] backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:px-6">
          <div className="hidden items-center gap-3 sm:flex">
            <div className="grid h-9 w-9 place-content-center rounded-lg bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-600 text-sm font-bold text-slate-950">
              TE
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Portfolio</p>
              <p className="text-sm font-semibold text-white">{PROFILE.fullName}</p>
            </div>
          </div>

          <div className="grid w-full grid-cols-5 gap-1 rounded-xl border border-slate-700/60 bg-slate-900/60 p-1 sm:ml-auto sm:flex sm:w-auto sm:rounded-full">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.id);
                }}
                className={`relative rounded-full px-1.5 py-1.5 text-center text-[11px] font-medium transition-all sm:px-3 sm:text-sm ${
                  activeSection === item.id
                    ? "bg-cyan-400/20 text-cyan-100"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
