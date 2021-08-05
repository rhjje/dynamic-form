import React from 'react';
import './string-item.css';

const StringItem = ({ label }) => {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">{label}</label>
      <input type="text" className="form-control" id={label} name={label} />
    </div>
  );
};

export default StringItem;
