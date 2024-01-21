import { Search } from '@mui/icons-material';
import { Avatar, Box, Container, Pagination, Rating, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import AvatarCard from '../AvatarCard';
import { useFileDialogContext } from '../../Context/FileDialogContext';

const FilesContainer = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { setOpen } = useFileDialogContext()
  return (
    <>

      <Box sx={{
        backgroundColor: "light.main",
        py: "50px",
      }}>
        <Container maxWidth="xl">
          <Box sx={{ position: "relative", mb: "20px", boxShadow: "inset 0 0 2px rgba(0,0,0,.2)", padding: "5px 10px", borderRadius: "5px" }}>
            <Search sx={{ position: "absolute", right: "8px", top: "25px" }} />
            <TextField
              {...register("filesTitle")}
              variant="standard"
              fullWidth
              type="text"
              label="عنوان الملفات"


              sx={{
                "& .MuiInput-underline:hover:before , & .MuiInput-underline:before": {
                  borderBottom: "2px solid #ddd !important",
                },
                "& .MuiFormLabel-root.MuiInputLabel-root": {
                  color: "text.main"
                },
                paddingY: "5px"
              }}
              error={errors?.filesTitle}
              helperText={errors?.filesTitle?.message}
            />
          </Box>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <Box key={index} sx={{ my: "10px", p: "10px", boxShadow: "0 0 2px rgba(0,0,0,0.2)", borderRadius: "5px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", cursor: "pointer" }}
              onClick={() => setOpen(true)}
            >
              <Box
                sx={{
                  maxWidth: "300px"
                }}
              >
                <Typography variant='h6' fontSize={"14px"}>أول مرة أتدبر القرآن (دليلك لفهم وتدبر القرآن من سورة الفاتحة إلى سورة الناس)
                </Typography>
                <Rating name="read-only" value={7.8} max={10} readOnly size="small" precision={0.1} sx={{
                  my: "10px"
                }} />
                {/* <Box sx={{
                  display: "flex",
                  gap: "10px",
                  // alignItems: "center"
                }}>
                  <Avatar />
                  <Typography variant='h6' fontSize={"12px"} boxShadow={"inset 0 0 2px rgba(0,0,0,.2)"}
                    sx={{
                      display: "inline-flex",
                      p: "5",
                      m: "0"
                    }}
                  >
                    mohamed ahmed
                  </Typography>
                </Box> */}
              </Box>
              <Box as="img" src="https://www.noor-book.com/publice/covers_cache_webp/5/3/9/c/65447c123739ce01530b8c624254ac64.jpg.webp" alt="" sx={{
                maxHeight: "180px",
                maxWidth: "130px",
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }} />
            </Box>
          ))}
          <Pagination sx={{
            mt: "20px",
            display: "flex",
            justifyContent: "center"
          }} dir='ltr' count={10} color="primary" />
        </Container>
      </Box>
    </>
  )
}

export default FilesContainer