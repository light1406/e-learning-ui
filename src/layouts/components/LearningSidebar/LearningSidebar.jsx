import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChapterToggle from "../../../components/ChapterToggle";

const LearningSidebar = () => {
  const course = useSelector((state) => state.learning.course);
  const dispatch = useDispatch();

  return (
    <div className="w-[28%]">
      {course &&
        course.chapters.map((chap) => {
          return (
            <ChapterToggle>
              {chap.lessonVideos.map((lvd) => {
                <div className="bg-[#ededed] px-5 py-3 rounded-xl select-none cursor-pointer flex justify-between hover:bg-[#e8e8e8] duration-300">
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
                    <span>Bài {lvd.serial}: {lvd.title}</span>
                  </div>
                  <div>
                    <span>10:00</span>
                  </div>
                </div>;
              })}
              {chap.lessonQuestions.map((lvd) => {
                <div className="bg-[#ededed] px-5 py-3 rounded-xl select-none cursor-pointer flex justify-between hover:bg-[#e8e8e8] duration-300">
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
                    <span>Bài {lvd.serial}: {lvd.title}</span>
                  </div>
                  <div>
                    <span>10:00</span>
                  </div>
                </div>;
              })}
            </ChapterToggle>
          );
        })}
    </div>
  );
};

export default LearningSidebar;
