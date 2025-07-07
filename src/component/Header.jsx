import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
   const [btnname,setbtnname]=useState("Login") 
   useEffect(()=>{
    console.log("useeffectt called")
   },[btnname])
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="navitem">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>  
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            btnname==="Login" ? setbtnname("Logout") : setbtnname("Login")
            }}>{btnname}</button>
        </ul>
      </div> 
    </div>     
  );
};
export default Header;
