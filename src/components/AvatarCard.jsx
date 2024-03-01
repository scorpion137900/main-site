import { ThumbUp } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AvatarCard = ({ w, h, fz, fz2, fz3, hide, name, staffId, likes }) => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          transform: "translateY(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
          px: hide ? "10px" : "",
        }}
      >
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "13px",
          left: "20px",
          flexDirection: "row",
          my: "0px",
          zIndex: 99,
          cursor: "pointer"

        }}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            navigate("/specialists/" + staffId)
          }}
        >
          <Box as={"img"} alt="profile" src="https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png"
            sx={{

              width: w,
              height: h,
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />

          <Box sx={{
            opacity: .6,
            backgroundColor: "light.main",
            p: "10px",
            borderRadius: "5px",
            position: "relative"

          }}>

            <Box as="span" sx={{
              position: "absolute",
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              display: "block",
              borderColor: "transparent",
              borderWidth: "10px",
              borderStyle: "solid",
              borderRightColor: "main"
            }}


            />
            <Typography className='text-gradient' fontSize={fz} variant='h6' py="5px" fontWeight={"700"} padding={0} >{name}
            </Typography>
            {!hide &&
              <>
                <Typography variant='p' fontSize={fz2} fontWeight={"600"} color={"text.main"} padding={0} >طبيب وأخصائي نفسي

                </Typography>
              </>
            }
          </Box>
        </Box>
        <Box as="span" sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",

          backgroundColor: "main",
          p: "5px",
          borderRadius: "5px",

          width: "fit-content",
          fontSize: fz3,
          fontWeight: "700",
          color: "light.main",
        }}>
          {likes}
          <ThumbUp />
        </Box>
      </Box>
    </>
  )
}

export default AvatarCard