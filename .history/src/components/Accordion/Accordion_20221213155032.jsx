import React, { useState } from "react";
import AccordionLayout from "@components/Accordion/AccordionLayout";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <AccordionLayout
        title={title}
        content={content}
        setIsActive={setIsActive}
      />
    </div>
  );
};

export default Accordion;
