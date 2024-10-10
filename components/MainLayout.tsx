import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Partners from "./Partners";
//import Pricing from "./Pricing";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import ServicesSection from "./Services/ServicesSection";
//import ServicesSection from "./home/ServicesSection";

const MainLayout: React.FC = () => {
  // Define the navItems array
  const navItems = ['Home', 'About Us', 'Services',];

  return (
    <div className="flex flex-col bg-white">
      {/* Pass navItems to Header */}
      <Header navItems={navItems} />
      <main>
        <Hero />
        <Aboutus />
        <Services />
        <Testimonial />
        <Partners />
        <ServicesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
