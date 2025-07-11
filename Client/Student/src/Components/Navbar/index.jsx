import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { authContext } from "../../Context/AuhtContext/AuthContext";
export default function Navbar() {
  const [loading , setLoading] = useState(false)
  const { token, handleToken } = useContext(authContext);
  const [fields, setFields] = useState({ username: "", password: "" });
  const [showLogin, setShowLogin] = useState(false);
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleLog = async (e) => {
    setLoading(true)
    console.log('hi')
    e.preventDefault();
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    const data = await res.json();
    data ? handleToken(data.token) : alert("some things Wrong ...");
    setLoading(false)
    setShowLogin(false)
  };
  return (
    <>
      <AppBar color="inherit" position="sticky">
        <Container component={"nav"}>
          <Tooltip sx={{ display: "flex", py: "14px" }}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={1}>
              <PowerSettingsNewIcon sx={{ fontWeight: "bold", fontSize: "28px", color: "blue" }} />
              <Typography
                fontWeight={"semiBold"}
                variant="h5"
                sx={{ flexGrow: "1" }}
                component={"h1"}
              >
                Edemy
              </Typography>
              <Stack spacing={4} direction={"row"}>
                <Button sx={{ color: "gray" }} variant="text">
                  Add Courses
                </Button>
                <Button sx={{ color: "gray" }} variant="text">
                  Courses
                </Button>
                {token ? (
                  <Button
                    onClick={() => handleToken(null)}
                    variant="contained"
                    sx={{
                      bgcolor: "red",
                      borderRadius: 10,
                      px: 3,
                      py: 1,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Log Out
                  </Button>
                ) : (
                  <Button
                  disabled={loading}
                    onClick={() => setShowLogin(true)}
                    variant="contained"
                    sx={{ color: "white", borderRadius: 10, px: 3, py: 1, fontWeight: "bold" }}
                  >
                    Login
                  </Button>
                )}
              </Stack>
            </Box>
          </Tooltip>
        </Container>
      </AppBar>
      <Dialog aria-hidden={!showLogin} open={showLogin} onClose={() => setShowLogin(false)}>
        <DialogTitle>Login</DialogTitle>
        <Box onSubmit={handleLog} component={"form"}>
          <DialogContent>
            <TextField sx={{mx:1}} size="small" name="username" type="username" onChange={handleChange} label="username" />
            <TextField sx={{mx:1}} size="small" name="password" type="password" onChange={handleChange} label="password" />
          </DialogContent>
          <DialogActions>
            <Button disabled={loading} color="error" variant="outlined" onClick={()=>setShowLogin(false)}>Cancel</Button>
            <Button disabled={loading} type="submit" variant="contained">
              Login
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
