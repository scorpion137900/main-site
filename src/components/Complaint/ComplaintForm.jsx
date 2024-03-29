import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

const ComplaintForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitFunc = async (data) => {
    // console.log(data);


  };
  return (

    <Box sx={{
      py: "100px",
      backgroundColor: "light.main",
    }}>
      <Container maxWidth="xl">
        <Box as="form" onSubmit={handleSubmit(handleSubmitFunc)} sx={{
          backgroundColor: "light.main",
          borderRadius: "5px",
          boxShadow: "inset 0 0 2px rgba(0,0,0,.2)",
          padding: "20px",
          maxWidth: "600px",
          width: "100%",
          mx: "auto",
        }}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label=" أضف شكواك هنا"
            multiline
            rows={4}
            defaultValue=""
            {...register("complaint", {
              required: "this field is required",

            })}
            error={errors.complaint}
            helperText={errors.complaint?.message}
          />
          <Button sx={{
            mt: "20px",
          }} variant='contained' type='submit'>إرسال الشكوي</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ComplaintForm