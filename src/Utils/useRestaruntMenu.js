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
    const targetUrl = MENU_API_URL + resId;
    const proxyUrl = `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(targetUrl)}`;

    const response = await fetch(proxyUrl);
    const json = await response.json();

    // Update state with restaurant menu info
    setrestinfo(json.data);
  } catch (error) {
    console.error("Failed to fetch restaurant menu via ThingProxy:", error);
  }
};

  return restinfo;
};

export default useRestaruntMenu;
