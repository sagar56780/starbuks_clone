import React from "react";
import Dashboard from "./Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Gift from "./component/Gift";
import Home from "./component/Home";
import Pay from "./component/Pay";
import Store from "./component/Store";
const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children:[
        {
        path:'/home',
        element:<Home/>
        },
        {
          path:'/gift',
          element:<Gift/>
        },
        {
          path:'/pay',
          element:<Pay/>
        },
        {
          path:'/store',
          element:<Store/>
        }

    ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
