import config from "@config";
import Home from "@pages/Home";
import Search from "@pages/Search";
import Active from "@pages/CourseActivation";
import Support from "@pages/Support";
import Auth from "@pages/Auth";
import MeLayout from "@layouts/MeLayout";
import Cart from "@pages/Cart";
import CourseDetail from "@components/CourseDetail";
import Me from "@pages/Me";
import Profile from "@pages/Profile";
import MyRecommend from "@pages/MyRecommend";
import Balance from "@pages/Balance";
import OrderHistory from "@pages/OrderHistory";
import MyClass from "@pages/MyClass";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.search, component: Search },
  { path: config.routes.active, component: Active },
  { path: config.routes.support, component: Support },
  { path: config.routes.auth, component: Auth, layout: null },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.courseDetail, component: CourseDetail },
  { path: config.routes.me, component: Me, layout: MeLayout },
  { path: config.routes.myclass, component: MyClass, layout: MeLayout },
  { path: config.routes.profile, component: Profile, layout: MeLayout },
  { path: config.routes.myRecommend, component: MyRecommend, layout: MeLayout },
  { path: config.routes.balance, component: Balance, layout: MeLayout },
  {
    path: config.routes.orderHistory,
    component: OrderHistory,
    layout: MeLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
