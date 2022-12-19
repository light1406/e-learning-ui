import { ROUTE_NAME } from "./RouterConst";

import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";

export const publicRoutes = [
  { path: ROUTE_NAME.root, component: Home },
  { path: ROUTE_NAME.order, component: Order },
];
export const privateRoutes = [];
