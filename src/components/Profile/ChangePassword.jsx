import { Box, Button, FormGroup, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

  };
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  return (
    <>
      <Box onSubmit={handleSubmit(onSubmit)} as="form" sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        width: "100%",
        maxWidth: "400px",
        background: "#fff",
        boxShadow: "0 0 2px rgba(0,0,0,.4) ",
        p: "30px ",
        // margin: '20px auto'
      }}>
        <FormGroup sx={{ mb: "20px", width: "100%" }}>
          <TextField
            {...register("email")}

            disabled
            defaultValue={"zzzzz"}
            variant="standard"
            fullWidth
            type="email"
            label="البريد الالكتروني"
            sx={{
              "& .MuiInput-underline:hover:before ": {
                borderBottom: "2px solid var(--border-color) !important",
              },
            }}
            error={errors.email}
            helperText={errors.email?.message}
          />
        </FormGroup>
        <FormGroup sx={{ mb: "20px", width: "100%" }}>
          <TextField
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
            error={errors.password}
            helperText={errors.password?.message}
            variant="standard"
            fullWidth
            type="password"
            label=" كلمة السر الجديدة"
            sx={{
              "& .MuiInput-underline:hover:before ": {
                borderBottom: "2px solid var(--border-color) !important",
              },
            }}
          />
        </FormGroup>
        <FormGroup sx={{ mb: "20px", width: "100%" }}>
          <TextField
            error={errors.passwordConfirm}
            helperText={errors.passwordConfirm?.message}
            {...register("passwordConfirm", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
            name="passwordConfirm"
            variant="standard"
            fullWidth
            type="password"
            label="تأكيد كلمة السر"
            sx={{
              "& .MuiInput-underline:hover:before ": {
                borderBottom: "2px solid var(--border-color) !important",
              },
            }}
          />
        </FormGroup>
        <Button type='submit' variant="contained" sx={{ width: "100%" }}>
          تغيير كلمة السر
        </Button>
      </Box>
    </>
  )
}

export default ChangePassword