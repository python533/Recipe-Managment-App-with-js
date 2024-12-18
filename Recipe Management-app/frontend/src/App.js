import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewRecipe from "./pages/new-recipe/NewRecipe";
import EditRecipe from "./pages/edit-recipe/EditRecipe";
import ViewRecipe from "./pages/view-recipe/ViewRecipe";

//MUI theam customization
const theme = createTheme({
  palette: {
    primary: { main: "#5BC18F" },
  },
  breakpoints: {
    values: { xxs: 0, xs: 450, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />}></Route> {/* Home page */}
          <Route path="/add" element={<NewRecipe />}></Route> {/* Add recipe page */}
          <Route path="/edit" element={<EditRecipe />}></Route> {/* Edit recipe page */}
          <Route path="/view" element={<ViewRecipe />}></Route> {/* View recipe page */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
