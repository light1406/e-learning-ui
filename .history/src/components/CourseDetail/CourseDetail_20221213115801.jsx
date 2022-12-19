import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
const CourseDetail = () => {
  return (
    <div className="container">
      <div className="pb-[12rem] pt-[6rem] bg-hero px-[8rem]  bg-cover bg-no-repeat bg-center">
        <div className="flex items-center justify-center gap-x-[1rem] max-w-[18rem] mx- text-white tex-[2.8rem] font-semibold bg-primary py-3 rounded-xl mb-[2.5rem]">
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
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>12345 đang học</span>
        </div>
        <h1 className="text-white text-[3rem] font-semibold mb-[3rem]">
          Khoá học đầu tư Crypto 101 - Từng bước để hiểu và đầu tư đúng đắn
          trong thị trường tiền điện tử.
        </h1>
        <div className="flex items-center justify-between w-[calc(60%_-_2rem)] text-[2.4rem] text-white mb-[3rem]">
          <a href="" className="text-primary font-semibold">
            Bởi: <span>Madihu</span>
          </a>
          <h4>
            Cập nhật <span>08/2022</span>
          </h4>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[calc(60%_-_2rem)]">
            <img
              src="https://static.kt.city/ck7ogwf9m04zh0872r31is970/photo_2020-08-11_17-27-31-1597141668992.jpg"
              alt=""
              className="max-h-[35rem] cursor-zoom-in"
            />
            <ul className="flex justify-between p-4 bg-lightBlue rounded-b-xl">
              <li>
                <img src="" alt="" className="w-[8rem] h-[8rem]" />
              </li>
              <li>
                <img src="" alt="" className="w-[8rem] h-[8rem]" />
              </li>
              <li>
                <img src="" alt="" className="w-[8rem] h-[8rem]" />
              </li>
              <li>
                <img src="" alt="" className="w-[8rem] h-[8rem]" />
              </li>
              <li>
                <img src="" alt="" className="w-[8rem] h-[8rem]" />
              </li>
              <li>
                <img src="" alt="" className="w-[8rem] h-[8rem]" />
              </li>
            </ul>
          </div>
          <div className="px-12 py-10 bg-white rounded-2xl text-[2.4rem] w-[calc(40%_-_3rem)]">
            <div className="">
              <span className="line-through">2412312đ</span>
              <div className="flex justify-between items-center mb-[2rem]">
                <h2 className="font-semibold text-primary text-[3rem]">
                  123123đ
                </h2>
                <h4 className="text-[1.8rem] px-3 py-2 bg-lightBlue rounded-2xl">
                  Tiết kiệm 20%
                </h4>
              </div>
              <form action="">
                <input
                  className="text-[2rem] p-2 border rounded-lg shadow-md w-full mb-6"
                  type="text"
                  placeholder="Tên của bạn"
                />
                <input
                  className="text-[2rem] p-2 border rounded-lg shadow-md w-full mb-6"
                  type="text"
                  placeholder="Email của bạn"
                />
                <button className="bg-primary w-full p-2 rounded-2xl text-white ">
                  Đăng ký học (online)
                </button>
                <h6 className="text-[1.8rem] text-center my-6">
                  Hoàn tất đăng ký bằng
                </h6>
                <div className="text-[1.8rem] flex items-center justify-between gap-x-5">
                  <div className="bg-lightBlue rounded-xl w-[50%] py-4 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      color="rgb(56, 92, 168)"
                    ></FontAwesomeIcon>
                    <span className="ml-3">Facebook</span>
                  </div>
                  <div className="bg-lightBlue rounded-xl px-10 w-[50%] py-4 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      color="rgb(221, 75, 57)"
                      fontSize="1.8rem"
                    ></FontAwesomeIcon>
                    <span className="ml-3">Google</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-[4rem] text-[1.8rem] ">
        Cryptocurrency hay tiền điện tử là một lĩnh vực rất trending trong những
        năm gần đây. Có rất nhiều nhà đầu tư cá nhân & team đã tạo được đòn bẫy
        tài chính "khủng" từ Crypto. Nhưng cũng do sự mới mẻ đó mà có rất nhiều
        bạn chưa hiểu hết về lĩnh vực này, từ đó dẫn đến những sai lầm khi tin
        theo các dự án kém uy tín để rồi tiền mất tật mang. Trong khoá học này,
        Coin98 - một đơn vị rất uy tín trong cộng đồng Crypto sẽ hướng dẫn bạn
        từng bước về thị trường tiền điện tử & cách để có thể đầu tư đúng đắn
        ngay từ đầu.
      </p>
      {/* Tabs */}
      <div className="border-b-lightBlue border-b" />
      <ul className="flex justify-between p-8 text-[2rem] border-b-lightBlue border-b">
        <li className="cursor-pointer font-semibold active:text-primary active:border-b-primary">
          <div className="">Nội dung học tập</div>
        </li>
        <li>
          <div className="">
            Đánh giá mới <span>200</span>
          </div>
        </li>
        <li>
          <div className="">
            Nhận xét học viên<span>200</span>
          </div>
        </li>
        <li>
          <div className="">Khóa học liên quan</div>
        </li>
        <li>
          <div className="">Q&A</div>
        </li>
      </ul>
      {/* Rate */}
      <div className="flex flex-col">
        <h3>Đánh giá từ học viên</h3>
        <div className="">
          <div className="">
            <h1>5</h1>
            <ul>
              <li>*</li>
              <li>*</li>
              <li>*</li>
              <li>*</li>
              <li>*</li>
            </ul>
            <span>121 đánh giá</span>
          </div>
          <div className="">
            <form action="">
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-primary h-2.5 rounded-full w-[80%]"></div>
                </div>
                <ul>
                  <li>*</li>
                </ul>
                <span>83%</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
