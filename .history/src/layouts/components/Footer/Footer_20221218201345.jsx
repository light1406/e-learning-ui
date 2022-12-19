import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className="container pt-[2.5rem] md:pt-[40px] bg-register-expert bg-top bg-cover">
      <div className="grid grid-cols-2 gap-x-1">
        <div className="max-w-[200px] text-[14px]">
          <a href="max-h-[35px]">
            <img
              className="max-h-[35px]"
              src="https://kt.city/static/ktcity-logo.png"
              alt=""
            />
          </a>
          <p className="mt-[20px]">Email: support@kt.city</p>
          <p className="mt-[20px]">Hotline: 02873098979</p>
          <p className="mt-[20px]">Giờ làm việc 8h30-18h từ thứ 2 tới thứ 6.</p>
        </div>
        <div className="max-w-[200px] text-[14px]">
          <h3 className="font-semibold mb-[20px]">Địa chỉ</h3>
          <p className="mt-[20px]">
            202 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP HCM
          </p>
        </div>
        <div className="max-w-[200px] text-[14px]">
          <h3 className="font-semibold mb-[20px]">Hướng dẫn</h3>
          <p className="mt-[20px]">KTcity 101</p>
          <p className="mt-[20px]">Giới thiệu</p>
          <p className="mt-[20px]">Quy chế hoạt động</p>
        </div>
        <div className="max-w-[200px] text-[14px]">
          <h3 className="font-semibold mb-[20px]">Khám phá</h3>
          <p className="mt-[20px]">Solution</p>
          <p className="mt-[20px]">Affiliate Program</p>
          <p className="mt-[20px]">Reviewer Program</p>
          <p className="mt-[20px]">Blog kiến thức</p>
        </div>
        <div className="max-w-[200px] text-[14px]">
          <h3 className="font-semibold mb-[20px]">Liên kết</h3>
          <div className="flex items-baseline justify-between gap-x-4">
            <a className="mt-[20px] p-3 rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="mt-[20px] p-3 rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a className="mt-[20px] p-3 rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a className="mt-[20px] p-3 rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="mt-[20px] p-3 rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <a href="" className="mt-[20px] inline-block">
            <img src="https://kt.city/static/bct.png" alt="" />
          </a>
        </div>
      </div>
      <p className="text-center text-[14px] max-w-[600px] mt-[40px] mx-auto">
        Công ty cổ phần công nghệ giáo dục KTgroup - GCNĐKDN số 0315773194 do Sở
        Kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp lần đầu ngày 05/07/2019.
      </p>
    </section>
  );
};

export default Footer;
