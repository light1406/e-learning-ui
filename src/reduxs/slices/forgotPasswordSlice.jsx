import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  otp: "",
};

const forgotPasswordSlice = createSlice({
  name: "forgot-password",
  initialState,
  reducers: {
    setUserForgotPassword: (state,action) => {
        return {
            ...state,
            user: action.payload
        }
    },
    setOTP: (state,action) => {
        return {
            ...state,
            otp: action.payload
        }
    }
  },
});

export const { setUserForgotPassword,setOTP } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
