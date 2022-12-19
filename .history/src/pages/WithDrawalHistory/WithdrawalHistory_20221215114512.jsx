import React from "react";

const WithdrawalHistory = () => {
  return (
    <>
      <div className="heading flex items-center gap-x-5">
        <Link className="heading" to="/balance">
          Số dư
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        Lịch sử rút tiền
      </div>
      <p className="mt-10 p-4 text-lightRed bg-bgLightRed rounded-md">
        Bạn chưa tạo bất cứ yêu cầu thanh toán nào
      </p>
    </>
  );
};

export default WithdrawalHistory;
