
import React from "react";
import PortfolioSection from "./PortfolioSection";
import WhatWeDoSection from "./WhatWeDoSection";
import Layout from "../About/Layout";
import Blog from "../blog/blogpage/Blog";

const MainContent: React.FC = () => {

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Layout>
      <main>
        <Blog />
        <PortfolioSection />
        <WhatWeDoSection />
      </main>
      </Layout>
    </div>
  );
};

export default MainContent;
