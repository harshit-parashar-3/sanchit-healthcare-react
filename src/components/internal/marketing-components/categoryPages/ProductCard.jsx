import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function ProductCard({ item }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: isMobile ? "100%" : 300,
        width: "100%",
        height: "100%",
        maxHeight: "25rem",
        backgroundColor: "#fff",
        borderRadius: 2,
        border: "1px solid transparent",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        src={item.url}
        alt={item.name}
        sx={{
          height: 180,
          objectFit: "cover",
          padding: isMobile ? "0.5rem" : "1rem",
        }}
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#333",
            mb: 1,
          }}
        >
          {item.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.description || "No description available"}
        </Typography>
      </CardContent>
    </Card>
  );
}
