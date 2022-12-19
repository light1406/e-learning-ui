import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    courseFilters: []
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
        return {
            ...state,
            categories: action.payload
        }
    },
    setCoursesFilter: (state, action) => {
        return {
            ...state,
            courseFilters: action.payload
        }
    }
  }
});

export const {setCategories, setCoursesFilter} = categoriesSlice.actions;
export default categoriesSlice.reducer;