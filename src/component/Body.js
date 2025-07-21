import Restcarted, { isopenlable } from "./Restcarted";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Game from "./Game";
import Usercontext from "./Usercontext";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchText, setsearchtext] = useState("");
  const [filteredrest, setfilteredrest] = useState(listofres);

  const Restcartedisopen = isopenlable(Restcarted);

  console.log("list of res", listofres);
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <Game />;
  const { setuserName, loggedInUser } = useContext(Usercontext);
  // conditonal rendering

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="text-center p-2">
          <input
            className="bg-transparent border-b-2 border-gray-300 w-1/2 mt-2 p-2 focus:outline-none"
            type="text"
            placeholder="Search food item"
            value={searchText}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            className="ml-2 p-2 bg-gray-300 rounded text-[17px] italic hover:text-white"
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
          className=" flex ml-[70px] px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-md"
          onClick={() => {
            const filteredlist = listofres.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredrest(filteredlist);
          }}
        >
          Top Rating
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredrest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <Restcartedisopen restdata={restaurant} />
            ) : (
              <Restcarted restdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
