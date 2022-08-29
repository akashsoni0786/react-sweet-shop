import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";

const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const alreadyaccount =()=>{
    navigate("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <img style={{ width: "40px" }} alt="" src="sweetlogo.png" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  "& label.Mui-focused": {
                    color: "#E79017",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#E79017",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#E79017",
                    },
                    "&:hover fieldset": {
                      borderColor: "#E79017",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E79017",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  "& label.Mui-focused": {
                    color: "#E79017",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#E79017",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#E79017",
                    },
                    "&:hover fieldset": {
                      borderColor: "#E79017",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E79017",
                    },
                  },
                }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  "& label.Mui-focused": {
                    color: "#E79017",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#E79017",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#E79017",
                    },
                    "&:hover fieldset": {
                      borderColor: "#E79017",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E79017",
                    },
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#E79017",
                  "&:hover": {
                    backgroundColor: "#627E0C",
                    cursor: "default",
                  },
                }}
              >
                Sign Up
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link href="#" onClick={alreadyaccount} style={{ color: "#E79017" }} variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://static.toiimg.com/photo/77650855.cms)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
