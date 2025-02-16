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
    <img
      src={Agappe}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
    <img
      src={Triviton}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "120px" }}
    />
    <img
      src={Maril}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
    <img
      src={Avantor}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
    <img
      src={BDLAb}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
    <img
      src={Medsource}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
    <img
      src={TharmoFirsher}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "60px" }}
    />
    <img
      src={Olympus}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "120px" }}
    />
    <img
      src={Labomed}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
    <img
      src={MB}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
    <img
      src={Tarson}
      alt="agappe-logo"
      style={{ margin: "0 2.5rem", height: "100px" }}
    />
  </Marquee>
);

export default CompanyMarque;
