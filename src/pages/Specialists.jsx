import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import backgroundImage from "../assets/images/consultants-team.png";
import TextSlider from "../components/TextSlider/TextSlider";
import SpecialistsContainer from "../components/Specialists/SpecialistsContainer";
const Specialists = () => {
  return (
    <>
      <Box
        sx={{
          mt: "90px",
          minHeight: "40vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            left: "0",
            top: "0",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Container maxWidth="xl">
          <Box
            position={"relative"}
            sx={{
              boxShadow: "0 0 2px rgba(0,0,0,0.3)",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              width: "fit-content",
              p: "30px",
              mx: "auto",
              borderRadius: '10px',
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: "2.8rem",
                fontWeight: "600",
                py: "10px",
              }}
              className="text-gradient"
            >
              المختصين
            </Typography>
            <Typography variant="p" component="p" mx="auto" mt="30px">
              أفضل الأطباء والأخصائيين النفسيين والأسريين المرخصين لتقديم
              الجلسات بسهولة وخصوصية عبر المنصة.
            </Typography>
          </Box>
        </Container>
      </Box>
      <TextSlider />
      <SpecialistsContainer />
    </>
  );
};

export default Specialists;
