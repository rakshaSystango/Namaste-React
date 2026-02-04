// import React, { useEffect, useState } from "react";
// import { ShimmerSkeleton } from "./ShimmerSkeleton";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";

// import { useEffect } from "react";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const { resId } = useParams();
//   console.log(resId);
//   const [restoId, setRestoId] = useState(resId);

//   useEffect(() => {
//     fetchMenu();
//   }, [restoId]);

//   const fetchMenu = async () => {
//     try {
//       const proxy = "https://corsproxy.io/?";
//       const data = await fetch(proxy + encodeURIComponent(MENU_API + restoId));
//       console.log(data);

//       // const data = await fetch(MENU_API + restoId);
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json.data);
//     } catch (error) {
//       console.log("Error fetching menu data:", error);
//     }
//   };
//   if (resInfo === null) return <ShimmerSkeleton />;
//   const {
//     name,
//     avgRatingString,
//     totalRatingsString,
//     costForTwoMessage,
//     cuisines,
//     areaName,
//   } = resInfo?.cards[2]?.card?.card?.info;

//   const { itemCards } =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//   console.log(itemCards);

//   return (
//     <div>
//       <div className="menu-card">
//         <h3>{name}</h3>
//         <h4>
//           {avgRatingString} ({totalRatingsString}) <span>.</span>{" "}
//           {costForTwoMessage}
//         </h4>
//         <h6>{cuisines.join(", ")}</h6>
//         <ul>
//           <li>
//             Outlet <span className="area-name">{areaName}</span>
//           </li>
//           <li>{resInfo?.cards[2].card.card.info.sla.slaString}</li>
//         </ul>
//       </div>

//       <div className="title-block">
//         <h3 className="">Menu</h3>
//       </div>
//       <div className="menu-list-card">
//         {itemCards.map((item) => (
//           <div
//             className="menu-dish-card"
//             key={item.card.info.id}
//             onClick={() => {
//               console.log("first", item.card.info.id);
//               setRestoId(item.card.info.id);
//             }}
//           >
//             <div className="card-inner-content">
//               <h3 className="res-name">{item?.card?.info?.name}</h3>
//               <p className="price">
//                 Rs.{" "}
//                 {item?.card?.info?.defaultPrice / 100 ||
//                   item?.card?.info?.price / 100}
//               </p>
//               <p className="rating">
//                 {item?.card?.info?.ratings?.aggregatedRating?.rating}
//               </p>
//               <p className="description">{item?.card?.info?.description}</p>
//             </div>
//             <div className="menu-img-wrapper">
//               <img
//                 src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

import React from "react";
import { ShimmerSkeleton } from "./ShimmerSkeleton";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerSkeleton />;

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-text">
              {name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-text">
              {avgRatingString}{" "}
              <span className="font-normal text-muted">
                ({totalRatingsString})
              </span>
              <span className="mx-2 text-muted">·</span>
              <span className="font-medium text-muted">{costForTwoMessage}</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-warning">
              {cuisines.join(", ")}
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-bg px-3 py-2 text-sm text-muted">
            <span className="font-semibold text-text">Outlet</span>
            <span className="font-medium">{areaName}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted">
          <span className="inline-flex items-center rounded-full bg-bg px-3 py-1 font-medium">
            {resInfo?.cards[2].card.card.info.sla.slaString}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold tracking-tight text-text">
          Menu
        </h3>
        <p className="text-sm text-muted">{itemCards?.length || 0} items</p>
      </div>

      <div className="rounded-2xl border border-border bg-surface shadow-sm">
        <div className="divide-y divide-border">
          {itemCards.map((item) => (
            <div
              className="flex gap-4 p-5 sm:items-center"
              key={item.card.info.id}
              onClick={() => {
                console.log("Clicked item id:", item.card.info.id);
              }}
            >
              <div className="min-w-0 flex-1 space-y-1">
                <h3 className="text-base font-semibold text-text">
                  {item?.card?.info?.name}
                </h3>
                <p className="text-sm font-medium text-muted">
                  Rs.{" "}
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </p>
                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <p className="text-sm font-semibold text-success">
                    ★ {item?.card?.info?.ratings?.aggregatedRating?.rating}
                  </p>
                )}
                {item?.card?.info?.description && (
                  <p className="line-clamp-2 text-sm text-muted">
                    {item?.card?.info?.description}
                  </p>
                )}
              </div>

              {item?.card?.info?.imageId && (
                <div className="h-24 w-24 overflow-hidden rounded-xl bg-bg sm:h-28 sm:w-28">
                  <img
                    className="h-full w-full object-cover"
                    alt={item?.card?.info?.name}
                    src={
                      item.card.info.imageId.startsWith("http")
                        ? item.card.info.imageId
                        : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`
                    }
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
