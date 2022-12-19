import React from "react";

const Auth = () => {
  return (
    <div className="mx-[6rem]">
      <div className="flex justify-between">
        <div className="p-[4rem]">
          <a href="" className="block mb-[4rem]">
            <img
              src="https://kt.city/static/ktcity-logo.png"
              className="max-h-[3.5rem]"
              alt=""
            />
          </a>
          <h1 className="text-[2rem] font-bold mb-4">Đăng nhập vào KTcity</h1>
          <p className="mb-10">
            Học tập, kết nối, thảo luận & xây dựng thương hiệu cá nhân cùng hơn
            100.000 thành viên khác
          </p>
          <h5 className="mb-1">Đăng nhập bằng</h5>
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
          <h5 className="mb-[1.5rem]">Hoặc đăng nhập bằng tài khoản</h5>
          <form action="" className="w-full">
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
            <h3 className="mb-3">
              <a href="" className="underline">
                Quên mật khẩu?
              </a>
            </h3>
            <button className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-4">
              Đăng nhập vào KTcity
            </button>
            <p>
              Chưa có tài khoản KTcity?{" "}
              <a href="" className="underline text-primary">
                Đăng ký
              </a>
            </p>
          </form>
        </div>
        <div className="bg-auth min-w-[65%] h-[100vh]">
          <p>123</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
