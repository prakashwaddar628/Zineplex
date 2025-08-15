import React from 'react'

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="w-full h-auto rounded-lg overflow-hidden shadow-2xl">
      <video
        className="w-full h-full"
        controls
        autoPlay
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer