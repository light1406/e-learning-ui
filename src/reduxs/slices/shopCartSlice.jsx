import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: []
};

const shopCartSlice = createSlice({
  name: "shop-cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const courses = state.courses;
        for (let i = 0; i < courses.length; i++) {
            if(courses[i].id === action.payload.id){
                window.alert("Bạn đã thêm khóa học này vào giỏ hàng rồi!!");
                return state;
            }
        }
        state.courses.push(action.payload);
        return state;
    },
    deleteFromCart: (state, action) => {
        state.courses.splice(action.payload, 1);
        return state;
    }
  }
});

export const {addToCart, deleteFromCart} = shopCartSlice.actions;
export default shopCartSlice.reducer;