import React from 'react'
import ProfileHeader from '../components/SpecialistDetails/ProfileHeader'
import UserProfileTabs from '../components/Profile/UserProfileTabs'
import { Container } from '@mui/material'

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <Container
        maxWidth="xl"
      >
        <UserProfileTabs />
      </Container>
    </>
  )
}

export default Profile