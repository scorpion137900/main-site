import { CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../Styles/Styles";
import { useParallax } from "react-scroll-parallax";

const Point = ({ Icon, img, text, reverse }) => {
  const parallax = useParallax({
    scale: [.5, 1.2],
    easing: 'easeOutQuad',
  });
  const parallax1 = useParallax({
    opacity: [0.5, 1],

    easing: 'easeOutQuad',
  });
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        flexDirection: reverse ? "row-reverse" : "row",
        my: "50px",
        mb: "100px",
      }}
    >
      <Grid item xs={12} md={6} >
        <Box
          sx={{
            maxWidth: "350px",
            maxHeight: "350px",
            textAlign: "center",
            position: "relative",

            marginInlineStart: reverse ? "auto" : "",
            [theme.breakpoints.down("md")]: {
              marginInline: "auto",
              marginBottom: "20px",
            },
            "&:before,&:after": {
              content: "''",
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "85%",
              borderRadius: "50px",
              backgroundColor: "opacity-bg.main",
              opacity: "1",
            },
            "&:after": {
              opacity: ".5",
              height: "100%",
              width: "80%",
              left: "50%",
              transform: "translateX(-50%)",
            },
          }}
        >
          <CardMedia
            component="img"
            ref={parallax.ref}
            image={img}
            height="100%"
            sx={{
              objectFit: "contain",
              width: "100%",
              zIndex: "1",
              position: "relative",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} ref={parallax1?.ref}>
        <Box display="flex" gap="15px" >
          <Box
            sx={{
              width: "60px",
              height: "60px",
              display: "flex",
              mb: "30px",
              alignItems: "center",
              backgroundColor: "opacity-bg.main",
              justifyContent: "center",
              borderRadius: "10px",
              "& svg": {
                fontSize: "2rem",
                color: "main",
                fill: "opacity-bg.main",
              },
            }}
          >
            <Icon />
          </Box>
          <Box>
            <Typography
              component={"h6"}
              variant={"h6"}
              sx={{
                fontWeight: "700",
              }}
              className="text-gradient"
            >
              {text?.[0]}
            </Typography>
            <Typography
              variant="body1"
              component={"p"}
              sx={{
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              {text?.[1]}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" component={"p"} fontWeight={"600"}>
          {text?.[2]}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Point;
