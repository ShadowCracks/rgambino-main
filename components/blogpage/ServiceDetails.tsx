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
    <section className="relative flex flex-col items-center w-full bg-gray-100 max-md:mt-0">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-zinc-800 mb-2">{title}</h2>
          <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-64"
        />

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          {/* Post details (optional, like date or author) */}
          <div className="text-gray-500 text-xs mb-4">
            <span>Posted on October 21, 2024</span>
          </div>
        </div>

        {/* Image */}

      </div>
    </section>
  );
};

export default ServiceDetails;
