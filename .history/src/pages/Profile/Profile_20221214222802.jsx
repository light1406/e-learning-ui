import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 className="heading mb-5">Thông tin cá nhân</h1>
      <p className="">
        Cập nhật đầy đủ thông tin của bạn để hoạt động tốt hơn trên KTcity
      </p>
      <div className="p-6">
        <div className="">
          <img src="https://kt.city/static/icon-upload.png" alt="" />
          <form action="">
            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="User name" />
            <input type="email" value="19130227@st.hcmuaf.edu.vn" />
            <button className="p-4 font-semibold bg-primary">Lưu lại</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
