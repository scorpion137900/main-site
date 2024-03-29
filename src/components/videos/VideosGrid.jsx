import React, { useState } from 'react'
import VideoCard from '../VideoCard'

const VideosGrid = ({ videos }) => {

  return (
    <>
      {videos?.map((item, index) => (
        <VideoCard maxSize key={item?.id} video={item} />
      ))}


    </>
  )
}

export default VideosGrid