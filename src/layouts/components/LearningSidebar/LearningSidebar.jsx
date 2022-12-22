import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChapterToggle from "../../../components/ChapterToggle";
import { GET_LESSON_VIDEO_BY_ID } from "../../../reduxs/types/lessonType";

const LearningSidebar = () => {
  const course = useSelector((state) => state.learning.course);
  const dispatch = useDispatch();

  const getTime = (seconds) => {
    let hour = (seconds / 3600).toFixed();
    seconds %=3600;
    let minutes = (seconds / 60).toFixed();
    seconds %= 60;
    return hour + ":" + minutes + ":" + seconds;
  }

  const handleGetLesson = (id) => {
    dispatch({
      type: GET_LESSON_VIDEO_BY_ID,
      id: id
    })
  }

  return (
    <div className="w-[28%]">
      {course &&
        course.chapters.map((chap) => {
          return (
            <ChapterToggle key={chap.id} serial={chap.serial} title={chap.title}>
              {chap.lessonVideos.map((lvd) => {
                return (
                  <div
                    key={lvd.id}
                    className="bg-[#ededed] px-5 py-3 rounded-xl select-none cursor-pointer flex justify-between hover:bg-[#e8e8e8] duration-300 my-2"
                    onClick={() => handleGetLesson(lvd.id)}>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                      <span>
                        Bài {lvd.serial}: {lvd.title}
                      </span>
                    </div>
                    <div>
                      <span>{getTime(lvd.time)}</span>
                    </div>
                  </div>
                )
              })}
            </ChapterToggle>
          );
        })}
    </div>
  );
};

export default LearningSidebar;
