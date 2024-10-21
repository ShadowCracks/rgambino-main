
import React from "react";
import AddonCard from "./AddonCard";

type AddonSectionProps = {
  addons: {
    title: string;
  }[];
};

const AddonSection: React.FC<AddonSectionProps> = ({ addons }) => {
  return (
    <section className="flex z-10 flex-col px-20 mt-0 w-full bg-white min-h-[542px] max-md:px-5 max-md:mt-0 max-md:mr-2.5 max-md:max-w-full">
      <h2 className="flex flex-col w-full text-6xl font-semibold tracking-tighter leading-none text-center whitespace-nowrap text-zinc-800 max-md:max-w-full max-md:text-4xl">
        <div className="flex self-center py-2.5 bg-white min-h-[44px] rounded-[100px]" />
        <div className="mt-8 max-md:max-w-full max-md:text-4xl">Addons</div>
      </h2>
      <div className="flex flex-wrap gap-10 justify-between items-end mt-10 w-full max-md:max-w-full">
        {addons.map((addon, index) => (
          <AddonCard key={index} title={addon.title} />
        ))}
      </div>
    </section>
  );
};

export default AddonSection;
