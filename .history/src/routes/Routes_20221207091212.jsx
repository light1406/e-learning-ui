import Home from "../pages/Home";
import Order from "../pages/Home";

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
