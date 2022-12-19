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
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full p-6 mb-4 border border-lightBlue"
            />
            <input
              type="text"
              placeholder="User name"
              className="w-full p-6 mb-4"
            />
            <input
              type="email"
              value="19130227@st.hcmuaf.edu.vn"
              className="w-full p-6 mb-4"
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
