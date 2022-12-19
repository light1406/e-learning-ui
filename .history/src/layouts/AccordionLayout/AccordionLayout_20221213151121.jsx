import React from "react";

const AccordionLayout = () => {
  return (
    <>
      <div className="flex justify-between p-2 mt-2 rounded bg-green-400">
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
      </div>
    </>
  );
};

export default AccordionLayout;
