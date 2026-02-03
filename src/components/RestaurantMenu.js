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

import React, { useEffect, useState } from "react";
import { ShimmerSkeleton } from "./ShimmerSkeleton";
import { useParams } from "react-router-dom";
import { mockMenuData } from "../utils/mocData";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    // For this learning project, just use local mock data
    console.log("Route restaurant id (mocked):", resId);
    setResInfo(mockMenuData.data);
  }, [resId]);

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
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <div className="menu-card">
        <h3>{name}</h3>
        <h4>
          {avgRatingString} ({totalRatingsString}) <span>.</span>{" "}
          {costForTwoMessage}
        </h4>
        <h6>{cuisines.join(", ")}</h6>
        <ul>
          <li>
            Outlet <span className="area-name">{areaName}</span>
          </li>
          <li>{resInfo?.cards[2].card.card.info.sla.slaString}</li>
        </ul>
      </div>

      <div className="title-block">
        <h3 className="">Menu</h3>
      </div>
      <div className="menu-list-card">
        {itemCards.map((item) => (
          <div
            className="menu-dish-card"
            key={item.card.info.id}
            onClick={() => {
              console.log("Clicked item id:", item.card.info.id);
            }}
          >
            <div className="card-inner-content">
              <h3 className="res-name">{item?.card?.info?.name}</h3>
              <p className="price">
                Rs.{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </p>
              <p className="rating">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}
              </p>
              <p className="description">{item?.card?.info?.description}</p>
            </div>
            <div className="menu-img-wrapper">
              {item?.card?.info?.imageId && (
                <img
                  alt={item?.card?.info?.name}
                  src={
                    item.card.info.imageId.startsWith("http")
                      ? item.card.info.imageId
                      : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`
                  }
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
