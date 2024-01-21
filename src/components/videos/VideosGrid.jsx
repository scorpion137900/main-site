import React from 'react'
import VideoCard from '../VideoCard'

const VideosGrid = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
        <VideoCard maxSize key={index} />
      ))}
    </>
  )
}

export default VideosGrid