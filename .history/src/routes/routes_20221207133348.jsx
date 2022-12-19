import config from "@config";

import Home from "@pages/Home/Home";
// Public routes
const publicRoutes = [{ path: config.routes.home, component: Home }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
