import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { ShimmerSkeleton } from "./ShimmerSkeleton";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurant from "../utils/useListOfRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const {
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    pageTitle,
  } = useListOfRestaurant();
  // console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;

  // Conditional Rendring - skeleton
  return listOfRestaurants.length === 0 ? (
    <div className="card-container">
      {[...Array(8)].map((_, index) => (
        <ShimmerSkeleton key={index} />
      ))}
    </div>
  ) : (
    <main className="body-wrap">
      <div className="filter">
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            className="Search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* filter the restaurant card and update the ui */}
          <button
            className="btn cst-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRRestaurant = listOfRestaurants.filter((rest) =>
                rest.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              console.log("Filtered:", filteredRRestaurant);
              setFilteredRestaurants(filteredRRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info?.avgRating > 4,
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {pageTitle && <h2 className="online-res-title">{pageTitle}</h2>}
      <div className="card-container">
        {filteredRestaurants
          ?.filter((rest) => rest?.info) // only keep restaurants with info
          .map((rest) => (
            <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
              <RestaurantCard {...rest.info} />
            </Link>
          ))}
      </div>
    </main>
  );
};

export default Body;
