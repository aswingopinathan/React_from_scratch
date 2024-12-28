const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    locality,
  } = resData.info;

  return (
    <div className="m-4 p-4 bg-gray-200 hover:bg-gray-400 w-[200px] h-[400px]">
      <img
        className="w-80 h-36 rounded-lg"
        alt="res-logo"
        src={
          cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              cloudinaryImageId
            : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d1e7c643a685fb3413fab51f30d1e95d"
        }
      />
      <h3 className="font-bold py-2 text-lg">{name || ""}</h3>
      <h4>{avgRating || "4.5"} star</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4 className="font-bold">{locality}</h4>

      <h4>{sla.deliveryTime || "10"} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-4 p-2rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
