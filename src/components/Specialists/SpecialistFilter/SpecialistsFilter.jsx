import { Search } from "@mui/icons-material";
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, Input, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import ChipSelector from "./ChipSelector";

const SpecialistsFilter = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
  };
  return <>
    <Box sx={{
      p: "20px",
      backgroundColor: "light.main",
      borderRadius: "5px",
      position: "sticky",
      top: 80
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={{
          fontSize: "1.1rem",
          fontWeight: "600",
          mb: "20px"
        }}>البحث عن دكتور أو متخصص</Typography>
        <Box sx={{ position: "relative", mb: "20px", boxShadow: "inset 0 0 2px rgba(0,0,0,.2)", padding: "5px 10px", borderRadius: "5px" }}>
          <Search sx={{ position: "absolute", right: "8px", top: "25px" }} />
          <TextField
            {...register("specialist")}
            variant="standard"
            fullWidth
            type="text"
            label="إسم المختص أو الدكتور"


            sx={{
              "& .MuiInput-underline:hover:before , & .MuiInput-underline:before": {
                borderBottom: "2px solid #ddd !important",
              },
              "& .MuiFormLabel-root.MuiInputLabel-root": {
                color: "text.main"
              },
              paddingY: "5px"
            }}
            error={errors?.specialist}
            helperText={errors?.specialist?.message}
          />
        </Box>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" sx={{
            color: "text.main",
            fontWeight: "600",
            "&.Mui-focused": {
              color: "text.main"
            }
          }}>النوع</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            {...register("gender")}
          >
            <FormControlLabel value="female" control={<Radio  {...register("gender")} />} label="أنثي" />
            <FormControlLabel value="male" control={<Radio {...register("gender")} />} label="ذكر" />

          </RadioGroup>
        </FormControl>
        <FormControl fullWidth sx={{
          my: "20px"
        }}>
          <InputLabel id="demo-simple-select-label" sx={{
            color: "text.main"
          }}>الترتيب بواسطة</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"

            label="الترتيب بواسطة"
            {...register("sort")}
          >
            <MenuItem value={10}>الأكثر خبرة</MenuItem>
            <MenuItem value={20}>الأعلي تقييما </MenuItem>
            <MenuItem value={30}>عدد الجلسات</MenuItem>
          </Select>
        </FormControl>
        <ChipSelector register={register} setValue={setValue} />
        <Button type="submit" variant="contained" sx={{ my: "10px" }}>بحث</Button>
      </form>
    </Box>

  </>;
};

export default SpecialistsFilter;
