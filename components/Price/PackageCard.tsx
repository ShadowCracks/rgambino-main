import React from "react";
import Link from "next/link";

type PackageCardProps = {
  title: string;
  features: string[];
  price: string;
};

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  features,
  price,
}) => {
  return (
    <div className="flex flex-col px-8 pt-10 pb-20 bg-white rounded-3xl border border-solid border-black border-opacity-10 min-h-[583px] min-w-[240px] w-[550px] max-md:px-5 max-md:max-w-full">
      <h3 className="w-full text-2xl font-semibold leading-none max-md:max-w-full">
        {title}
      </h3>
      <ul className="flex flex-col mt-12 w-full max-w-[482px] max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full"
          >
            <span className="self-stretch my-auto opacity-75">{feature}</span>
            <img
              loading="lazy"
              src="/images/Vector.png"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </li>
        ))}
      </ul>
      <p className="mt-4 opacity-75">{price}</p>
      <Link
        href="/Booking" // Redirects to the booking page
        className="px-8 py-2.5 mt-12 max-w-full font-bold text-white bg-blue-400 rounded-[100px] w-[482px] max-md:px-5 max-md:mt-10 hover:bg-blue-500 transition-colors text-center"
        aria-label="Book This Plan"
      >
        Book This Plan
      </Link>
    </div>
  );
};

export default PackageCard;
