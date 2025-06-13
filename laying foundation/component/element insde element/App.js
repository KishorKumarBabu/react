import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+

const elem=<span>react element</span>
/* jsx heading */
const title = (
  <h1 id="heading" className="root">
    {
      elem
    }
    kishor is here by jsx
  </h1>
);
const number=2000 
const HeadingCompounent = () => (
  <div id="container">
    {title}
  <h1 className="root">React function compound</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompounent/>)