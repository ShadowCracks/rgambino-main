import React from "react";
import HeroSection from "./HeroSection";

const Blog: React.FC = () => {
  return (
    <main className="flex relative flex-col items-center pb-10 w-full min-h-[491px] max-md:min-h-[150px] max-md:pb-5 max-md:max-w-full">

      <div className="relative w-full max-h-[600px]">
        <img
          loading="lazy"
          src="images/about.png"
          alt="Background image"
          className="object-cover absolute inset-0 w-full max-h-[700px] h-auto"
        />
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-50" />
      </div>
      <HeroSection />
    </main>
  );
};

export default Blog;