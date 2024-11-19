import { useEffect, useState } from "react";
import { SWIGGY_URL } from "./constants";

const useRestaurantData = () => {
  const [restaurantData, setRestaurantData] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setRestaurantData(json);
  };
  return restaurantData;
};

export default useRestaurantData;
