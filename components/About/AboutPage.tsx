
import React from "react";
import Layout from "./Layout";
import ServicesSection from "./ServicesSection";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeAre from "./whoweare/WhoWeAre";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <AboutUs />
      <WhoWeAre/>
      <ServicesSection />
    </Layout>
  );
};

export default AboutPage;
