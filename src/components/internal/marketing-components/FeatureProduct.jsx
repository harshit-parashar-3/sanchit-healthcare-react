import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./categoryPages/ProductCard";
import { products } from "../../../assets/json";

const FeatureProduct = () => {
  return (
    <>
      <Box className="Featured-product-section">
        <Container maxWidth="xl">
          <Box className="slider-container">
            <Typography className="heading-content text-display mt-30">
              Featured Products
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              className="mt-10"
            >
              {products?.map((product) => (
                <Grid item xs={6} sm={4} md={2.4} key={product.id}>
                  <ProductCard item={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FeatureProduct;
