import config from "@config";
// Public routes
const publicRoutes = [{ path: config.routes.home, component: Home }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
