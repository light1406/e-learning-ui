import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_COURSE_BY_ID_LEARNING } from "../../reduxs/types/courseDetailTypes";

const MyClass = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [actived, setActived] = useState(1);

  const handleShowCourse = (id) => {
    dispatch({
      type: GET_COURSE_BY_ID_LEARNING,
      id: id
    });
    navigate("/learning");
  }
  return (
    <div className="container relative shadow-2xl">
      <h1 className="text-[2.4rem] font-semibold mb-3 text-primary">
        Khu vực học tập
      </h1>
      <p className="mb-16">
        Khóa học, tài liệu mà bạn đăng ksý sẽ được hiển thị dưới đây
      </p>
      <ul className="flex items-center gap-x-4">
        <li
          onClick={() => setActived(1)}
          className={`${
            actived === 1 && "border-b border-b-primary"
          } cursor-pointer px-12 py-4 font-semibold `}
        >
          <h4>Của tôi</h4>
        </li>
        <li
          onClick={() => setActived(2)}
          className={`${
            actived === 2 && "border-b border-b-primary"
          } cursor-pointer px-12 py-4 font-semibold `}
        >
          <h4>Trend 24h qua?</h4>
        </li>
        <li
          onClick={() => setActived(3)}
          className={`${
            actived === 3 && "border-b border-b-primary"
          } cursor-pointer px-12 py-4 font-semibold `}
        >
          <h4>Review mới</h4>
        </li>
      </ul>
      {/* Mine */}
      {actived === 1 && (
        <>
          {user &&
            user.registeredCourses.map((course) => {
              return (
                <div key={course.id} className="shadow-2xl flex items-center my-10 rounded-3xl cursor-pointer" onClick={() => handleShowCourse(course.id)}>
                  <img
                    src={course.coverUrl}
                    alt=""
                    className="w-[19rem] h-[19rem] rounded-3xl"
                  />
                  <div className="flex flex-col gap-y-4 px-12">
                    <h3 className="font-semibold text-[1.8rem]">
                      {course.title}
                    </h3>
                    <h4>Số bài học: {course.lessonNumber}</h4>
                    <div className="bg-lightBlue rounded-2xl h-4">
                      <div className="bg-primary w-[80%] rounded-2xl h-4"></div>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
      {/* trend 24h */}
      {actived === 2 && (
        <>
          <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl cursor-pointer">
            <img
              src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
              alt=""
              className="w-[19rem] h-[19rem] rounded-3xl"
            />
            <div className="text-[1.8rem] font-semibold">
              <h4 className="py-2 px-4 rounded-xl text-white bg-primary inline-block">
                Top 1
              </h4>
              <p className="my-5">
                Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản
                cho người mới
              </p>
            </div>
          </div>
          <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl cursor-pointer">
            <img
              src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
              alt=""
              className="w-[19rem] h-[19rem] rounded-3xl"
            />
            <div className="text-[1.8rem] font-semibold">
              <h4 className="py-2 px-4 rounded-xl text-white bg-primary inline-block">
                Top 1
              </h4>
              <p className="my-5">
                Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản
                cho người mới
              </p>
            </div>
          </div>
          <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl cursor-pointer">
            <img
              src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
              alt=""
              className="w-[19rem] h-[19rem] rounded-3xl"
            />
            <div className="text-[1.8rem] font-semibold">
              <h4 className="py-2 px-4 rounded-xl text-white bg-primary inline-block">
                Top 1
              </h4>
              <p className="my-5">
                Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản
                cho người mới
              </p>
            </div>
          </div>
        </>
      )}
      {/* Review moi */}
      {actived === 3 && (
        <>
          <div className="my-10">
            <div className="flex justify-between items-start">
              <div className="mb-8 flex items-center gap-x-6">
                <img
                  src="https://static.kt.city/cl7hxoph609un3cqn9qg78oca/bat-cuoi-truoc-nhung-07-1661970522683.jpeg"
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] rounded-full"
                />
                <div className="">
                  <h3 className="font-semibold">Flexer An</h3>
                  <ul className="flex">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                </div>
              </div>
              <span className="text-lightBlack">3 tháng trước</span>
            </div>
            <p className="text-lightBlack">
              đỉnh của chóp, săn quả sale mua giá hời so với kiến thức nhận được
              ahihi, thanks a Evondev nhiều :D
            </p>
          </div>
          <div className="my-10">
            <div className="flex justify-between items-start">
              <div className="mb-8 flex items-center gap-x-6">
                <img
                  src="https://static.kt.city/cl7hxoph609un3cqn9qg78oca/bat-cuoi-truoc-nhung-07-1661970522683.jpeg"
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] rounded-full"
                />
                <div className="">
                  <h3 className="font-semibold">Flexer An</h3>
                  <ul className="flex">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                </div>
              </div>
              <span className="text-lightBlack">3 tháng trước</span>
            </div>
            <p className="text-lightBlack">
              đỉnh của chóp, săn quả sale mua giá hời so với kiến thức nhận được
              ahihi, thanks a Evondev nhiều :D
            </p>
          </div>
          <div className="my-10">
            <div className="flex justify-between items-start">
              <div className="mb-8 flex items-center gap-x-6">
                <img
                  src="https://static.kt.city/cl7hxoph609un3cqn9qg78oca/bat-cuoi-truoc-nhung-07-1661970522683.jpeg"
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] rounded-full"
                />
                <div className="">
                  <h3 className="font-semibold">Flexer An</h3>
                  <ul className="flex">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                </div>
              </div>
              <span className="text-lightBlack">3 tháng trước</span>
            </div>
            <p className="text-lightBlack">
              đỉnh của chóp, săn quả sale mua giá hời so với kiến thức nhận được
              ahihi, thanks a Evondev nhiều :D
            </p>
          </div>
          <div className="my-10">
            <div className="flex justify-between items-start">
              <div className="mb-8 flex items-center gap-x-6">
                <img
                  src="https://static.kt.city/cl7hxoph609un3cqn9qg78oca/bat-cuoi-truoc-nhung-07-1661970522683.jpeg"
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] rounded-full"
                />
                <div className="">
                  <h3 className="font-semibold">Flexer An</h3>
                  <ul className="flex">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                </div>
              </div>
              <span className="text-lightBlack">3 tháng trước</span>
            </div>
            <p className="text-lightBlack">
              đỉnh của chóp, săn quả sale mua giá hời so với kiến thức nhận được
              ahihi, thanks a Evondev nhiều :D
            </p>
          </div>
          <div className="my-10">
            <div className="flex justify-between items-start">
              <div className="mb-8 flex items-center gap-x-6">
                <img
                  src="https://static.kt.city/cl7hxoph609un3cqn9qg78oca/bat-cuoi-truoc-nhung-07-1661970522683.jpeg"
                  alt=""
                  className="w-[4.5rem] h-[4.5rem] rounded-full"
                />
                <div className="">
                  <h3 className="font-semibold">Flexer An</h3>
                  <ul className="flex">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                        fill="rgb(255, 213, 196)"
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
                </div>
              </div>
              <span className="text-lightBlack">3 tháng trước</span>
            </div>
            <p className="text-lightBlack">
              đỉnh của chóp, săn quả sale mua giá hời so với kiến thức nhận được
              ahihi, thanks a Evondev nhiều :D
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default MyClass;
