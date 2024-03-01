import { Container, Grid, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogFilter from './BlogFilter'
import BlogCard from "./BlogCard"
import { useGetAllArticlesQuery } from '../../store/features/blog/blog'
const MainBlogsContainer = () => {
  const [page, setPage] = useState(1)
  const pageSize = 10;
  const { data, isFetching, isError, isSuccess } = useGetAllArticlesQuery(page, pageSize);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={"20px"}>
          <Grid item xs={12} md={3}>
            <BlogFilter />
          </Grid>
          <Grid item xs={12} md={9}>
            <BlogCard maxSize posts={data?.result?.articles} isFetching={isFetching} />

          </Grid>
        </Grid>
        <Pagination sx={{
          mt: "20px",
          display: "flex",
          justifyContent: "center"
        }} dir='ltr' count={data?.result?.articlesTotalCount / pageSize} page={page} color="primary" onChange={(e, p) => setPage(p)} />
      </Container>
    </>
  )
}

export default MainBlogsContainer