import { handleGetUserById, handleLoginAccount, handleRegister } from "../apis/userAPIs";
import { put, takeEvery } from "redux-saga/effects";
import { GET_USER_BY_ID, LOGIN, REGISTER } from "../types/userTypes";
import { setUser } from "../slices/userSlice";

export function* onHandleRegister(action) {
  const user = yield handleRegister(action.account);
  if (user) {
    action.success();
  } else {
    action.fail();
  }
}

export function* onHandleLogin(action) {
  const user = yield handleLoginAccount(action.username, action.password);
  if (user) {
    action.success(user.id);
  } else {
    action.fail();
  }
}

export function* onHandleGetUserById(action) {
    const user = yield handleGetUserById(action.id);
    yield put(setUser(user));
}

export function* allUserSaga() {
  yield takeEvery(REGISTER, onHandleRegister);
  yield takeEvery(LOGIN, onHandleLogin);
  yield takeEvery(GET_USER_BY_ID, onHandleGetUserById);
}
