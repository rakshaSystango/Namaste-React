import React from "react";
import { CON_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  rating,
  deliveryTime,
  image,
  costForTwo,
}) => {
  return (
    <div className="card">
      <img
        src={CON_URL+ image}
        alt={name}
        className="food-img"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{rating}</p>
      <p>{deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;
