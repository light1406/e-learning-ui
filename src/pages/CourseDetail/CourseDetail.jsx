import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Accordion from "@components/Accordion";
import { accordionData } from "@utils";
import Course from "@components/Course";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reduxs/slices/shopCartSlice"

const CourseDetail = () => {
  const course = useSelector((state) => state.courseDetail.course);
  const dispatch = useDispatch();

  const [activedTab, setActivedTab] = useState(1);
  const [lessonNumber, setLessonNumber] = useState(0);

  const handleActiveTab = (index) => {
    setActivedTab(index);
  };

  const getTime = (seconds) => {
    let house = (seconds / 3600).toFixed();
    seconds %= 3600;
    let minutes = (seconds / 60).toFixed();
    seconds %= 60;
    return house + ":" + minutes + ":" + seconds;
  }

  useEffect(() => {
    if (course) {
      let count = 0;
      for (let i = 0; i < course.chapters.length; i++) {
        count += course.chapters[i].lessonVideos.length;
        count += course.chapters[i].lessonQuestions.length;
      }
      setLessonNumber(count);
    }
  });

  const handleAddToCard = () => {
    dispatch(addToCart(course));
  }

  return (
    <>
      <div className="bg-bgLightGreen">
        <div className="pb-[12rem] pt-[6rem] bg-hero px-[8rem]  bg-cover bg-no-repeat bg-center">
          <div className="flex items-center justify-center gap-x-[1rem] max-w-[18rem] mx- text-white tex-[2.8rem] font-semibold bg-primary py-3 rounded-xl mb-[2.5rem]">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>12345 đang học</span>
          </div>
          <h1 className="text-white text-[3rem] font-semibold mb-[3rem]">
            {course && course.title}
          </h1>
          <div className="flex items-center justify-between w-[calc(60%_-_2rem)] text-[2.4rem] text-white mb-[3rem]">
            <h4 className="">
              Cập nhật {course && <span>{course.manufacture}</span>}
            </h4>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-[calc(60%_-_2rem)]">
              <img
                src={course && course.coverUrl}
                alt=""
                className="max-h-[45rem] cursor-zoom-in"
              />
            </div>
            <div className="px-12 py-10 bg-white rounded-2xl text-[2rem] min-w-[calc(30%_-_3rem)] h-fit">
              <div className="">
                <div className="text-5xl font-bold py-2 mb-[20px]">
                  <span>{course && course.title}</span>
                </div>
                <div className="">
                  <span>Số bài học: {course && lessonNumber}</span>
                </div>
                <div className="mt-[20px]">
                  <span>Giá: {course && course.price}$</span>
                </div>
                <div className="mt-[20px] text-4xl font-bold py-4 px-5 text-center bg-orange rounded-3xl cursor-pointer text-white select-none hover:bg-orangeLight duration-300" onClick={handleAddToCard}>
                  <span>Thêm vào giỏ hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container__page">
        <p className="py-[4rem] text-[1.8rem] px-[18rem]">
          {course && course.description}
        </p>
        {/* Tabs */}
        <div className="border-b-lightBlue border-b" />
        <ul className="flex justify-between pt-8 text-[2rem] border-b-lightBlue border-b mb-20">
          <li
            onClick={() => handleActiveTab(1)}
            className={`${
              activedTab === 1
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <h3 className="">Nội dung học tập</h3>
          </li>
          <li
            onClick={() => handleActiveTab(2)}
            className={`${
              activedTab === 2
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <div className="flex gap-x-3">
              <h3>Đánh giá mới</h3>
              <span className="inline-block px-4 py-1 text-[1.4rem] font-semibold rounded-xl bg-lightBlue">
                200
              </span>
            </div>
          </li>
          <li
            onClick={() => handleActiveTab(3)}
            className={`${
              activedTab === 3
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <h3>Nhận xét học viên</h3>
          </li>
          <li
            onClick={() => handleActiveTab(4)}
            className={`${
              activedTab === 4
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <div className="">Khóa học liên quan</div>
          </li>
          <li
            onClick={() => handleActiveTab(5)}
            className={`${
              activedTab === 5
                ? "text-primary border-b-primary border-b font-semibold"
                : ""
            } cursor-pointer`}
          >
            <div className="">Q&A</div>
          </li>
        </ul>
        {/* Rate */}
        {activedTab === 2 && (
          <div className="flex flex-col my-6">
            <h3 className="font-semibold">Đánh giá từ học viên</h3>
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <h1 className="text-[6rem] font-semibold text-center">5</h1>
                <ul className="flex justify-between items-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
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
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
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
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
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
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
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
                      fill="#FED049"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </li>
                </ul>
                <span className="text-[1.4rem]">121 đánh giá</span>
              </div>
              <form action="" className="w-[65%] mx-6">
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 bg-lightBlue mr-4">
                    <div className="bg-primary h-4 rounded-full w-[80%]"></div>
                  </div>
                  <ul className="flex items-center mx-6">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
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
                        fill="#FED049"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <span>83%</span>
                </div>
              </form>
            </div>
          </div>
        )}
        {/*Benefit  */}

        {/* Content */}
        {activedTab === 1 && (
          <>
            <h2 className="text-[2.4rem] text-primary font-semibold pl-5 my-[3rem] border-l-2 border-primary">
              Bạn sẽ nhận được
            </h2>
            <ul className="flex flex-wrap justify-between items-start text-[1.8 rem]">
              {course &&
                course.benefit.map((b, index) => {
                  return (
                    <li key={index} className="w-[calc(50%-2rem)]">
                      <div className="flex gap-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={4}
                          stroke="green"
                          className="w-20 h-10 mr-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <p>{b}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <h2 className="text-[2.4rem] text-primary font-semibold pl-5 my-[3rem] border-l-2 border-primary">
              Nội dung học tập
            </h2>

            {course &&
              course.chapters.map((chapter) => (
                <Accordion title={chapter.serial + ". " + chapter.title}>
                  {
                    chapter.lessonVideos.map((lv) => {
                      return (
                        <div className="flex justify-between bg-lightBlue p-2 my-2 rounded-xl">
                          <div>
                            <span>{lv.serial}. {lv.title}</span>
                          </div>
                          <div>
                            <span>{getTime(lv.time)}</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </Accordion>
              ))}
          </>
        )}
        {/* Comment */}
        {activedTab === 3 && (
          <>
            <div className="p-4 pb-8 border-b border-b-lightBlue mt-8">
              <div className="flex items-center text-[1.8rem] mb-4">
                <img
                  className="w-[4.5rem] h-[4.5rem] mr-6"
                  src="https://kt.city/static/avatar/avatar2.jpg"
                  alt=""
                />
                <h3 className=" font-semibold">Vũ</h3>
                <span className="ml-auto">Gần đây</span>
              </div>
              <p>Rất ô sờ kê</p>
            </div>
            <div className="p-4 pb-8 border-b border-b-lightBlue mt-8">
              <div className="flex items-center text-[1.8rem] mb-4">
                <img
                  className="w-[4.5rem] h-[4.5rem] mr-6"
                  src="https://kt.city/static/avatar/avatar2.jpg"
                  alt=""
                />
                <h3 className=" font-semibold">Vũ</h3>
                <span className="ml-auto">Gần đây</span>
              </div>
              <p>Rất ô sờ kê</p>
            </div>
            <div className="p-4 pb-8 border-b border-b-lightBlue mt-8">
              <div className="flex items-center text-[1.8rem] mb-4">
                <img
                  className="w-[4.5rem] h-[4.5rem] mr-6"
                  src="https://kt.city/static/avatar/avatar2.jpg"
                  alt=""
                />
                <h3 className=" font-semibold">Vũ</h3>
                <span className="ml-auto">Gần đây</span>
              </div>
              <p>Rất ô sờ kê</p>
            </div>
          </>
        )}
        {activedTab === 4 && (
          <>
            <div className="grid grid-cols-3 gap-x-5">
              <Course></Course>
              <Course></Course>
            </div>
          </>
        )}

        {activedTab === 5 && (
          <Accordion
            title="Tôi có được hỗ trợ khi học không ?"
            content="Khi học các bạn sẽ được hỗ trợ khi gặp vấn đề khó khăn từ a đến z"
          ></Accordion>
        )}
      </div>
    </>
  );
};

export default CourseDetail;
