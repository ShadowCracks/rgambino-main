
import React from "react";
import PackageCard from "./PackageCard";

type PackageSectionProps = {
  title: string;
  packages: {
    title: string;
    features: string[];
    price: string;
  }[];
};

const PackageSection: React.FC<PackageSectionProps> = ({ title, packages }) => {
  return (
    <section className="flex flex-col px-20 mt-7 w-full max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
      <h2 className="flex flex-col w-full text-6xl font-semibold tracking-tighter leading-none text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
        <div className="flex self-center py-2.5 bg-white min-h-[44px] rounded-[100px]" />
        <div className="mt-8 max-md:max-w-full max-md:text-4xl">{title}</div>
      </h2>
      <div className="flex flex-wrap gap-10 justify-between items-end mt-10 w-full text-base text-zinc-800 max-md:max-w-full">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default PackageSection;
