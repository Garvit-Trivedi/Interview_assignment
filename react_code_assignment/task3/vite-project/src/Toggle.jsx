import React, { useState } from 'react';
import "./Toggle.css"
const Toggle = () => {
 
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleVisibility} className="toggle-btn">
        {isVisible ? 'Hide' : 'Show'} Text
      </button>

  
      {isVisible && <p className="toggle-text">Hello World</p>}
    </div>
  );
};

export default Toggle;
