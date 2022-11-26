import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomizedDialogs from "../common/Dailog";
import { LoginButton, UserContainer } from "./styledComponents";
export function AuthBox({ }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <UserContainer>
      <Box
        display={{
          xs: "none",
          lg: "block",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Username*"
          required
        />
        <Link
          to=""
          style={{
            display: "block",
            fontSize: "0.8rem",
            textAlign: "right",
            color: theme.palette.primary.main,
            textDecoration: "none",
          }}
        >
          Forgot Password ?
        </Link>
      </Box>
      <Box
        display={{
          xs: "none",
          lg: "block",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Password*"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              sx={{
                my: -1,
              }}
            />
          }
          label={
            <Typography component={"span"} fontSize={"0.7rem"} my={0}>
              I agree terms & conditions.
            </Typography>
          }
          sx={{
            display: "block",
            fontSize: "0.6rem",
            ml: "auto",
            my: 0,
          }}
        />
      </Box>
      <LoginButton
        variant="contained"
        sx={{
          height: "2.5rem",
        }}
        onClick={()=>setOpen(true)}
      >
        Login
      </LoginButton>
      <CustomizedDialogs title="Login" open={open} setOpen={setOpen}>
        <Box bgcolor="black" borderRadius={4} p={2} mt={2}>
          <form
            style={{ gap: "10px", display: "flex", flexDirection: "column" }}
          >
            <Typography fontWeight={700}>UserName</Typography>
            <TextField
              placeholder="Enter Username"
              fullWidth
              margin="dense"
              sx={{ bgcolor: "background.default" }}
            />
            <Typography fontWeight={700}> Password</Typography>
            <TextField
              placeholder="Enter Password"
              fullWidth
              margin="dense"
              sx={{ bgcolor: "background.default" }}
            />
            <FormControlLabel
              control={<Checkbox sx={{ mb: "auto" }} />}
              label={
                "I am at least 18 years of age and I have read, accept and agree to the Terms and Conditions , Responsible Gaming , GamCare, Gambling Therapy"
              }
            />
            <Button
              sx={{ p: 2.5 }}
              variant="contained"
              color="success"
              fullWidth
            >
              Submit
            </Button>
            <Typography variant="caption">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Typography>
          </form>
        </Box>
      </CustomizedDialogs>
    </UserContainer>
  );
}
