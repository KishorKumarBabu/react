import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaruntMenu from "../Utils/useRestaruntMenu";

const RestMenu = () => {
  const { resId } = useParams();

  const restinfo= useRestaruntMenu(resId)

  if (restinfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = restinfo?.cards[2]?.card?.card?.info || {};

  const menuCards = restinfo?.cards?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = menuCards
    ?.filter((c) => c.card?.card?.itemCards)
    ?.flatMap((c) => c.card.card.itemCards);
  if (itemCards === null) return <Shimmer />;

  console.log(itemCards, "CARD DATA");

  return (
   <div className="p-8 max-w-4xl mx-auto my-12 font-sans bg-gray-200 rounded-xl">
  <h2 className="text-3xl font-bold mb-4 text-gray-800">{name}</h2>

  <div className="bg-white p-4 rounded-lg shadow mb-8">
    <h4 className="text-gray-700 mb-1 text-base">
      {avgRating} ({totalRatingsString}) - {costForTwoMessage}
    </h4>
    <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
    <p className="text-gray-500 text-sm">{sla.slaString}</p>
  </div>

  <h2 className="text-2xl font-semibold mb-4 text-gray-800">MENU</h2>

  <div className="space-y-5">
    {itemCards.map((item, index) => (
      <div
        key={`${item.card.info.id || "no-id"}-${index}`}
        className="flex justify-between items-start bg-white p-5 rounded-xl shadow hover:scale-[1.01] transition-transform"
      >
        <div className="flex-1 pr-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {item.card.info.name}
          </h3>
          <h4 className="text-green-500 font-medium mb-2">
            ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </h4>

          <div className="flex items-center gap-2 mb-2">
            <h5 className="text-yellow-500 font-semibold text-sm">
              {item.card.info.ratings?.aggregatedRating?.rating}
            </h5>
            <p className="text-sm text-gray-500">
              ({item.card.info.ratings?.aggregatedRating?.ratingCountV2})
            </p>
          </div>

          <p className="text-sm text-gray-600">
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
          <button className="absolute bottom-1 right-10 bg-gray-100 text-green-500 font-medium text-sm px-4 py-2 rounded-md hover:bg-gray-300 transition">
            ADD
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default RestMenu;
