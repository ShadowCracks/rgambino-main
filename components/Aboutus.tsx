
import React from "react";

const Aboutus: React.FC = () => {
  return (
    <section className="flex flex-col mt-24 w-full max-w-screen-xl text-center max-md:mt-10 max-md:max-w-full max-custom:self-center mx-auto">
      <div className="flex flex-col w-full text-zinc-800 max-md:max-w-full">
        <div className="self-center px-10 py-2.5 text-base tracking-widest bg-white rounded-[100px] max-md:px-5">
          ABOUT US
        </div>
        <h2 className="mt-8 text-6xl font-semibold tracking-tighter leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Your Professional Car <br /> Cleaning Service
        </h2>
      </div>
      <p className="mt-6 text-xl leading-8 opacity-50 text-zinc-800 max-md:max-w-full">
        Lorem Ipsum is simply dummy text of the pg and typesetting
        industry Lorem Ipsum has been the <br />
        industrys standard dummy text ever since the 1500s when an unknown
      </p>
    </section>
  );
};

export default Aboutus;
