import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import backgroundImage from "../assets/images/consultants-team.png";
import TextSlider from "../components/TextSlider/TextSlider";
import SpecialistsContainer from "../components/Specialists/SpecialistsContainer";
import Banner from "../components/Banner";
const Specialists = () => {
  return (
    <>
      <Banner link={backgroundImage} title={"المختصين"} text={"أفضل الأطباء والأخصائيين النفسيين والأسريين المرخصين لتقديم الجلسات بسهولة وخصوصية عبر المنصة."} />


      <SpecialistsContainer />
    </>
  );
};

export default Specialists;
