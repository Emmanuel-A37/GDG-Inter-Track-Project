import React from 'react';

const Dropdown = ({ 
  label, 
  options = [], 
  value, 
  onChange, 
  placeholder,
  name ,
  color = 'text-gray-700'
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className= {`block text-sm font-medium ${color} mb-2`}>
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
      >
        <option value="">{placeholder || 'Select an option'}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;