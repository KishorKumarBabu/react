import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaruntMenu from "../Utils/useRestaruntMenu";
import Rescatagory from "./Rescatagory";

const RestMenu = () => {
  const { resId } = useParams();

  const restinfo = useRestaruntMenu(resId);

  const [showIndex, setshowIndex] = useState(0);

  if (restinfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = restinfo?.cards[2]?.card?.card?.info || {};
  console.log(restinfo);

  const itemCards =
    restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
      .itemCards || {};

  const catagories =
    restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(catagories, "catagorys");
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

      <div className="flex items-center justify-center gap-2 my-4">
        <span className="text-gray-400 text-2xl">✦─── </span>
        <h2 className="text-xl font-bold">MENU</h2>
        <span className="text-gray-400 text-2xl"> ───✦</span>
      </div>

      {/*  menu */}

      {catagories?.map((catagory, index) => (
        <Rescatagory
          key={catagory.card.card.title || catagory.card.card.categoryId}
          data={catagory.card.card}
          showItem={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestMenu;
