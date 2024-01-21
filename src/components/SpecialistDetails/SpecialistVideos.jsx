import React from 'react'
import VideoCard from '../VideoCard'
import { Grid } from '@mui/material'

const SpecialistVideos = () => {
  return (
    <>
      <Grid container spacing={"20px"}>

        {
          [1, 2, 3, 4, 5, 6, 7].map((item, index) =>
            <VideoCard key={index} />
          )
        }
      </Grid>
    </>
  )
}

export default SpecialistVideos