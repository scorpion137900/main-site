import { VpnKeyOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import { notifyError, notifySucess } from "../../utils/helper";

const ForgetPasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/User/ResetPassword`, {
        email: user?.email,
        newPassword: data?.newPassword,
        oldPassword: data?.oldPassword,
      });
      //   console.log(res);
      notifySucess(`${res?.data?.message}`);

    } catch (error) {
      //   console.log(error);
      const errors = error?.response?.data?.errors;
      //   console.log(errors);
      if (errors) {
        //loop on errors it's object of objects
        for (const key in errors) {
          notifyError(`${errors[key]}`);
        }
      } else {
        enqueueSnackbar(
          `${error?.response?.data?.message}`,
          notifyOptions("error")
        );
      }
    }
    setLoading(false);
  };
  return (

    <Box
      sx={{
        marginTop: "30px",


        justifyContent: "center",
        width: "100%",

        padding: "50px 30px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "400px",
        background: "#fff",
        boxShadow: "0 0 2px rgba(0,0,0,.4) ",
        p: "30px ",
      }}
    >

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px",
          }}
          disabled
          defaultValue={user?.email}
          value={user?.email}
        />
        <TextField
          label="كلمة السر القديمة"
          variant="outlined"
          fullWidth
          {...register("oldPassword", {
            required: "this field is required",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
          error={errors.oldPassword}
          helperText={errors.oldPassword?.message}
          sx={{
            marginBottom: "20px",
          }}
        />
        <TextField
          label="كلمة السر الجديدة"
          variant="outlined"
          fullWidth
          {...register("newPassword", {
            required: "this field is required",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
          error={errors.newPassword}
          helperText={errors.newPassword?.message}
        />
        <LoadingButton
          type="submit"
          loading={loading}
          loadingPosition="end"
          endIcon={<VpnKeyOutlined />}
          variant="contained"
          sx={{
            marginTop: "20px",
            display: "flex",
            marginRight: "auto",
          }}
        >
          تغيير كلمة السر
        </LoadingButton>
      </form>
    </Box>
  );
};

export default ForgetPasswordReset;
