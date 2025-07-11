import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export default function Course({title , image , id , rating , category , price}) {
  return (
    <Grid p={3} size={{xs:12 , sm:6 , md:4 , lg:3}}>
      <Card sx={{display:'flex' , justifyContent:'space-between',flexDirection:'column' , height:'100%'}}>
        <CardMedia sx={{height:'50%'}}>
          <ImgStyled src={image} alt={title} />
        </CardMedia>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle2">{category}</Typography>
            <Rating value={rating.rate} />
            <Typography variant="subtitle2" fontWeight={'bold'}>{price}</Typography>
        </CardContent>
        <CardActions>
            <Link to={`course/${id}`}><Button>Read More ...</Button></Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
