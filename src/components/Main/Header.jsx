import { Button, CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import HeaderPhoto from "../../assets/images/HeaderPhoto.svg";

import theme from "../../Styles/Styles";
import { notifyInfo } from "../../utils/helper";
import BottomSection from "../BottomSection";
const Header = ({ headerTitle, firstParagraph, secondParagraph, showButton }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const handleTimeNavigate = () => {
    if (user) {
      navigate("/diagnosis-times");
    } else {
      notifyInfo("يجب عليك تسجيل الدخول أولا");
      navigate("/login");
    }
  };
  return (

    <Box
      sx={{
        minHeight: "80vh",
        // backgroundColor: "bg",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "150px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        backgroundImage: `radial-gradient(circle at top left,rgba(255,255,255,.3) 50%,rgba(255,255,255,.3) 100%),url(https://www.nosghy.com/wp-content/uploads/2022/08/background-1.png)!important;`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: "90px",
        }}
      >
        {/* <Grid container spacing={2} alignItems="center"> */}
        <Box

          sx={{
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
            color: "text.secondary",
            fontWeight: "600",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            // background: "rgba(255,255,255,0.4)",
            zIndex: "2",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

          }}
        >
          <Typography
            component={"h3"}
            variant="h3"
            className="text-gradient"
            sx={{
              // color: "text.secondary",
              fontWeight: "600",
              p: "15px"
            }}
          >
            {headerTitle}
          </Typography>
          <Typography
            component={"p"}
            variant="body1"
            sx={{
              color: "text.main",
              fontSize: "18px",
              fontWeight: "600",
              my: "30px",
            }}
          >

            {firstParagraph}
          </Typography>
          <Typography
            component={"p"}
            variant="body1"
            sx={{
              color: "text.main",
              fontSize: "18px",
              fontWeight: "600",
              mb: "30px",
            }}
          >
            {secondParagraph}
          </Typography>
          {
            showButton && <Button variant="contained" onClick={handleTimeNavigate}>
              البدء بالتشخيص
            </Button>
          }
        </Box>
        <BottomSection />

        {/* <CardMedia
          component="img"
          image={header}
          // height="120%"
          sx={{
            position: "absolute",
            objectFit: "cover",
            inset: "30%",
            width: "70%",
            height: "70%",
            // pt: "50px",
            // position: "relative",
            // top: "30px",
            // objectFit: "cover",
            // width: "110%",
          }}
        /> 
     <Grid item xs={12} md={6} sx={{ overflow: "hidden" }}>
            <CardMedia
              component="img"
              image={header}
              height="120%"
              sx={{
                pt: "50px",
                position: "relative",
                top: "30px",
                objectFit: "cover",
                width: "110%",
              }}
            />
          </Grid>
      </Grid> */}
      </Container >
    </Box >


  );
};

export default Header;
