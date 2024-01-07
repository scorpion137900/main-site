import { PlayCircleFilled } from '@mui/icons-material'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

const SpecialistsVideo = () => {
  return (
    <>

      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Box sx={{
          background: "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )",
          borderRadius: "5px",
          padding: "5px",
          position: "relative",
          cursor: "pointer",
          "&:hover .overlay": {
            scale: "1"
          }
        }}>
          <Box className='overlay' sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#00000080",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scale: '0',
            transformOrigin: "center",
            transition: " .5s",
            transitionTimingFunction: "ease-in-out"
          }}>
            <IconButton sx={{
              width: '100%',
              height: "100%",
            }}>
              <PlayCircleFilled color='primary' fontSize='large' sx={{ scale: '2' }} />
            </IconButton>
          </Box>
          <Box as="img" sx={{
            width: "100%",
            height: "200px",
            borderRadius: "5px",
            objectFit: "cover"
          }}
            src="https://marketplace.canva.com/EAFf5rfnPgA/1/0/1600w/canva-blue-modern-eye-catching-vlog-youtube-thumbnail-LEcp-BYepDU.jpg"
            alt="thumbnail"
          />
          <Box backgroundColor={"white"} mt={"-10px"} p="20px">
            <Typography variant='h6' color={"primary"}>
              عنوان الفيديو
            </Typography>
            <Typography variant='p' color={"text.primary"}>
              lorem ipsum dolor sit
              amet
              consectetur
              adipisicing elit.
              Repudiandae, voluptatum
              lorem ipsum

            </Typography>
          </Box>
        </Box>
      </Grid>

    </>
  )
}

export default SpecialistsVideo