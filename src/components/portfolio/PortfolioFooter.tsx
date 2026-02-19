"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, PROFILE } from "@/constants/portfolio";

const PortfolioFooter = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const updateVisitCount = async () => {
      try {
        const response = await fetch("/api/visits", { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Visits API request failed");
        }

        const payload = (await response.json()) as { value?: number };
        if (isMounted && typeof payload.value === "number") {
          setVisitCount(payload.value);
        }
      } catch {
        if (isMounted) {
          setVisitCount(null);
        }
      }
    };

    void updateVisitCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="border-t border-slate-800/80 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-slate-400">{PROFILE.footerText}</p>
          <p className="text-xs text-slate-500">
            {visitCount === null ? "Visits: --" : `Visits: ${visitCount}`}
          </p>
        </div>
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
