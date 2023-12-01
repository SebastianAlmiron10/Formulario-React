import React from 'react';
import './Input.css'

function Input({ label, type, name, value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
