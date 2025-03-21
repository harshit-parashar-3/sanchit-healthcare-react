import { Box, Grid, Pagination } from "@mui/material";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { categoryLists } from "../../../../assets/json";

const CategoryList = ({ category }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const currentItems = categoryLists[category]?.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container spacing={2}>
        {currentItems?.map((item) => (
          <Grid item xs={12} sm={3} key={item.id} mt={2}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="flex-end" mt={4} mb={2}>
        <Pagination
          count={Math.ceil(categoryLists[category]?.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="secondary"
        />
      </Box>
    </>
  );
};

export default CategoryList;
