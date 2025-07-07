import { CDN_URL } from "../Utils/constants";
const Restcarted = (props) => {
  const { restdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restdata?.info;
  const { deliveryTime } = restdata?.info?.sla;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="ret-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <br />
      <h4>{deliveryTime} Mins</h4>
      <h4>{avgRating} ⭐</h4><br />
      <h4>Price:{costForTwo}</h4>
    </div>
  );
};
export default Restcarted;
