import React,{lazy, Suspense}  from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestMenu from "./component/RestMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";




// app chunking
// code splitting
// dynamic bundling
//lacy loding
//on demand loading
// dynamic import
const Grocery=lazy(() => import("./component/Grocery"))

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
        path: "/grocery",
        element: <Suspense fallback={<h1>loading........</h1>}><Grocery /></Suspense> ,
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
