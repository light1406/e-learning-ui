import React from "react";

const Categories = () => {
  return (
    <div className="py-[5rem]">
      <div className="container__page">
        <h2 className="text-[3rem] text-center mb-[1.5rem]">
          👋
          <span>Hôm nay, bạn muốn học gì?</span>
        </h2>
        <div className="w-[48rem] mx-auto rounded-xl">
          <input type="text" placeholder="Tìm kiến thức" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
