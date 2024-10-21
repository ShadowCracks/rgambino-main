
import React from "react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, title, description }) => {
  return (
    <section className="flex relative flex-col items-center pb-28 w-full min-h-[491px] max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src={backgroundImage}
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative mt-28 text-7xl font-semibold tracking-tighter leading-none text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
      <p className="relative mt-10 mb-0 text-xl leading-8 text-center text-white w-[527px] max-md:mb-2.5 max-md:max-w-full">
        {description}
      </p>
    </section>
  );
};

export default Hero;
