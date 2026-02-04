export const ShimmerSkeleton = () => {
  return (
    <div
      className="h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
      aria-hidden
    >
      <div className="h-40 w-full animate-pulse bg-bg" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded-lg bg-bg" />
        <div className="h-3 w-full animate-pulse rounded-lg bg-bg" />
        <div className="h-3 w-2/5 animate-pulse rounded-lg bg-bg" />
        <div className="flex gap-2 pt-1">
          <div className="h-6 w-20 animate-pulse rounded-full bg-bg" />
          <div className="h-6 w-14 animate-pulse rounded-full bg-bg" />
          <div className="h-6 w-14 animate-pulse rounded-full bg-bg" />
        </div>
      </div>
    </div>
  );
};
