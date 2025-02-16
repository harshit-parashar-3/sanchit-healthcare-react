import React, { useState } from "react";
import {
  Box,
  Fab,
  Modal,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";

const CategorySelection = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    "hematology",
    "microbiology",
    "biochemistry",
    "rapidcard",
    "consumables",
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box className="CategorySelection" sx={{ position: "relative" }}>
      {isMobile && (
        <Fab
          color="#1462F3"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
          onClick={handleOpenModal}
        >
          <CategoryIcon />
        </Fab>
      )}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            padding: 2,
          }}
        >
          <List>
            {categories.map((category) => (
              <ListItem
                button
                key={category}
                onClick={() => {
                  onSelectCategory(category);
                  handleCloseModal();
                }}
                sx={{
                  background:
                    category === selectedCategory ? "#363b4d" : "transparent",
                  color: category === selectedCategory ? "white" : "#363b4d",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <ListItemText primary={category.toUpperCase()} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>

      {!isMobile && (
        <Box>
          {categories.map((category) => (
            <Box
              key={category}
              onClick={() => onSelectCategory(category)}
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                color: category === selectedCategory ? "white" : "#363b4d",
                background: category === selectedCategory ? "#363b4d" : "white",
                padding: "1rem",
                margin: "0.5rem",
                border: "1px solid #363b4d",
                borderRadius: 2,
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#363b4d",
                  color: "white",
                },
              }}
            >
              {category.toUpperCase()}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CategorySelection;
