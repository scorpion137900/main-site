import React from 'react'
import TopSection from '../../TopSection'
import BottomSection from '../../BottomSection'
import SplideCarousel from '../SplideCarousel/SplideCarousel'
import { images } from '../../../utils/helper'
import { Box } from '@mui/material'
import TranslationBox from '../TranslationBox'

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