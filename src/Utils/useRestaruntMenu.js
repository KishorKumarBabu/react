import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaruntMenu = (resId) => {
  const [restinfo, setrestinfo] = useState(null);
  // fetch the menu data data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const targetUrl = encodeURIComponent(MENU_API_URL + resId);
      const proxyUrl = `https://thingproxy.freeboard.io/fetch/${targetUrl}`;

      const response = await fetch(proxyUrl);
      const json = await response.json(); // directly usable

      setrestinfo(json.data);
      console.log(json);
    } catch (err) {
      console.error("AllOrigins fetch error:", err);
    }
  };
  return restinfo;
};

export default useRestaruntMenu;
