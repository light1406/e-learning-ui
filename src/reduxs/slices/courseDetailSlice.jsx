import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    course: undefined,
};

const courseDetailSlice = createSlice({
  name: "course-detail",
  initialState,
  reducers: {
    setCourse: (state, action) => {
        return {
            ...state,
            course: action.payload
        }
    }
  }
});

export const {setCourse} = courseDetailSlice.actions;
export default courseDetailSlice.reducer;