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
import { Blogs, convertToArabicFormat } from "../../utils/helper";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarCard from "../AvatarCard";
import { SERVER_URL } from "../../utils/constants";
import { BookmarkAdd, BookmarkAdded } from "@mui/icons-material";
import Loader from "../Loader";


const BlogCard = ({ maxSize, posts, isFetching }) => {
  console.log(posts)
  const navigate = useNavigate()
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <Grid container spacing={"20px"}>
          {posts?.map((post) => {
            const arabicDate = convertToArabicFormat(post?.articleCreationDate)
            return (

              <Grid item sm={6} xs={12} md={maxSize ? 6 : 4} lg={maxSize ? 4 : 3} key={post?.id}
                onClick={() => {
                  navigate("/blogs/" + post?.id,
                    {
                      state: {
                        post: post
                      }
                    }
                  )
                }}
              >

                {/* <Link to={"/blogs/" + post?.id} state={{ post: post }}> */}
                {/* <Link to={{ pathname: "/blogs/" + post?.id, state: post }}> */}
                <Card
                  sx={{
                    width: "100%",

                    "&:hover img": {
                      transform: "scale(1.05)",
                      transition: "transform .5s ease-in-out",
                    },


                  }}
                >
                  <CardActionArea>
                    <Box sx={{
                      position: "relative",
                    }}>



                      <AvatarCard w={"50px"} h={"50px"} fz={"13px"} fz2={"11px"} fz3={"9px"} hide name={post?.staffName} staffId={post?.staffId} likes={post?.likes} />
                      <CardMedia
                        component="img"
                        height="200"
                        image={SERVER_URL + post?.articleImage}
                        alt="green iguana"
                      />
                      <Typography variant="body2" color="text.main" sx={{
                        position: " absolute",
                        top: "5px",
                        right: "5px",
                        backgroundColor: "primary.main",
                        color: "#fff",
                        padding: "5px",
                        borderRadius: "5px",
                        fontSize: '12px',
                      }}>
                        {arabicDate}
                      </Typography>
                      <Typography variant="body2" color="text.main" sx={{
                        position: " absolute",
                        top: "5px",
                        left: "5px",
                        backgroundColor: "primary.main",
                        color: "#fff",
                        padding: "5px",
                        borderRadius: "5px",
                        fontSize: '12px',
                      }}>
                        {post?.isBookmarked ? <BookmarkAdded /> : <BookmarkAdd />}
                      </Typography>
                    </Box>
                    <CardContent sx={{ pt: "40px" }}>
                      <Box sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }} >
                        <Chip label={post?.specialitiesName} />

                      </Box>

                      <Typography
                        // color={"text.secondary"}
                        variant="h6"
                        component="h6"
                        fontWeight={"700"}
                        my="20px"
                        fontSize=".9rem"
                      >
                        {post?.title}
                      </Typography>
                      <Typography variant="body1" component="p" fontSize=".9rem">
                        {post?.content.slice(0, 100)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* </Link> */}
              </Grid>
            )
          })}
        </Grid>
      )}

      <Box
        mx="auto"
        my="30px"
        width="100%"
        display={"flex"}
        justifyContent={"center"}
      >

      </Box>
    </>
  );
};

export default BlogCard;
