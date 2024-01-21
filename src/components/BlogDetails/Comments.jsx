import { Box } from '@mui/material'
import React from 'react'
import Comment from '../Comment'

const Comments = () => {
  return (
    <Box sx={{
      backgroundColor: "rgba(0,0,0,.1)",
      my: "30px",
      p: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      {[1, 2, 3, 4, 5].map((item, index) => <Comment key={index} />)}
    </Box>
  )
}

export default Comments