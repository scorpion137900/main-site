import { Avatar, Box, Rating, Typography } from '@mui/material'
import React from 'react'

const Comment = () => {
  return (
    <>
      <Box
        sx={{
          my: "20px",
          display: "flex",
          alignItems: "flex-start",
          mb: "10px",
          position: "relative",
          width: "100%"
        }}
      >
        <Avatar alt={"avatar"} src={"avatar"} />
        <Box sx={{
          marginInlineStart: "12px", flexGrow: "1",
          background: "#ffffff80",
          width: '100%',
          p: "20px",
          borderRadius: '5px',
          position: "relative",
          "&:after": {
            content: "''",
            position: "absolute",
            top: "10px",
            left: "-9px",
            width: "0px",
            height: "0px",
            borderTop: " 10px solid transparent",
            borderBottom: "10px solid transparent",

            borderRight: " 10px solid #ffffff80",
          }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: 'wrap'
          }}>
            <Typography variant='body1' fontWeight={"700"} component={"h6"} color={"primary"}>
              UserName
            </Typography>
            <Rating name="read-only" value={7.8} max={10} readOnly size="small" precision={0.1} />
          </Box>
          <Typography variant='body2' fontWeight={"500"} sx={{ my: "10px" }} component={"p"} color={"text.main"}>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, voluptatum
            lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, voluptatum
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, voluptatum

          </Typography>
          <Typography sx={{
            opacity: .6,
            position: "absolute",
            bottom: "10px",
            right: '18px'
          }}>2023-10-19</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Comment