import React from "react";
import { images } from "../../utils/helper";
import SpecialistCard from "../SpecialistCard";
import { Box, Grid, Pagination } from "@mui/material";
import { useGetAllStaffsQuery } from "../../store/features/staff/Staff.js";
import { useState } from "react";
import Loader from "../Loader.jsx";
const SpecialistsCards = () => {
  // const staffs = useGetAllStaffsQuery({ page: 1, pageSize 10})
  const [page, setPage] = useState(1)
  const pageSize = 10;
  const { data, isFetching, isError, isSuccess } = useGetAllStaffsQuery(page, pageSize);
  console.log(data)
  return (
    <>
      <Box sx={{
        backgroundColor: "light.main",
        p: "20px",
        borderRadius: "5px"
      }}>
        <Grid container spacing={2}>
          {isFetching ? (
            <Loader />
          ) : <>
            {data?.result?.staff.map((el, i) => (
              <Grid item xs={12} md={6} lg={4} key={el?.id}>
                <SpecialistCard i={el?.id} date={el?.closestTime} firstName={el?.firstName} lastName={el?.lastName} image={"https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png"}

                />
              </Grid>

            ))}
          </>}

        </Grid>
        <Pagination sx={{
          mt: "20px",
          display: "flex",
          justifyContent: "center"
        }}
          count={data?.result?.staffcount / pageSize}
          dir='ltr' page={page} color="primary" onChange={(e, p) => setPage(p)} />
      </Box>
    </>
  );
};

export default SpecialistsCards;
