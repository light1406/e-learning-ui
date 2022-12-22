import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../../reduxs/types/userTypes";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === "" && password === "")
      alert("Vui lòng điền đầy đủ thông tin!");
    dispatch({
      type: LOGIN,
      username: username,
      password: password,
      success: (userId) => {
        alert("Đăng nhập thành công!");
        sessionStorage.setItem("user-id", userId);
        navigate("/");
      },
      fail: () => {
        alert("Đăng nhập thất bại");
      },
    });
  };

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
            Đăng nhập vào KTcity
          </h1>
          <p className="mb-10">
            Học tập, kết nối, thảo luận & xây dựng thương hiệu cá nhân cùng hơn
            100.000 thành viên khác
          </p>
          <h5 className="mb-[1.5rem]">Đăng nhập bằng tài khoản</h5>

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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <input
                type="text"
                placeholder="Tài khoản"
                value={username}
                onChange={handleChangeUsername}
                className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
              />
            </div>
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
                  value={password}
                  onChange={handleChangePassword}
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 px-20 rounded-xl"
                />
              </div>
            </>
            <>
              <h3 className="mb-3">
                <Link to="/forgot-password" className="underline">
                  Quên mật khẩu?
                </Link>
              </h3>
            </>
            <div
              className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5 text-center cursor-pointer select-none"
              onClick={handleLogin}
            >
              Đăng nhập
            </div>
            <div className="flex gap-x-3">
              <>
                Chưa có tài khoản KTcity?
                <Link to="/register">
                  <h3 className="underline text-primary cursor-pointer">
                    Đăng ký
                  </h3>
                </Link>
              </>
            </div>
          </form>
        </div>
        <div className="bg-auth min-w-[65%] h-[100vh] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </>
  );
};

export default Login;
