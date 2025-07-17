import { createContext } from "react";

const Usercontext = createContext({
  loggedInUser: "Guest",
  setuserName: () => {},
});

export default Usercontext;
