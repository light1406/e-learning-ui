import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Accordion from "@components/Accordion";
import { accordionData } from "@utils";
import Course from "@components/Course";

const CourseDetail = () => {
  const [activedTab, setActivedTab] = useState(1);

  const handleActiveTab = (index) => {
    setActivedTab(index);
    console.log(activedTab);
  };

  return (
    <>
      <div className="bg-bgLightGreen">
        <div className="flex container__page mb-3 items-center gap-x-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#23c27f"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>

          <p className="text-[2rem] font-medium text-lightGreen">
            Dùng ngay mã giảm giá DONTET để giảm thêm 200K bạn nhé 😘
          </p>
        </div>
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
                    className="text-[2rem] p-4 border rounded-lg shadow-md w-full mb-6"
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
      </div>
      <div className="container__page">
        <p className="py-[4rem] text-[1.8rem] px-[18rem]">
          Cryptocurrency hay tiền điện tử là một lĩnh vực rất trending trong
          những năm gần đây. Có rất nhiều nhà đầu tư cá nhân & team đã tạo được
          đòn bẫy tài chính "khủng" từ Crypto. Nhưng cũng do sự mới mẻ đó mà có
          rất nhiều bạn chưa hiểu hết về lĩnh vực này, từ đó dẫn đến những sai
          lầm khi tin theo các dự án kém uy tín để rồi tiền mất tật mang. Trong
          khoá học này, Coin98 - một đơn vị rất uy tín trong cộng đồng Crypto sẽ
          hướng dẫn bạn từng bước về thị trường tiền điện tử & cách để có thể
          đầu tư đúng đắn ngay từ đầu.
        </p>
        {/* Tabs */}
        <div className="border-b-lightBlue border-b" />
        <ul className="flex justify-between pt-8 text-[2rem] border-b-lightBlue border-b mb-20">
          <li
            onClick={() => handleActiveTab(1)}
            className={`${
              activedTab === 1
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <h3 className="">Nội dung học tập</h3>
          </li>
          <li
            onClick={() => handleActiveTab(2)}
            className={`${
              activedTab === 2
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <div className="flex gap-x-3">
              <h3>Đánh giá mới</h3>
              <span className="inline-block px-4 py-1 text-[1.4rem] font-semibold rounded-xl bg-lightBlue">
                200
              </span>
            </div>
          </li>
          <li
            onClick={() => handleActiveTab(3)}
            className={`${
              activedTab === 3
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <h3>Nhận xét học viên</h3>
          </li>
          <li
            onClick={() => handleActiveTab(4)}
            className={`${
              activedTab === 4
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <div className="">Khóa học liên quan</div>
          </li>
          <li
            onClick={() => handleActiveTab(5)}
            className={`${
              activedTab === 5
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <div className="">Q&A</div>
          </li>
        </ul>
        {/* Rate */}
        {activedTab === 2 && (
          <div className="flex flex-col my-6">
            <h3 className="font-semibold">Đánh giá từ học viên</h3>
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <h1 className="text-[6rem] font-semibold text-center">5</h1>
                <ul className="flex justify-between items-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </li>
                </ul>
                <span className="text-[1.4rem]">121 đánh giá</span>
              </div>
              <form action="" className="w-[65%] mx-6">
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
              </form>
            </div>
          </div>
        )}
        {/*Benefit  */}

        {/* Content */}
        {activedTab === 1 && (
          <>
            <h2 className="text-[2.4rem] text-primary font-semibold pl-5 my-[3rem] border-l-2 border-primary">
              Bạn sẽ nhận được
            </h2>
            <ul className="flex flex-wrap justify-between items-start text-[1.8 rem]">
              <li className="w-[calc(50%-2rem)]">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="green"
                    className="w-20 h-10 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>
                    Nắm vững chắc các kiến thức cơ bản về HTML, các thẻ trong
                    HTML – HTML5, cách đặt tên theo chuẩn BEM, học cách sử dụng
                    Class Id và các attributes khác của HTML một cách chỉn chu
                    từ đầu
                  </p>
                </div>
              </li>
              <li className="w-[calc(50%-2rem)]">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="green"
                    className="w-20 h-10 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>
                    Nắm vững chắc các kiến thức cơ bản về HTML, các thẻ trong
                    HTML – HTML5, cách đặt tên theo chuẩn BEM, học cách sử dụng
                    Class Id và các attributes khác của HTML một cách chỉn chu
                    từ đầu
                  </p>
                </div>
              </li>
              <li className="w-[calc(50%-2rem)]">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="green"
                    className="w-20 h-10 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>
                    Nắm vững chắc các kiến thức cơ bản về HTML, các thẻ trong
                    HTML – HTML5, cách đặt tên theo chuẩn BEM, học cách sử dụng
                    Class Id và các attributes khác của HTML một cách chỉn chu
                    từ đầu
                  </p>
                </div>
              </li>
              <li className="w-[calc(50%-2rem)]">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="green"
                    className="w-20 h-10 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>
                    Nắm vững chắc các kiến thức cơ bản về HTML, các thẻ trong
                    HTML – HTML5, cách đặt tên theo chuẩn BEM, học cách sử dụng
                    Class Id và các attributes khác của HTML một cách chỉn chu
                    từ đầu
                  </p>
                </div>
              </li>
              <li className="w-[calc(50%-2rem)]">
                <div className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="green"
                    className="w-20 h-10 mr-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p>
                    Nắm vững chắc các kiến thức cơ bản về HTML, các thẻ trong
                    HTML – HTML5, cách đặt tên theo chuẩn BEM, học cách sử dụng
                    Class Id và các attributes khác của HTML một cách chỉn chu
                    từ đầu
                  </p>
                </div>
              </li>
            </ul>
            <h2 className="text-[2.4rem] text-primary font-semibold pl-5 my-[3rem] border-l-2 border-primary">
              Nội dung học tập
            </h2>

            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </>
        )}
        {/* Comment */}
        {activedTab === 3 && (
          <>
            <div className="p-4 pb-8 border-b border-b-lightBlue mt-8">
              <div className="flex items-center text-[1.8rem] mb-4">
                <img
                  className="w-[4.5rem] h-[4.5rem] mr-6"
                  src="https://kt.city/static/avatar/avatar2.jpg"
                  alt=""
                />
                <h3 className=" font-semibold">Vũ</h3>
                <span className="ml-auto">Gần đây</span>
              </div>
              <p>Rất ô sờ kê</p>
            </div>
            <div className="p-4 pb-8 border-b border-b-lightBlue mt-8">
              <div className="flex items-center text-[1.8rem] mb-4">
                <img
                  className="w-[4.5rem] h-[4.5rem] mr-6"
                  src="https://kt.city/static/avatar/avatar2.jpg"
                  alt=""
                />
                <h3 className=" font-semibold">Vũ</h3>
                <span className="ml-auto">Gần đây</span>
              </div>
              <p>Rất ô sờ kê</p>
            </div>
            <div className="p-4 pb-8 border-b border-b-lightBlue mt-8">
              <div className="flex items-center text-[1.8rem] mb-4">
                <img
                  className="w-[4.5rem] h-[4.5rem] mr-6"
                  src="https://kt.city/static/avatar/avatar2.jpg"
                  alt=""
                />
                <h3 className=" font-semibold">Vũ</h3>
                <span className="ml-auto">Gần đây</span>
              </div>
              <p>Rất ô sờ kê</p>
            </div>
          </>
        )}
        {activedTab === 4 && (
          <>
            <div className="grid grid-cols-3 gap-x-5">
              <Course></Course>
              <Course></Course>
            </div>
          </>
        )}

        {activedTab === 5 && (
          <Accordion
            title="Tôi có được hỗ trợ khi học không ?"
            content="Khi học các bạn sẽ được hỗ trợ khi gặp vấn đề khó khăn từ a đến z"
          ></Accordion>
        )}
      </div>
    </>
  );
};

export default CourseDetail;
