import React from "react";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);
  return (
    <>
      <div className="flex w-1/2 justify-between p-2 mt-2 rounded bg-lightBlue">
        <div className="flex">
          <div className="font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
      {activeIndex === index && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
