import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Accordion from "@components/Accordion";

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
      {/* Content course */}
      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              What is Flowbite?
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          class="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Is there a Figma file available?
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          class="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              What are the differences between Flowbite and Tailwind UI?
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          class="hidden"
          aria-labelledby="accordion-open-heading-3"
        >
          <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
