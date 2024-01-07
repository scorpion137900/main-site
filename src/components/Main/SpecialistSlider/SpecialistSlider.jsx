import React from 'react'
import SplideCarousel from '../SplideCarousel/SplideCarousel'
import { images } from '../../../utils/helper'
import { Box } from '@mui/material'


const SpecialistSlider = () => {
  return (<>
    <Box sx={{
      position: "relative",
      backgroundColor: "light.main",
      py: "100px",
    }}>


      <SplideCarousel images={images} text="المزيد" title="اختر أحد الأخصائيين" />

    </Box>
  </>)
}

export default SpecialistSlider