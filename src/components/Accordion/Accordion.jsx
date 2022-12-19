import React, { useState } from "react";
import AccordionLayout from "@components/Accordion/AccordionLayout";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => setIsActive(!isActive);
  return (
    <AccordionLayout
      title={props.title}
      isActive={isActive}
      handleActive={handleActive}
    >
      {props.children}
    </AccordionLayout>
  );
};

export default Accordion;
