// Loader.jsx
import React from 'react';
import '/src/Loader.css'; 

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loader;
