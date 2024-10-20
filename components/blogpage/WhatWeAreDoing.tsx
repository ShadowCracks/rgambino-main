
import React from "react";

type WhatWeAreDoingProps = {
  title: string;
  description: string;
  features: string[];
  expertName: string;
  expertImageSrc: string;
};

const WhatWeAreDoing: React.FC<WhatWeAreDoingProps> = ({
  title,
  description,
  features,
  expertName,
  expertImageSrc,
}) => {
  return (
    <section className="pl-20 mt-24 w-full bg-neutral-900 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full font-bold max-md:mt-10">
            <h2 className="text-5xl leading-10 text-stone-50">{title}</h2>
            <div className="flex flex-col items-start self-stretch pl-2 mt-8 text-sm leading-6 text-neutral-400">
              <div className="shrink-0 border-blue-400 border-solid border-[3px] h-[3px] w-[132px]" />
              <p className="self-stretch mt-5">{description}</p>
              <ul className="mt-10">
                {features.map((feature, index) => (
                  <li key={index} className="mt-1.5 max-md:ml-2.5">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mt-11 w-full text-base text-white max-md:mt-10">
              <button className="self-stretch px-8 py-2.5 bg-blue-400 rounded-[100px] max-md:px-5">
                See More
              </button>
              <button className="self-stretch px-8 py-2.5 border border-blue-400 border-solid rounded-[100px] max-md:px-5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow items-start px-20 pt-96 pb-36 min-h-[630px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b7177ee7be56471d98d61c3f7daed83b05924e2464a158d3d5e1a9b11ac208d?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col items-center w-[74px]">
              <img
                loading="lazy"
                src={expertImageSrc}
                alt={expertName}
                className="object-contain w-full aspect-[1.02]"
              />
              <p className="self-stretch mt-5 text-sm font-bold leading-none text-stone-50">
                {expertName}
              </p>
              <p className="mt-3 text-xs leading-none text-neutral-400">
                Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreDoing;
