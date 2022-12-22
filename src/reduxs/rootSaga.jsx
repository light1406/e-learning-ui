import { all, fork } from 'redux-saga/effects';
import { allCategoriesSaga } from './saga/categoriesSaga';
import { allCourseDetailSaga } from './saga/courseDetailSaga';
import { allOrderSaga } from './saga/orderSaga';
import { allUserSaga } from './saga/userSaga';

export function* rootSaga() {
    yield all([
        fork(allCategoriesSaga),
        fork(allCourseDetailSaga),
        fork(allUserSaga),
        fork(allOrderSaga)
    ]);
}
