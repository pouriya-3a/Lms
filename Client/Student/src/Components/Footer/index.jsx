import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0a1f3a",
  color: "white",
  padding: theme.spacing(4, 0),
  marginTop: "auto",
}));

const FooterTitle = styled(Typography)({
  
});

const FooterLink = styled(Link)({
  color: "rgba(255, 255, 255, 0.7)",
  display: "block",
  marginBottom: "8px",
  textDecoration: "none",
  "&:hover": {
    color: "white",
    textDecoration: "underline",
  },
});

export default function Footer() {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{xs:12, sm:6, md:3}} >
            <FooterTitle variant="h6">Edemy</FooterTitle>
            <Typography sx={{fontWeight: "bold",mb:'16px'}} variant="body2" color="rgba(255, 255, 255, 0.7)">
              Learn new skills with our online courses.
            </Typography>
          </Grid>

          <Grid size={{xs:6, sm:3, md:2}} xs={6} sm={3} md={2}>
            <FooterTitle variant="h6">Courses</FooterTitle>
            <FooterLink href="#" variant="body2">
              Web Development
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Data Science
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Business
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Design
            </FooterLink>
          </Grid>

          <Grid size={{xs:6, sm:3, md:2}} xs={6} sm={3} md={2}>
            <FooterTitle variant="h6">Courses</FooterTitle>
            <FooterLink href="#" variant="body2">
              Web Development
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Data Science
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Business
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Design
            </FooterLink>
          </Grid>

          <Grid size={{xs:6, sm:3, md:2}} xs={6} sm={3} md={2}>
            <FooterTitle variant="h6">Courses</FooterTitle>
            <FooterLink href="#" variant="body2">
              Web Development
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Data Science
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Business
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Design
            </FooterLink>
          </Grid>

          <Grid size={{xs:6, sm:3, md:2}} xs={6} sm={3} md={2}>
            <FooterTitle variant="h6">Courses</FooterTitle>
            <FooterLink href="#" variant="body2">
              Web Development
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Data Science
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Business
            </FooterLink>
            <FooterLink href="#" variant="body2">
              Design
            </FooterLink>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography sx={{  marginBottom: "16px", fontWeight:'bold'}} variant="body2" color="rgba(255, 255, 255, 0.7)">
            © 2025 Edemy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}
