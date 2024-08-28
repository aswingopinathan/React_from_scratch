import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    imageId,
    avgRating,
    deliveryTime,
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={imageId?"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + imageId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d1e7c643a685fb3413fab51f30d1e95d"}
      />
      <h3>{resData.text || ''}</h3>
      <h4>{avgRating || '4.5'} stars</h4>
      <h4>{deliveryTime || '10'} minutes</h4>
    </div>
  );
};

export default RestaurantCard;