import { Box } from '@mui/material'
import React from 'react'
import theme from '../Styles/Styles'

const TopSection = () => {
  return (
    <Box

      sx={{
        backgroundImage: " url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyLjV2dyIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik02NDAgMTQwQzI4Ni41NCAxNDAgMCAwIDAgMGgxMjgwUzk5My40NiAxNDAgNjQwIDE0MHoiLz48L2c+PC9zdmc+)",
        position: "absolute",
        left: "0",
        right: "0",
        backgroundSize: "100%",
        top: "0",
        width: "100%",
        height: "50px",
        [theme.breakpoints.down("md")]: {
          height: "50px",
        },

        zIndex: "1",
        transform: "scale(1,1)",
      }}
    />
  )
}

export default TopSection