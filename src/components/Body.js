import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mocData";
import { ShimmerSkeleton } from "./ShimmerSkeleton";

const Body = () => {
  // State variable - super powerfull variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    /* Optional chaining */
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  // console.log(listOfRestaurants);

  // Conditional Rendring - skeleton
  return listOfRestaurants.length === 0 ? (
    <main className="body-container">
      <div className="card-container">
        {[...Array(8)].map((_, index) => (
          <ShimmerSkeleton key={index} />
        ))}
      </div>
    </main>
  ) : (
    <main className="body-container">
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
                rest.info?.name?.toLowerCase().includes(searchText.toLowerCase())
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
              (res) => res.rating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurants
          ?.filter((rest) => rest?.info) // only keep restaurants with info
          .map((rest) => (
            <RestaurantCard key={rest.info.id} {...rest.info} />
          ))}
      </div>
    </main>
  );
};

export default Body;
