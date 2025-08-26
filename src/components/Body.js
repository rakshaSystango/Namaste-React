import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mocData";

const Body = () => {
  // State variable - super powerfull variables
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal js variables
  // let listOfRestaurants = [
  //   {
  //     id: "581971",
  //     name: "Pizza Hut",
  //     image:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/41d2ced1-7522-4b0f-86bf-f778a193542a_581971.JPG",
  //     cuisines: ["Pizzas"],
  //     costForTwo: "₹350 for two",
  //     rating: 3.2,
  //     deliveryTime: "35-40 mins",
  //     locality: "Airport Road",
  //     area: "Sarafa",
  //     offer: "ITEMS AT ₹99",
  //     link: "https://www.swiggy.com/city/indore/pizza-hut-airport-road-sarafa-rest581971",
  //   },
  //   {
  //     id: "882432",
  //     name: "Theobroma",
  //     image:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/8745ebcd-81da-45e0-a818-29f87ab20ac9_882432.JPG",
  //     cuisines: ["Bakery", "Desserts", "Beverages"],
  //     costForTwo: "₹300 for two",
  //     rating: 4.5,
  //     deliveryTime: "25-30 mins",
  //     locality: "Near Janjeerwala Square",
  //     area: "Darshan Mall, Race Course Rd",
  //     offer: "ITEMS AT ₹290",
  //     link: "https://www.swiggy.com/city/indore/theobroma-near-janjeerwala-square-darshan-mall-race-course-rd-rest882432",
  //   },
  //   {
  //     id: "362169",
  //     name: "Baskin Robbins - Ice Cream Desserts",
  //     image:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/cf02723a-53a2-4461-8391-4b17473c7718_362169.JPG",
  //     cuisines: ["Desserts", "Ice Cream"],
  //     costForTwo: "₹250 for two",
  //     rating: 4.5,
  //     deliveryTime: "25-30 mins",
  //     locality: "44th Scheme",
  //     area: "Khatiwala",
  //     offer: "50% OFF UPTO ₹90",
  //     link: "https://www.swiggy.com/city/indore/baskin-robbins-ice-cream-desserts-44th-scheme-khatiwala-rest362169",
  //   },
  //   {
  //     id: "123456",
  //     name: "Domino's Pizza",
  //     image:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/ea6ac179-6959-4f3a-9c66-424c2ec79411_698741.JPG",
  //     cuisines: ["Pizzas", "Italian", "Fast Food"],
  //     costForTwo: "₹400 for two",
  //     rating: 4.3,
  //     deliveryTime: "20-25 mins",
  //     locality: "MG Road",
  //     area: "Treasure Island Mall",
  //     offer: "50% OFF UPTO ₹100",
  //     link: "https://www.swiggy.com/city/indore/dominos-pizza-mg-road-rest123456",
  //   },
  // ];

  return (
    <main className="body-container">
      <div className="filter">
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
        {listOfRestaurants.map((rest) => (
          <RestaurantCard key={rest.id} {...rest} />
        ))}
      </div>
    </main>
  );
};

export default Body;
