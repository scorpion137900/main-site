import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  Chip,
  CircularProgress,
  Grid,
  Pagination,
} from "@mui/material";
import { Blogs } from "../../../utils/helper";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const BlogCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(array.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = array.slice(startIndex, endIndex);
  const handlePageChange = (event, pageNumber) => {
    setLoading(true);
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(interval);
  }, [currentPage]);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            minHeight: "500px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress
            sx={{
              width: "60px !important",
              height: "60px !important",
            }}
          />
        </Box>
      ) : (
        currentPosts.map((item, index) => (
          <Grid item sm={6} xs={12} md={4} lg={3} key={index}>

            <Card
              sx={{
                width: "100%",
                "&:hover span": {
                  backgroundColor: "transparent !important",
                },
                "&:hover img": {
                  transform: "scale(1.05)",
                  transition: "transform .5s ease-in-out",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={Blogs[0].image}
                  alt="green iguana"
                />
                <Typography variant="body2" color="text.main" sx={{
                  position: " absolute",
                  top: "170px",
                  right: "5px",
                  backgroundColor: "primary.main",
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "5px",
                  fontSize: '12px',
                }}>
                  {Blogs[0].date}
                </Typography>
                <CardContent>
                  <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }} >
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Filled" />
                  </Box>

                  <Typography
                    // color={"text.secondary"}
                    variant="h6"
                    component="h6"
                    fontWeight={"700"}
                    my="20px"
                    fontSize=".9rem"
                  >
                    {Blogs[0].title}
                  </Typography>
                  <Typography variant="body1" component="p" fontSize=".9rem">
                    {Blogs[0].text.slice(0, 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      )}

      <Box
        mx="auto"
        my="30px"
        width="100%"
        display={"flex"}
        justifyContent={"center"}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          dir="ltr"
          color="primary"
        />
      </Box>
    </>
  );
};

export default BlogCard;
