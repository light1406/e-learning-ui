import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
    isLogin: false
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
    }
  }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;