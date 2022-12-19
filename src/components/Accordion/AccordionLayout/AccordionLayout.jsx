import React from "react";

const AccordionLayout = (props) => {
  return (
    <>
      <div
        onClick={props.handleActive}
        className="flex justify-between px-10 py-4 mt-2 rounded bg-blue700  cursor-pointer"
      >
        <div className="flex">
          <div className="font-bold">{props.title}</div>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
      {props.isActive && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {props.children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
