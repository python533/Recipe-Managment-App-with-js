import{
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
}from "@mui/material";
import React from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SyncIcon from "@mui/icons-material/Sync";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../../redux/actions/recipeActions";
import axios from "axios";
import { API_ADDRESS } from "../../utils/helpers";


function NavBar({ nav = false }) {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  // Function for send a GET request to get all recipes. active when refresh button get clicked
  const getRecipes = async () => {
    await axios
      .get(`${API_ADDRESS}/recipes`)
      .then((res) => {
        dispatch(setRecipes(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppBar color="background" elevation={0} position="static">
      <Toolbar>
        <Link style={{ textDecoration: "none" }} to="/">
          <Stack direction="row">
            <LunchDiningIcon
              fontSize="large"
              sx={{ color: "primary.main" }}
            ></LunchDiningIcon>
            <Typography
              fontWeight="bold"
              fontSize="large"
              color="text.primary"
              sx={{ ml: "5px", mt: "6px" }}
            >
              ReciSave
            </Typography>
          </Stack>
        </Link>
        {!nav && (
          <>
            <IconButton
              sx={{ ml: "auto", mr: "15px" }}
              onClick={() => {
                getRecipes();
              }}
            >
              <SyncIcon ></SyncIcon>
            </IconButton>
            <Link style={{ textDecoration: "none" }} to="/add">
              <Button variant="contained" size="small" sx={{ color: "white" }}>
                Add a recipe
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
