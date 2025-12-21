import React from 'react';

const PageHeader = ({ title, showBack = true, showSave = false, onSave, onBack }) => {
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
    
      window.history.back();
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={handleBack}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
        )}
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      </div>
      
      {showSave && (
        <button 
          onClick={onSave}
          className="text-blue-600 font-medium hover:text-blue-700"
        >
          Save
        </button>
      )}
    </header>
  );
};

export default PageHeader;