import React from 'react'
import Banner from '../components/Banner'
import FilesContainer from '../components/Files/FilesContainer'

const Files = () => {
  return (
    <>
      <Banner title={"Nourishing Insights for a Healthy Lifestyle"} text={"Welcome to HealthyFiles, your digital haven for wellness insights and resources"}
        link={"https://files.community/blog-resources/files2-4-30/HeroImage.jpg"}
      />
      <FilesContainer />
    </>
  )
}

export default Files