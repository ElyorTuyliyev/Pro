import { NAV_ITEMS, PROFILE } from "@/constants/portfolio";

const PortfolioFooter = () => {
  return (
    <footer className="border-t border-slate-800/80 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">{PROFILE.footerText}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
