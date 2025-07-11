import { Stack, Typography } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <Stack alignItems={'center'} spacing={3} sx={{ mt: 15 , textAlign:'center'}}>
      <Typography variant="h4" textAlign={"center"} fontWeight={"bold"} component={"h2"}>
        Empower your future with the <br /> courses designed to{" "}
        <Typography variant="inherit" component={"span"} color="primary">
          fit your choice
        </Typography>
      </Typography>
      <Typography variant="body2" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sit reiciendis modi id
        tenetur. <br /> Expedita sint veniam esse ea unde? Lorem ipsum dolor sit amet.
      </Typography>
      <SearchBar />
    </Stack>
  );
}
