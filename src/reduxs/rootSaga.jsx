import { all, fork } from 'redux-saga/effects';
import { allCategoriesSaga } from './saga/categoriesSaga';
import { allCourseDetailSaga } from './saga/courseDetailSaga';
import { allUserSaga } from './saga/userSaga';

export function* rootSaga() {
    yield all([
        fork(allCategoriesSaga),
        fork(allCourseDetailSaga),
        fork(allUserSaga)
    ]);
}
