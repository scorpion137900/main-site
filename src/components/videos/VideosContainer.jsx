import { Container, Grid, Pagination } from '@mui/material'
import React, { useState } from 'react'
import VideosFilter from './VideosFilter'
import VideosGrid from './VideosGrid'
import { useGetAllVideosQuery } from '../../store/features/videos/video'
import Loader from '../Loader'

const VideosContainer = () => {
  const [page, setPage] = useState(1)
  const pageSize = 10;
  const { data, isFetching, isError, isSuccess } = useGetAllVideosQuery(page, pageSize);


  console.log(data)
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={"20px"}>
          <Grid item xs={12} md={3}>
            <VideosFilter />
          </Grid>
          <Grid container item xs={12} md={9} spacing={"20px"}>
            {isFetching ?
              <Loader /> :

              <VideosGrid videos={data?.result?.videos} />
            }

          </Grid>
        </Grid>
      </Container>
      <Pagination sx={{
        mt: "20px",
        display: "flex",
        justifyContent: "center"
      }} dir='ltr' count={data?.result?.videosTotalCount / pageSize} page={page} color="primary" onChange={(e, p) => setPage(p)} />
    </>
  )
}

export default VideosContainer