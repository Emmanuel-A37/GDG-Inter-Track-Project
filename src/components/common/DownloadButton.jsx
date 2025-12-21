import React from 'react';

const DownloadButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  width = '696px',
  height = '56px',
  disabled = false 
}) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg font-medium transition-all duration-200 ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
};

export default DownloadButton;