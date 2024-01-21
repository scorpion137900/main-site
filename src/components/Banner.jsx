import React from 'react'
import TextSlider from './TextSlider/TextSlider'
import { Box, Container, Typography } from '@mui/material'

const Banner = ({ link, title, text }) => {
  return (
    <Box sx={{
      background: `url(${link}) no-repeat center center/cover`,
      backgroundAttachment: "fixed"
    }}>
      <Box
        sx={{
          pt: "90px",
          minHeight: "50vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",

        }}
      >
        {/* <img
        src={backgroundImage}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          left: "0",
          top: "0",
          height: "100%",
          objectFit: "cover",
        }}
      /> */}
        <Container maxWidth="xl">
          <Box
            position={"relative"}
            sx={{
              boxShadow: "0 0 2px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              width: "fit-content",
              p: "30px",
              mx: "auto",
              borderRadius: '10px',
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "2.8rem",
                fontWeight: "600",
                py: "10px",
              }}
              className="text-gradient"
            >
              {title}
            </Typography>
            <Typography variant="p" component="p" mx="auto" mt="30px">
              {text}
            </Typography>
          </Box>
        </Container>
      </Box>
      <TextSlider />
    </Box>
  )
}

export default Banner