import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { dark, light } from "./themes/theme";

function App() {
  const [theme, setTheme] = useState(true);
  // const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />; // Icons imported from `@mui/icons`
  const appliedTheme = createTheme(theme ? light : dark);

  const setLayoutTheme = (resTheme) => {
    console.log("resTheme", resTheme);
    setTheme(!resTheme);
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <MainLayout setLayoutTheme={setLayoutTheme} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
