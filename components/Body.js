import React from "react";
import RestaurantCard from "./RestaurantCard";

export const resData = [
  {
    id: "581971",
    name: "Pizza Hut",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/41d2ced1-7522-4b0f-86bf-f778a193542a_581971.JPG",
    cuisines: ["Pizzas"],
    costForTwo: "₹350 for two",
    rating: 4.2,
    deliveryTime: "35-40 mins",
    locality: "Airport Road",
    area: "Sarafa",
    offer: "ITEMS AT ₹99",
    link: "https://www.swiggy.com/city/indore/pizza-hut-airport-road-sarafa-rest581971",
  },
  {
    id: "882432",
    name: "Theobroma",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/8745ebcd-81da-45e0-a818-29f87ab20ac9_882432.JPG",
    cuisines: ["Bakery", "Desserts", "Beverages"],
    costForTwo: "₹300 for two",
    rating: 4.5,
    deliveryTime: "25-30 mins",
    locality: "Near Janjeerwala Square",
    area: "Darshan Mall, Race Course Rd",
    offer: "ITEMS AT ₹290",
    link: "https://www.swiggy.com/city/indore/theobroma-near-janjeerwala-square-darshan-mall-race-course-rd-rest882432",
  },
  {
    id: "362169",
    name: "Baskin Robbins - Ice Cream Desserts",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/cf02723a-53a2-4461-8391-4b17473c7718_362169.JPG",
    cuisines: ["Desserts", "Ice Cream"],
    costForTwo: "₹250 for two",
    rating: 4.5,
    deliveryTime: "25-30 mins",
    locality: "44th Scheme",
    area: "Khatiwala",
    offer: "50% OFF UPTO ₹90",
    link: "https://www.swiggy.com/city/indore/baskin-robbins-ice-cream-desserts-44th-scheme-khatiwala-rest362169",
  },
  {
    id: "123456",
    name: "Domino's Pizza",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/ea6ac179-6959-4f3a-9c66-424c2ec79411_698741.JPG",
    cuisines: ["Pizzas", "Italian", "Fast Food"],
    costForTwo: "₹400 for two",
    rating: 4.3,
    deliveryTime: "20-25 mins",
    locality: "MG Road",
    area: "Treasure Island Mall",
    offer: "50% OFF UPTO ₹100",
    link: "https://www.swiggy.com/city/indore/dominos-pizza-mg-road-rest123456",
  },
  {
    id: "789012",
    name: "Barbeque Nation",
    // image: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/20/sample-bbqnation_789012.JPG",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_735128.JPG",

    cuisines: ["Barbecue", "North Indian", "Buffet"],
    costForTwo: "₹1200 for two",
    rating: 4.6,
    deliveryTime: "45-50 mins",
    locality: "Vijay Nagar",
    area: "C21 Mall",
    offer: "FLAT 15% OFF",
    link: "https://www.swiggy.com/city/indore/barbeque-nation-vijay-nagar-c21-mall-rest789012",
  },
  {
    id: "654321",
    name: "McDonald's",
    // image: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/17/sample-mcdonalds_654321.JPG",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f2ac1fad-bff8-4a78-bc9b-f65567f93906_249749.JPG",

    cuisines: ["Burgers", "Fast Food", "Beverages"],
    costForTwo: "₹300 for two",
    rating: 4.1,
    deliveryTime: "20-30 mins",
    locality: "AB Road",
    area: "Raghunathpura",
    offer: "BUY 1 GET 1 FREE",
    link: "https://www.swiggy.com/city/indore/mcdonalds-ab-road-rest654321",
  },
  {
    id: "741852",
    name: "KFC",
    // image: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/sample-kfc_741852.JPG",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_370626.JPG",
    cuisines: ["Fried Chicken", "Burgers", "Fast Food"],
    costForTwo: "₹400 for two",
    rating: 4.0,
    deliveryTime: "25-35 mins",
    locality: "Sapna Sangeeta Road",
    area: "Central Mall",
    offer: "20% OFF UPTO ₹80",
    link: "https://www.swiggy.com/city/indore/kfc-sapna-sangeeta-road-rest741852",
  },
  {
    id: "852963",
    name: "Subway",
    // image: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/30/sample-subway_852963.JPG",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/fd784bec-b152-4926-860d-f6618b459e43_952209.JPG",
    cuisines: ["Healthy Food", "Salads", "Sandwiches"],
    costForTwo: "₹350 for two",
    rating: 4.2,
    deliveryTime: "20-25 mins",
    locality: "Geeta Bhawan",
    area: "New Palasia",
    offer: "FREE Coke on orders above ₹299",
    link: "https://www.swiggy.com/city/indore/subway-geeta-bhawan-new-palasia-rest852963",
  },
];

const Body = () => {
  return (
    <main className="body-container">
      <div className="card-container">
        {resData.map((rest) => (
          <RestaurantCard key={rest.id} {...rest} />
        ))}
      </div>
    </main>
  );
};

export default Body;
