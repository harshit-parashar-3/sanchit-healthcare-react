import React from "react";
import Marquee from "react-fast-marquee";
import Gem from "../../../assets/Certificates/GeM-logo.svg.png";
import StartupIndia from "../../../assets/Certificates/Startup-India.png";
import International from "../../../assets/Certificates/iso-9000-iso-9001-2015-international-organization-for-standardization-certification-business-label-people-logo .png";
import ISO from "../../../assets/Certificates/iso.png";
import Meme from "../../../assets/Certificates/msme.png";

const Certificates = () => (
  <Marquee
    speed={10}
    loop={0}
    gradient
    gradientColor="#fff"
    gradientWidth={300}
    autoFill
    style={{ height: "8rem", background: "#fff" }}
  >
    {[Gem, StartupIndia, International, ISO, Meme].map((logo, index) => (
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

export default Certificates;
