import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GET_COURSE_BY_ID } from "../../reduxs/types/courseDetailTypes";

const Course = (props) => {

  const dispatch = useDispatch();

  const handleGetCourseById = () => {
    dispatch({type: GET_COURSE_BY_ID, id: props.id})
  }

  return (
    <Link
      to="/course-detail"
      className="rounded-2xl shadow-shadowSmall overflow-hidden hover:shadow-shadow"
      onClick={handleGetCourseById}>
      <div className="">
        <div className="h-[18rem] w-full overflow-hidden">
          <div className="">
            <img
              src={props.coverUrl}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="py-[2.5rem] px-[1.5rem]">
          <h3 className="text-[1.8rem] font-semibold mb-[1.5rem]">
            {props.courseName}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-lightBlack">{props.manufacture}</span>
            </div>
            <div className="text-3xl bg-lightRed font-bold py-2 px-4 rounded-xl">
              <span className="text-white">{props.price} $</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
