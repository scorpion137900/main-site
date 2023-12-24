import {
  Box,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import React from "react";
import theme from "../../../Styles/Styles";
import TopSection from "../../TopSection";
const Features = [
  "جلسات فورية، ومجدولة وبرامج علاجية ",
  "لقاءات مسجلة ومجموعات دعم",
  "مقاييس للصحة النفسية ووصفات دوائية معتمدة",
  "متخصصون معتمدين دوليًا",
  "تمايز خططنا يعتمد على مستوى خبرة المعالجين ",
  "جلسات مجانية بكل سرية وخصوصية",
];
const itemData = [
  {
    img: "https://world.edu/wp-content/uploads/2019/08/parentreading.jpg",
  },
  {
    img: "https://www.english.com/blog/wp-content/uploads/2021/01/Reading-parents-1132x670.jpg",
  },
  {
    img: "https://www.readingrockets.org/sites/default/files/field/image/hp_readebook_0.jpg",
  },
];
const FeaturesList = () => {
  return (
    <Box sx={{ position: "relative" }}  >
      <TopSection />
      <Container maxWidth="xl">
        <Box
          sx={{

            borderRadius: "35px",
            pt: "150px",
            pb: "60px"
          }}
        >
          <Container maxWidth="xl">
            <Grid container rowSpacing={5} columnSpacing={3} py="50px">
              {Features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} px="25px">
                  <Paper
                    elevation={0}
                    sx={{
                      position: "relative",
                      p: "20px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{
                        position: "absolute",
                        right: "-25px",
                        top: "-25px",
                        width: "50px",
                        height: "50px",
                        background:
                          // "linear-gradient( 109.6deg, rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% )",
                          // "linear-gradient( 109.6deg, #20b2aa 11.2%, #03aeaf 91.2% )",
                          "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "15px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "text.main",
                      }}
                    >
                      {feature}
                    </Typography>
                    {/* <img src="https://www.nosghy.com/wp-content/uploads/2022/08/image_3-480x294.png" alt="" width={"100%"} /> */}
                  </Paper>
                </Grid>
              ))}
            </Grid>
            {/* <Grid container spacing={5} py="50px">
              {itemData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    height="300px"
                    width="100%"
                    sx={{
                      objectFit: "cover",
                      position: "relative",
                      borderRadius: "50px",
                      top: `${index === 1 && "-40px"}`,
                      [theme.breakpoints.down("md")]: {
                        top: `${index === 1 && "0px"}`,
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid> */}
          </Container>
        </Box >
      </Container >
    </Box>
  );
};

export default FeaturesList;
