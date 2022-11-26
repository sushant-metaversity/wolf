import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import {
  Button,
  Checkbox,
  createTheme,
  FormControlLabel,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Home from "./components/home";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomizedDialogs from "./components/common/Dailog";
import { Box } from "@mui/system";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#23292D",
      paper: "#17191C",
    },
    primary: {
      main: "#fdcf13",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#23292D",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "none !important",
          backgroundColor: "#23292D",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export const UserContext = createContext({ isSignedIn: false });
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserContext.Provider value={{ isSignedIn }}>
          <Layout>
            
            <Home />
          </Layout>
        </UserContext.Provider>
      </div>
    </ThemeProvider>
  );
}
export default App;
