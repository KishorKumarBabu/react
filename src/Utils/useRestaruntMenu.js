import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;
    fetchData();
  }, [resId]); // ✅ refetch if restaurant id changes

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const targetUrl = encodeURIComponent(MENU_API_URL + resId);
      const proxyUrl = `https://api.allorigins.win/get?url=${targetUrl}`;

      const response = await fetch(proxyUrl);
      const result = await response.json();
      const json = JSON.parse(result.contents);

      setRestInfo(json?.data || null);
    } catch (err) {
      console.error("AllOrigins fetch error:", err);
      setError("Failed to fetch menu");
    } finally {
      setLoading(false);
    }
  };

  return { restInfo, loading, error };
};

export default useRestaurantMenu;
