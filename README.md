# react
swiggy API=https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"; // or any cart icon you like
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <li className="relative">
      <Link to="/cart" className="flex items-center gap-2 text-lg font-medium text-gray-700">
        <FiShoppingCart className="text-2xl" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>
    </li>
  );
};


