import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import theme from "../../Styles/Styles";
import BottomSection from "../BottomSection";
import TranslationBox from "./TranslationBox";
const disease = ["اضطرابات الأطفال", "الاكتئاب", "الفصام", " الوسواس القهري"];


const SpecialistsList = () => {
  return (
    <>
      <Box
        sx={{

          py: "100px",
          // borderTopRightRadius: "200px",
          display: "flex",
          alignItems: "center",
          minHeight: "50vh",
          position: "relative",
          paddingBottom: "150px",
          overflowX: "hidden",
          // backgroundColor: "opacity-bg.main",
        }}

      >

        {/* <Box
          sx={{
            position: "absolute",
            clipPath: " polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",

            width: "50%",
            height: "100%",
            left: "0",
            top: "0",
            // background: "#fff",
            backgroundColor: "opacity-bg.main",
            opacity: "1"

          }}
        /> */}
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
          }}
        >

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: "700" }}
                className="text-gradient"
              >
                مختصون مرخصون على مدار الساعة
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  my: "30px",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "text.main",
                }}
              >
                أفضل الأطباء والأخصائيين النفسيين والأسريين المرخصين لتقديم
                الجلسات بسهولة وخصوصية عبر التطبيق.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "end",
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Box position={"relative"}>
                <TranslationBox top="-50px" right="-75px" />

                <Paper
                  variant="outlined"
                  sx={{
                    maxWidth: "450px",
                    width: "100%",

                    p: "40px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    borderTopRightRadius: "60px",
                    borderBottomLeftRadius: "60px",
                    // backgroundColor: "opacity-bg.main",
                    background: "rgba(255,255,255,.2)",
                    borderRadius: " 16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: " blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    position: "relative",
                    zIndex: "1",
                  }}
                >

                  <Paper
                    elevation={1}
                    sx={{
                      p: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      color: "text.secondary",
                    }}
                  >
                    <Typography color="text.secondary">
                      30M دقيقة استشارية
                    </Typography>
                    <MoreTimeIcon
                      sx={{
                        color: "primary.main",
                      }}
                    />
                  </Paper>
                  <Paper
                    elevation={1}
                    sx={{
                      p: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="text.secondary">610+ مختص مرخص</Typography>
                    <SupervisedUserCircleIcon
                      sx={{
                        color: "primary.main",
                      }}
                    />
                  </Paper>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    {disease.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          background:
                            // "linear-gradient( 109.6deg, rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% )",
                            "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )",
                          color: "#fff",
                          width: "fit-content",
                          p: "10px ",
                          fontSize: "13px",
                          fontWeight: "600",
                          borderRadius: "5px",
                          display: " inline-flex",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>

            </Grid>
          </Grid>
        </Container>
        <BottomSection />
      </Box>
    </>
  );
};

export default SpecialistsList;
