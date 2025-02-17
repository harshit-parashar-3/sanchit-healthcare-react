import { Box } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import Agappe from "../../../assets/Company-logo/agappe-1.svg";
import Triviton from "../../../assets/Company-logo/trivitron.jpg";
import Maril from "../../../assets/Company-logo/maril.jpg";
import Avantor from "../../../assets/Company-logo/avantor.png";
import BDLAb from "../../../assets/Company-logo/BDLab.jpg";
import Medsource from "../../../assets/Company-logo/medsource.jpg";
import TharmoFirsher from "../../../assets/Company-logo/thermo-fisher-scientific.svg";
import Olympus from "../../../assets/Company-logo/olympus.png";
import Labomed from "../../../assets/Company-logo/labomed.jpg";
import MB from "../../../assets/Company-logo/mb-plastic-industries.png";
import Tarson from "../../../assets/Company-logo/tarsons-products--big.svg";

const CompanyMarque = () => (
  <Marquee
    delay={5}
    loop={0}
    gradient
    gradientColor="#fff"
    gradientWidth={300}
    autoFill
    style={{ height: "8rem", background: "#fff" }}
  >
    {[
      Agappe,
      Triviton,
      Maril,
      Avantor,
      BDLAb,
      Medsource,
      TharmoFirsher,
      Olympus,
      Labomed,
      MB,
      Tarson,
    ].map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt="company-logo"
        style={{
          margin: "0 1.5rem",
          height: "60px",
          filter: "grayscale(100%)",
          transition: "filter 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
        onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
      />
    ))}
  </Marquee>
);

export default CompanyMarque;
