import React, { useRef } from 'react';

const ImageScroll = () => {
  const imageRef = useRef(null);

  const handleScroll = () => {
    imageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-col items-center p-10">
        <h1 className="text-2xl font-bold mb-6">Scroll to the Image</h1>
        <button
          onClick={handleScroll}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Scroll to Image
        </button>
      </div>

      <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-600">
        Scroll down to see the image!
      </div>

      <div
        ref={imageRef}
        className="h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP')",
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-bold">
          This is the image!
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;
