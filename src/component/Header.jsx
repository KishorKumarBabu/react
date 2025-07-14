import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.25)] rounded-[10px] m-2 p-2">
      {/* Logo */}
      <div>
        <img className="w-[75px] rounded-[10px]" src={LOGO_URL} alt="logo" />
      </div>

      {/* Navigation Items */}
      <div>
        <ul className="flex items-center list-none text-[20px] gap-10">
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li className="pr-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-[10px]"
              onClick={() =>
                setbtnname((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnname}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
