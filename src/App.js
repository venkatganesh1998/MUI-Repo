import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import FeaturedCompanies from "./components/FeaturedCompanies";
import Pagination from "./components/Pagination";
import Footer  from "./components/Footer";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    
    <div className="App" style={{
      backgroundColor: '#91e04b'}}>
      <Header />
     
      <Box sx={{ marginLeft: "40px",marginTop: "50px", padding: 3}}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <MainContent />
          </Grid>
          <Grid item xs={12}>
            <FeaturedCompanies />
          </Grid>
          <Grid item xs={12}>
            <Pagination />
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </div>
   
  );
}

export default App;
