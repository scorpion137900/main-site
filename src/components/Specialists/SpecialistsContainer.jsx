import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import SpecialistsFilter from './SpecialistFilter/SpecialistsFilter'
import SpecialistsCards from './SpecialistsCards'

const SpecialistsContainer = () => {
  return (
    <>
      <Box sx={{
        my: "80px",
        position: "relative",
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={"20px"}>
            <Grid item xs={12} md={3}>
              <SpecialistsFilter />
            </Grid>
            <Grid item xs={12} md={9}>
              <SpecialistsCards />

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default SpecialistsContainer