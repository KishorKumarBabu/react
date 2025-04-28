import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+
const heading = React.createElement("h1", { id: "heading" }, "kishor is here!");
const root = ReactDOM.createRoot(document.getElementById("root"));
/* jsx heading */
const jsxheading = (
  <h1 id="heading" className="root">
    kishor is here by jsx
  </h1>
);

root.render(jsxheading);
