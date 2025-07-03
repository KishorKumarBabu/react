import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>  
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
