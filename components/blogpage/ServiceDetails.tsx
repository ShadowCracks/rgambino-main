import React from "react";

type ServiceDetailsProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <section className="flex flex-col items-start mt-20 ml-20 max-w-full w-[950px] max-md:mt-10">
      <h2 className="text-4xl font-semibold leading-none text-zinc-800">
        {title}
      </h2>
      <p className="self-stretch mt-2.5 text-sm leading-6 text-zinc-500 max-md:max-w-full">
        {description}
      </p>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain self-stretch mt-8 w-full aspect-[2.58] rounded-[32px] max-md:max-w-full"
      />
      {/* Removed Features section */}
    </section>
  );
};

export default ServiceDetails;

