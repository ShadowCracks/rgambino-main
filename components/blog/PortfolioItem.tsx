import React from 'react';
import Link from 'next/link';

interface PortfolioItemProps {
  id: string; // Add the id to link to the individual blog page
  image: string;
  category: string;
  title: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id, // Destructure the id for dynamic linking
  image,
  category,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col grow items-start text-blue-400 max-md:mt-10">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain self-stretch w-full rounded-md aspect-[1.43]"
      />
      <div className="px-5 py-2 mt-3 text-xs leading-3 rounded-xl border border-blue-400 border-solid bg-blue-400 bg-opacity-30 max-md:pl-5">
        {category}
      </div>
      <h3 className="text-xl font-semibold leading-10 text-zinc-800">
        {title}
      </h3>
      <p className="text-base leading-6 opacity-50 text-zinc-800">
        {description}
      </p>
      {/* Use Link without <a> inside it */}
      <Link href={`/blog/${id}`} className="mt-6 text-base font-medium text-center text-blue-500">
        View Now
      </Link>
    </div>
  );
};

export default PortfolioItem;
