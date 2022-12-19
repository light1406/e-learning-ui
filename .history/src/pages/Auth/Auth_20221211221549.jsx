import React from "react";

const Auth = () => {
  return (
    <div className="mx-[6rem]">
      <div className="flex justify-between">
        <div className="p-[2rem]">
          <a href="block mb-[2rem]">
            <img
              src="https://kt.city/static/ktcity-logo.png"
              className="max-h-[3.5rem]"
              alt=""
            />
          </a>
          <h1>Đăng nhập vào KTcity</h1>
          <p>
            Học tập, kết nối, thảo luận & xây dựng thương hiệu cá nhân cùng hơn
            100.000 thành viên khác
          </p>
          <h5>Đăng nhập bằng</h5>
          <a href="">Google</a>
          <a href="">Facebook</a>

          <h5>Hoặc đăng nhập bằng tài khoản</h5>
          <form action="">
            <input type="text" placeholder="Email của bạn" />
            <input type="password" placeholder="Mật khẩu" />
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
