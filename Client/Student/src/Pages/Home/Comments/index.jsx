import { Avatar, Box, Card, CardContent, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export default function Comments() {
  // Get All Courses
  const [courses, setCourses] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const items = courses?.map((e, index) => (
    <Grid sx={{padding:'20px'}} size={{xs:12 , sm : 6 , md : 4,}} key={index}>
      <Card sx={{display:'flex' , justifyContent:'space-between',flexDirection:'column' , height:'100%'}}>
        <Box sx={{ bgcolor:'lightgray',gap:'20px',display: "flex", alignItems: "center" }}>
          <Avatar sx={{ width: "45px", height: "45px" }}>
            <ImgStyled src={e?.image} />
          </Avatar>
          <Typography variant="subtitle1">{e.category}</Typography>
        </Box>
        <CardContent>
          <Rating value={e?.rating.rate} />
          <Typography>{e.description.split(" ").slice(0, 15).join(" ")}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
  return <Grid container>{courses ? items.slice(0,3) :<Typography textAlign={'center'}>Loading ...</Typography>}</Grid>;
}
