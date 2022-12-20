import categoriesSlice from "./slices/categoriesSlice";
import courseDetailSlice from "./slices/courseDetailSlice";
import shopCartSlice from "./slices/shopCartSlice";
import userSlice from "./slices/userSlice";

export const rootReducer = {
    categories: categoriesSlice,
    courseDetail: courseDetailSlice,
    shopCart: shopCartSlice,
    user: userSlice
}