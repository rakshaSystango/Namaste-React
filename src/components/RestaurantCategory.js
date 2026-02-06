import { FaAngleDown } from "react-icons/fa6";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <>
      {/* accordion header */}
      <div>
        <div
          className="flex items-center justify-between py-3 cursor-pointer"
          onClick={handleClick}
        >
          <h1 className="font-bold">
            {data.title} ({data.itemCards.length})
          </h1>
          <FaAngleDown />
        </div>
        {/* accordion cody */}
        {showItems && <ItemList items={data.itemCards} />}
        <div className="border-b-10 border-gray-200"></div>
      </div>
    </>
  );
};

export default RestaurantCategory;
