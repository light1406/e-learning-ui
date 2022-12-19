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
            <input
              type="text"
              placeholder="Email của bạn"
              className="w-full mb-[1.5rem] bg-lightBlue p-4"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full mb-[1.5rem] bg-lightBlue p-4"
            />
            <a href="">Quên mật khẩu</a>
            <button>Đăng nhập vào KTcity</button>
            <p>
              Chưa có tài khoản KTcity? <a href="">Đăng ký</a>
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
