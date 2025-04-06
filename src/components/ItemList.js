import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return items.map((item) => (
    <div
      data-testid="foodItems"
      key={item.card?.info?.id}
      className="border-b-2 my-2 p-2 text-left"
    >
      <div className="flex justify-between">
        <div className="w-9/12">
          <div>
            {item.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
              <span className="text-xs">🟢</span>
            ) : (
              <span className="text-xs">🔴</span>
            )}
          </div>
          <div>
            <span className="font-bold text-sm">{item.card?.info?.name}</span>
          </div>
          <div>
            <span className="font-bold text-sm">
              ₹{" "}
              {item.card?.info?.finalPrice / 100 ||
                item.card?.info?.defaultPrice / 100 ||
                item.card?.info?.price / 100}
            </span>
          </div>
          <div className="pb-8">
            <p className="text-sm text-gray-500">
              {item.card?.info?.description}
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs">
          <div className="p-2 relative">
            <div>
              <img
                src={CDN_URL + item.card?.info?.imageId}
                className="w-[156px] h-[144px] object-cover rounded-lg"
              />
            </div>
            <button
              className="absolute w-32 h-9 bg-white hover:bg-gray-300 text-green-600 font-bold text-lg rounded bottom-[-5px] left-1/2 transform -translate-x-1/2 shadow-md flex items-center justify-center"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
          <p className="mt-2">Customizable</p>
        </div>
      </div>
    </div>
  ));
};

export default ItemList;
