import Restcarted from "./Restcarted";
import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer"; 

const Body = () => {
  const [listofres,setlistofres]=useState([])
  useEffect(()=>{fetchdata()},[])
 const fetchdata = async()=>{
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&offset=16&page_type=DESKTOP_WEB_LISTING")
  const json= await data.json();
console.log(json)
setlistofres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}

// conditonal rendering

  return listofres.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search food iteam"
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={ ()=> {
         filteredlist= listofres.filter((res)=> res.info.avgRating >4.5);
          setlistofres(filteredlist)
        }}>
          Top Rating
        </button>
      </div>
      <div className="rest-container">
        {listofres .map((restaurant) => (
          <Restcarted key={restaurant.info.id} restdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
