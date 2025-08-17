import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaruntMenu";
import Rescatagory from "./Rescatagory";

const RestMenu = () => {
  const { resId } = useParams();
  const { restInfo, loading, error } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (loading) return <Shimmer />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!restInfo) return <div>No data found</div>;

  // find restaurant info (instead of hardcoding cards[2])
  const restaurantInfoCard = restInfo?.cards?.find(
    (c) => c?.card?.card?.info
  );
  const {
    name,
    cuisines = [],
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = restaurantInfoCard?.card?.card?.info || {};

  // find the "REGULAR" menu block safely
  const regularCards =
    restInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  // extract categories
  const categories = regularCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="p-8 max-w-4xl mx-auto my-12 font-sans bg-gray-200 rounded-xl">
      {/* Restaurant Info */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{name}</h2>

      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h4 className="text-gray-700 mb-1 text-base">
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h4>
        <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
        <p className="text-gray-500 text-sm">{sla?.slaString}</p>
      </div>

      {/* Menu Title */}
      <div className="flex items-center justify-center gap-2 my-4">
        <span className="text-gray-400 text-2xl">✦─── </span>
        <h2 className="text-xl font-bold">MENU</h2>
        <span className="text-gray-400 text-2xl"> ───✦</span>
      </div>

      {/* Categories */}
      {categories.length === 0 ? (
        <p className="text-gray-500 text-center">No menu available</p>
      ) : (
        categories.map((category, index) => (
          <Rescatagory
            key={
              category.card.card.title || category.card.card.categoryId || index
            }
            data={category.card.card}
            showItem={index === showIndex}
            setshowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))
      )}
    </div>
  );
};

export default RestMenu;

