import config from "@config";
import Home from "@pages/Home";
import Search from "@pages/Search";
import Active from "@pages/CourseActivation";
import Support from "@pages/Support";
import Auth from "@pages/Auth";
import Cart from "@pages/Cart";
import CourseDetail from "@components/CourseDetail";
import Me from "@pages/Me";
import MyClass from "@pages/MyClass";
import MeLayout from "@layouts/MeLayout";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.active, component: Active },
  { path: config.routes.support, component: Support },
  { path: config.routes.auth, component: Auth, layout: null },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.courseDetail, component: CourseDetail },
  { path: config.routes.me, component: Me },
  { path: config.routes.myclass, component: MyClass, layout: MeLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
