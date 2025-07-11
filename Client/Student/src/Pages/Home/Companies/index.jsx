import { Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 150px;
  height: 30px;
  border-radius: 50px;
`;
const arrays = [{}, {}, {}, {} , {}, {}];
export default function Companies() {
  const items = arrays.map((e,index) => (
    <Link key={index} to={""}>
      <StyledImg src="/Media/Pages/Home/Companies/coca.png" />
    </Link>
  ));
  return (
    <Container sx={{mt:'80px'}}>
      <Stack
      direction={'row'}
        sx={{
            justifyContent:'space-between' ,
          flexWrap: "wrap",
        }}
      >
        {items}
      </Stack>
    </Container>
  );
}
