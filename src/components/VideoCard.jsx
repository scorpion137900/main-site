import { PlayCircleFilled } from '@mui/icons-material'
import { Box, Chip, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import AvatarCard from './AvatarCard'
import { useVideoDialogContext } from '../Context/VideoDialogContext'
import { SERVER_URL } from "../utils/constants";
const VideoCard = ({ maxSize, video }) => {
  const { setVideo, setOpen } = useVideoDialogContext()
  console.log(video)
  return (
    <>

      <Grid item sm={6} xs={12} md={maxSize ? 6 : 4} lg={maxSize ? 4 : 3} >
        <Box sx={{
          // background: "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )",
          borderRadius: "5px",
          // padding: "5px",
          position: "relative",
          cursor: "pointer",
          boxShadow: "0 0 2px rgba(0,0,0,.2)",

        }}>

          <Box sx={{
            position: "relative",
            "&:hover .overlay": {
              scale: "1"
            }
          }}
            onClick={() => {
              setOpen(true)
              setVideo(video?.link)
            }}
          >
            <AvatarCard w={"50px"} h={"50px"} fz={"13px"} fz2={"11px"} fz3={"9px"} hide />
            <Box className='overlay' sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "96%",
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
              src={`${SERVER_URL}${video?.thumbnail}`}
              alt="thumbnail"
            />
          </Box>
          <Box backgroundColor={"white"} mt={"-10px"} p="50px 20px 15px">
            <Stack direction="row" spacing={1} mb={"10px"}>
              <Chip label="primary" color="primary" />
              <Chip label="primary" color="primary" />
            </Stack>
            <Typography variant='p' color={" #9EA1B6"} fontSize={"12px"} sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              direction: "ltr"
            }}>
              <Box as="span">31 October - 1 Minute to read</Box>

            </Typography>
            <Typography variant='h6' color={"primary"}>
              {video?.title}
            </Typography>
            <Typography variant='body' color={"text.primary"} fontSize={"13px"}>
              {video?.description}
            </Typography>
          </Box>
        </Box>
      </Grid>

    </>
  )
}

export default VideoCard