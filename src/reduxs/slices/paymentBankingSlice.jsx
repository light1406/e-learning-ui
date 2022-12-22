import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId: undefined
};

const paymentBankingSlice = createSlice({
  name: "payment-banking",
  initialState,
  reducers: {
    setOrderId: (state, action) => {
        return {
            ...state,
            orderId: action.payload
        }
    }
  }
});

export const {setOrderId} = paymentBankingSlice.actions;
export default paymentBankingSlice.reducer;