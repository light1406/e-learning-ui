import categoriesSlice from "./slices/categoriesSlice";
import courseDetailSlice from "./slices/courseDetailSlice";
import shopCartSlice from "./slices/shopCartSlice";
import userSlice from "./slices/userSlice";
import paymentBankingSlice from "./slices/paymentBankingSlice";
import learingSlice from "./slices/learingSlice";
import forgotPasswordSlice from "./slices/forgotPasswordSlice";

export const rootReducer = {
    categories: categoriesSlice,
    courseDetail: courseDetailSlice,
    shopCart: shopCartSlice,
    user: userSlice,
    paymenBanking: paymentBankingSlice,
    learning: learingSlice,
    forgotPassword: forgotPasswordSlice
}