import { createBrowserRouter } from "react-router";
import CatagoresNews from "./CatagoresNews";
import Home from "../Components/Home";
import HomeLayout from "./../Components/HomeLayout";
import About from "./../Components/About";
import Career from "./../Components/Career";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/news.json"),
      },
      {
        path: "category/:id",
        element: <CatagoresNews />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/About",
        Component: About,
      },
      {
        path: "/Career",
        Component: Career,
      },
    ],
  },
]);
