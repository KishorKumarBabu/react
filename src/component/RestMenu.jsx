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
    <div className="rest-menu-container">
      <h2>{name}</h2>
      <div className="rest-detail">
        <h4>
          {avgRating}({totalRatingsString}) - {costForTwoMessage}
        </h4>
        <p>{cuisines.join(", ")}</p>
        <p>{sla.slaString}</p>
      </div>

      <h2>MENU</h2>

      <div className="menu-container">
        <ul>
          {itemCards.map((item, index) => (
            <li
              key={`${item.card.info.id || "no-id"}-${index}`}
              className="menu-item"
            >
              <div className="menu-content">
                <h3>{item.card.info.name}</h3>
                <h4>
                  Rs.
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h4>
                 <div className="rating">
                    <h5>{item.card.info.ratings.aggregatedRating.rating}</h5>
                    <p>({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>
                   </div>

                <p>{item.card.info.description}</p>
              </div>
              {
                <div className="menu-image">
                  <img
                    src={
                      item.card.info.imageId
                        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`
                        : "data:image/png;base64,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" // your base64 string
                    }
                    alt={item.card.info.name}
                  />
                  <button className="add-to-card-btn">ADD</button>
                </div>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestMenu;
