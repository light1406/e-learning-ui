import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
    isLogin: false,
    orderHistory: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        return {
            ...state,
            user: action.payload,
            isLogin: true
        }
    },
    logout: (state, action) => {
      return {
        ...state,
        user: undefined,
        isLogin: false
      }
    },
    setOrderHistory: (state, action) => {
      return {
        ...state,
        orderHistory: action.payload
      }
    }
  }
});

export const {setUser, logout, setOrderHistory} = userSlice.actions;
export default userSlice.reducer;