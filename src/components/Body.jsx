import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const appRouter = createBrowserRouter([
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/browse",
      element: <Browse />,
   },
]);

const Body = () => {
   return (
      <div>
         <RouterProvider router={appRouter} />
      </div>
   );
};

export default Body;
