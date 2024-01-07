import React from 'react'
import ProfileHeader from '../components/SpecialistDetails/ProfileHeader'
import Statics from '../components/SpecialistDetails/Statics'
import ProfileTabs from '../components/SpecialistDetails/ProfileTabs'
import { Box, Container } from '@mui/material'


const SpecialistDetails = () => {
  return (
    <>
      <ProfileHeader />

      <Box sx={{
        backgroundColor: " #e5e5f780",
        // opacity: " 0.5",
        backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f780 10px ), repeating-linear-gradient( #03aeaf55, #03aeaf80 )",
        backgroundAttachment: "fixed",
        py: "100px",
        mt: "180px"
      }}>
        <Container maxWidth="xl">

          <Statics />
          <ProfileTabs />
        </Container>
      </Box>
    </>
  )
}

export default SpecialistDetails