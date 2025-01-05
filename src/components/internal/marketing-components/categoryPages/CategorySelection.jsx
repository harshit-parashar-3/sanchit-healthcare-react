import { Box } from "@mui/material";

const CategorySelection = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    "hematology",
    "microbiology",
    "biochemistry",
    "rapidcard",
    "consumables",
  ];

  return (
    <Box className="CategorySelection">
      {categories.map((category, index) => (
        <Box
          key={index}
          onClick={() => onSelectCategory(category)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            color: category === selectedCategory ? "white" : "#363b4d",
            background: category === selectedCategory ? "#363b4d" : "white",
            padding: "1rem",
            margin: "1rem",
            border: "1px solid #363b4d",
          }}
        >
          {category.toUpperCase()}
        </Box>
      ))}
    </Box>
  );
};

export default CategorySelection;
