import Home from "../pages/Home/Home";
import Order from "../pages/Home/Home";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/order",
    component: Order,
  },
];

export const privateRoutes = [];
