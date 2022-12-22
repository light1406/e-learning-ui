import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    course: undefined,
    lesson: undefined,
};

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {
    setCourseLearning: (state, action) => {
        return {
            ...state,
            course: action.payload
        }
    },
    setLesson: (state, action) => {
        return {
            ...state,
            lesson: action.payload
        }
    }
  }
});

export const {setCourseLearning, setLesson} = learningSlice.actions;
export default learningSlice.reducer;