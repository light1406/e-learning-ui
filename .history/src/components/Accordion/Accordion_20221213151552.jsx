import React from "react";
import AccordionLayout from "@components/Accordion/AccordionLayout";

const Accordion = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <AccordionLayout title="Accordion 1">
        This is Accordion 1 Content
      </AccordionLayout>

      <AccordionLayout title="Accordion 2">
        This is Accordion 2 Content
      </AccordionLayout>
    </div>
  );
};

export default Accordion;
