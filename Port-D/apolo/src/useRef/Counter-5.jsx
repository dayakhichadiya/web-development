import React, { useRef, useState } from 'react';

const ClickCounter = () => {
  const countRef = useRef(0); 
  const [count, setCount] = useState(0); 

  const handleClick = () => {
    countRef.current += 1; 
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Click Counter</h2>
      <div className="text-4xl font-semibold text-blue-600 mb-6">
        {countRef.current} 
      </div>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition"
      >
        Click Me!
      </button>
    </div>
  );
};

export default ClickCounter;
