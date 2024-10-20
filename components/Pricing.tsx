
import React from "react";
import PricingPlan from "./PricingPlan";

const pricingData = [
  {
    name: "Bronze",
    price: "$20",
    features: [
      { text: "3 Standard Washes per month", included: true },
      { text: "10% off on Add-On Services", included: true },
      { text: "Exclusive Member Discounts", included: true },
      { text: "Priority Scheduling", included: false },
      { text: "Complimentary Interior Fragrance", included: false },
    ],
  },
  {
    name: "Silver",
    price: "$40",
    features: [
      { text: "5 Standard Washes per month", included: true },
      { text: "15% off on Add-On Services", included: true },
      { text: "Exclusive Member Discounts", included: true },
      { text: "Priority Scheduling", included: true },
      { text: "Complimentary Interior Fragrance", included: false },
    ],
    isHighlighted: true,
  },
  {
    name: "Gold",
    price: "$60",
    features: [
      { text: "7 Standard Washes per month", included: true },
      { text: "20% off on Add-On Services", included: true },
      { text: "Exclusive Member Discounts", included: true },
      { text: "Priority Scheduling", included: true },
      { text: "Complimentary Interior Fragrance", included: true },
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="flex flex-col px-20 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <div className="self-center px-10 py-2.5 text-base tracking-widest text-blue-400 whitespace-nowrap bg-white rounded-[100px] max-md:px-5">
          PRICING
        </div>
        <h2 className="mt-8 text-6xl font-semibold tracking-tighter leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Choose Your Membership Plan
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-end mt-14 w-full max-md:mt-10 max-md:max-w-full">
        {pricingData.map((plan, index) => (
          <PricingPlan
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
