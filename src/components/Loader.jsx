import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "500px",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          sx={{
            width: "60px !important",
            height: "60px !important",
          }}
        />
      </Box>
    </>
  )
}

export default Loader