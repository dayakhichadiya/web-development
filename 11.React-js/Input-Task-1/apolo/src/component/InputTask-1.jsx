import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        useRef Hook - Focus Input Example
      </h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text here"
        className="w-80 p-3 border border-gray-300 rounded-md shadow-sm"
      />
      <button
        onClick={handleFocus}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;

