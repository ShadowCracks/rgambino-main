
import React from "react";
import Blog from "./blogpage/Blog";
import Portfolio from "./Portfolio";
import WhatWeDo from "./WhatWeDo";
import Layout from "../About/Layout";

const App: React.FC = () => {
  return (
    <div >
      <Layout>
      
        <Blog />
          <Portfolio />
          <WhatWeDo
            title="What we are Doing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna enim, quis nostrud laboris."
            bulletPoints={[
              "Lorem ipsum dolor sit amet, consectetu",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor sit",
            ]}
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/7b7177ee7be56471d98d61c3f7daed83b05924e2464a158d3d5e1a9b11ac208d?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
          />
      
      </Layout >
    </div>
  );
};

export default App;
