
import React from "react";

const HeroSection: React.FC = () => {
  return (
  <section className="flex flex-col items-center mt-10 max-md:mt-5">
    <h1 className="relative ml-3.5 text-7xl font-semibold tracking-tighter leading-none text-white max-md:text-4xl">
      Services
    </h1>
    <p className="relative mt-6 mb-0 text-xl leading-8 text-center text-white w-[527px] max-md:mt-3 max-md:max-w-full">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    </p>
  </section>
  );
};

export default HeroSection;