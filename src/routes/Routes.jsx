import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Coffees from "../pages/Coffees/CoffeesDropDown";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Contact from "../pages/Contact/Contact";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";
import Update from "../pages/Update/Update";
import PrivateRoute from "./PrivateRoute";

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
        path: "/allCoffees/:category",
        element: <Coffees />,
      },
      {
        path: "/coffeeDetails/:id",
        element: (
          <PrivateRoute>
            <CoffeeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brewbite-server-side.vercel.app/coffees/${params.id}`, {
            credentials: "include",
          }),
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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://brewbite-server-side.vercel.app/orders/${params.id}`, {
            credentials: "include",
          }),
      },
    ],
  },
]);
