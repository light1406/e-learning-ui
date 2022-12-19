import React, { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <>
      <div className="flex justify-between">
        <div className="p-[4rem]">
          <Link to="/" className="block mb-[4rem]">
            <img
              src="https://kt.city/static/ktcity-logo.png"
              className="max-h-[3.5rem]"
              alt=""
            />
          </Link>
          <h1 className="text-[2.4rem] text-primary font-bold mb-4">
            {isSignIn ? "Đăng nhập vào KTcity" : "Mở tài khoản"}
          </h1>
          <p className="mb-10">
            Học tập, kết nối, thảo luận & xây dựng thương hiệu cá nhân cùng hơn
            100.000 thành viên khác
          </p>
          <h5 className="mb-1">{isSignIn ? "Đăng nhập" : "Đăng ký"} bằng</h5>
          <div className="grid grid-cols-2 gap-x-[2rem] my-[2rem]">
            <button className="flex items-center justify-center bg-primary py-4 px-6 rounded-xl">
              <img
                className="mr-[1.5rem]"
                src="https://kt.city/static/icon-social-google.svg"
                alt=""
              />
              <span className="font-semibold text-white">Google</span>
            </button>
            <button className="flex items-center justify-center bg-primary py-4  px-6  rounded-xl">
              <img
                className="mr-[1.5rem]"
                src="https://kt.city/static/icon-social-facebook.svg"
                alt=""
              />
              <span className="font-semibold text-white">Facebook</span>
            </button>
          </div>
          <h5 className="mb-[1.5rem]">
            Hoặc
            {isSignIn
              ? " đăng nhập bằng tài khoản"
              : " nhận tài khoản qua email của bạn"}
          </h5>
          <form action="" className="w-full">
            {!isSignIn && (
              <>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 absolute left-0 top-[50%] translate-x-[50%] translate-y-[-85%]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                  />
                </div>
              </>
            )}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 absolute left-0 top-[50%] translate-x-[50%] translate-y-[-85%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="text"
                placeholder="Email của bạn"
                className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
              />
            </div>
            {isSignIn && (
              <>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 absolute left-0 top-[50%] translate-x-[50%] translate-y-[-85%]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="w-full mb-[1.5rem] bg-lightBlue p-4 px-20 rounded-xl"
                  />
                </div>
              </>
            )}
            {isSignIn && (
              <>
                <h3 className="mb-3">
                  <a href="" className="underline">
                    Quên mật khẩu?
                  </a>
                </h3>
              </>
            )}
            <button className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5">
              {isSignIn ? "Đăng nhập vào KTcity" : "Nhận tài khoản qua email"}
            </button>
            <p className="flex gap-x-3">
              {isSignIn ? (
                <>
                  Chưa có tài khoản KTcity?
                  <h3
                    className="underline text-primary cursor-pointer"
                    onClick={() => setIsSignIn(false)}
                  >
                    Đăng ký
                  </h3>
                </>
              ) : (
                <>
                  Chưa có tài khoản KTcity?
                  <h3
                    className="underline text-primary cursor-pointer"
                    onClick={() => setIsSignIn(true)}
                  >
                    Đăng nhập
                  </h3>
                </>
              )}
            </p>
          </form>
        </div>
        <div className="bg-auth min-w-[65%] h-[100vh] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </>
  );
};

export default Auth;
