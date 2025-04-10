import React, { useState } from 'react';

const CharacterCount = () => {
  
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value); 
  };

  return (
    <div className="character-count-container">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows="6"
        cols="40"
        className="textarea"
      ></textarea>

      <p className="char-count">Character count: {text.length}</p>
    </div>
  );
};

export default CharacterCount;
