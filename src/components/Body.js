import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mocData";
import { ShimmerSkeleton } from "./ShimmerSkeleton";
import { Link } from "react-router-dom";

const Body = () => {
  // State variable - super powerfull variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [pageTitle, setPageTitle] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9280709&lng=75.7900883&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    /* Optional chaining */
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setPageTitle(json?.data?.cards[2]?.card?.card?.title);
  };

  // console.log(listOfRestaurants);


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
