import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import backgroundImage from "../assets/images/consultants-team.png";
import TextSlider from '../components/TextSlider/TextSlider';
import MainBlogsContainer from '../components/Blog/MainBlogsContainer';
import Banner from '../components/Banner';
const Blog = () => {
  return (
    <>
      <Banner link={"https://img.freepik.com/free-photo/top-view-sticky-notes-collection_23-2148907460.jpg?w=1380&t=st=1705620674~exp=1705621274~hmac=b49ff0fae5353b140fe3f60646cd61f829952b25fcc59e5698aa0e13239d30b4"}
        title={"المدونة"}
        text={"Daily articles with the most important topics in health and mental well-being, to be the best version of yourself"}
      />

      <MainBlogsContainer />
    </>
  )
}

export default Blog