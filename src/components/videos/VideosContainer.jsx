import { Container, Grid, Pagination } from '@mui/material'
import React from 'react'
import VideosFilter from './VideosFilter'
import VideosGrid from './VideosGrid'

const VideosContainer = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={"20px"}>
          <Grid item xs={12} md={3}>
            <VideosFilter />
          </Grid>
          <Grid container item xs={12} md={9} spacing={"20px"}>
            <VideosGrid />

          </Grid>
        </Grid>
      </Container>
      <Pagination sx={{
        mt: "20px",
        display: "flex",
        justifyContent: "center"
      }} dir='ltr' count={10} color="primary" />
    </>
  )
}

export default VideosContainer