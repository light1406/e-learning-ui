import { put, takeEvery } from "redux-saga/effects";
import { handleGetCourseDetailById } from "../apis/courseDetailAPIs";
import { setCourse } from "../slices/courseDetailSlice";
import { setCourseLearning, setLesson } from "../slices/learingSlice";
import {
  GET_COURSE_BY_ID,
  GET_COURSE_BY_ID_LEARNING,
} from "../types/courseDetailTypes";

export function* onHandleGetCourseById(action) {
  const course = yield handleGetCourseDetailById(action.id);
  yield put(setCourse(course));
}

export function* onHandleGetCourseByIdForLearning(action) {
  const course = yield handleGetCourseDetailById(action.id);
  yield put(setCourseLearning(course));
  if (course.chapters.length > 0 && course.chapters[0].lessonVideos.length > 0)
    yield put(setLesson(course.chapters[0].lessonVideos[0]));
}

export function* allCourseDetailSaga() {
  yield takeEvery(GET_COURSE_BY_ID, onHandleGetCourseById);
  yield takeEvery(GET_COURSE_BY_ID_LEARNING, onHandleGetCourseByIdForLearning);
}
