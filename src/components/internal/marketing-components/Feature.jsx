import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { LocalShipping, CheckCircle, Tag, Lock } from "@mui/icons-material";

const featureData = [
  {
    title: "Worldwide Shipping",
    description:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <LocalShipping sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Best Quality",
    description:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <CheckCircle sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Best Offers",
    description:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <Tag sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    title: "Secure Payments",
    description:
      "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: <Lock sx={{ fontSize: 40, color: "primary.main" }} />,
  },
];

const FeatureSection = ({ title, description, icon }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {icon}
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", marginTop: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const Features = () => {
  return (
    <Container sx={{ paddingY: 5 }}>
      <Grid container spacing={4} justifyContent="center">
        {featureData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FeatureSection
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
