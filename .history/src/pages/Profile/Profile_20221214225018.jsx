import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 className="heading mb-5">Thông tin cá nhân</h1>
      <p className="">
        Cập nhật đầy đủ thông tin của bạn để hoạt động tốt hơn trên KTcity
      </p>
      <div className="p-6">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center justify-center w-full p-10">
            <div className="w-[14rem] h-[14rem">
              <img
                src="https://static.kt.city/ckosiwwbe0c1r92qngxj311sv/kjj-1671032276291.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          <form action="" className="w-full">
            <div className="border-[1px] border-lightBlue mb-4 p-4 rounded-2xl relative">
              <input type="text" placeholder="Họ và tên" className="w-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 absolute right-4 top-[50%] translate-y-[-50%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="border-[1px] border-lightBlue mb-4 p-4 rounded-2xl relative">
              <input type="text" placeholder="Họ và tên" className="w-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 absolute right-4 top-[50%] translate-y-[-50%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <input
              type="email"
              value="19130227@st.hcmuaf.edu.vn"
              className="w-full p-6 mb-4  border-lightBlue"
            />
            <button className="p-4 text-white font-semibold bg-primary w-full">
              Lưu lại
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
