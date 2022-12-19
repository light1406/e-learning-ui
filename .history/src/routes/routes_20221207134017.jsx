import config from "@config";

import Home from "@pages/Home";
import Order from "@pages/Order";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.orrder, component: Order },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
