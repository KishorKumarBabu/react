import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestMenu from "./component/RestMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestMenu/>
      },
    ],
    errorElement: <Error />,
  }, 
]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);
