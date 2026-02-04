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
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
        <h1 className="text-lg font-semibold text-text">
          🔴 You are offline!
        </h1>
        <p className="mt-1 text-sm text-muted">
          Please check your internet connection.
        </p>
      </div>
    );

  // Conditional Rendring - skeleton
  return listOfRestaurants.length === 0 ? (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <ShimmerSkeleton key={index} />
      ))}
    </div>
  ) : (
    <main>
      
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:max-w-md">
            <label className="mb-1 block text-sm font-medium text-text">
              Search restaurants
            </label>
            <div className="flex w-full overflow-hidden rounded-xl border border-border bg-bg">
              <input
                type="search"
                placeholder="Type a restaurant name…"
                className="w-full bg-white px-4 py-3 text-sm text-text outline-none placeholder:text-muted"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              {/* filter the restaurant card and update the ui */}
              <button
                className="cursor-pointer shrink-0 bg-text px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:opacity-85"
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
          </div>

          <button
            className="cursor-pointer inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:opacity-85 sm:w-auto"
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
    

      {pageTitle && (
        <h2 className="mt-6 text-lg font-semibold tracking-tight text-text">
          {pageTitle}
        </h2>
      )}

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filteredRestaurants
          ?.filter((rest) => rest?.info) // only keep restaurants with info
          .map((rest) => (
            <Link
              className="block"
              key={rest.info.id}
              to={"/restaurants/" + rest.info.id}
            >
              <RestaurantCard {...rest.info} />
            </Link>
          ))}
      </div>
    </main>
  );
};

export default Body;
