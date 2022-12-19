import Cart from "@pages/Cart/Cart";

export const publicRoutes = [
  { path: ROUTE_NAME.root, component: Home },
  { path: ROUTE_NAME.order, component: Order, layout: null },
];
export const privateRoutes = [];
