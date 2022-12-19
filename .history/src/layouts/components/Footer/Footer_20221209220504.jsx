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
    <div className="pt-[40px]">
      <div className="container grid grid-cols-5">
        <div className="text-[14px]">
          <a href=""></a>
          <p className="mt-[20px]">Email: support@kt.city</p>
          <p className="mt-[20px]">Hotline: 02873098979</p>
          <p className="mt-[20px]">Giờ làm việc 8h30-18h từ thứ 2 tới thứ 6.</p>
        </div>
        <div className="text-[14px]">
          <h3 className="font-semibold mb-[20px]">Địa chỉ</h3>
          <p className="mt-[20px]">
            202 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP HCM
          </p>
        </div>
        <div className="text-[14px]">
          <h3 className="font-semibold mb-[20px]">Hướng dẫn</h3>
          <p className="mt-[20px]">KTcity 101</p>
          <p className="mt-[20px]">Giới thiệu</p>
          <p className="mt-[20px]">Quy chế</p>
          <p className="mt-[20px]">hoạt động</p>
        </div>
        <div className="text-[14px]">
          <h3 className="font-semibold mb-[20px]">Khám phá</h3>
          <p className="mt-[20px]">Solution</p>
          <p className="mt-[20px]">Affiliate Program</p>
          <p className="mt-[20px]">Reviewer Program</p>
          <p className="mt-[20px]">Blog kiến thức</p>
        </div>
        <div className="text-[14px]">
          <h3 className="font-semibold mb-[20px]">Liên kết</h3>
          <div className="flex items-baseline justify-between gap-x-4">
            <a className="mt-[20px] p-4 rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="mt-[20px] p-4 rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a className="mt-[20px] p-4 rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a className="mt-[20px] p-4 rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="mt-[20px] p-4 rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center shadow-md cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <a href="">
            <img src="https://kt.city/static/bct.png" alt="" />
          </a>
        </div>
      </div>
      <p>
        Công ty cổ phần công nghệ giáo dục KTgroup - GCNĐKDN số 0315773194 do Sở
        Kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp lần đầu ngày 05/07/2019.
      </p>
    </div>
  );
};

export default Footer;
