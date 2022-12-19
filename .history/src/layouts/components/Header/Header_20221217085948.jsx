import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const isLogged = false;
  return (
    <div className="py-[1.2rem] relative z-50">
      <div className="container">
        <div className="flex items-center">
          <Link to="/" className="max-w-[11.5rem]">
            <img
              className="w-full max-h-[3.5rem]"
              src="https://kt.city/static/ktcity-logo.png"
              alt=""
            />
          </Link>
          <div className="relative ml-auto">
            <div className="relative flex justify-between items-center rounded-2xl">
              <input
                className="min-w-[32rem] py-[1rem] pl-6 pr-16 rounded-full bg-lightBlue placeholder-primary placeholder:text-[#222] placeholder:font-medium"
                type="text"
                placeholder="Tìm khóa học, expert..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 absolute right-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="mt-[5rem] px-[3rem] py-[2rem] rounded-xl absolute left-0 shadow-shadowSmall bg-backGround before:absolute before:content-[''] before:w-[4rem] before:h-[4rem] before:bg-backGround before:rotate-45 before:right-3 before:translate-y-[-50%] before:rounded-md before:-z-1 before:shadow-shadow before:border before:border-lightBlue">
              <h4 className="font-semibold mb-[2rem]">Khóa học</h4>
              <p className="hidden">Không tìm thấy khóa học</p>
              <div className="">
                <a href="" className="flex items-center">
                  <img
                    src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/banner-khoa-hoc-js-ver2-1622631616496.jpg"
                    alt=""
                    className="w-[6rem] h-[6rem] mr-[2rem] rounded-lg shadow-2xl"
                  />
                  <p className="text-[1.4rem] font-medium">
                    Khóa học Javascript từ cơ bản đến nâng cao dành cho người
                    mới
                  </p>
                </a>
              </div>
            </div>
          </div>
          <nav>
            <ul className="flex items-center text-[1.8rem]">
              <li className="ml-[4rem]">
                <Link
                  to="/active"
                  className="flex items-baseline gap-x-3 px-4 py-4 rounded text-[1.8rem] font-medium"
                >
                  <span>Kích hoạt mã</span>
                </Link>
              </li>
              <li className="ml-[2.5rem] group/menu-child">
                <Link
                  to="/categories"
                  className="flex items-center gap-x-3 px-4 py-4 rounded text-[1.8rem] font-medium "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0056d2"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                  <span>Khám phá</span>
                </Link>
                <div
                  className="shadow-shadowSmall border border-lightBlue group-hover/menu-child:flex hidden items-center mt-[4rem] p-[2.5rem] absolute font-medium bg-backGround rounded-2xl whitespace-nowrap after:absolute after:content-[''] 
                after:cursor-pointer after:h-[4.25rem] after:left-0 after:top-0 after:w-full after:-translate-y-full before:absolute before:content-[''] before:top-0 before:left-[3rem] before:w-[5rem] before:h-[5rem] before:rotate-45 before:-translate-y-[20%] before:bg-backGround before:-z-1 before:rounded-lg"
                >
                  <Link
                    to="/categories"
                    className="flex items-center whitespace-nowrap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#0056d2"
                      className="w-10 h-10 mr-[1.5rem]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                    <span>Danh mục</span>
                  </Link>
                  <Link
                    to="/coming"
                    className="mx-[2.5rem] px-[2.5rem] flex items-center  border-x border-x-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#23c27f"
                      className="w-10 h-10 mr-[1.5rem]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Sắp ra mắt</span>
                  </Link>
                  <Link to="/trending" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="rgb(250, 94, 94)"
                      className="w-10 h-10 mr-[1.5rem]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                    <span to="/trending">Trending</span>
                  </Link>
                </div>
              </li>
              <Link
                to="/support"
                className="text-[1.8rem] font-medium ml-[4rem]"
              >
                Hỗ trợ
              </Link>
              <Link
                to="/auth"
                className="border-2 border-primary rounded-full py-3 px-10 text-[1.8rem] font-medium ml-[4rem]"
              >
                {isLogged ? "Khu vực học tập" : "Đăng nhập"}
              </Link>
              <li className="ml-[2.5rem]">
                <Link to="#">
                  <img
                    src="https://kt.city/static/avatar/avatar11.jpg"
                    alt=""
                    className="w-[3.5rem] h-[3.5rem] rounded-full"
                  />
                </Link>
              </li>
              <Link to="/cart" className="ml-[2.5rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[2.8rem] h-[2.8rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
