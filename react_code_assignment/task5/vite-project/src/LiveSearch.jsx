import React, { useState } from 'react';
import "./LiveSearch.css"
const LiveSearch = () => {
 
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah"];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNames, setFilteredNames] = useState(names);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    
    const filtered = names.filter(name =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredNames(filtered); 
  };

  return (
    <div className="live-search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search names..."
        className="search-input"
      />

      <ul className="search-results">
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li key={index} className="search-item">{name}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default LiveSearch;
