import { Box } from '@mui/material'
import theme from '../Styles/Styles'

const BottomSection = () => {
  return (
    <Box sx={{
      position: "absolute",
      left: "0",
      right: "0",
      backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyLjV2dyIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMjgwIDE0MFYwUzk5My40NiAxNDAgNjQwIDEzOSAwIDAgMCAwdjE0MHoiLz48L2c+PC9zdmc+)`,
      backgroundSize: "100%",
      bottom: "0",
      width: "100%",
      height: "100px",
      [theme.breakpoints.down("md")]: {
        height: "50px",
      },

      zIndex: "1",
      transform: "scale(1,1)",
    }} />
  )
}

export default BottomSection