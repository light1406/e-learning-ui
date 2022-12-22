import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v1, v3, v4, v5 } from "uuid";
import { REGISTER } from "../../reduxs/types/userTypes";
import emailjs from "@emailjs/browser";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fname, setFName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [mode, setMode] = useState(0);
  const [otpInput, setOtpInput] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleChangeFname = (event) => {
    setFName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSetPhone = (event) => {
    setPhone(event.target.value);
  };

  const handleRegister = () => {
    if (passwordConfirm !== password) {
      alert("Nhập lại mật khẩu và mật khẩu không khớp!");
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      alert("Email phải có đuôi @gmail.com");
    }
    if (
      username === "" ||
      password === "" ||
      fname === "" ||
      email === "" ||
      phone === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    const newOtp = v4().split("-")[0];
    console.log(newOtp);
    setOtp(newOtp);


    emailjs.send("service_wtkc6ze", "template_h1w3e8g", {
      email: email,
      otp: newOtp
    }, 'MM3hXVFkAaxVbf0kK');

    setMode(1);
  };

  const handleSubmitOTP = () => {
    const user = {
      id: v1().split("-")[0],
      fname: fname,
      age: age,
      email: email,
      phone: phone,
    };
    const account = {
      username: username,
      password: password,
      user: user,
    };
    if (otpInput !== otp) {
      alert('OTP không chính xác')
      return;
    }
    dispatch({
      type: REGISTER,
      account: account,
      success: () => {
        alert("Đăng ký thành công");
        navigate("/login");
      },
      fail: () => {
        alert("Tài khoản bị trùng kìa");
      },
    });
  }

  return (
    <>
      {mode == 0 && (
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
              Tạo tài khoản
            </h1>
            <p className="mb-10">
              Học tập, kết nối, thảo luận & xây dựng thương hiệu cá nhân cùng
              hơn 100.000 thành viên khác
            </p>
            <form action="" className="w-full">
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
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={handleChangeUsername}
                    className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                  />
                </div>
              </>
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
                  placeholder="Nhập lại mật khẩu"
                  value={passwordConfirm}
                  onChange={handleChangePasswordConfirm}
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 px-20 rounded-xl"
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
                  placeholder="Họ và tên"
                  value={fname}
                  onChange={handleChangeFname}
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <input
                  type="number"
                  placeholder="Tuổi"
                  value={age}
                  onChange={handleChangeAge}
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
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleChangeEmail}
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Số điện thoại"
                  value={phone}
                  onChange={handleSetPhone}
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-20 rounded-xl"
                />
              </div>
              <div
                className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5 text-center select-none cursor-pointer"
                onClick={handleRegister}
              >
                Đăng ký
              </div>
              <div className="flex gap-x-3">
                <>
                  Chưa có tài khoản KTcity?
                  <Link to="/login">
                    <h3 className="underline text-primary cursor-pointer">
                      Đăng nhập
                    </h3>
                  </Link>
                </>
              </div>
            </form>
          </div>
          <div className="bg-auth min-w-[65%] h-[100vh] bg-no-repeat bg-center bg-cover"></div>
        </div>
      )}
      {mode == 1 && (
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
              Xác nhận OTP
            </h1>
            <p className="mb-10">
              Mã OTP đã được gửi vào mail của bạn hãy kiểm tra.
            </p>
            <form action="" className="w-full">
              <div>
                <input
                  type="text"
                  placeholder="OTP"
                  className="w-full mb-[1.5rem] bg-lightBlue p-4 pl-10 rounded-xl"
                  value={otpInput}
                  onChange={(event) => setOtpInput(event.target.value)}
                />
              </div>
              <div
                className="bg-primary w-full p-4 rounded-xl text-white font-semibold mb-5 text-center select-none cursor-pointer"
                onClick={handleSubmitOTP}
              >
                Xác nhận
              </div>
              <div className="flex gap-x-3">
                <>
                  Chưa có tài khoản KTcity?
                  <Link to="/login">
                    <h3 className="underline text-primary cursor-pointer">
                      Đăng nhập
                    </h3>
                  </Link>
                </>
              </div>
            </form>
          </div>
          <div className="bg-auth min-w-[65%] h-[100vh] bg-no-repeat bg-center bg-cover"></div>
        </div>
      )}
    </>
  );
};

export default Register;
