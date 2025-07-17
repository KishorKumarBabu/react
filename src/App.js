import React,{lazy, Suspense, useEffect, useState}  from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestMenu from "./component/RestMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Usercontext from "./component/Usercontext";
import Login from "./component/Login";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./component/Cart";
import { useSelector } from "react-redux"



// app chunking
// code splitting
// dynamic bundling
//lacy loding
//on demand loading
// dynamic import


const AppLayout = () => {

 // authentication
const [userName, setUserName]=useState()

  return (
    <Provider store={appStore}>
    <Usercontext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="App">
      <Header />
      <Outlet/>
    </div>
    </Usercontext.Provider>
    </Provider>
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
      {
        path:"/cart",
         element:<Cart /> 
      },
      {
        path:"/login",
         element:<Login /> 
      }
    ],
    errorElement: <Error />,
  }, 
]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);
