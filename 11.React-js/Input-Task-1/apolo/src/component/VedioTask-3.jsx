import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause(); 
    } else {
      videoRef.current.play(); 
    }
    setIsPlaying(!isPlaying); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Play/Pause Video</h2>
      <div className="w-3/4 max-w-lg">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg"
          src="https://videos.pexels.com/video-files/29676917/12765200_640_360_25fps.mp4"
          controls={false}
        >
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handlePlayPause}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
