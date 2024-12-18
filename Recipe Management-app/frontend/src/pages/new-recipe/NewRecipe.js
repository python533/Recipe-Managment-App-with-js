import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import backImg from "../../assets/img/food-table.webp";
import RecipeDataForm from "../../components/recipe-data-form/RecipeDataForm";
import axios from "axios";
import { API_ADDRESS } from "../../utils/helpers";
import SnackBar from "../../components/snack-bar/SnackBar";

// Component for create a new recipe
function NewRecipe() {
  const [snackBarOpen, setSnackBarOpen] = useState({
    status: false, // Flag to control the visibility of the Snackbar
    message: "Ok", // Message to be displayed in the Snackbar
    severity: "success", // Severity level of the Snackbar (success, error, warning, ..)
  });

  // Function for send a POST request to add a new recipe
  const handleSubmit = async (formData) => {
    await axios
      .post(`${API_ADDRESS}/recipes/`, formData)
      .then((res) => {
        setSnackBarOpen({
          message: "successfully added!",
          severity: "success",
          status: true,
        });
      })
      .catch((error) => {
        setSnackBarOpen({
          message: "Insertion failed!",
          severity: "error",
          status: true,
        });
      });
  };

  return (
    <Box width="100vw" height="100vh" bgcolor="#F5F7F7" position="relative">
      <NavBar nav />
      <Box width="100wh" height="calc(100vh - 4rem)" overflow="auto" pb={10}>
        <Box
          sx={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "150px",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            width="100%"
            height="100%"
            position="absolute"
            bgcolor="rgba(0, 0, 0, 0.46)"
          ></Box>
          <Stack
            px={10}
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h3"
              zIndex="1"
              color="white"
              textAlign="center"
            >
              ADD NEW RECIPE
            </Typography>
          </Stack>
        </Box>
        <Container>
          <RecipeDataForm
            onSubmit={handleSubmit}
          ></RecipeDataForm>
        </Container>
      </Box>
      <SnackBar
        onClose={() => {
          setSnackBarOpen((prevState) => ({
            ...prevState,
            status: false,
          }));
        }}
        severity={snackBarOpen.severity}
        open={snackBarOpen.status}
        message={snackBarOpen.message}
      ></SnackBar>
    </Box>
  );
}

export default NewRecipe;
