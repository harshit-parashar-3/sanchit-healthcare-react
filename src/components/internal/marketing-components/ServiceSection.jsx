import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { servicesData } from "../../../constant";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ServiceSection = () => {
  return (
    <>
      <Box className="service-section" id="category">
        <Container maxWidth="xl">
          <Box className="service-wrapper">
            <Typography
              className="text-display heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Discover the Power of Sanchit Healthcare—Elevate Your Diagnostic
              Precision Today!
            </Typography>
            <Typography
              className="subheading mt-18"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Sanchit Healthcare provides a complete range of state-of-the-art
              pathology and laboratory equipment designed to enhance diagnostic
              accuracy and efficiency. Explore our offerings to see why we're
              the trusted choice for healthcare professionals.
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 4 }} className="mt-30">
              {servicesData?.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="service"
                    sx={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${service?.backgroundImage})`, // Apply gradient and image together
                    }}
                  >
                    <Box className="serviceCard">
                      <Typography className="content-heading mt-5">
                        {service?.heading}
                      </Typography>
                      <Typography className="content-subheading">
                        {service?.subheading}
                      </Typography>
                      <Button
                        component={Link}
                        to={service.url}
                        variant="outlined"
                        className="button "
                        sx={{ color: "white", borderColor: "white" }}
                        endIcon={<KeyboardArrowRightIcon />}
                      >
                        Check Out
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ServiceSection;
