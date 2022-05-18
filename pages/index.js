import Head from "next/head";
import HomeSlider from "../layouts/HomePage/HomeSlider";
import { Container, Grid } from "@mui/material";

import HomeProductLinks from "../layouts/HomePage/HomeProductLinks";

function index() {
  
  return (
    <div>
     

      <main>
        <Container sx={{ pt: 1, pb: 8 }} maxWidth="xl">
          <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12, lg: 12, }}>
            <Grid item xs={4} sm={4} md={4} lg={3}>
              <HomeProductLinks />
            </Grid>
            <Grid item xs={4} sm={8} md={8} lg={9}>
              <HomeSlider />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default index;
