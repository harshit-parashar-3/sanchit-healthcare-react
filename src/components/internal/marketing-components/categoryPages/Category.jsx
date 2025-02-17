import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import CategoryList from "./CatogoryList";
import MarketingHeader from "../../layout/MarketingHeader";
import { UseScrollTop } from "../../../../hooks/useScrolltoTop";
import BannerSection from "../BannerSection";
import MarketingFooter from "../../layout/MarketingFooter";
const Category = () => {
  const navigate = useNavigate();
  UseScrollTop();
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleSelectCategory = (selectedCategory) => {
    navigate(`/category/${selectedCategory}`);
    setSelectedCategory(selectedCategory);
  };

  return (
    <Box>
      <MarketingHeader />
      <BannerSection heading={selectedCategory?.toUpperCase()} />

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <CategorySelection
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <CategoryList category={selectedCategory} />
          </Grid>
        </Grid>
      </Container>
      <MarketingFooter />
    </Box>
  );
};

export default Category;
