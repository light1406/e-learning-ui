import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { setOTP } from "../../reduxs/slices/forgotPasswordSlice";
import { CHANGE_PASSWORD, GET_USER_ENTITY_FORGOT_PASSWORD } from "../../reduxs/types/userTypes";
import emailjs from "@emailjs/browser";

const FortgotPassword = () => {
  const [mode, setMode] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const user = useSelector(state => state.forgotPassword.user);
  const otp = useSelector(state => state.forgotPassword.otp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetEmail = () => {
    dispatch({
      type: GET_USER_ENTITY_FORGOT_PASSWORD,
      username: username,
      fail: () => {
        alert('username không tồn tại');
        return;
      },
      success: () => {
        setMode(1)
      }
    })
  };

  const handleGetOTP = () => {
    if (email != user.email){
      alert('Email không đúng');
      return;
    }
    const newOTP = v4().split('-')[0];
    dispatch(setOTP(newOTP))
    emailjs.send("service_wtkc6ze", "template_h1w3e8g", {
      email: user.email,
      otp: newOTP
    }, 'MM3hXVFkAaxVbf0kK');
    setMode(2);
  }

  const handleSubmitOTP = () => {
    console.log(otpInput);
    console.log(otp);
    if(otpInput !== otp){
      alert('OTP không đúng');
      return;
    }
    setMode(3);
  }

  const handleChangePassword = () => {
    if(password != passwordConfirm){
      alert('Password không trùng');
      return;
    }
    dispatch({
      type: CHANGE_PASSWORD,
      username: username,
      password: password
    });
    navigate('/login');
  }

  return (
    <>
      <div className="flex justify-between">
        {mode == 0 && (
          <div className="p-[4rem]">
            <Link to="/" className="block mb-[4rem]">
              <img
                src="https://kt.city/static/ktcity-logo.png"
                className="max-h-[3.5rem]"
                alt=""
              />
            </Link>
            <h1 className="text-[2.4rem] text-primary font-bold mb-4">
              Quên mật khẩu?
            </h1>
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
                  placeholder="username của bạn"
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>

              <div className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5 select-none cursor-pointer" onClick={handleGetEmail}>
                Bước tiếp theo
              </div>
            </form>
          </div>
        )}
        {mode == 1 && (
          <div className="p-[4rem]">
            <Link to="/" className="block mb-[4rem]">
              <img
                src="https://kt.city/static/ktcity-logo.png"
                className="max-h-[3.5rem]"
                alt=""
              />
            </Link>
            <h1 className="text-[2.4rem] text-primary font-bold mb-4">
              Quên mật khẩu?
            </h1>
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
                  placeholder="email của bạn"
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}/>
              </div>

              <div className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5" onClick={handleGetOTP}>
                Nhận otp
              </div>
            </form>
          </div>
        )}
        {mode == 2 && (
          <div className="p-[4rem]">
            <Link to="/" className="block mb-[4rem]">
              <img
                src="https://kt.city/static/ktcity-logo.png"
                className="max-h-[3.5rem]"
                alt=""
              />
            </Link>
            <h1 className="text-[2.4rem] text-primary font-bold mb-4">
              Quên mật khẩu?
            </h1>
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
                  placeholder="Nhập OTP"
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                  value={otpInput}
                  onChange={(event) => setOtpInput(event.target.value)}
                />
              </div>

              <div className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5" onClick={handleSubmitOTP}>
                Xác nhận
              </div>
            </form>
          </div>
        )}
        {mode == 3 && (
          <div className="p-[4rem]">
            <Link to="/" className="block mb-[4rem]">
              <img
                src="https://kt.city/static/ktcity-logo.png"
                className="max-h-[3.5rem]"
                alt=""
              />
            </Link>
            <h1 className="text-[2.4rem] text-primary font-bold mb-4">
              Quên mật khẩu?
            </h1>
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
                  placeholder="Mật khẩu"
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Nhập lại mật khẩu"
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                  value={passwordConfirm}
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                />
              </div>

              <div className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5" onClick={handleChangePassword}>
                Xác nhận
              </div>
            </form>
          </div>
        )}
        <div className="bg-auth min-w-[65%] h-[100vh] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </>
  );
};

export default FortgotPassword;
