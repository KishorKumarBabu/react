import { CDN_URL } from "../Utils/constants";
const Restcarted = (props) => {
  const { restdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restdata?.info;
  const { deliveryTime } = restdata?.info?.sla;
  return (
    <div
      className="w-[200px] h-[300px] m-5 ml-10 rounded-[10px] shadow-[4px_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out hover:scale-105 hover:border hover:border-black"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="w-full h-[150px] object-cover rounded-[10px]"
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
      />
      <h3 className="m-[5px] text-[17px] font-bold">{name}</h3>

      {/* Cuisines with 2-line ellipsis */}
      <h4 className="mx-[5px] mb-[2px] text-[15px] text-gray-700 line-clamp-1">
        {cuisines.join(", ")}
      </h4>

      {/* Ratings & delivery */}
      <div className="flex mx-[5px] gap-1 text-[14px] text-gray-700">
        <span>{deliveryTime} Mins</span>
        <span>•</span>
        <span>{avgRating} ⭐</span>
      </div>

      {/* Cost */}
      <h4 className="mx-[5px] mt-[2px] text-[15px] text-gray-800">
        Price: {costForTwo}
      </h4>
    </div>
  );
};

export const isopenlable = (Restcarted) => {
  return (props) => {
    return (
      <div className="rest-card relative group hover:scale-105 transition-all">
        <label className="absolute bg-black text-white italic text-[10px] p-1 px-3 ml-10 rounded-md shadow-2xl  z-10">
          Open
        </label>
        <Restcarted {...props} />
      </div>
    );
  };
};
export default Restcarted;
