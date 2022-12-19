import React, { useState } from "react";
import AccordionLayout from "@components/Accordion/AccordionLayout";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => setIsActive(!isActive);
  return (
    <div className="flex flex-col justify-center items-center">
      <AccordionLayout
        title={title}
        content={content}
        isActive={isActive}
        handleActive={handleActive}
      />
    </div>
  );
};

export default Accordion;
