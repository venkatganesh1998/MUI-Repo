import React from "react";
import { Box, Typography, Grid, Paper, Rating } from "@mui/material";


const MainContent = () => {
  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        We back visionary companies that are changing the way we live, work, and
        play.
      </Typography>
      <br/>
      <Typography variant="h4"  gutterBottom>
        Portfolio Companies
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "5px", textAlign: "center", backgroundColor:"#c9c6d7", }}>
            <Typography variant="h5">Company 1</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "5px", textAlign: "center", backgroundColor:"#c9c6d7",}}>
            <Typography variant="h5">Company 2</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{padding: "5px", textAlign: "center", backgroundColor:"#c9c6d7", }}>
            <Typography variant="h5">Company 3</Typography>
            <Rating name="read-only" value={3} readOnly />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
