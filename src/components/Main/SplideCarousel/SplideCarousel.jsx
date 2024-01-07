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
import SpecialistCard from "../../SpecialistCard";



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

              <SpecialistCard key={i} i={i} image={image} />
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
