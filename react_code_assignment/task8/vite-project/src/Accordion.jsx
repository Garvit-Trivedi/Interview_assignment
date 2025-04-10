import React, { useState } from 'react';
import "./Accordion.css"
const Accordion = () => {

  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript, allowing you to write HTML elements within JavaScript code."
    },
    {
      question: "What is useState in React?",
      answer: "useState is a hook in React that allows you to add state to a functional component."
    }
  ];

  
  const [activeIndex, setActiveIndex] = useState(null);

  
  const handleToggle = (index) => {
   
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2>FAQ</h2>
      {faqData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-question"
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="accordion-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
