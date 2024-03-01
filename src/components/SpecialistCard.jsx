import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./Main/SplideCarousel/Splide.module.css";
import { Box } from '@mui/material';
import { convertToArabicFormat } from '../utils/helper';
const SpecialistCard = ({ i, image, firstName, lastName, date }) => {
  const arabicDate = convertToArabicFormat(date)

  return (
    <Link to={`/specialists/${i}`} className={`splide__slide ${classes.splide__slide}`}>
      <Box sx={{
        position: "absolute",
        top: "15px",
        right: "15px",
        width: "50px",
        height: "50px",
        backgroundColor: "light.main",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        lineHeight: 1.3,
        zIndex: 1,
        padding: "10px",
        gap: "0px",
        "& span": {
          fontSize: "17px",
          margin: 0,
          fontWeight: "bold",
        }
      }}>
        <span> 4.8</span>
        <span>⭐</span>
      </Box>
      <Box sx={{
        position: "absolute",
        top: "15px",
        left: "15px",
        backgroundColor: "light.main",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        lineHeight: 1.3,
        zIndex: 1,
        padding: "10px",
        gap: "0px",
        fontSize: "10x",
        "& span": {
          fontSize: "9px",
          margin: 0,
          fontWeight: "bold",
        }
      }}>
        <span>أخر نشاط</span>
        <span>{arabicDate}</span>
      </Box>
      <Box

        as={"li"} sx={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",


        }} >
        <Box as="img" alt="" src={image} sx={{
          objectFit: "cover",
          maxHeight: "200px",
        }} />
        <h3>{firstName + " " + lastName} </h3>
        <h4>SPECIALITY </h4>
        <p>مدير الموقع</p>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingX: "10px",

        }}>
          <span>10</span>
          <span>sessions</span>

        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingX: "10px",

        }}>
          <span>10</span>
          <span>ExperienceYears</span>

        </Box>
      </Box>
    </Link>
  )
}

export default SpecialistCard