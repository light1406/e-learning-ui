import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { deleteFromCart } from "../../reduxs/slices/shopCartSlice";
import { setOrderId } from "../../reduxs/slices/paymentBankingSlice";
import { PAYMENT_BANKING } from "../../reduxs/types/orderTypes";

const Cart = () => {
  const courses = useSelector((state) => state.shopCart.courses);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteFromCart = (index) => {
    dispatch(deleteFromCart(index));
  };

  const getTotals = () => {
    let total = 0;
    courses.forEach((course) => {
      total += course.price;
    });
    return total;
  };

  const handlePaymentBanking = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    const courseIds = [];
    courses.forEach((course) => {
      courseIds.push({
        id: course.id,
      });
    })
    const order = {
      id: v4().split("-")[0],
      status: "Đang đợi thanh toán",
      purchaseDate: new Date(),
      user: {
        id: user.id,
      },
      courses: courseIds
    }
    dispatch({
      type: PAYMENT_BANKING,
      order: order,
      success: () => {
        alert("Đơn hàng của bạn đã được thêm vào csdl, vui lòng thanh toán!");
        dispatch(setOrderId(order.id));
        navigate('/payment-banking');
      },
      fail: () => {
        alert("thanh toán thất bại!");
      }
    })
  }

  return (
    <div className="container p-6">
      <div className="max-w-[865px] mx-auto my-[40px] ">
        <h2 className="text-center text-[32px] font-bold my-[4rem]">
          Xem lại yêu cầu đăng ký
        </h2>
        <div className="shadow-xl p-6 mb-[2rem] bg-white rounded-2xl">
          {courses.map((course, index) => {
            return (
              <div className="flex items-center">
                <img
                  src={course.coverUrl}
                  alt=""
                  className="w-[180px] h-[160px] shadow-md rounded-md flex-shrink"
                />
                <div className="flex flex-col flex-grow-[1] p-6">
                  <h3 className="text-[20px] font-semibold  mb-3">
                    {course.title}
                  </h3>
                  <div className="flex gap-x-[4rem] items-center">
                    <div className="text-[2.4rem] font-semibold text-primary">
                      {course.price} $
                    </div>
                    <span
                      className="text-[2rem] text-primary ml-auto cursor-pointer"
                      onClick={() => {
                        handleDeleteFromCart(index);
                      }}
                    >
                      Bỏ khóa này
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="shadow-xl mt-[2rem] py-6 px-[4rem] bg-backGround rounded-2xl">
          <div className="flex items-center justify-between ">
            <div className="">
              <div className="flex items-center gap-x-5">
                <div className="text-[2.4rem] font-semibold text-primary">
                  Tổng giá: {getTotals()} $
                </div>
              </div>
            </div>
            <div className="cursor-pointer px-6 py-4 bg-lightBlue rounded-xl">
              <div className="flex items-center justify-center gap-x-4">
                <img
                  src="https://kt.city/static/gmb-coupon.png"
                  alt=""
                  className="max-w-[4rem]"
                />
                <span className="text">Thêm voucher</span>
              </div>
            </div>
          </div>
          <div className="p-4 mt-[2rem]">
            <div className="mb-2">
              <h3 className="font-semibold">Thông tin cá nhân</h3>
            </div>
            <div className="mb-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <span className="ml-3 user-info__text">Tran Doan Kien Thuc</span>
            </div>
            <div className="mb-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-3 user-info__text">
                19130227@st.hcmuaf.edu.vn
              </span>
            </div>
          </div>
        </div>
        <div className="shadow-xl py-6 px-[4rem] bg-white rounded-2xl">
          <h3 className="text-[2.4rem] font-semibold mb-10">
            Chọn phương thức thanh toán
          </h3>
          <div className="flex items-center justify-between shadow-inner p-6 rounded-xl cursor-pointer">
            <div className="flex items-center w-[50%]">
              <img
                src="https://kt.city/static/icon-transfer.png"
                alt=""
                className="max-w-[4rem] mr-6"
              />
              <p className="font-semibold">Chuyển khoản ngân hàng</p>
            </div>
            <div className="payment__desc" onClick={handlePaymentBanking}>Thanh toán</div>
          </div>
          <div className="flex items-center justify-between shadow-inner p-6 rounded-xl cursor-pointer">
            <div className="flex items-center w-[50%]">
              <img
                src="https://kt.city/static/icon-momo.png"
                alt=""
                className="max-w-[4rem] mr-6 "
              />
              <p className="font-semibold">Ví điện tử Momo</p>
            </div>
            <div className="payment__desc">Thanh toán</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
