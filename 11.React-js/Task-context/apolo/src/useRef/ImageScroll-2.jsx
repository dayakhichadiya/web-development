import React, { useRef } from 'react';

const ImageScroll = () => {

  const imageRef = useRef(null);

  console.log(imageRef);


  const handleScroll = (index) => {
    const list = imageRef.current
    const imgNode = list.querySelectorAll('.box > .bg-center')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
    console.log(list);
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-col items-center p-10">
        <h1 className="text-2xl font-bold mb-6">Scroll to the Image</h1>
        <div className='flex'>
        <button
          onClick={() => handleScroll(0)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Image1
        </button>
        <button
          onClick={() => handleScroll(1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Image2
        </button>
        <button
          onClick={() => handleScroll(2)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Image3
        </button>
        </div>
      </div>

      <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-600">
        Scroll down
      </div>
      <div className='box' ref={imageRef}>
        <div
          className="h-96 w-full bg-cover bg-center inline-block"
          style={{
            backgroundImage: "url('https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP')",
          }}
        />
        <div
          className="h-96 w-full bg-cover bg-center inline-block"
          style={{
            backgroundImage: "url('https://pixlr.com/images/generator/image-editor.webp')",
          }}
        />
        <div
          className="h-96 w-1/2 bg-cover bg-center inline-block"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s')",
          }}
        />
      </div>
      <div className="h-full w-full bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-bold">
        This is the image!
      </div>
    </div>
  );
};

export default ImageScroll;
