import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Coffees from "../pages/Coffees/Coffees";

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
        path: "/alCoffees",
        element: <Coffees />,
      },
    ],
  },
]);
