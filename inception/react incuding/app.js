/*
<div>
<div>
<h1></h1>
</div>
</div>


*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 1"),
    React.createElement("h2", {}, "i am h1 2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/* const heading = React.createElement("h1", { id: "heading" }, "hello world");
const root = ReactDOM.createRoot(document.getElementById("root")); */
/* root.render(heading); */
