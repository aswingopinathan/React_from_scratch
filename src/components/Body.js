import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextClicked, setSearchTextClicked] = useState(false);
  const { loggedInUser, setUserName } = useContext(UserContext);
  let listOfRestaurants = [];
  let listOfRestaurantsOriginal = [];

  const restaurantData = useRestaurantData();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (restaurantData && restaurantData.data) {
    const dataSourceArr =
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    listOfRestaurants = dataSourceArr;
    listOfRestaurantsOriginal = dataSourceArr;
  }

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>You are offline!!</h1>;

  return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="bg-green-100 px-4 py-1 ml-4 rounded-lg"
            data-testid="searchInput"
            onClick={() => {
              const searchedRestaurants = listOfRestaurantsOriginal.filter(
                (listOfRestaurants) =>
                  listOfRestaurants.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setSearchTextClicked(true);
              searchedRestaurants.length
                ? (listOfRestaurants = searchedRestaurants)
                : (listOfRestaurants = listOfRestaurantsOriginal);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            style={{ marginLeft: "20px" }}
            onClick={() => {
              const topRated = listOfRestaurants.filter(
                (listOfRestaurant) => listOfRestaurant.info.avgRating > 4.5
              );
              listOfRestaurants = topRated;
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="mt-4 pt-4">
          <button
            className="px-4 py-2 bg-red-100 rounded-lg"
            onClick={() => {
              listOfRestaurants = listOfRestaurantsOriginal;
            }}
          >
            Reset
          </button>
        </div>
        <div className="mt-4 pt-4">
          <label className="mx-4">Live-Username: </label>
          <input
            className="border-black border-2 my-2 px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {listOfRestaurants?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.5 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
