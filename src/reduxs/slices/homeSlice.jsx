import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newUpdate: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setNewUpdate: (state, action) => {
        return {
            ...state,
            newUpdate: action.payload
        }
    }
  }
});

export const {setNewUpdate} = homeSlice.actions;
export default homeSlice.reducer;