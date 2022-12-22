import { useState } from "react";

const ChapterToggle = (props) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div
        className="bg-[#abcadb] w-full px-5 py-3 rounded-xl select-none cursor-pointer flex justify-between items-center hover:bg-[#bad6e6] duration-300"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <span>Chương {props.serial}: {props.title}</span>
        {toggle ? (
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </div>
      {toggle && <div>{props.children}</div>}
    </div>
  );
};

export default ChapterToggle;
