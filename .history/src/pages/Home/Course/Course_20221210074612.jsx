import React from "react";

const Course = ({ isLast }) => {
  console.log(isLast);
  const left = "translate-x-[80%]";
  const right = "";
  return (
    <div className="rounded-xl relative shadow-2xl group/course p-[20px] cursor-pointer">
      <a href="overflow-hidden bg-lightBlue">
        <span className="absolute bg-primary text-white px-2 rounded">72%</span>
        <div className="">
          <img
            src="https://static.unica.vn/upload/images/2019/04/khoa-hoc-dem-hat-guitar-can-ban_m_1555570862.jpg"
            alt=""
          />
        </div>
        <div className="px-6">
          <h2 className="font-semibold mt-[20px]">Học đệm đàn cùng Kikikta</h2>
          <div className="mt-6 flex items-center justify-between text-[12px] text-lightBlack">
            <span className="">Hà thủ ô</span>
            <span className="line-through">
              700.000<sup>đ</sup>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <ul className="flex">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0056d2"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0056d2"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0056d2"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0056d2"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#0056d2"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </li>
              </ul>
            </span>
            <span className="font-semibold">
              200.000<sup>đ</sup>
            </span>
          </div>
        </div>
      </a>
      <div
        className={`${right || left}
         w-[340px] absolute top-0 translate-y-[-20%] group-hover/course:visible invisible shadow-md p-10 rounded-lg bg-white z-20 before:absolute before:content-[''] before:w-[20px] before:h-[20px] before:left-0 before:top-[50%] before:bg-white before:translate-x-[-50%] before:rotate-45`}
      >
        <h1 className="font-semibold text-[16px] min-h-[20px]">
          Nhập môn chứng khoán
        </h1>
        <span className="px-3 py-2 text-[12px] bg-primary text-white rounded-md">
          Best seller
        </span>
        <p className="mt-5 line-clamp-3 overflow-hidden text-[16px]">
          Khóa học chứng khoán nhập môn sẽ giúp bạn nắm bắt được kiến thức, đầu
          tư chứng khoán đầy đủ. Bài bản và chi tiết nhất dành cho người mới bắt
          đầu tham gia
        </p>
        <ul className="m-4">
          <li className="flex items-start gap-x-3 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[80px] h-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            <span>
              Kiến thức cơ bản nhất về thị trường chứng khoán, về đầu tư chứng
              khoán và tiềm năng lợi nhuận khổng lồ của TTCK
            </span>
          </li>
          <li className="flex items-start gap-x-3 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[80px] h-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            <span>
              Kiến thức cơ bản nhất về thị trường chứng khoán, về đầu tư chứng
              khoán và tiềm năng lợi nhuận khổng lồ của TTCK
            </span>
          </li>
          <li className="flex items-start gap-x-3 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[80px] h-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span>
              Kiến thức cơ bản nhất về thị trường chứng khoán, về đầu tư chứng
              khoán và tiềm năng lợi nhuận khổng lồ của TTCK
            </span>
          </li>
        </ul>
        <a className="flex gap-4 items-center justify-center rounded-lg text-white font-medium w-full px-5 py-2 bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <span>Thêm vào giỏ hàng</span>
        </a>
      </div>
    </div>
  );
};

export default Course;
