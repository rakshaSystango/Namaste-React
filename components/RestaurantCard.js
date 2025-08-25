import React from "react";

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
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
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
