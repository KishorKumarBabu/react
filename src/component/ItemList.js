import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cardSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  const handeladdItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="space-y-5 my-8 ">
      {items?.map((item, index) => (
        <div
          key={`${item.card.info.id || "no-id"}-${index}`}
          className="flex justify-between items-start bg-gray-50 p-5 rounded-xl shadow-2xl hover:scale-[1.01] transition-transform"
        >
          <div className="flex-1 pr-6">
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {item.card.info.name}
            </h3>
            <h4 className="text-green-500 font-medium mb-2">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </h4>

            <div className="flex items-center gap-2 mb-2">
              <h5 className="text-yellow-500 font-semibold text-sm">
                {item.card.info.ratings?.aggregatedRating?.rating || " "}
              </h5>
              {item.card.info.ratings?.aggregatedRating?.ratingCountV2 && (
                <p className="text-sm text-gray-500">
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </p>
              )}
            </div>

            <p className="text-xs text-gray-600">
              {item.card.info.description}
            </p>
          </div>

          <div className="relative w-36 min-w-[150px] h-[120px] rounded-lg overflow-hidden bg-gray-200">
            <img
              src={
                item.card.info.imageId
                  ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`
                  : "data:image/png;base64,iVBORw0K..." // fallback base64 string
              }
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              className="absolute bottom-1 right-10 bg-gray-100 text-green-500 font-medium text-sm px-4 py-2 rounded-md hover:bg-gray-300 transition"
              onClick={() => handeladdItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
