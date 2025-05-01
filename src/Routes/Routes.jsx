import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout";

export const router = createBrowserRouter([
  { path: "/", Component: HomeLayout },
]);
