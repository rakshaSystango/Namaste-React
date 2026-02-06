import React, { useState } from "react";
import { ShimmerSkeleton } from "./ShimmerSkeleton";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  /**
   * STEP 1:
   * Read restaurant id from URL
   * Example URL: /restaurants/47595
   */
  const { resId } = useParams();

  /**
   * STEP 2:
   * Fetch restaurant menu data using custom hook
   * This hook returns `json.data`
   */
  const resInfo = useRestaurantMenu(resId);

  /**
   * STEP 3:
   * Show shimmer while data is loading
   */
  if (resInfo === null) {
    return <ShimmerSkeleton />;
  }

  /**
   * STEP 4:
   * Extract restaurant basic details
   *
   * Path:
   * resInfo → cards[2] → card → card → info
   */
  // top section restaurant info
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  console.log("🔹 Restaurant Info Object:", restaurantInfo);

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines = [],
    areaName,
  } = restaurantInfo || {};

  /**
   * STEP 5:
   * Extract REGULAR menu cards
   */
  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log("🔹 REGULAR cards:", regularCards);

  /**
   * STEP 6:
   * Extract itemCards (menu items)
   * Currently using index [2] (Recommended section)
   */
  const categories =
    regularCards?.filter((c) => c?.card?.card?.itemCards) || [];

  console.log("🔹 categories (ALL):", categories);

  /**
   * STEP 7:
   * Inspect one item structure for clarity
   */
  if (categories.length > 0) {
    console.log("🔹 First menu item (full):", categories[0]);
    console.log("🔹 First menu item info:", categories[0]?.card?.info);
  }

  return (
    <div>
      {/* ================= Restaurant Info Card ================= */}
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm mb-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-text">{name}</h3>

            <p className="mt-1 text-sm font-semibold text-text">
              {avgRatingString}
              <span className="text-muted font-normal">
                {" "}
                ({totalRatingsString})
              </span>
              <span className="mx-2 text-muted">·</span>
              <span className="text-muted">{costForTwoMessage}</span>
            </p>

            <p className="mt-2 text-sm text-warning">{cuisines.join(", ")}</p>
          </div>

          <div className="rounded-xl bg-bg px-3 py-2 text-sm text-muted">
            <span className="font-semibold text-text">Outlet</span> {areaName}
          </div>
        </div>

        <div className="mt-3 text-sm text-muted">
          {restaurantInfo?.sla?.slaString}
        </div>
      </div>

      {/* ================= Menu Title ================= */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-text">Menu</h3>
        {/* <p className="text-sm text-muted">{itemCards.length} items</p> */}
      </div>

      {/* ================= Menu Items List ================= */}
      {/* <div className="rounded-2xl border border-border bg-surface shadow-sm">
        <div className="divide-y divide-border">
          {itemCards.map((item, index) => {
      
            const info = item.card.info;
            console.log(`🔹 Rendering item ${index + 1}:`, info.name);

            return (
              <div key={info.id} className="flex gap-4 p-5 sm:items-center">
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-semibold text-text">
                    {info.name}
                  </h3>

                  <p className="text-sm font-medium text-muted">
                    Rs. {(info.defaultPrice || info.price) / 100}
                  </p>

                  {info?.ratings?.aggregatedRating?.rating && (
                    <p className="text-sm font-semibold text-success">
                      ★ {info.ratings.aggregatedRating.rating}
                    </p>
                  )}

                  {info.description && (
                    <p className="text-sm text-muted line-clamp-2">
                      {info.description}
                    </p>
                  )}
                </div>

                {info.imageId && (
                  <div className="h-24 w-24 overflow-hidden rounded-xl bg-bg">
                    <img
                      className="h-full w-full object-cover"
                      alt={info.name}
                      src={
                        info.imageId.startsWith("http")
                          ? info.imageId
                          : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`
                      }
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div> */}

      {/* accordion categories */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
