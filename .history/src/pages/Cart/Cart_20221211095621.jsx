import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  return (
    <div className="container p-6 bg-lightBlue">
      <div className="max-w-[865px] mx-auto my-[40px] ">
        <h2 className="text-center text-[32px] font-bold my-[4rem]">
          Xem lại yêu cầu đăng ký
        </h2>
        <div className="shadow-xl p-6 mb-[2rem] bg-white rounded-2xl">
          <div className="flex items-center">
            <img
              src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
              alt=""
              className="w-[180px] h-[160px] shadow-md rounded-md flex-shrink"
            />
            <div className="flex flex-col flex-grow-[1] p-6">
              <h3 className="text-[20px] font-semibold  mb-3">
                Khóa học Content Marketing A-Z - Bí quyết triển khai và sáng tạo
                content đa kênh
              </h3>
              <div className="flex gap-x-[4rem] items-center">
                <div className="text-[2.4rem] font-semibold text-primary">
                  470,000đ
                </div>
                <div className="line-through">899,000đ</div>
                <span className="text-[2rem] text-primary ml-auto cursor-pointer">
                  Bỏ khóa này
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl p-6 mb-[2rem] bg-white rounded-2xl">
          <div className="flex items-center">
            <img
              src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
              alt=""
              className="w-[180px] h-[160px] shadow-md rounded-md flex-shrink"
            />
            <div className="flex flex-col flex-grow-[1] p-6">
              <h3 className="text-[20px] font-semibold  mb-3">
                Khóa học Content Marketing A-Z - Bí quyết triển khai và sáng tạo
                content đa kênh
              </h3>
              <div className="flex gap-x-[4rem] items-center">
                <div className="text-[2.4rem] font-semibold text-primary">
                  470,000đ
                </div>
                <div className="line-through">899,000đ</div>
                <span className="text-[2rem] text-primary ml-auto cursor-pointer">
                  Bỏ khóa này
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-xl p-6 mb-[2rem] bg-white rounded-2xl">
          <div className="flex items-center">
            <img
              src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
              alt=""
              className="w-[180px] h-[160px] shadow-md rounded-md flex-shrink"
            />
            <div className="flex flex-col flex-grow-[1] p-6">
              <h3 className="text-[20px] font-semibold  mb-3">
                Khóa học Content Marketing A-Z - Bí quyết triển khai và sáng tạo
                content đa kênh
              </h3>
              <div className="flex gap-x-[4rem] items-center">
                <div className="text-[2.4rem] font-semibold text-primary">
                  470,000đ
                </div>
                <div className="line-through">899,000đ</div>
                <span className="text-[2rem] text-primary ml-auto cursor-pointer">
                  Bỏ khóa này
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-[4rem] bg-white rounded-2xl">
          <h3 className="text-[2.4rem] font-semibold mb-10">
            Chọn phương thức thanh toán
          </h3>
          <div className="flex items-center justify-between bg-lightBlue p-6 rounded-xl cursor-pointer">
            <div className="flex items-center w-[50%]">
              <img
                src="https://kt.city/static/icon-transfer.png"
                alt=""
                className="max-w-[4rem] mr-6"
              />
              <p className="font-semibold">Chuyển khoản ngân hàng</p>
            </div>
            <div className="payment__desc">Hoàn thành ngay</div>
            <input type="radio" />
          </div>
          <div className="flex items-center justify-between bg-lightBlue p-6 rounded-xl cursor-pointer">
            <div className="flex items-center w-[50%]">
              <img
                src="https://kt.city/static/icon-momo.png"
                alt=""
                className="max-w-[4rem] mr-6 "
              />
              <p className="font-semibold">Ví điện tử Momo</p>
            </div>
            <div className="payment__desc">Hoàn thành ngay</div>
            <input type="radio" />
          </div>
        </div>
        <div className="mt-[2rem] py-6 px-[4rem] bg-backGround rounded-2xl">
          <div className="flex items-center justify-between ">
            <div className="">
              <div className="flex items-center gap-x-5">
                <div className="text-[2.4rem] font-semibold text-primary">
                  479,000đ
                </div>
                <div className="text-lightBlack">Giá gốc: 899,000đ</div>
              </div>
              <div className="px-4 py-2 text-primary bg-lightBlue inline-block rounded-xl">
                Tiết kiệm 47% (420,000đ)
              </div>
            </div>
            <div className="cursor-pointer p-6 bg-lightBlue rounded-xl">
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
          <div className="p-4">
            <div className="mb-2">
              <h3 className="user-info__title">Thông tin cá nhân</h3>
            </div>
            <div className="mb-2">
              <FontAwesomeIcon icon={faUser} />
              <span className="ml-2 user-info__text">Tran Doan Kien Thuc</span>
            </div>
            <div className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="user-info__text">19130227@st.hcmuaf.edu.vn</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-primary text-center mt-5 p-6 rounded-xl text-white">
          <FontAwesomeIcon className="point-none mr-3" icon={faAngleRight} />
          <span>Hoàn tất đăng ký</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
