import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "16px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography variant="h6">Contact</Typography>
            
            <ButtonGroup  variant="text" style={{color: 'black'}} >
            <Button>
              LinkedIn
              </Button>
              <Button>
              Twitter
              </Button>
              <Button>
              YouTube
              </Button>
              <Button>
              Instagram
              </Button>
              <Button>
              Facebook
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={4}>
          <Link href="#" color="inherit">
              Sign Up
            </Link><br/>
            <Link href="#" color="inherit">
              Investor Login
            </Link>
            <br/>
            <Link href="#" color="inherit">
              Sitemap
            </Link>
           
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">&copy; 2024 Fifth Wall</Typography>
            
         
            
            <Link href="#" color="inherit">
              Terms of Use
            </Link>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit">
              Disclosures
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
