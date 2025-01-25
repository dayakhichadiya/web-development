import React, { forwardRef, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  return (
    <input
      ref={ref} 
      type="text"
      className="w-80 p-3 border border-gray-300 rounded-md shadow-sm "
      placeholder="Type something..."
      {...props} 
    />
  );
});

const ExposeRefExample = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Exposing a Ref Example</h2>
      <CustomInput ref={inputRef} />
      <button
        onClick={handleFocus}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Focus Input
      </button>
    </div>
  );
};

export default ExposeRefExample;
