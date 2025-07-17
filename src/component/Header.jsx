import { LOGO_URL } from "../Utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { FiShoppingCart } from "react-icons/fi"; 
import Usercontext from "./Usercontext";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(Usercontext);
  const navigate = useNavigate();

  // subscrbing the store using selector

  const cartItem = useSelector((store)=> store.cart.items)

  const handleAuthClick = () => {
    if (btnName === "Login") {
      navigate("/login"); 
    } else {
      setbtnName("Login");
      setUserName(null); // clear user on logout
    }
  };

  // Update button label when user logs in
  if (loggedInUser && btnName === "Login") {
    setbtnName("Logout");
  }

  return (
    
    <div className="flex  justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.25)] rounded-[10px] m-2 p-2">
      {/* Logo */}
      <div >
        <img className="w-[125px] rounded-[10px]" src={LOGO_URL} alt="logo" />
      </div>

      {/* Navigation Items */}
      <div>
        <ul className="flex items-center list-none text-[20px] gap-10">
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
              <li className="relative">
      <Link to="/cart" className="flex items-center gap-2 text-lg font-medium text-gray-700">
        <FiShoppingCart className="text-2xl" />
        {cartItem.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItem.length}
          </span>
        )}
      </Link>
    </li>
          <li >
        <button
          className="px-4 py-2 bg-gray-200 rounded-[10px]"
          onClick={handleAuthClick}
        >
          {btnName}
        </button>
      </li>
      {loggedInUser && (
        <li>
          <div className="w-8 mr-4 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center font-bold">
            {loggedInUser.charAt(0).toUpperCase()}
          </div>
        </li>
      )}

        </ul>
      </div>
    </div>
  );
};

export default Header;
