import React from "react";
import { images } from "../../utils/helper";
import SpecialistCard from "../SpecialistCard";
import { Box, Grid, Pagination } from "@mui/material";
const SpecialistsCards = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: "light.main",
        p: "20px",
        borderRadius: "5px"
      }}>
        <Grid container spacing={2}>
          {images.map((image, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <SpecialistCard i={i} image={image} />
            </Grid>

          ))}

        </Grid>
        <Pagination sx={{
          mt: "20px",
          display: "flex",
          justifyContent: "center"
        }} dir='ltr' count={10} color="primary" />
      </Box>
    </>
  );
};

export default SpecialistsCards;
