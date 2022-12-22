import { put, takeEvery } from "redux-saga/effects";
import { handleChangePassword, handleGetUserById, handleGetUserEntityByUserName, handleLoginAccount, handleRegister } from "../apis/userAPIs";
import { setUserForgotPassword } from "../slices/forgotPasswordSlice";
import { setUser } from "../slices/userSlice";
import { CHANGE_PASSWORD, GET_USER_BY_ID, GET_USER_ENTITY_FORGOT_PASSWORD, LOGIN, REGISTER } from "../types/userTypes";

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

export function* onHandleGetUserByUsernameForgot(action){
  const user = yield handleGetUserEntityByUserName(action.username);
  yield put(setUserForgotPassword(user));
  if (!user) action.fail();
  else action.success();
}

export function* onHandleUpdateUser(action) {
  yield handleChangePassword(action.username, action.password);
}

export function* allUserSaga() {
  yield takeEvery(REGISTER, onHandleRegister);
  yield takeEvery(LOGIN, onHandleLogin);
  yield takeEvery(GET_USER_BY_ID, onHandleGetUserById);
  yield takeEvery(GET_USER_ENTITY_FORGOT_PASSWORD, onHandleGetUserByUsernameForgot);
  yield takeEvery(CHANGE_PASSWORD, onHandleUpdateUser);
}
