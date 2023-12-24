import React, { useRef, useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "@splidejs/splide/css/sea-green";
import { Container } from "@mui/system";
import { useDirectionThemeContext } from "../../../Context/Direction";
import classes from "./Splide.module.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";


const SplideCarousel = ({ images, text, title }) => {
  const splideRef = useRef(null);
  const { isRtl } = useDirectionThemeContext();

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      arrows: true,
      arrowPath: "",
      prevArrow: '<button class="splide__arrow--prev">Previous</button>',
      nextArrow: '<button class="splide__arrow--next">Next</button>',
      type: "loop",
      perPage: 5,
      perMove: 1,
      direction: `${isRtl ? "rtl" : "ltr"}`,
      gap: ".5rem",
      pagination: false,
      breakpoints: {
        1400: {
          perPage: 5,
          gap: ".3rem",
        },
        1200: {
          perPage: 4,
          gap: ".3rem",
        },
        1024: {
          perPage: 3,
          gap: ".3rem",
        },
        768: {
          perPage: 2,
          gap: ".3rem",
        },
        640: {
          perPage: 1,
          gap: ".3rem",
        },
      },
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, [isRtl]);

  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{
      py: "80px"
    }}>
      {title &&
        <Typography
          variant="h4"
          component="h4"
          className="text-gradient"
          sx={{ fontWeight: "700", mb: "30px" }}

        >
          {title}
        </Typography>
      }
      <section
        ref={splideRef}
        className={`splide ${classes.splide}`}
        aria-label="Splide Basic HTML Example"
        style={{ position: "relative" }}
      >
        <div className="splide__track">
          <ul className="splide__list"     >
            {images.map((image, i) => (
              <Link key={i} to={`/specialists/${i}`} className={`splide__slide ${classes.splide__slide}`}>
                <Box sx={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "light.main",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  lineHeight: 1.3,
                  zIndex: 1,
                  padding: "10px",
                  gap: "0px",
                  "& span": {
                    fontSize: "17px",
                    margin: 0,
                    fontWeight: "bold",
                  }
                }}>
                  <span> 4.8</span>
                  <span>⭐</span>
                </Box>
                <Box

                  as={"li"} sx={{
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",


                  }} >
                  <img src={image} />
                  <h3>د / ماجد  الدسوقي </h3>
                  <h4>SPECIALITY </h4>
                  <p>مدير الموقع</p>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingX: "10px",

                  }}>
                    <span>10</span>
                    <span>sessions</span>

                  </Box>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingX: "10px",

                  }}>
                    <span>10</span>
                    <span>ExperienceYears</span>

                  </Box>
                </Box>
              </Link>
            ))}
          </ul>
        </div>
        <div className={`splide__arrows ${classes.splide__arrows}`}>
          <div className={`${classes.row_reverse}`}>
            <div
              className={`splide__arrow--prev  ${classes.splide__arrow__prev}`}
            >
              <IconButton>
                <ArrowLeftOutlined />
              </IconButton>
            </div>
            <div
              className={`splide__arrow--next  ${classes.splide__arrow__next}`}
            >
              <IconButton>
                <ArrowLeftOutlined />
              </IconButton>
            </div>
          </div>
          <Button variant="contained" onClick={() => navigate("/specialists")}>
            {text}
          </Button>
        </div>
      </section>
    </Container >
  );
};

export default SplideCarousel;
