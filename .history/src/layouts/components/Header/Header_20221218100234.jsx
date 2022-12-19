import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const isLogged = false;
  const [isSearch, setIsSearch] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const inputSearchRef = useRef();
  const handleSearch = () => {
    setIsSearch(true);
    inputSearchRef.current.focus();
  };
  const handleUnSearch = () => {
    setIsSearch(false);
    inputSearchRef.current.focus();
    inputSearchRef.current.value = "";
  };

  return (
    <div className="py-[1.2rem] relative z-50">
      <div className="lg:container__custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="max-w-[11.5rem]">
            <img
              className="w-full max-h-[3.5rem]"
              src="https://kt.city/static/ktcity-logo.png"
              alt=""
            />
          </Link>
          {toggleSearch && (
            <div className="absolute p-[2rem] inset-0 top-full min-h-[100vh] bg-lightGreen">
              <div className="flex justify-between items-center rounded-2xl">
                <input
                  ref={inputSearchRef}
                  className="lg:min-w-[32rem] w-full py-[1rem] pl-6 rounded-l-full bg-lightBlue placeholder-primary placeholder:text-[#222] placeholder:font-medium"
                  type="text"
                  placeholder="Tìm khóa học, expert..."
                />
                {!isSearch ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon__search bg-backGround"
                    onClick={handleSearch}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon__search bg-lightBlue"
                    onClick={handleUnSearch}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <div
                className={`${
                  isSearch ? "opacity-100 visible" : "opacity-0 invisible"
                } header__searchbox--show`}
              >
                <h4 className="font-semibold mb-[2rem]">Khóa học</h4>
                <p className="hidden">Không tìm thấy khóa học</p>
                <div className="">
                  <a href="" className="flex items-center">
                    <img
                      src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/banner-khoa-hoc-js-ver2-1622631616496.jpg"
                      alt=""
                      className="w-[6rem] h-[6rem] mr-[2rem] rounded-lg shadow-shadowSmall"
                    />
                    <p className="text-[1.4rem] font-medium">
                      Khóa học Javascript từ cơ bản đến nâng cao dành cho người
                      mới
                    </p>
                  </a>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-x-3">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon-8"
                onClick={() => setToggleSearch(!toggleSearch)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <nav>
              <ul className="hidden lg:flex lg:items-center text-[1.8rem]">
                <li className="ml-[4rem]">
                  <Link
                    to="/active"
                    className="flex items-baseline gap-x-3 header__text"
                  >
                    <span>Kích hoạt mã</span>
                  </Link>
                </li>
                <li className="ml-[2.5rem] group/menu-child">
                  <Link
                    to="/categories"
                    className="flex items-center gap-x-3 header__text"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0056d2"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="icon-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                    <span>Khám phá</span>
                  </Link>
                  <div className="header__categories--show">
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
                        className="icon-10 mr-[1.5rem]"
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
                        className="icon-10 mr-[1.5rem]"
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
                        className="icon-10 mr-[1.5rem]"
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
                  className="text-primary border-2 border-primary rounded-full py-3 px-10 text-[1.8rem] font-medium ml-[4rem]"
                >
                  {isLogged ? "Khu vực học tập" : "Đăng nhập"}
                </Link>
                <li className="ml-[2.5rem]">
                  <Link to="/me">
                    <img
                      src="https://kt.city/static/avatar/avatar11.jpg"
                      alt=""
                      className="w-[3.5rem] h-[3.5rem] rounded-full"
                    />
                  </Link>
                </li>
                <li className=""></li>
              </ul>
            </nav>
            <Link to="/cart" className="relative mr-3">
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
              <span className="absolute -right-2 top-[50%] flex items-center justify-center bg-lightRed text-white text-base w-8 h-8  rounded-full">
                0
              </span>
            </Link>
            <div className="lg:hidden">
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
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
