import { useState } from "react";
import { useSelector } from "react-redux";

const Learning = () => {
  const lesson = useSelector(state => state.learning.lesson);

  return (
    <div className="mr-5">
      <div>
        <video width={"100%"} controls>
          <source src={lesson && lesson.linkVideo} />
        </video>
      </div>
      <div>
        <div className="font-bold text-5xl mt-5">
          <span>{lesson && lesson.title}</span>
        </div>
        <div>
          <span>Cập nhật: {lesson && lesson.manufacture}</span>
        </div>
        <div className="mt-10">
          <div className="text-4xl mb-2">
            <strong>Mô tả: </strong>
          </div>
          <p>{lesson && lesson.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
