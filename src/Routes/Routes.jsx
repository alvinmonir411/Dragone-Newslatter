import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout";
import CatagoresNews from "./CatagoresNews";
import Home from "../Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CatagoresNews,
      },
    ],
  },
]);
