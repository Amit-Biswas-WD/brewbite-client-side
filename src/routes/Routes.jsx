import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Coffees from "../pages/Coffees/Coffees";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allCoffees",
        element: <Coffees />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
