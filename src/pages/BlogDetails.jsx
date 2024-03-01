import React, { useEffect } from 'react'


import { Avatar, Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'

import Comments from '../components/BlogDetails/Comments'
import { BookmarkAdd, BookmarkAdded, ThumbUp } from '@mui/icons-material'
import AvatarCard from '../components/AvatarCard'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetArticleContentQuery } from '../store/features/blog/blog'
import { convertToArabicFormat, notifyError } from '../utils/helper'
import Loader from '../components/Loader'
import { SERVER_URL } from '../utils/constants'



const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isSuccess, isFetching, isError } = useGetArticleContentQuery(id)
  const { state } = useLocation()
  console.log(data, state)
  const post = state?.post
  useEffect(() => {
    if (isError) {
      console.log(isError)
      notifyError("Something went wrong")
      navigate('/blogs')
    }
  }, [isError])
  return (
    <>
      {isFetching ? <Loader /> :

        <>

          <Box sx={{
            minHeight: "250px",
            // backgroundColor: " #e5e5f780",
            // opacity: " 0.5",
            backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f780 10px ), repeating-linear-gradient( #03aeaf55, #03aeaf80 )",
            // backgroundColor: "#03aeaf80",
            // backgroundImage: "url('https://www.transparenttextures.com/patterns/brushed-alum.png')",
            // backgroundImage: "url('https://www.transparenttextures.com/patterns/black-linen.png')",
            backgroundAttachment: "fixed",
            position: "relative",
            marginBottom: "200px",
            borderBottomRightRadius: "200px",
            paddingTop: "80px",

          }}>
            <Container maxWidth="xl" sx={{

            }}>
              <Stack direction="row" spacing={1} sx={{
                position: "relative", top: "50px"
              }}>
                <Chip label={post?.specialitiesName} color="primary" />

              </Stack>
              <Typography variant='h4'
                // className='text-gradient'
                sx={{
                  position: "relative",
                  top: "80px",
                  color: "light.main"
                }}>
                {post?.title}
              </Typography>
              <Box sx={{
                position: "relative",
                top: "130px",
              }}>
                <Box as="img"
                  src={SERVER_URL + post?.articleImage}
                  sx={{
                    width: "100%",
                    maxHeight: "600px",
                    height: "auto",
                    objectFit: "cover",

                    borderRadius: "5px",
                  }} />
                <Box sx={{
                  opacity: .6,
                  backgroundColor: "main",
                  p: "5px",
                  borderRadius: "5px",
                  position: "absolute",
                  top: "0px",
                  right: "0",
                  width: "fit-content",
                  color: "light.main",
                  fontSize: "12px",
                  fontWeight: "700"
                }}>
                  {convertToArabicFormat(post?.articleCreationDate)}
                </Box>
                <Typography variant="body2" color="text.main" sx={{
                  position: " absolute",
                  top: "5px",
                  left: "5px",
                  backgroundColor: "primary.main",
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "5px",
                  fontSize: '12px',
                  cursor: "pointer"
                }}>
                  {post?.isBookmarked ? <BookmarkAdded /> : <BookmarkAdd />}
                </Typography>
                <AvatarCard w={"100px"} h={"100px"} fz={"17px"} fz2={"15px"} fz3={"12px"} name={post?.staffName} staffId={post?.staffId} likes={post?.likes} hide />

              </Box>
            </Container>
          </Box>
          <Box>
            <Container maxWidth="xl">
              <Typography variant='p' color={"text.main"} sx={{
                fontWeight: "bold"
              }}>
                {post?.articleContent}
              </Typography>
              <Comments />
            </Container>
          </Box>
        </>
      }
    </>
  )
}

export default BlogDetails