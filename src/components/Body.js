import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  
  useEffect(()=>{
  fetchData()            
  },[])

  const fetchData = async ()=>{
const data = await fetch(SWIGGY_URL)
const json = await data.json()
setListOfRestraunt(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
}

  return (
    <div className="body">
      <div className="filter" style={{padding:'10px'}}>
        <button
          className="filter-btn"
          onClick={() => {
            fetchData()            
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setListOfRestraunt(resList);
          }}
          style={{marginLeft:'10px'}}
        >Reset filter</button>
      </div>
      {listOfRestaurants.length === 0?<Shimmer />:<div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>}
    </div>
  );
};

export default Body;