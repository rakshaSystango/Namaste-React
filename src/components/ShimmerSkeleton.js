export const ShimmerSkeleton = () => {
  return (
    <div className="card shimmer-card" aria-hidden>
      {/* Image placeholder */}
      <div className="food-img shimmer" />

      {/* Title line */}
      <div className="skeleton-line title shimmer" />

      {/* Cuisine line */}
      <div className="skeleton-line shimmer" />

      {/* Cost line */}
      <div className="skeleton-line short shimmer" />

      {/* Rating + delivery row */}
      <div className="skeleton-row">
        <div className="skeleton-pill shimmer" />
        <div className="skeleton-pill small shimmer" />
        <div className="skeleton-pill small shimmer" />
      </div>
    </div>
  );
};
