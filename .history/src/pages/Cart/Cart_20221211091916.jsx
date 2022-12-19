import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  return (
    <div className="container p-6">
      <div className="max-w-[865px] mx-auto my-[40px] bg-lightBlue">
        <h2 className="text-center text-[24px] font-semibold mb-2">
          Xem lại yêu cầu đăng ký
        </h2>
        <div>
          <div className="shadow-sm rounded-md mb-3 relative">
            <div className="flex items-center">
              <img
                src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
                alt=""
                className="w-[180px] h-[160px] shadow-md rounded-md flex-shrink"
              />
              <div className="p-3 flex flex-col flex-grow-[1]">
                <h3 className="text-[20px] font-semibold">
                  Khóa học Content Marketing A-Z - Bí quyết triển khai và sáng
                  tạo content đa kênh
                </h3>
                <div className="flex">
                  <div className="price">470,000đ</div>
                  <div className="price--sale">899,000đ</div>
                  <span className="text-[2rem] ml-auto cursor-pointer">
                    Bỏ khóa này
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="order-box__heading">Chọn phương thức thanh toán</h3>
          <div>
            <div>
              <img
                src="https://kt.city/static/icon-transfer.png"
                alt=""
                className="payment__icon"
              />
              <p className="payment__info">Chuyển khoản ngân hàng</p>
              <div className="payment__desc">Hoàn thành ngay</div>
              <div className="payment__check"></div>
            </div>
            <div>
              <img
                src="https://kt.city/static/icon-momo.png"
                alt=""
                className="payment__icon"
              />
              <p className="payment__info">Ví điện tử MOMO</p>
              <div className="payment__desc">Hoàn thành ngay</div>
              <div className="payment__check"></div>
            </div>
            <div>
              <img
                src="https://kt.city/static/card-visa.png"
                alt=""
                className="payment__icon"
              />
              <p className="payment__info">Thẻ ATM, Visa/Mastercard</p>
              <div className="payment__desc">Hoàn thành ngay</div>
              <div className="payment__check"></div>
            </div>
            <div>
              <img
                src="https://kt.city/static/card-vnpay.png"
                alt=""
                className="payment__icon"
              />
              <p className="payment__info">Quét VNpay QRcode</p>
              <div className="payment__desc">Hoàn thành ngay</div>
              <div className="payment__check"></div>
            </div>
            <div>
              <img
                src="https://kt.city/static/icon-balance.png"
                alt=""
                className="payment__icon"
              />
              <p className="payment__info">Số dư F8</p>
              <div className="payment__desc">Hoàn thành ngay</div>
              <div className="payment__check"></div>
            </div>
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
