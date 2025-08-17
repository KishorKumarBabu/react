import React, { useContext, useEffect, useState, Suspense } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Game from "./Game";
import Usercontext from "./Usercontext";

// Lazy load restaurant cards
const Restcarted = React.lazy(() => import("./Restcarted"));
import { isopenlable } from "./Restcarted";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchText, setsearchtext] = useState("");
  const [filteredrest, setfilteredrest] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // show first 12 initially

  const Restcartedisopen = isopenlable(Restcarted);

  // fetch data
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      // check cache
      const cachedData = localStorage.getItem("restaurants");
      if (cachedData) {
        const json = JSON.parse(cachedData);
        setlistofres(json);
        setfilteredrest(json);
        return;
      }

      const targetUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&offset=16&page_type=DESKTOP_WEB_LISTING";
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        targetUrl
      )}`;

      const response = await fetch(proxyUrl);
      const data = await response.json();
      const json = JSON.parse(data.contents);

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setlistofres(restaurants);
      setfilteredrest(restaurants);
      localStorage.setItem("restaurants", JSON.stringify(restaurants)); // cache
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText) {
        setfilteredrest(
          listofres.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      } else {
        setfilteredrest(listofres);
      }
    }, 400); // debounce 400ms

    return () => clearTimeout(timer);
  }, [searchText, listofres]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <Game />;

  const { setuserName, loggedInUser } = useContext(Usercontext);

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search + Filter */}
      <div className="filter">
        <div className="text-center p-2">
          <input
            className="bg-transparent border-b-2 border-gray-300 w-1/2 mt-2 p-2 focus:outline-none"
            type="text"
            placeholder="Search food item"
            value={searchText}
            onChange={(e) => setsearchtext(e.target.value)}
          />
        </div>

        <button
          className="flex ml-[70px] px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-md"
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

      {/* Restaurants */}
      <div className="flex flex-wrap justify-center">
        <Suspense fallback={<Shimmer />}>
          {filteredrest.slice(0, visibleCount).map((restaurant) => (
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
        </Suspense>
      </div>

      {/* Load More Button */}
      {visibleCount < filteredrest.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 active:scale-95"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
