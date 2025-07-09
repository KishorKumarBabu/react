import Restcarted from "./Restcarted";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchText, setsearchtext] = useState("");
  const [filteredrest, setfilteredrest] = useState(listofres);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      // use crosproxy to bypass cors error while diploying to web

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&offset=16&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofres(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus=useOnlineStatus();

  if (onlineStatus===false) return <h1> your offline check your internet connction</h1>

  // conditonal rendering

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search food iteam"
            value={searchText}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredrest = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredrest(filteredrest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredlist = listofres.filter((res) => res.info.avgRating > 4.5);
            setfilteredrest(filteredlist);
          }}
        >
          Top Rating
        </button>
      </div>
      <div className="rest-container">
        {filteredrest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <Restcarted restdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
