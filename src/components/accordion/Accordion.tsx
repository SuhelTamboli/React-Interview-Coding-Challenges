import React, { useState } from "react";

 const accordionItems = [
   { header: "Item 1", content: "Content 1" },
   { header: "Item 2", content: "Content 2" },
   { header: "Item 3", content: "Content 3" },
 ];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pl-4 flex flex-col">
      <p className="text-lg font-bold self-center">Accordion Example</p>
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col mb-4 border border-black rounded w-80"
        >
          <div
            onClick={() => toggleAccordion(index)}
            className={`bg-gray-500 cursor-pointer ${activeIndex === index ? "active" : ""}`}
          >
            {item.header}
          </div>
          {activeIndex === index && <div className="">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
