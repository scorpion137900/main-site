import { Box } from '@mui/material'
import React from 'react'

const TranslationBox = (props) => {

  return (
    <Box

      sx={{
        position: "absolute",

        width: "150px",
        height: "150px",

        // background: "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )",
        // backgroundColor: "opacity-bg.main",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        backdropFilter: " blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: " 10px",
        zIndex: "0",

        ...props
      }}
      className="translation"
    />
  )
}

export default TranslationBox