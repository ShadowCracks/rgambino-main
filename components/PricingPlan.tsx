import React from "react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  features: PlanFeature[];
  isHighlighted?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  features,
  isHighlighted = false,
}) => {
  const baseClasses =
    "flex flex-col px-8 py-10 rounded-3xl min-h-[514px] min-w-[240px] w-[400px] max-md:px-5 transition-colors duration-300 ease-in-out";
  
  // Apply gray background on hover
  const hoverClasses = "bg-white hover:bg-zinc-300";

  return (
    <div className={`${baseClasses} ${hoverClasses}`}>
      <div className="flex flex-col w-full whitespace-nowrap">
        <h3 className="text-2xl font-semibold leading-none">{name}</h3>
        <div className="flex gap-2 items-start self-start mt-3">
          <div className="text-6xl font-semibold tracking-tighter leading-none max-md:text-4xl">
            {price}
          </div>
          <div className="text-xl opacity-50">/mo</div>
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full text-base max-w-[336px] max-md:mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-10 justify-between items-center mt-4 w-full"
          >
            <div
              className={`self-stretch my-auto ${
                feature.included ? "" : "opacity-50"
              }`}
            >
              {feature.text}
            </div>
            <img
              loading="lazy"
              src={
                feature.included
                  ? "https://cdn.builder.io/api/v1/image/assets/TEMP/88d199b12a00fbdac3e7caa4ef7cfdd67528ac6ac305f8bfbfe632890a982d2d?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                  : "https://cdn.builder.io/api/v1/image/assets/TEMP/e2e8f767938532145ce3c46c222bcbd5994649867e35746296a2a6cacc84b8e5?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
              }
              alt={feature.included ? "Included" : "Not included"}
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        ))}
      </div>
      <button
        className={`self-stretch px-8 py-2.5 mt-12 max-w-full text-base font-bold rounded-[100px] w-[336px] max-md:px-5 max-md:mt-10 ${
          isHighlighted ? "text-blue-400 bg-white" : "text-white bg-blue-400"
        }`}
      >
        Book This Plan
      </button>
    </div>
  );
};

export default PricingPlan;
