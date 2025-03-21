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

const CompanyMarque = () => {
  const logos = [
    { src: Agappe, height: "60px" },
    { src: Triviton, height: "60px" },
    { src: Maril, height: "60px" },
    { src: Avantor, height: "60px" },
    { src: BDLAb, height: "60px" },
    { src: Medsource, height: "60px" },
    { src: TharmoFirsher, height: "40px" }, // Set specific height for TharmoFirsher
    { src: Olympus, height: "60px" },
    { src: Labomed, height: "60px" },
    { src: MB, height: "60px" },
    { src: Tarson, height: "60px" },
  ];

  return (
    <Marquee
      delay={5}
      loop={0}
      gradient
      gradientColor="#fff"
      gradientWidth={300}
      autoFill
      style={{ height: "6rem", background: "#fff" }}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt="company-logo"
          style={{
            margin: "0 1.5rem",
            height: logo.height,
            filter: "grayscale(100%)",
            transition: "filter 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
          onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
        />
      ))}
    </Marquee>
  );
};

export default CompanyMarque;
