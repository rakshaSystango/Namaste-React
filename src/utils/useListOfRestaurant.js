import { useEffect, useState } from "react";

const useListOfRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  return {
    listOfRestaurants,
    filteredRestaurants,
    pageTitle,
  };
};

export default useListOfRestaurant;
