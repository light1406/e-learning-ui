import config from "@config";
import Home from "@pages/Home";
import Search from "@pages/Search";
import Active from "@pages/CourseActivation";
import Support from "@pages/Support";
import Auth from "@pages/Auth";
import Cart from "@pages/Cart";
import CourseDetail from "@components/CourseDetail";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.active, component: Active },
  { path: config.routes.support, component: Support },
  { path: config.routes.auth, component: Auth, layout: null },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.courseDetail, component: CourseDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
