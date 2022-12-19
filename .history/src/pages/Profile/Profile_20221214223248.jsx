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
          <img
            src="https://kt.city/static/icon-upload.png"
            alt=""
            className="w-full"
          />
          <form action="" className="w-full">
            <input type="text" placeholder="Họ và tên" className="w-full" />
            <input type="text" placeholder="User name" className="w-full" />
            <input type="email" value="19130227@st.hcmuaf.edu.vn" />
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
