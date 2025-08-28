import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaruntMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;
    fetchData();
  }, [resId]); // ✅ refetch if restaurant id changes

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setrestinfo(json.data);
  };
  return restinfo;
};

export default useRestaruntMenu;
