import { handleGetOrderByUserId, handlePaymentBanking } from "../apis/orderAPIs";
import { put, takeEvery } from 'redux-saga/effects'
import { GET_ORDER_BY_USER_ID, PAYMENT_BANKING } from "../types/orderTypes";
import { setOrderHistory } from "../slices/userSlice";

export function* onHandlePaymentBanking(action) {
    const order = yield handlePaymentBanking(action.order);
    if (order){
        action.success();
    }else{
        action.fail();
    }
};

export function* onHandleGetOrderByUserId(action){
    const orders = yield handleGetOrderByUserId(action.userId);
    yield put(setOrderHistory(orders));
}

export function* allOrderSaga(){
    yield takeEvery(PAYMENT_BANKING, onHandlePaymentBanking);
    yield takeEvery(GET_ORDER_BY_USER_ID, onHandleGetOrderByUserId);
}