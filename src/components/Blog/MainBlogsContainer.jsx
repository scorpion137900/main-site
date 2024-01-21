import { Container, Grid } from '@mui/material'
import React from 'react'
import BlogFilter from './BlogFilter'
import BlogCard from "./BlogCard"
const MainBlogsContainer = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={"20px"}>
          <Grid item xs={12} md={3}>
            <BlogFilter />
          </Grid>
          <Grid item xs={12} md={9}>
            <BlogCard maxSize />

          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default MainBlogsContainer