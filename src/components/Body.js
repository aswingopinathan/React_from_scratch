import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurantsOriginal, setListOfRestrauntOriginal] = useState([]);
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTextClicked, setSearchTextClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    const dataSourceArr =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestraunt(dataSourceArr);
    setListOfRestrauntOriginal(dataSourceArr);
  };

  return (
    <div className="body">
      <div className="filter" style={{ padding: "10px" }}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          onClick={() => {
            const searchedRestaurants = listOfRestaurantsOriginal.filter(
              (listOfRestaurants) =>
                listOfRestaurants.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setSearchTextClicked(true);
            searchedRestaurants.length
              ? setListOfRestraunt(searchedRestaurants)
              : setListOfRestraunt(listOfRestaurantsOriginal);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          style={{ marginLeft: "20px" }}
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (listOfRestaurant) => listOfRestaurant.info.avgRating > 4.3
            );
            setListOfRestraunt(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setListOfRestraunt(listOfRestaurantsOriginal);
          }}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </div>
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {listOfRestaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
