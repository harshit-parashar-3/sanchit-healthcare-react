import React from "react";
import MarketingHeader from "../../internal/layout/MarketingHeader";
import HomeSection from "../../internal/marketing-components/HomeSection";
import AboutSection from "../../internal/marketing-components/AboutSection";
import ServiceSection from "../../internal/marketing-components/ServiceSection";
import BannerSection from "../../internal/marketing-components/BannerSection";
import AISection from "../../internal/marketing-components/AISection";
import FAQSection from "../../internal/marketing-components/FAQSection";
import TestimonialSection from "../../internal/marketing-components/TestimonialSection";
import MarketingFooter from "../../internal/layout/MarketingFooter";
import useSmoothScroll from "../../../hooks/useSmoothScroll";
import FeatureProduct from "../../internal/marketing-components/FeatureProduct";
import Features from "../../internal/marketing-components/Feature";
import CompanyMarque from "../../internal/marketing-components/CompanyMarque";
import Certificates from "../../internal/marketing-components/Certificates";

const InvoiceanMarketing = () => {
  useSmoothScroll();
  const buttonTitle = "Create Invoice";
  const url = "/";
  const content = "Welcome to";

  return (
    <>
      <MarketingHeader content={content} url={url} buttonTitle={buttonTitle} />

      <HomeSection />

      <CompanyMarque />

      <AboutSection />
      <ServiceSection />

      <FeatureProduct />

      <BannerSection
        heading="Your Trusted Partner for Advanced Laboratory Equipment"
        content="We provide top-tier, reliable laboratory equipment that ensures precision and efficiency. Trust us for cutting-edge solutions that elevate your lab’s performance and accuracy."
      />
      <Features />
      <TestimonialSection />
      <FAQSection />

      <MarketingFooter />
    </>
  );
};

export default InvoiceanMarketing;
