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

import Payment from "@pages/Payment";
import Withdrawal from "@pages/Withdrawal";
import WithdrawalHistory from "@pages/WithdrawalHistory";
import Categories from "@pages/Categories";
import Coming from "@pages/Coming";
import Trending from "@pages/Trending";
import ForgotPassword from "@pages/ForgotPassword";

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
  { path: config.routes.myClass, component: MyClass, layout: MeLayout },
  { path: config.routes.profile, component: Profile, layout: MeLayout },
  { path: config.routes.myRecommend, component: MyRecommend, layout: MeLayout },
  { path: config.routes.balance, component: Balance, layout: MeLayout },
  {
    path: config.routes.forgotPassword,
    component: ForgotPassword,
    layout: null,
  },
  {
    path: config.routes.orderHistory,
    component: OrderHistory,
    layout: MeLayout,
  },
  {
    path: config.routes.userPayment,
    component: Payment,
    layout: MeLayout,
  },
  {
    path: config.routes.withdrawal,
    component: Withdrawal,
    layout: MeLayout,
  },
  {
    path: config.routes.withdrawalHistory,
    component: WithdrawalHistory,
    layout: MeLayout,
  },
  {
    path: config.routes.withdrawalHistory,
    component: WithdrawalHistory,
    layout: MeLayout,
  },
  {
    path: config.routes.categories,
    component: Categories,
  },
  {
    path: config.routes.trending,
    component: Trending,
  },
  {
    path: config.routes.coming,
    component: Coming,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
