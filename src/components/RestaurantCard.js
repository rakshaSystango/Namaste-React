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
    <div className="card">
      <img
        src={CON_URL + cloudinaryImageId}
        alt={name}
        className="food-img"
      />
      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRating}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
