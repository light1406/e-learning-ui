import { put, takeEvery } from "redux-saga/effects";
import { handleGetAllCourse, handleGetCategories, handleGetCourseByCategory } from "../apis/categoriesAPIs"
import { setCategories, setCoursesFilter } from "../slices/categoriesSlice";
import { FILTER_COURSE, GET_ALL_COURSE, GET_CATEGORIES } from "../types/categoriesTypes";

export function* onHandleGetCategories() {
    const categories = yield handleGetCategories();
    yield put(setCategories(categories));
}

export function* onHandleGetCoursesByCategories(action){
    const courses = yield handleGetCourseByCategory(action.category);
    yield put(setCoursesFilter(courses));
}

export function* onHandleGetAllCourses(){
    const courses = yield handleGetAllCourse();
    yield put(setCoursesFilter(courses));
}

export function* allCategoriesSaga(){
    yield takeEvery(GET_CATEGORIES, onHandleGetCategories);
    yield takeEvery(FILTER_COURSE, onHandleGetCoursesByCategories);
    yield takeEvery(GET_ALL_COURSE, onHandleGetAllCourses);
}