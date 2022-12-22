import { handleGetLessonVideoById } from "../apis/lessonAPI";
import { put, takeEvery } from 'redux-saga/effects';
import { setLesson } from "../slices/learingSlice";
import { GET_LESSON_VIDEO_BY_ID } from "../types/lessonType";

export function* onHandleGetLessonVideoById(action){
    const lessonVideo = yield handleGetLessonVideoById(action.id);
    yield put(setLesson(lessonVideo));
}

export function* allLessonSaga(){
    yield takeEvery(GET_LESSON_VIDEO_BY_ID, onHandleGetLessonVideoById);
}