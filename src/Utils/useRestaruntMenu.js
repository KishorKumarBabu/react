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
    const proxyUrl = `https://api.allorigins.win/get?url=${targetUrl}`;
    const response = await fetch(proxyUrl);
    const result = await response.json();
    const json = JSON.parse(result.contents);
    setrestinfo(json.data);
  } catch (err) {
    console.error("AllOrigins fetch error:", err);
  }
};


  return restinfo;
};

export default useRestaruntMenu;
