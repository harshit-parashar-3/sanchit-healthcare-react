import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const CategoryList = ({ category }) => {
  const categoryLists = {
    hematology: [
      {
        id: 1,
        name: "item",
        description:
          "This is a clinical chemistry analyzer used for hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 2,
        name: "item",
        description: "Advanced hematology analyzer with automatic calibration.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-01_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 3,
        name: "item",
        description: "Portable analyzer suitable for rapid hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/m/a/mask_group_4292.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 4,
        name: "item",
        description:
          "High-precision analyzer with minimal sample requirements.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 5,
        name: "item",
        description: "Ideal for both routine and specialized hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
    ],
    microbiology: [
      {
        id: 1,
        name: "item",
        description:
          "This is a clinical chemistry analyzer used for hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 2,
        name: "item",
        description: "Advanced hematology analyzer with automatic calibration.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-01_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 3,
        name: "item",
        description: "Portable analyzer suitable for rapid hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/m/a/mask_group_4292.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 4,
        name: "item",
        description:
          "High-precision analyzer with minimal sample requirements.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 5,
        name: "item",
        description: "Ideal for both routine and specialized hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
    ],
    biochemistry: [
      {
        id: 1,
        name: "item",
        description:
          "This is a clinical chemistry analyzer used for hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 2,
        name: "item",
        description: "Advanced hematology analyzer with automatic calibration.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-01_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 3,
        name: "item",
        description: "Portable analyzer suitable for rapid hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/m/a/mask_group_4292.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 4,
        name: "item",
        description:
          "High-precision analyzer with minimal sample requirements.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 5,
        name: "item",
        description: "Ideal for both routine and specialized hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
    ],
    rapidcard: [
      {
        id: 1,
        name: "item",
        description:
          "This is a clinical chemistry analyzer used for hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 2,
        name: "item",
        description: "Advanced hematology analyzer with automatic calibration.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-01_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 3,
        name: "item",
        description: "Portable analyzer suitable for rapid hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/m/a/mask_group_4292.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 4,
        name: "item",
        description:
          "High-precision analyzer with minimal sample requirements.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 5,
        name: "item",
        description: "Ideal for both routine and specialized hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
    ],
    consumables: [
      {
        id: 1,
        name: "item",
        description:
          "This is a clinical chemistry analyzer used for hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 2,
        name: "item",
        description: "Advanced hematology analyzer with automatic calibration.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-01_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 3,
        name: "item",
        description: "Portable analyzer suitable for rapid hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/m/a/mask_group_4292.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 4,
        name: "item",
        description:
          "High-precision analyzer with minimal sample requirements.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
      {
        id: 5,
        name: "item",
        description: "Ideal for both routine and specialized hematology tests.",
        url: "https://www.agappe.com/media/catalog/product/t/b/tbafr2000-02_1.png?auto=webp&format=png&width=1600&height=2000&fit=cover",
      },
    ],
  };

  return (
    <>
      <Grid container spacing={4}>
        {categoryLists[category]?.map((item, index) => (
          <Grid item xs={12} sm={4} key={index} mt={2}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default CategoryList;
