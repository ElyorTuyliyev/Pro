type PageProgressProps = {
  value: number;
};

const PageProgress = ({ value }: PageProgressProps) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-slate-900/20">
      <div
        className="h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 transition-[width] duration-200"
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
};

export default PageProgress;
