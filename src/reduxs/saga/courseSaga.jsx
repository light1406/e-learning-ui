import { handleGetNewUpdate } from "../apis/courseAPIs";
import { setNewUpdate } from "../slices/homeSlice";
import { put, takeEvery } from 'redux-saga/effects';
import { GET_NEW_UPDATE } from "../types/homeTypes";

export function* onHandleGetNewUpdate(){
    const courses = yield handleGetNewUpdate();
    yield put(setNewUpdate(courses));
}

export function* allHomeSaga(){
    yield takeEvery(GET_NEW_UPDATE, onHandleGetNewUpdate);
}