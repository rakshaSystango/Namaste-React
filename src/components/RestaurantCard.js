import React from "react";
import { CON_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
  avgRating,
  sla
}) => {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={CON_URL + cloudinaryImageId}
        alt={name}
        className="h-40 w-full object-cover"
      />
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-text">
          {name}
        </h3>
        <p className="line-clamp-1 text-sm text-muted">
          {cuisines?.join(", ")}
        </p>

        <div className="flex items-center justify-between gap-3 pt-1 text-sm text-muted">
          <span className="font-medium">{costForTwo}</span>
          {avgRating && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-bg px-2 py-1 text-xs font-semibold text-success">
              ★ {avgRating}
            </span>
          )}
        </div>

        <p className="text-sm text-muted">{sla?.slaString}</p>
      </div>
    </article>
  );
};

export default RestaurantCard;
