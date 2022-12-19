import config from "@config";
import Home from "@pages/Home";
import Order from "@pages/Order";
import Search from "@pages/Search";
import Active from "@pages/Active";
import Help from "@pages/Help";
import SignIn from "@pages/SignIn";
import Cart from "@pages/Cart";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.active, component: Active },
  { path: config.routes.help, component: Help },
  { path: config.routes.signIn, component: SignIn },
  { path: config.routes.cart, component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
