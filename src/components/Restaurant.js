import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage, uniqueId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      <h4>Menu</h4>
      <ul>
        {itemCards.map((itemCard) => (
          <li key={itemCard?.card?.info?.id}>
            {itemCard?.card?.info?.name} -{" "}
            {"Rs. " + itemCard?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
