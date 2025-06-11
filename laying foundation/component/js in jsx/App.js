import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+
const heading = React.createElement("h1", { id: "heading" }, "kishor is here!");
const root = ReactDOM.createRoot(document.getElementById("root"));
/* jsx heading */
const Title =()=> (
  <h1 id="heading" className="root">
    kishor is here by jsx
  </h1>
);
const number=2000
const HeadingCompounent = () => (
  <div id="container">
    {number}
  <h1 className="root">React function compound</h1>
  </div>
);

root.render(<HeadingCompounent/>)
