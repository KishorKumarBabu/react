import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);
  //check the only
  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  });

  // boolan
  return onlineStatus;
};

export default useOnlineStatus;
