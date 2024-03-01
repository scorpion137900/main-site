import React from 'react'
import ProfileHeader from '../components/SpecialistDetails/ProfileHeader'
import UserProfileTabs from '../components/Profile/UserProfileTabs'
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  return (
    <>
      <ProfileHeader user={user} />
      <Container
        maxWidth="xl"
      >
        <UserProfileTabs />
      </Container>
    </>
  )
}

export default Profile