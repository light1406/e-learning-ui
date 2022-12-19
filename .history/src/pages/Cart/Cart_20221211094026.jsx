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
        <div className="py-6 px-[4rem] bg-white">
          <h3 className="text-[2.4rem] font-semibold mb-10">
            Chọn phương thức thanh toán
          </h3>
          <div className="flex items-center justify-between bg-lightBlue p-6 rounded-xl cursor-pointer">
            <div className="flex items-center">
              <img
                src="https://kt.city/static/icon-transfer.png"
                alt=""
                className="max-w-[4rem] mr-3 "
              />
              <p className="font-semibold">Chuyển khoản ngân hàng</p>
            </div>
            <div className="payment__desc">Hoàn thành ngay</div>
            <input type="radio" />
          </div>
          <div className="flex items-center justify-between bg-lightBlue p-6 rounded-xl cursor-pointer">
            <div className="flex items-center">
              <img
                src="https://kt.city/static/icon-transfer.png"
                alt=""
                className="max-w-[4rem] mr-3 "
              />
              <p className="font-semibold">Chuyển khoản ngân hàng</p>
            </div>
            <div className="payment__desc">Hoàn thành ngay</div>
            <input type="radio" />
          </div>
        </div>
        <div>
          <div>
            <div className="order-total__top">
              <div className="order-price-all">
                <div className="order-price">
                  <div className="price">479,000đ</div>
                  <div className="price--sale">Giá gốc: 899,000đ</div>
                </div>
                <div className="order-saving">Tiết kiệm 47% (420,000đ)</div>
              </div>
              <div className="voucher">
                <div className="voucher-add">
                  <img
                    src="https://kt.city/static/gmb-coupon.png"
                    alt=""
                    className="icon"
                  />
                  <span className="text">Thêm voucher</span>
                </div>
              </div>
            </div>
            <div className="user-info">
              <div className="user-info__header">
                <h3 className="user-info__title">Thông tin cá nhân</h3>
              </div>
              <div className="user-info__item">
                <FontAwesomeIcon icon={faUser} />
                <span className="user-info__text">Tran Doan Kien Thuc</span>
              </div>
              <div className="user-info__item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="user-info__text">
                  19130227@st.hcmuaf.edu.vn
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn btn--complete">
          <FontAwesomeIcon className="icon point-none" icon={faAngleRight} />
          <span>Hoàn tất đăng ký</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
