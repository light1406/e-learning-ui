import React from "react";
import Banner from "@components/Banner";
const Coming = () => {
  return (
    <div className="bg-coming h-[80rem] bg-center bg-cover bg-no-repeat flex justify-center items-end ">
      <div className="-translate-y-[100%]">
        <h1 className="uppercase text-[4.8rem] font-bold text-white mb-3">
          Sắp diễn ra tại KTCity
        </h1>
        <h4 className="text-[2rem] text-white text-center p-4 bg-lightBlue">
          Đặt trước bây giờ để tiết kiệm chi phí.
        </h4>
      </div>
    </div>
  );
};

export default Coming;
