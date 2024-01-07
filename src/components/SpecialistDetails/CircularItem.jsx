import { Box, Typography } from '@mui/material'
import React from 'react'
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';

const CircularItem = ({ precent, number, text }) => {
  const config = {
    percent: 55,
    number: false,
    size: "100%",
    // colorCircle: "#fff",
    fontWeight: 100,
    fontSize: "1rem",
    styles: {
      "borderRadius": "50%",
      "boxShadow": "inset 0 0 25px 10px #03aeaf"
    },
    // textPosition: "1.5em",
    linearGradient: [
      "#03aeaf",
      "#0097a3"
    ]

  };
  return (
    <>
      <Box sx={{
        position: "relative",
      }}>

        <CircularProgressBar {...config} percent={precent} >
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: 'translate(-50%,-50%)',
            textAlign: "center",
            fontWeight: "bold",

            fontSize: "1.2rem"
          }}
            className="text-gradient"
          >
            <Typography variant='h4'>{number}</Typography>
            <Typography variant='p'>{text}</Typography>
          </Box>
        </CircularProgressBar>
      </Box>
    </>
  )
}

export default CircularItem