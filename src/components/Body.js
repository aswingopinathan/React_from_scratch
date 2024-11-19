import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextClicked, setSearchTextClicked] = useState(false);
  let listOfRestaurants = [];
  let listOfRestaurantsOriginal = [];

  const restaurantData = useRestaurantData();

  if (restaurantData && restaurantData.data) {
    const dataSourceArr =
      restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    listOfRestaurants = dataSourceArr;
    listOfRestaurantsOriginal = dataSourceArr;
  }

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>You are offline!!</h1>;

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
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
