"use client";

import { NAV_ITEMS, PROFILE } from "@/constants/portfolio";

const PortfolioFooter = () => {
  return (
    <footer className="border-t border-slate-800/80 px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 text-center sm:grid-cols-[1fr_auto] sm:items-center sm:text-left">
        <p className="text-sm text-slate-400 sm:justify-self-start">{PROFILE.footerText}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 sm:justify-self-end sm:justify-end">
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
