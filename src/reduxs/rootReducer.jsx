import categoriesSlice from "./slices/categoriesSlice";
import courseDetailSlice from "./slices/courseDetailSlice";
import shopCartSlice from "./slices/shopCartSlice";

export const rootReducer = {
    categories: categoriesSlice,
    courseDetail: courseDetailSlice,
    shopCart: shopCartSlice,
}