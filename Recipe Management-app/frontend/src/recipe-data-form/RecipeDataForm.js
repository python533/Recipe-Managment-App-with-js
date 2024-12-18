import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initData = { name: "", ingredients: "", description: "" };

// RecipeDataForm component for rendering a form to input recipe data
function RecipeDataForm({ onSubmit, btnName = "SAVE", data = initData }) {
  // Handle the form data, submition and validations
  const formik = useFormik({
    initialValues: data,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("required"),
      ingredients: Yup.string().required("required"),
      description: Yup.string().required("required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box justifyContent="center" display="flex" width="100%">
        <Box
          width={{ xxs: "100%", xs: "90%", md: "60%" }}
          height="100%"
          bgcolor="white"
          p={5}
          pt={0}
        >
          <Stack direction="column">
            <Typography variant="body1" pt={5}>
              Recipe Name
            </Typography>
            <TextField
              error={formik.errors.name?.length > 0}
              hiddenLabel
              variant="outlined"
              id="recipeName"
              size="small"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              helperText={
                formik.errors.name?.length > 0 ? formik.errors.name : ""
              }
            ></TextField>
            <Typography variant="body1" pt={3}>
              Ingredients
            </Typography>
            <TextField
              error={formik.errors.ingredients?.length > 0}
              hiddenLabel
              variant="outlined"
              id="recipeIngredients"
              size="small"
              name="ingredients"
              value={formik.values.ingredients}
              onChange={formik.handleChange}
              helperText={
                formik.errors.ingredients?.length > 0
                  ? formik.errors.ingredients
                  : ""
              }
            ></TextField>
            <Typography variant="body1" pt={3}>
              Description
            </Typography>
            <TextField
              error={formik.errors.description?.length > 0}
              hiddenLabel
              multiline
              id="recipeDescription"
              variant="outlined"
              size="small"
              rows={10}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              helperText={
                formik.errors.description?.length > 0
                  ? formik.errors.description
                  : ""
              }
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 5, color: "white" }}
            >
              {btnName}
            </Button>
          </Stack>
        </Box>
      </Box>
    </form>
  );
}

export default RecipeDataForm;
