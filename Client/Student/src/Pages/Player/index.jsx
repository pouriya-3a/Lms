import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Player() {
  const { courseId } = useParams();
  // Get Course
  const [course, setCourse] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${courseId}`);
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (course) {
    return (
      <Box
        sx={{
          mt: "25px",
          maxWidth: 800,
          mx: "auto",
          p: 2,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            bgcolor: "black",
            borderRadius: 1,
            overflow: "hidden",
            maxHeight: 300,
          }}
        >
          <Box
            component="img"
            src={course?.image}
            alt="Video thumbnail"
            sx={{ width: "100%", display: "block" }}
          />

          {/* Play/Pause overlay button */}
        </Box>

        {/* Video Title */}
        <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
          {course?.title}
        </Typography>

        {/* Video Description */}
        <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
          {course?.description}
        </Typography>
      </Box>
    );
  } else {
    return <Typography textAlign={"center"}>Loading ...</Typography>;
  }
}
