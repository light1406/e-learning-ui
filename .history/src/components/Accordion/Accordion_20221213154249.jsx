import React from "react";
import AccordionLayout from "@components/Accordion/AccordionLayout";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="flex flex-col justify-center items-center">
      <AccordionLayout
        title="Accordion 1"
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        This is Accordion 1 Content
      </AccordionLayout>

      <AccordionLayout title="Accordion 2" activeIndex={activeIndex}>
        This is Accordion 2 Content
      </AccordionLayout>
    </div>
  );
};

export default Accordion;
