import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/Sanchit-Healthcare-Logo.svg";
const MarketingHeader = () => {
  const location = useLocation();

  const getButtonClassName = (hash) => {
    return location.hash === hash ? "button button-primary" : "button";
  };

  return (
    <>
      <Box className="sendInvoice-box">
        <Container maxWidth="xl">
          <Box className="sendInvoice-popup">
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Box
                sx={{
                  height: "3rem",
                  maxWidth: "3rem",
                  width: "100%",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
              <Typography className="content">
                <span style={{ color: "#B92A24" }}>Sanchit Healthcare LLP</span>
              </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Box
                component={Link}
                to="/"
                className={`scrollNavigationBtn ${getButtonClassName("/")}`}
              >
                Home
              </Box>
              <Link
                to="/aboutus"
                className={`scrollNavigationBtn ${getButtonClassName(
                  "#about"
                )}`}
              >
                About
              </Link>
              <Link
                to="/category"
                className={`scrollNavigationBtn ${getButtonClassName(
                  "/category"
                )}`}
              >
                Category
              </Link>
              <Link to="/contact" className={`scrollNavigationBtn`}>
                Contact
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MarketingHeader;
