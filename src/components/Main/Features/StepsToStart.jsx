import React from 'react'
import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import theme from "../../../Styles/Styles";
import step1 from "./../../../assets/images/steps/1.png";
console.log(step1)
import step2 from "../../../assets/images/steps/2.png";
import step3 from "../../../assets/images/steps/3.png";
import step4 from "../../../assets/images/steps/4.png";
import { Link } from 'react-router-dom';
const steps = [
  {
    id: 1,
    image: step1,
    title: "إبدأ جلستك العلاجية",
  },
  {
    id: 2,
    image: step2,
    title: "حدد الوقت المناسب",
  },
  {
    id: 3,
    image: step3,
    title: " اختار أحد مقدمي الرعاية",
  },
  {
    id: 4,
    image: step4,
    title: "قم بتحميل التطبيق ",
  },
]
const StepsToStart = () => {
  return (
    <Box sx={{
      backgroundColor: "light.main"
    }}>
      <Container maxWidth="xl" sx={{ py: "100px", textAlign: "center", }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: "600" }}
          className='text-gradient'
        >
          منصة أخصائي
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            my: "30px",
            fontSize: "18px",
            width: "50%",
            mx: "auto",
            color: "text.main",
            [theme.breakpoints.down("md")]: {
              width: "90%",
            },
          }}
        >
          تطبيق specialist هو الحل المتكامل لتقديم خدمات الرعاية والرفاهية
          النفسية عن بعد، عبر الجلسات والمحاضرات ومجموعات الدعم المقدمة من
          المختصين المرخصين.

        </Typography>
        <Grid container sx={{ my: "50px" }}
        >
          {
            steps?.map((step) => (
              <Grid item xs={12} sm={6} md={4} lg={3} p={"20px"} key={step?.id}  >
                <Link to={"/"}>
                  <Box
                    sx={{
                      p: "20px",
                      boxShadow: "0 0 2px rgba(0,0,0,.2)",
                      borderRadius: "10px"
                    }}>
                    <CardMedia
                      component="img"
                      sx={{
                        maxWidth: "230px",
                        width: "100%",
                        height: "230px",
                        marginInline: "auto",
                        backdropFilter: "blur(10px)",
                        [theme.breakpoints.down("md")]: {
                          width: "150px",
                          height: "150px",
                        },


                      }}
                      image={step?.image}
                      alt="step 1 "
                    />
                    <Typography sx={{ fontWeight: "600", my: "30px" }}>
                      {step?.title}
                    </Typography>
                  </Box>
                </Link>
              </Grid>

            ))
          }


        </Grid>
      </Container>
    </Box>
  )
}

export default StepsToStart