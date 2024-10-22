
import React from "react";
import Blog from "./blogpage/Blog";
import Portfolio from "./Portfolio";
import Layout from "../About/Layout";
import ServicesSection from '../../components/About/ServicesSection';

const App: React.FC = () => {
  return (
    <div >
      <Layout>
      
        <Blog />
        <Portfolio />
        <ServicesSection />
      
      </Layout >
    </div>
  );
};

export default App;
