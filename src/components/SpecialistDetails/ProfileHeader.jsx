import { Box, Container, Skeleton, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import TimesTimeline from './TimesTimeline'
import theme from '../../Styles/Styles';

const ProfileHeader = ({ timeLine, user }) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{
        minHeight: "250px",
        backgroundColor: " #e5e5f780",
        // opacity: " 0.5",
        backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f780 10px ), repeating-linear-gradient( #03aeaf55, #03aeaf80 )",
        backgroundAttachment: "fixed",
        position: "relative",
        marginBottom: "100px",
        borderBottomRightRadius: "200px",

      }}>
        <Container maxWidth="xl" sx={{
          display: 'flex',
          flexWrap: "wrap",
          flexDirection: matches ? "column-reverse" : "row"
        }}>
          <Box sx={{

            transform: matches ? "translateY(0)" : "translateY(40%)",
            // backgroundColor: "opacity-bg.main",
            width: matches ? "100%" : "350px",
            marginLeft: "auto",
            display: "flex",
            // alignItems: "flex-end",
            justifyContent: "flex-end",
            flexDirection: "column",

          }}>
            {timeLine &&
              <TimesTimeline />
            }
          </Box>
          <Box sx={{
            position: matches ? "static" : "absolute",
            top: "100%",
            transform: matches ? "translateY(0)" : "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            flexDirection: matches ? "column" : "row",
            my: matches ? "50px " : "0px",
          }}>
            <Box as={"img"} alt="profile" src="https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png"
              sx={{

                width: "180px",
                height: "180px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
            <Box sx={{
              opacity: .6
            }}>
              {user?.name ?

                <Typography className='text-gradient' variant='h4' py="10px" fontWeight={"900"} >{user?.name} </Typography>
                : <Skeleton />
              }
              {/* <Typography variant='p' fontWeight={"700"} color={"text.main"}>طبيب وأخصائي نفسي</Typography> */}
              {user?.email && <Typography variant='p' fontWeight={"700"} color={"text.main"}>{user?.email}</Typography>}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProfileHeader