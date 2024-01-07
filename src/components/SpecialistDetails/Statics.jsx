import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CircularItem from './CircularItem';


const Statics = () => {
  const data = [
    {
      precent: 55,
      number: "500",
      text: "عدد الجلسات"
    },
    {
      precent: 45,
      number: "20",
      text: "سنوات الخبرة"
    },
    {
      precent: 90,
      number: "300 ريال",
      text: "سعر الجلسة "
    },
    {
      precent: 20,
      number: "20",
      text: "عدد التقييمات "
    },
  ]

  return (
    <>


      <Grid container sx={{
        display: "flex",
        justifyContent: "space-between",

      }} >
        {data?.map((item, i) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={i} sx={{
            my: "20px",
            p: "20px",
          }}>

            <CircularItem precent={item?.precent} number={item?.number} text={item?.text} />
          </Grid>
        ))}

      </Grid>



    </>
  )
}

export default Statics