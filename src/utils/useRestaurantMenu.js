import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchData();
  }, []);

  const [resInfo, setResInfo] = useState(null);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
