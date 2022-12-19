import { put, takeEvery } from "redux-saga/effects";
import { handleGetCourseDetailById } from "../apis/courseDetailAPIs";
import { setCourse } from "../slices/courseDetailSlice";
import { GET_COURSE_BY_ID } from "../types/courseDetailTypes";

export function* onHandleGetCourseById(action){
    const course = yield handleGetCourseDetailById(action.id);
    yield put(setCourse(course));
}

export function* allCourseDetailSaga(){
    yield takeEvery(GET_COURSE_BY_ID, onHandleGetCourseById);
}