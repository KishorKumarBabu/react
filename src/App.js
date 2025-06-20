import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+
import Header from "./component/header";

import Body from "./component/Body";

//header component




const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
