import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Divider, Chip, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  // Get All Courses
  const [course, setCourse] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (!course) {
    return <Typography textAlign={"center"}>Loading ...</Typography>;
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          p: 3,
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {course?.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {course?.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating value={course?.rating?.rate} readOnly size="small" />
            <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
              {course?.rating?.count}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: "error.main", fontWeight: "bold", mb: 2 }}>
            $ {course?.price}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to={`/player/${course?.id}`}>
              <Button variant="contained" sx={{ px: 3 }}>
                watch
              </Button>
            </Link>
            <Button variant="outlined">Save</Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            sx={{
              width: "100%",
              maxWidth: 400,
              borderRadius: 2,
              boxShadow: 2,
            }}
            src={course?.image}
            alt={course?.title}
          />
        </Box>
      </Box>
    );
  }
}
