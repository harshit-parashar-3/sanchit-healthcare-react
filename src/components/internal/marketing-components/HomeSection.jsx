import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "../../shared/CustomButton";

const HomeSection = () => {
  return (
    <Box id="home">
      <Box className="home-section">
        <Container maxWidth="xl">
          <Box className="home-wrapper">
            <Box className="advertisement-content">
              <Typography className="content-heading">
                <span className="highlighted-heading">
                  Delivering Advanced Lab Solutions for a Smarter Future
                </span>
                <br />
                <span
                  style={{
                    fontWeight: "normal",
                    fontSize: "1rem",
                    color: "lightgray",
                  }}
                >
                  Optimize your lab's productivity with our reliable,
                  cutting-edge machines and seamless service.
                </span>
              </Typography>
{/*               <CustomButton
                title="Explore Products"
                styles="button marketingButton mt-18"
                url={"/category"}
              /> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeSection;
