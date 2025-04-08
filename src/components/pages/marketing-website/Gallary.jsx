import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../../../constant/index";
import { Box, Container } from "@mui/material";
import BannerSection from "../../internal/marketing-components/BannerSection";
import MarketingHeader from "../../internal/layout/MarketingHeader";
import MarketingFooter from "../../internal/layout/MarketingFooter";
const Gallary = () => {
  return (
    <>
      <MarketingHeader url={"/"} buttonTitle={"Return to the Home page"} />
      <BannerSection
        heading="Gallery"
        content="A glimpse into our cherished memories"
      />
      <Container>
        <Box sx={{ marginTop: "2rem" }}>
          <Gallery photos={photos} direction={"column"} />;
        </Box>
      </Container>
      <MarketingFooter />
    </>
  );
};

export default Gallary;
