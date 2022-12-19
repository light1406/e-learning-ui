import React, { useEffect, useState } from "react";
import Course from "@components/Course";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_COURSE, GET_ALL_COURSE, GET_CATEGORIES } from "../../reduxs/types/categoriesTypes";
const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const courses = useSelector((state) => state.categories.courseFilters);
  const [chooseCategory, setChooseCategory] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_CATEGORIES });
    dispatch({type: GET_ALL_COURSE});
  }, [dispatch]);

  const handleGetAllCategories = () => {
    setChooseCategory(null);
    dispatch({type: GET_ALL_COURSE});
  };

  const handleChooseCategories = (id) => {
    setChooseCategory(id);
    dispatch({type: FILTER_COURSE, category: id});
  };

  return (
    <div className="pt-[1.5rem] pb-[3rem]">
      <div className="container__page">
        <div className="text-[2rem] md:text-[3rem] md:flex md:justify-center text-center mb-[1.5rem] text-primary">
          <h3 className="font-bold">Chào bạn👋</h3>
          <h3>Hôm nay, bạn muốn học gì?</h3>
        </div>
        <div className="lg:w-[48rem] mx-auto mb-[3.5rem] rounded-2xl bg-lightBlue flex items-center px-10 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Tìm kiến thức"
            className="bg-transparent h-[4rem] w-full"
          />
        </div>
        <ul className="hidden md:flex md:flex-wrap md:justify-center md:items-center mb-[3rem]">
          <li
            className={
              chooseCategory === null
                ? "flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-blue700 rounded-3xl cursor-pointer select-none"
                : "flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer select-none"
            }
            onClick={handleGetAllCategories}
          >
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
              #
            </div>
            <span className="px-4">ALL</span>
          </li>
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className={
                  chooseCategory === category.id
                    ? "flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-blue700 rounded-3xl cursor-pointer select-none"
                    : "flex items-center mr-[2rem] mb-[2rem] text-[2rem] bg-lightBlue rounded-3xl cursor-pointer select-none"
                }
                onClick={() => handleChooseCategories(category.id)}
              >
                <div className="flex items-center justify-center bg-primary text-white rounded-full w-[4rem] h-[4rem] mr-[1.25rem]">
                  #
                </div>
                <span className="px-4">{category.category}</span>
              </li>
            );
          })}
        </ul>
        <div className="mb-[3rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0056d2"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            Danh sách khóa học
          </h2>
          <div className="slider__home">
            {
              courses.map(course => {
                return <Course 
                          id={course.id}
                          key={course.id}
                          coverUrl={course.coverUrl}
                          courseName={course.title}
                          manufacture={course.manufacture}
                          price={course.price}/>
              })
            }
          </div>
        </div>
        <button className="block mt-[3rem] py-2 px-6 rounded-2xl bg-lightBlue mx-auto">
          Xem thêm...
        </button>
      </div>
    </div>
  );
};

export default Categories;
