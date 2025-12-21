import React, { useState } from 'react';

const Accordion = ({
  title,
  children,
  defaultOpen = true,
  containerClassName = '',
  headerClassName = '',
  contentClassName = ''
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`w-full border border-gray-200 rounded-xl bg-white overflow-hidden ${containerClassName}`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className={`w-full flex items-center justify-between px-4 py-4 text-left ${headerClassName}`}
      >
        <span className="font-medium text-gray-900">
          {title}
        </span>

        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Content */}
          <div className={`px-4 pt-5 pb-6 space-y-6 ${contentClassName}`}>
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;
