import React from 'react'
import Banner from '../components/Banner'
import VideosContainer from '../components/videos/VideosContainer'

const Videos = () => {
  return (
    <>
      <Banner link={"https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Our Videos"} text={"Welcome to our Healthy Living Blog, your go-to destination for insightful articles, tips, and advice on cultivating a balanced and vibrant lifestyle"} />
      <VideosContainer />
    </>
  )
}

export default Videos