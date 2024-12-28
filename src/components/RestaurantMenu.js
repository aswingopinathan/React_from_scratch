import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card
      .itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <h3 className="font-bold">{cuisines.join(", ")}</h3>

      {categories.map((cat, index) => (
        <RestaurantCategory
          key={cat.card?.card.title}
          data={cat.card?.card}
          showItems={index === categoryIndex ? true : false}
          setCategoryIndex={() =>
            categoryIndex !== index
              ? setCategoryIndex(index)
              : setCategoryIndex(-1)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
