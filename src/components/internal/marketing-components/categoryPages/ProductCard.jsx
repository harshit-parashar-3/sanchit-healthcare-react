import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
  Chip,
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
        borderRadius: 5,
        border: "1px solid transparent",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        position: "relative",

        "&:hover": {
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {item?.category && (
        <Chip
          label={
            <Typography sx={{ fontSize: "0.8rem" }}>
              {item?.category?.charAt(0).toUpperCase() +
                item?.category?.slice(1).toLowerCase()}
            </Typography>
          }
          color="success"
          sx={{ position: "absolute", margin: "0.5rem" }}
        />
      )}
      <CardMedia
        component="img"
        src={item.url}
        alt={item.name}
        sx={{
          height: 280,
          width: "100%",
          objectFit: "contain",
          padding: isMobile ? "0.5rem" : "1rem",
        }}
      />
      <CardContent sx={{ padding: 2, position: "absolute", bottom: "0" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1)}
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
