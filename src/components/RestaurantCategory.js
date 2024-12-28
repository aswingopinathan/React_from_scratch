import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setCategoryIndex }) => {
  const handleClick = () => setCategoryIndex();
  return (
    <div>
      <div className="w-5/12 mx-auto bg-gray-100 shadow-lg p-4 my-4">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "˄" : "˅"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
