import Restcarted from "./Restcarted";
import reslist from "../Utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="search-bar" type="text" placeholder="Search food iteam" />
        <button className="search-btn">Search</button>
      </div>
      <div className="rest-container">
        {reslist.map((restaurant)=>(
          <Restcarted key={restaurant.info.id} restdata={restaurant}/>
        ))}

      </div>
    </div>
  );
};
export default Body