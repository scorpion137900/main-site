import React from "react";
import { images } from "../../utils/helper";
import SpecialistCard from "../SpecialistCard";
import { Box, Grid, Pagination } from "@mui/material";
import { useGetAllStaffsQuery } from "../../store/features/staff/Staff.js";
import { useState } from "react";
const SpecialistsCards = () => {
  // const staffs = useGetAllStaffsQuery({ page: 1, pageSize 10})
  const [page, setPage] = useState(1)
  const { data, isFetching, isError, isSuccess } = useGetAllStaffsQuery(1, 10);
  console.log(data)
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
        }} dir='ltr' page={page} color="primary" onChange={(e, p) => setPage(p)} />
      </Box>
    </>
  );
};

export default SpecialistsCards;
