import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import { ParallaxBanner } from "react-scroll-parallax";
import blogImg from "../../assets/images/blog.png";
const Blog = () => {
  const navigate = useNavigate();
  // const background = {
  //   image:
  //     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
  //   translateY: [0, 50],
  //   opacity: [1, 0.3],
  //   scale: [1.05, 1, 'easeOutCubic'],
  //   shouldAlwaysCompleteAnimation: true,
  // };

  return (
    <Box sx={{
      backgroundColor: "light.main",
      py: "100px",
      position: "relative",
    }}>
      {/* <ParallaxBanner
        style={{ aspectRatio: "16/9" }}
        layers={[
          background
        ]}

      > */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "20px",
          }}
        >
          <Typography
            component={"h5"}
            variant={"h5"}
            sx={{
              fontWeight: "700",
            }}
            className="text-gradient"
          >
            المدونة
          </Typography>
          <Button onClick={() => navigate("/blogs")} variant="contained">
            جميع المقالات
          </Button>
        </Box>
        <div
          style={{
            backgroundColor: "var(--border-color)",
            height: "1px",
            marginBottom: "40px",
          }}
        />
        <Grid container spacing={2}>
          <BlogCard />
        </Grid>
      </Container>
      {/* </ParallaxBanner> */}
    </Box>
  );
};

export default Blog;
