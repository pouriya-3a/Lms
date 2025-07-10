import { AppBar, Box, Button, Container, List, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
export default function Navbar() {
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
                  Login
                </Button>
                <Button sx={{ borderRadius: 5 }} variant="contained">
                  Create Account
                </Button>
              </Stack>
            </Box>
          </Tooltip>
        </Container>
      </AppBar>
    </>
  );
}
