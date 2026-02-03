import React, {  useEffect, useState } from "react";
import { mockMenuData } from "./mocData";

const useRestaurantMenu = () => {
      const [resInfo, setResInfo] = useState(null);
    
  useEffect(() => {
    // For this learning project, just use local mock data
    // console.log("Route restaurant id (mocked):", resId);
    setResInfo(mockMenuData.data);
  }, []);


  return resInfo;
};

export default useRestaurantMenu;
